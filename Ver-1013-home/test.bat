cd TestVirus
echo off
echo This is not a virus!!
for /l %%i in (1,1,1000) do (
	echo There is no content > Gomi.txt
	echo Compleated %%i/1000
)
for /l %%i in (1,1,10) do (
	copy Gomi.txt Gomi%%i.txt > nul
)
echo This is not a virus!!
pause