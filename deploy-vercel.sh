#!/bin/bash

# Deploy to Vercel - One Command Deploy
# Usage: bash deploy-vercel.sh

echo "🚀 Deploying Lumineux Beauty to Vercel..."

# Check if vercel-cli is installed
if ! command -v vercel &> /dev/null; then
    echo "📦 Installing Vercel CLI..."
    npm install -g vercel
fi

# Deploy
echo "📤 Uploading your site..."
vercel --prod

echo "✅ Deployment complete!"
echo "Your site is now live on Vercel"
echo ""
echo "Next steps:"
echo "1. Configure custom domain in Vercel dashboard"
echo "2. Enable auto-deploys by connecting GitHub"
echo "3. Set up analytics"
