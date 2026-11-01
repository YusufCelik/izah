#!/usr/bin/env bash
set -euo pipefail

repo_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
site_dir="$repo_dir/_site"

rm -rf -- "$site_dir"
mkdir -p -- "$site_dir"
cp -- "$repo_dir/index.html" "$repo_dir/app.js" "$repo_dir/themes.css" "$repo_dir/themes.js" "$repo_dir/styles.css" "$site_dir/"
cp -R -- "$repo_dir/components" "$repo_dir/data" "$repo_dir/assets" "$site_dir/"

printf 'Prepared GitHub Pages site in %s\n' "$site_dir"
