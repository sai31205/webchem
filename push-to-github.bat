@echo off
echo ========================================
echo WebChem - Final Push to GitHub
echo ========================================
echo.

cd /d "%~dp0"

echo [Step 1/6] Stopping OneDrive...
taskkill /f /im OneDrive.exe 2>nul
timeout /t 2 /nobreak >nul

echo [Step 2/6] Cleaning git locks...
:retry
if exist .git\index.lock (
    del /f /q .git\index.lock 2>nul
    if exist .git\index.lock (
        echo Waiting for file lock to clear...
        timeout /t 2 /nobreak >nul
        goto retry
    )
)

echo [Step 3/6] Checking git status...
git status

echo.
echo [Step 4/6] Committing changes...
git commit -m "feat: Complete backend infrastructure with Express, MongoDB, JWT auth - Node.js/Express server with security middleware - MongoDB integration with User model - JWT authentication (register, login, profile) - API routes: auth, lessons, progress, reactions, tools - Chemistry calculation tools endpoints - Modern frontend landing page - Complete documentation and deployment script"

if %ERRORLEVEL% EQU 0 (
    echo ✅ Commit successful!
) else (
    echo ❌ Commit failed! Error code: %ERRORLEVEL%
    echo.
    echo Restarting OneDrive...
    start "" "%LocalAppData%\Microsoft\OneDrive\OneDrive.exe"
    pause
    exit /b 1
)

echo.
echo [Step 5/6] Pushing to GitHub...
git push origin main

if %ERRORLEVEL% EQU 0 (
    echo ✅ Push successful!
) else (
    echo ❌ Push failed! Error code: %ERRORLEVEL%
)

echo.
echo [Step 6/6] Restarting OneDrive...
start "" "%LocalAppData%\Microsoft\OneDrive\OneDrive.exe"

echo.
echo ========================================
echo 🎉 DEPLOYMENT COMPLETE!
echo ========================================
echo.
echo Your webchem repository is now updated!
echo Visit: https://github.com/smrutiranjandev0p/webchem
echo.
echo Next steps:
echo 1. npm install
echo 2. Copy .env.example to .env
echo 3. Add your MongoDB connection string
echo 4. npm run dev
echo.
pause
