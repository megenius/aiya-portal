#!/bin/bash

# Configuration
DB_NAME="railway"
DB_USER="railway"
DB_HOST="viaduct.proxy.rlwy.net"
DB_PORT="24454"
BACKUP_DIR="/Users/boy/Dev/aiya/aiya-portal/backup"
RETENTION_DAYS=7  # Number of days to keep backups

# Create timestamp for backup file
TIMESTAMP=$(date +%Y%m%d_%H%M%S)
BACKUP_FILE="$BACKUP_DIR/directus_db_backup_$TIMESTAMP.sql.gz"

# Create backup directory if it doesn't exist
mkdir -p "$BACKUP_DIR"

# Function to check if pg_dump is installed
check_pg_dump() {
    if ! command -v pg_dump &> /dev/null; then
        echo "Error: pg_dump is not installed"
        exit 1
    fi
}

# Function to check connection
check_connection() {
    if ! pg_isready -h "$DB_HOST" -p "$DB_PORT" -U "$DB_USER" &> /dev/null; then
        echo "Error: Cannot connect to database"
        exit 1
    fi
}

# Function to clean old backups
clean_old_backups() {
    find "$BACKUP_DIR" -name "directus_db_backup_*.sql.gz" -type f -mtime +$RETENTION_DAYS -exec rm {} \;
}

# Function to backup database
backup_database() {
    echo "Starting backup of $DB_NAME from $DB_HOST..."
    
    # Using password from PGPASSWORD environment variable
    PGPASSWORD="${PGPASSWORD}" pg_dump \
        -h "$DB_HOST" \
        -p "$DB_PORT" \
        -U "$DB_USER" \
        -d "$DB_NAME" \
        -v \
        --no-owner \
        --no-acl \
        --clean \
        --if-exists \
        | gzip > "$BACKUP_FILE"

    if [ $? -eq 0 ]; then
        echo "Backup completed successfully: $BACKUP_FILE"
        echo "Backup size: $(du -h "$BACKUP_FILE" | cut -f1)"
    else
        echo "Backup failed"
        rm -f "$BACKUP_FILE"
        exit 1
    fi
}

# Main execution
main() {
    echo "=== Starting PostgreSQL Backup Process ==="
    echo "Timestamp: $(date)"
    
    # Check prerequisites
    check_pg_dump
    check_connection
    
    # Perform backup
    backup_database
    
    # Clean old backups
    clean_old_backups
    
    echo "=== Backup Process Completed ==="
}

# Run main function
main