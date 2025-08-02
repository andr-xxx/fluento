#!/bin/bash

echo "🚀 Fluento Extension - Development Mode"
echo ""

# Function to copy files to dist
copy_files() {
    cp manifest.json dist/ 2>/dev/null || true
    cp -r public dist/ 2>/dev/null || true
}

# Function to build and copy
build_and_copy() {
    echo "🔨 Building..."
    npm run build:dev > /dev/null 2>&1
    copy_files
    echo "✅ Built successfully"
}

# Initial build
build_and_copy

# Watch for changes
echo "👀 Watching for changes... (Ctrl+C to stop)"

# Use fswatch if available, otherwise use inotifywait or fallback to polling
if command -v fswatch &> /dev/null; then
    fswatch -o src/ | while read f; do
        echo "🔄 Rebuilding..."
        build_and_copy
    done
elif command -v inotifywait &> /dev/null; then
    while inotifywait -r -e modify src/ > /dev/null 2>&1; do
        echo "🔄 Rebuilding..."
        build_and_copy
    done
else
    while true; do
        sleep 2
        if [ "$(find src/ -newer dist/ -type f 2>/dev/null | head -1)" ]; then
            echo "🔄 Rebuilding..."
            build_and_copy
        fi
    done
fi 