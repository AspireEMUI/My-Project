@echo off
REM Deploy to Vercel - One Command Deploy (Windows)
REM Usage: Just double-click this file or run: deploy-vercel.bat

echo.
echo ========================================
echo  Deploying Lumineux Beauty to Vercel
echo ========================================
echo.

REM Check if vercel-cli is installed
where vercel >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo.
    echo Installing Vercel CLI...
    call npm install -g vercel
    if %ERRORLEVEL% NEQ 0 (
        echo Error: Could not install Vercel CLI
        echo Make sure Node.js and npm are installed
        echo Download from: https://nodejs.org
        pause
        exit /b 1
    )
)

echo.
echo Uploading your site to Vercel...
echo.

REM Deploy
call vercel --prod

if %ERRORLEVEL% EQU 0 (
    echo.
    echo ========================================
    echo  Success! Your site is now LIVE on Vercel!
    echo ========================================
    echo.
    echo Next steps:
    echo 1. Configure custom domain in Vercel dashboard
    echo 2. Enable auto-deploys by connecting GitHub
    echo 3. Set up analytics tracking
    echo 4. Monitor performance in Vercel dashboard
    echo.
) else (
    echo.
    echo Error deploying to Vercel
    echo Check your internet connection and try again
    echo.
)

pause
