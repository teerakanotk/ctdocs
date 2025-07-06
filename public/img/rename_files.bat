@echo off
setlocal enabledelayedexpansion

REM รับค่าพารามิเตอร์
set "oldprefix=%1"
set "newprefix=%2"
set "count=%3"

REM เช็คว่าพารามิเตอร์ครบหรือไม่
if "%~3"=="" (
    echo Usage: rename_files.bat oldprefix newprefix count
    echo Example: rename_files.bat lxc-create proxmox-lxc 10
    goto :eof
)

REM เริ่มลูปเพื่อเปลี่ยนชื่อ
for /L %%i in (1,1,%count%) do (
    if exist "%oldprefix%-%%i.png" (
        ren "%oldprefix%-%%i.png" "%newprefix%-%%i.png"
        echo Renamed: %oldprefix%-%%i.png to %newprefix%-%%i.png
    ) else (
        echo File not found: %oldprefix%-%%i.png
    )
)

endlocal
