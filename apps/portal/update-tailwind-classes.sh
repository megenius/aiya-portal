#!/bin/bash
# filepath: /Users/ice/aiya-dev/aiya-portal/apps/portal/update-tailwind-classes.sh

echo "🔍 Scanning for Tailwind class names to update in portal app..."

# Create a temporary file with replacement patterns for renamed utilities
PATTERNS_FILE=$(mktemp)
cat > "$PATTERNS_FILE" << 'EOF'
s/shadow-sm/shadow-xs/g
s/\([^-]\)shadow /\1shadow-sm /g
s/drop-shadow-sm/drop-shadow-xs/g
s/\([^-]\)drop-shadow /\1drop-shadow-sm /g
s/blur-sm/blur-xs/g
s/\([^-]\)blur /\1blur-sm /g
s/backdrop-blur-sm/backdrop-blur-xs/g
s/\([^-]\)backdrop-blur /\1backdrop-blur-sm /g
s/rounded-sm/rounded-xs/g
s/\([^-]\)rounded /\1rounded-sm /g
s/outline-none/outline-hidden/g
s/\([^-]\)ring /\1ring-3 /g
EOF

# Process files for utility class renames
find . -type f \( -name "*.tsx" -o -name "*.jsx" -o -name "*.js" -o -name "*.ts" -o -name "*.css" \) \
  -not -path "*/node_modules/*" -not -path "*/dist/*" -not -path "*/build/*" > ./files-to-check.txt

echo "✅ Updating renamed utility classes..."
UPDATED_FILES=0
while read -r file; do
  sed -i '' -f "$PATTERNS_FILE" "$file"
  echo "  ✓ Processed: $file"
  UPDATED_FILES=$((UPDATED_FILES + 1))
done < ./files-to-check.txt

rm "$PATTERNS_FILE"

# Process border utilities - Tailwind v4 uses currentColor by default
echo "🔍 Scanning for border utilities that need explicit colors..."

# Create temporary file to store matches
BORDER_MATCHES_FILE=$(mktemp)

# Find instances of standalone "border" class without explicit color
grep -r "className=\"[^\"]*\bborder\b[^-][^\"]*\"" \
  --include="*.tsx" --include="*.jsx" --include="*.js" . \
  | grep -v "border-\(gray\|slate\|zinc\|neutral\|stone\|red\|orange\|amber\|yellow\|lime\|green\|emerald\|teal\|cyan\|sky\|blue\|indigo\|violet\|purple\|fuchsia\|pink\|rose\|white\|black\)" \
  > "$BORDER_MATCHES_FILE"

# Count matches
BORDER_MATCHES=$(wc -l < "$BORDER_MATCHES_FILE")
BORDER_MATCHES=$(echo "$BORDER_MATCHES" | tr -d ' ')

if [ "$BORDER_MATCHES" -gt 0 ]; then
  echo "⚠️ Found $BORDER_MATCHES instances of border utilities without explicit colors."
  echo "These need manual review. In Tailwind v4, borders use currentColor by default instead of gray-200."
  echo ""
  echo "Files with border utilities to check:"
  cat "$BORDER_MATCHES_FILE" | cut -d: -f1 | sort | uniq
  echo ""
  echo "For example, you may need to change:"
  echo "  \"border p-4\" to \"border border-gray-200 p-4\""
  echo ""
  
  # Create a report file for easy reference
  REPORT_FILE="./border-utilities-report.txt"
  echo "# Border Utilities Report - Tailwind v4 Migration" > "$REPORT_FILE"
  echo "The following files contain border utilities without explicit colors:" >> "$REPORT_FILE"
  echo "These need to be updated for Tailwind v4 compatibility." >> "$REPORT_FILE"
  echo "" >> "$REPORT_FILE"
  cat "$BORDER_MATCHES_FILE" >> "$REPORT_FILE"
  echo "" >> "$REPORT_FILE"
  echo "## Recommendation" >> "$REPORT_FILE"
  echo "Add explicit border colors to all border utilities. For example:" >> "$REPORT_FILE"
  echo "  \"border p-4\" → \"border border-gray-200 p-4\"" >> "$REPORT_FILE"
  echo "  \"border-2\" → \"border-2 border-gray-300\"" >> "$REPORT_FILE"
  
  echo "📄 Detailed report saved to: $REPORT_FILE"
fi

rm "$BORDER_MATCHES_FILE"

# Add automatic fix for common border cases
echo "🔧 Adding border-gray-200 to standalone border utilities..."
BORDER_FIX_PATTERNS_FILE=$(mktemp)

cat > "$BORDER_FIX_PATTERNS_FILE" << 'EOF'
s/\(className="[^"]*\)\bborder\b\([^-][^"]*"\)/\1border border-gray-200\2/g
s/\(className='[^']*\)\bborder\b\([^-][^']*'\)/\1border border-gray-200\2/g
s/\(className={[^}]*"\)\bborder\b\([^-][^"]*"\)/\1border border-gray-200\2/g
s/\(className={`[^`]*\)\bborder\b\([^-][^`]*`\)/\1border border-gray-200\2/g
EOF

find . -type f \( -name "*.tsx" -o -name "*.jsx" -o -name "*.js" \) \
  -not -path "*/node_modules/*" -not -path "*/dist/*" -not -path "*/build/*" > ./border-files.txt

BORDER_UPDATED_FILES=0
while read -r file; do
  # Only process files with border utilities
  if grep -q "className=\"[^\"]*\bborder\b[^-]" "$file" || \
     grep -q "className='[^']*\bborder\b[^-]" "$file" || \
     grep -q "className={[^}]*\"\bborder\b[^-]" "$file" || \
     grep -q "className={`[^`]*\bborder\b[^-]" "$file"; then
    
    # Create backup before modification if you want
    # cp "$file" "$file.bak"
    
    # Apply the border fixes
    sed -i '' -f "$BORDER_FIX_PATTERNS_FILE" "$file"
    echo "  ✓ Added border colors to: $file"
    BORDER_UPDATED_FILES=$((BORDER_UPDATED_FILES + 1))
  fi
done < ./border-files.txt

rm "$BORDER_FIX_PATTERNS_FILE"
rm ./border-files.txt
rm ./files-to-check.txt

echo "
🎉 Tailwind v4 utility classes update completed!

✅ Processed $UPDATED_FILES files for renamed utilities
✅ Updated border utilities in $BORDER_UPDATED_FILES files

⚠️ Important: 
1. Some complex border cases may still need manual review
2. Check the border-utilities-report.txt file (if created) for details
3. Test your application thoroughly to ensure all styles render correctly

Next step: Start your development server with:
cd ../../
./run.sh dev
"