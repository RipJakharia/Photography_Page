@echo off
setlocal enabledelayedexpansion

set "n=1"
for %%F in (*.jpg) do (
    ren "%%F" "image-!n!.jpg"
    set /a n+=1
)
