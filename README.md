很久之前有把google雲端硬碟和微軟的onedrive當作js檔的外連來源，不過近幾年來好像都陸續被檔，所以現在沒辦法外連了。許多其他的雲端空間也都不支援了。最後只剩github這盞明燈了。 

使用方式蠻簡單的，先想辦法把檔案弄到Github上，點選你要外連的js檔案，再按下RAW按鈕 [![](https://4.bp.blogspot.com/-r9HqvM22msw/XYnPKK3rQ4I/AAAAAAAAX2U/n4HZnuXlY8YvLrLwa8vHlDUCwr476NqRgCNcBGAsYHQ/s1600/20.jpg)](https://4.bp.blogspot.com/-r9HqvM22msw/XYnPKK3rQ4I/AAAAAAAAX2U/n4HZnuXlY8YvLrLwa8vHlDUCwr476NqRgCNcBGAsYHQ/s1600/20.jpg) 

可以得到一個網址

    https://raw.githubusercontent.com/shofanx/jshost/master/stick-min.js

之後把網址中的raw.githubusercontent.com替換成cdn.jsdelivr.net/gh，並將master拿掉，結果如下

    https://cdn.jsdelivr.net/gh/shofanx/jshost/stick-min.js

就可以使用這個網址當作js外連了。
