#!/bin/bash

# ลบโฟลเดอร์ node_modules และ lockfile ของ bun
rm -rf node_modules
rm -f bun.lockb

# ติดตั้งใหม่ด้วย bun
bun install