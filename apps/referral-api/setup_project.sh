#!/bin/bash

# Create main directory structure
mkdir -p src/{routes,handlers,services,middlewares,utils,types}

# Create files
touch src/index.ts

# Create route files
touch src/routes/{bots,knowledges,text-embedding,webhook}.ts

# Create handler files
touch src/handlers/{bots,knowledges,text-embedding,webhook}.handler.ts

# Create service files
touch src/services/{directus,text-embedding}.service.ts

# Create middleware files
touch src/middlewares/{error-handler,authentication}.middleware.ts

# Create utility files
touch src/utils/vector.ts

# Create type files
touch src/types/env.d.ts

# Create configuration files
touch wrangler.toml
touch package.json
touch tsconfig.json

echo "Cloudflare Workers project structure created successfully!"