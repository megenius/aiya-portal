#!/bin/bash

wget https://console.portal.aiya.ai/server/specs/oas?access_token=f8LiIZVxY2-jGDqgeTU40IZ2xrj-7ygy -O directus.oas.json

output="src/types/directus.d.ts"

npx directus-typescript-gen -i directus.oas.json > $output

echo "Generated $output"