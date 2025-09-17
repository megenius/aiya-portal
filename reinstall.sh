#!/usr/bin/env bash
set -euo pipefail

# ไปที่ root ของ repo (ถ้าใช้ git)
repo_root="$(git rev-parse --show-toplevel 2>/dev/null || pwd)"
cd "$repo_root"

echo "Deleting all node_modules and bun.lockb under: $PWD"

# ลบ node_modules ทุกชั้น (เร็วและปลอดภัยกว่าเพราะใช้ -prune)
find . -type d -name node_modules -prune -print -exec rm -rf {} +

# ลบ bun.lockb ทุกที่
find . -type f -name bun.lockb -print -delete

# ติดตั้งใหม่ทั้ง workspace
bun install