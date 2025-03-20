#!/bin/bash
# filepath: /Users/ice/aiya-dev/aiya-portal/migrate-portal-tailwind-v4.sh

set -e

PORTAL_DIR="./apps/portal"
echo "🚀 Starting Tailwind CSS v3 to v4 migration for portal app..."

# Step 1: Install required packages
echo "📦 Installing required packages at root level..."
bun add -d tailwindcss@latest postcss@latest autoprefixer@latest @tailwindcss/postcss

# Step 2: Update PostCSS configuration - ONLY touch PostCSS config files
echo "🔧 Updating PostCSS configuration..."
if [ -f "$PORTAL_DIR/postcss.config.js" ]; then
  cat > "$PORTAL_DIR/postcss.config.js" << 'EOL'
export default {
  plugins: {
    '@tailwindcss/postcss': {},
    autoprefixer: {}
  }
};
EOL
  echo "  ✓ Updated PostCSS configuration"
elif [ -f "$PORTAL_DIR/postcss.config.ts" ]; then
  cat > "$PORTAL_DIR/postcss.config.ts" << 'EOL'
import type { Config } from 'postcss';

const config: Config = {
  plugins: {
    '@tailwindcss/postcss': {},
    autoprefixer: {}
  }
};

export default config;
EOL
  echo "  ✓ Updated PostCSS configuration"
fi

# Step 3: Update the Tailwind CSS imports ONLY in main CSS files
echo "🔧 Updating CSS imports in Tailwind stylesheets..."
CSS_FILES=$(find "$PORTAL_DIR" -name "*.css" -type f -not -path "*/node_modules/*" -not -path "*/dist/*")
for css_file in $CSS_FILES; do
  if grep -q "@tailwind" "$css_file"; then
    # Create temporary file with new content
    temp_file=$(mktemp)
    echo '@import "tailwindcss";' > "$temp_file"
    
    # Add all non-tailwind lines
    grep -v "@tailwind" "$css_file" >> "$temp_file"
    
    # Replace original file
    mv "$temp_file" "$css_file"
    echo "  ✓ Updated Tailwind imports in $css_file"
  fi
done

# Step 4: Update Vite configuration - ONLY add HMR overlay config
echo "🔧 Updating Vite configuration for HMR overlay..."
VITE_CONFIG="$PORTAL_DIR/vite.config.ts"
if [ -f "$VITE_CONFIG" ]; then
  # Create fixed Vite config
  cat > "$VITE_CONFIG" << 'EOL'
import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default ({ mode }) => {
  // process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  const { PORT } = process.env;

  return defineConfig({
    plugins: [
      remix({
        ssr: false,
        future: {
          v3_fetcherPersist: true,
          v3_relativeSplatPath: true,
          v3_throwAbortReason: true,
          v3_singleFetch: true,
          v3_lazyRouteDiscovery: true,
        },
      }),
      tsconfigPaths(),
    ],
    server: {
      hmr: {
        overlay: false
      },
      port: PORT ? Number(PORT) : 4000,
      proxy: {
        "/api/bots": getEndpoint("http://localhost:14101", ""),
        "/api/channels": getEndpoint("http://localhost:14102", ""),
        "/api/adaccounts": getEndpoint("http://localhost:14105", ""),
        "/api/aws": getEndpoint("http://localhost:14103", ""),
        "/api/customers": getEndpoint("http://localhost:14106", ""),
        "/api/followers": getEndpoint("http://localhost:14106", ""),
        "/api/shops": getEndpoint("http://localhost:14107", ""),
        "/api/partners": getEndpoint("http://localhost:14108", ""),
        "/api/ai": getEndpoint("http://localhost:14109", ""),
        "/api/billing": getEndpoint("http://localhost:14110", ""),
        // uws-api
        "/api/uws": getEndpoint("http://localhost:14400", ""),
        // have to use bottom
        "/api": getEndpoint("http://localhost:14000", ""),
        "/websocket/billing": getEndpoint("http://localhost:14110", "", {
          ws: true,
        }),
        // uws-api
        "/websocket/uws": getEndpoint("http://localhost:14400", "", {
          ws: true,
        }),
      },
    },
    ssr: {
      noExternal: ["react-tweet", "novel"],
    },
  });
};

const getEndpoint = (
  url: string,
  prefix: string,
  opts?: {
    ws?: boolean;
  }
) => {
  return {
    target: url,
    changeOrigin: true,
    secure: false,
    ws: opts?.ws,
    rewrite: (path: string) => path.replace(new RegExp(`^/${prefix}`), ""),
  };
};
EOL
  echo "  ✓ Updated Vite configuration"
fi

# Step 5: Create a utility class updater script
echo "🔧 Creating utility class updater script..."
UPDATER_SCRIPT="$PORTAL_DIR/update-tailwind-classes.sh"
cat > "$UPDATER_SCRIPT" << 'EOL'
#!/bin/bash
# Update Tailwind utility classes for v4 compatibility in portal app

echo "🔍 Scanning for Tailwind class names to update in TSX/JSX files..."

# Create a temporary file with replacement patterns
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

# Only scan files that are likely to contain Tailwind classes (JSX/TSX/CSS)
find . -type f \( -name "*.tsx" -o -name "*.jsx" -o -name "*.css" \) \
  -not -path "*/node_modules/*" -not -path "*/dist/*" > ./files-to-check.txt

# Process each file
UPDATED_FILES=0
while read -r file; do
  # Apply replacements directly without creating backups
  sed -i '' -f "$PATTERNS_FILE" "$file"
  
  echo "  ✓ Processed: $file"
  UPDATED_FILES=$((UPDATED_FILES + 1))
done < ./files-to-check.txt

# Clean up
rm "$PATTERNS_FILE"
rm ./files-to-check.txt

echo "✅ Completed utility class updates. Files processed: $UPDATED_FILES"
echo "👉 Next: You may need to manually add explicit border colors (e.g., border-gray-200)"
EOL

chmod +x "$UPDATER_SCRIPT"
echo "  ✓ Created utility class updater script"

# Step 6: Create documentation for the migration
cat > "$PORTAL_DIR/TAILWIND_V4_MIGRATION.md" << 'EOL'
# Tailwind CSS v4 Migration Guide for Portal App

This guide covers the migration from Tailwind CSS v3 to v4 for the portal Remix SPA application.

## Completed Automatic Changes

1. **Package Installation**: Added `@tailwindcss/postcss` and updated core packages
2. **PostCSS Configuration**: Updated to use the new plugin structure
3. **CSS Imports**: Changed `@tailwind` directives to `@import "tailwindcss"`
4. **Vite Configuration**: Added `server.hmr.overlay: false` to prevent error overlays

## Required Manual Steps

### 1. Update utility classes

Run the provided script to update Tailwind utility class names:

```bash
cd apps/portal
./update-tailwind-classes.sh