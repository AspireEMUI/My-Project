#!/bin/bash

# Deploy to Netlify - One Command Deploy
# Usage: bash deploy-netlify.sh

echo "🚀 Deploying Lumineux Beauty to Netlify..."

# Check if netlify-cli is installed
if ! command -v netlify &> /dev/null; then
    echo "📦 Installing Netlify CLI..."
    npm install -g netlify-cli
fi

# Deploy
echo "📤 Uploading your site..."
netlify deploy --prod --dir=.

echo "✅ Deployment complete!"
echo "Your site is now live on Netlify"
echo ""
echo "Next steps:"
echo "1. Configure custom domain in Netlify dashboard"
echo "2. Enable auto-deploys by connecting GitHub"
echo "3. Set up analytics"
