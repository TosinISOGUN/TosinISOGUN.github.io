#!/usr/bin/env bash
set -euo pipefail

echo "Checking environment..."

if ! command -v node >/dev/null 2>&1; then
  echo "node not found. Install Node.js: https://nodejs.org/"
  exit 1
fi

echo "Node: $(node --version)"

if ! command -v npm >/dev/null 2>&1; then
  echo "npm not found. Install Node.js (includes npm)."
  exit 1
fi

echo "npm: $(npm --version)"

if [ ! -f package.json ]; then
  echo "package.json not found in current directory: $(pwd)"
  echo "Run this script from your project root (where package.json lives)."
  exit 1
fi

echo "Running npm install..."
npm i

echo "Dependencies installed successfully. Run: npm run dev"
