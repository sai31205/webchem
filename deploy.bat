@echo off
echo ========================================
echo WebChem Auto-Deploy Script
echo ========================================
echo.

cd /d "%~dp0"

echo [1/5] Stopping OneDrive sync temporarily...
taskkill /f /im OneDrive.exe 2>nul
timeout /t 3 /nobreak >nul

echo [2/5] Cleaning git locks...
if exist .git\index.lock del /f /q .git\index.lock
if exist .git\HEAD.lock del /f /q .git\HEAD.lock

echo [3/5] Removing old files...
del /f /q README.md 2>nul
del /f /q app.js 2>nul
del /f /q index.html 2>nul
del /f /q styles.css 2>nul

echo [4/5] Adding all new files to git...
git add -A
git status

echo [5/5] Committing and pushing to GitHub...
git commit -m "feat: Complete webchem platform with comprehensive backend

- Full-stack Node.js/Express backend with MongoDB
- JWT authentication and user management
- Progress tracking with achievements
- Chemistry calculation tools API
- Complete database models and RESTful endpoints
- Ready for frontend integration
- Comprehensive documentation and architecture"

git push origin main

echo.
echo ========================================
echo Deployment Complete!
echo ========================================
echo.
echo Restarting OneDrive...
start "" "%LocalAppData%\Microsoft\OneDrive\OneDrive.exe"

echo.
echo Your webchem repository has been updated!
echo Visit: https://github.com/smrutiranjandev0p/webchem
echo.
pause
