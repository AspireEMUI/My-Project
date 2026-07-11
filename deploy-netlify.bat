@echo off
REM Deploy to Netlify - One Command Deploy (Windows)
REM Usage: Just double-click this file or run: deploy-netlify.bat

echo.
echo ========================================
echo  Deploying Lumineux Beauty to Netlify
echo ========================================
echo.

REM Check if netlify-cli is installed
where netlify >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo.
    echo Package Manager: Installing Netlify CLI...
    call npm install -g netlify-cli
    if %ERRORLEVEL% NEQ 0 (
        echo Error: Could not install Netlify CLI
        echo Make sure Node.js and npm are installed
        echo Download from: https://nodejs.org
        pause
        exit /b 1
    )
)

echo.
echo Uploading your site to Netlify...
echo.

REM Deploy
call netlify deploy --prod --dir=.

if %ERRORLEVEL% EQU 0 (
    echo.
    echo ========================================
    echo  Success! Your site is now LIVE!
    echo ========================================
    echo.
    echo Next steps:
    echo 1. Configure custom domain in Netlify dashboard
    echo 2. Enable auto-deploys by connecting GitHub
    echo 3. Set up analytics tracking
    echo 4. Share your site with the world!
    echo.
) else (
    echo.
    echo Error deploying to Netlify
    echo Check your internet connection and try again
    echo.
)

pause
