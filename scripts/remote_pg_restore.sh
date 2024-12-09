#!/bin/bash

# Configuration
# DB_NAME="railway"
# DB_USER="postgres"
# DB_HOST="34.126.170.14"
# DB_PORT="5432"

DB_NAME="railway"
DB_USER="postgres"
DB_HOST="junction.proxy.rlwy.net"
DB_PORT="30846"

# Display help message
show_help() {
    echo "Usage: $0 <backup_file.sql.gz>"
    echo "Example: $0 /path/to/directus_db_backup_20240208_123456.sql.gz"
    exit 1
}

# Check if required commands exist
check_commands() {
    if ! command -v psql &> /dev/null || ! command -v gunzip &> /dev/null; then
        echo "Error: Required commands (psql, gunzip) are not installed"
        exit 1
    fi
}

# Check database connection
check_connection() {
    if ! pg_isready -h "$DB_HOST" -p "$DB_PORT" -U "$DB_USER" &> /dev/null; then
        echo "Error: Cannot connect to database at $DB_HOST"
        exit 1
    fi
}

# Verify backup file
verify_backup() {
    local backup_file="$1"
    
    if [ ! -f "$backup_file" ]; then
        echo "Error: Backup file not found: $backup_file"
        exit 1
    fi
    
    if [[ "$backup_file" != *.sql.gz ]]; then
        echo "Error: Backup file must be a gzipped SQL file (*.sql.gz)"
        exit 1
    fi
}

# Confirm restore
confirm_restore() {
    echo "WARNING: This will overwrite the database '$DB_NAME' on host '$DB_HOST'"
    echo "Are you sure you want to continue? (yes/no)"
    read -r response
    if [[ ! "$response" =~ ^yes$ ]]; then
        echo "Restore cancelled"
        exit 1
    fi
}

# Check if database is in use
check_db_connections() {
    local connections
    connections=$(psql -h "$DB_HOST" -p "$DB_PORT" -U "$DB_USER" -d "$DB_NAME" -t -c "SELECT count(*) FROM pg_stat_activity WHERE datname = '$DB_NAME' AND pid != pg_backend_pid()")
    
    if [ "$connections" -gt 0 ]; then
        echo "Warning: There are $connections active connections to the database"
        echo "Do you want to terminate all connections? (yes/no)"
        read -r response
        if [[ "$response" =~ ^yes$ ]]; then
            psql -h "$DB_HOST" -p "$DB_PORT" -U "$DB_USER" -d "$DB_NAME" -c "SELECT pg_terminate_backend(pid) FROM pg_stat_activity WHERE datname = '$DB_NAME' AND pid != pg_backend_pid()"
        else
            echo "Restore cancelled"
            exit 1
        fi
    fi
}

# Restore database
restore_database() {
    local backup_file="$1"
    local temp_restore_log="/tmp/restore_${TIMESTAMP}.log"
    
    echo "Starting restore process..."
    echo "This may take a while depending on the backup size..."
    
    # Drop and recreate database
    psql -h "$DB_HOST" -p "$DB_PORT" -U "$DB_USER" -d postgres <<EOF
DROP DATABASE IF EXISTS ${DB_NAME};
CREATE DATABASE ${DB_NAME} WITH OWNER = ${DB_USER};
EOF
    
    # Restore the backup
    gunzip < "$backup_file" | psql -h "$DB_HOST" -p "$DB_PORT" -U "$DB_USER" -d "$DB_NAME" 2>"$temp_restore_log"
    
    if [ $? -eq 0 ]; then
        echo "Restore completed successfully"
        if [ -s "$temp_restore_log" ]; then
            echo "Warnings during restore (see $temp_restore_log):"
            cat "$temp_restore_log"
        fi
    else
        echo "Restore failed. Check $temp_restore_log for details"
        exit 1
    fi
}

# Main execution
main() {
    if [ "$#" -ne 1 ]; then
        show_help
    fi
    
    local backup_file="$1"
    TIMESTAMP=$(date +%Y%m%d_%H%M%S)
    
    echo "=== Starting PostgreSQL Restore Process ==="
    echo "Timestamp: $(date)"
    echo "Host: $DB_HOST"
    echo "Database: $DB_NAME"
    echo "Backup file: $backup_file"
    
    # Run checks
    check_commands
    verify_backup "$backup_file"
    check_connection
    confirm_restore
    check_db_connections
    
    # Perform restore
    restore_database "$backup_file"
    
    echo "=== Restore Process Completed ==="
}

# Run main function with provided arguments
main "$@"