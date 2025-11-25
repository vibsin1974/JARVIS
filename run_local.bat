@echo off
echo Starting JARVIS Local Server...
echo.
echo Checking for Python...
python --version >nul 2>&1
if %errorlevel% equ 0 (
    echo Python found. Starting HTTP server...
    start http://localhost:8000
    python -m http.server
) else (
    echo Python not found. Opening index.html directly...
    start index.html
)
pause
