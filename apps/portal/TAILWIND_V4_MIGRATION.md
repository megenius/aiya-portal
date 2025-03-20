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
