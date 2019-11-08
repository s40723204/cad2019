var tipuesearch = {"pages": [{'title': 'week', 'text': 'week2-5 \n week6-9 \n week10-14 \n week15-18 \n', 'tags': '', 'url': 'week.html'}, {'title': 'week2-5', 'text': 'WEEK 2 \n 使用github建立倉儲和開啟近端 \n 1. 至mde.tw 2019Fall電腦輔助設計實習下載2019fall可攜程式至隨身碟 \n 2. 利用git config指令設定user name和email及proxy \n 3. git clone 建立個人github倉儲 \n 4. 利用submodule指令設定cmsimde \n 5. 設定flask_cors \n 6. 利用cmsimde python wsgi.py 開啟近端網址 \n 7. 錄製操作影片 \n https://youtu.be/8rPCwZ-RVuk \n \n \n WEEK 3 \n 編譯Slovespace \n 1. 將 Y:\\portablegit\\bin\\sh.exe 改名為 sh_rename_for_solvespace.exe \n 2. 查驗 git 版本在 2.13 以上，即可使用 git clone --recurse-submodules 指令取得所有子模組資料 \n 3. 將CMakeLists line 713 and 714 前面加上 # \n 4. 手動進行 libpng.dll.a 的編譯，並且改名為 libpng_static.a 後放到Y槽的 lib 目錄 \n 5. 回到 solvespace 目錄， 建立 build 目錄後進入 build 目錄，執行以下兩行程式 \n cmake .. -G "MinGW Makefiles" -DCMAKE_BUILD_TYPE=Release mingw32-make \n 6. 錄製操作影片 \n https://youtu.be/pi_DWE3nSlY \n \n \n \n WEEK 4 \n 跟上第 二 三 周進度 \n \n \n WEEK 5 \n Slovespace 操作 \n 1.\xa0 進行分組作業，利用solvespace進行零組件繪製 \n 2.\xa0 各組每人分別選擇要繪製之零組件 \n 3.\xa0 利用solvespace進行繪製 \n 4.\xa0\xa0錄製操作影片 \n https://www.youtube.com/watch?v=IhD4QhuxYQI \n \n 完成圖 \n \n', 'tags': '', 'url': 'week2-5.html'}, {'title': 'week6-9', 'text': "WEEK 6 \n \n Solvespace 繪製 \n 1.\xa0\xa0 利用 Solvespace 繪製雙輪車所需要的零組件 \n 2.\xa0 首先繪製自走車之輪子，定義適當尺寸 \n 3.\xa0 開新檔繪製自走車本體，並對前端進行部分除料 \n 4.\xa0 於本體上除料裝置輪軸之孔 \n 5.\xa0 開新檔組裝自走車本體與輪子 \n 6.\xa0 錄製操作影片 \n https://www.youtube.com/watch?v=_nad16BPAiw \n \n \n 完成圖 \n \n \n \n \n V-rep 模型控制 \n 1. \xa0下載 V-rep 3.6.1 rev4 與 web_vrep2.zip(local)至個人隨身碟 \n 2.\xa0 開啟V-rep 3.6.1 rev4裡的vrep.exe後開啟\xa0web_vrep2裡的two_wheeler.ttt \n 3.\xa0 利用小白框開啟web_vrep2裡的app.py以開啟localhost:5000 \n 4.\xa0\xa0利用localhost:5000操控小車轉向與速度 \n 5.\xa0\xa0web_vrep2裡沒有remoteApi.dll檔的話，要到V-rep 3.6.1 rev4找到programming裡 \n remoteApiBindings裡lib裡Windows裡64bit裡複製到web_vrep2，才可使用app.py開 \n 啟localhost:5000操控小車 \n 6.\xa0\xa0錄製操作影片 \n https://youtu.be/A2EmOCHyZ78 \n \n \n \n \n 新增啟動與停止按鈕 \n 1.\xa0 首先開啟 wed_vrep2 資料夾裡tempate資料夾的controls進編輯器 \n 2.\xa0 利用原有按鈕的程式進行複製修改，新增啟動及停止的按鈕 \n 3. 接著拉wed_vrep2 資料夾裡的 vrep_linefollower.py檔進編輯器 \n 4. 在 def to direction 下加上\xa0if direction == 'start': 後打上vrep.simxStartSimulation(self.clientID, vrep.simx_opmode_oneshot)\xa0 定義開始按鈕 \n 5. 接著打上\xa0\xa0elif direction == 'stop':  vrep.simxStopSimulation(self.clientID, vrep.simx_opmode_oneshot) 定義停止按鈕 \n 6.\xa0 後續打上else :\xa0 並排列好順序 \n 7. 利用 app.py 開啟 localhost:5000\xa0 \n 8. 打開vrep 導入雙輪車，利用\xa0\xa0\xa0localhost:5000\xa0 進行開始與停止操控 \n 9.\xa0  錄製操作影片 \n https://youtu.be/L9n3tCWMm-0 \n \n \n \n WEEK 7 \n Slovespace編譯 \n 1.\xa0\xa0 到tmp > solvespace > build >src >CMakeFiles > solvespace.dir刪掉\xa0 \xa0 \xa0 \xa0 \xa0 \xa0slovespace.cpp.obj檔 \n 2. 到 \xa0solvespace\xa0>src找到\xa0\xa0slovespace.cpp 拉進編輯器 \n 3. 利用ctrl + f 進行搜尋 ，找GPL \n 4.\xa0 找到\xa0\xa0this\xa0 is\xa0\xa0 solvespace 在後面加上 is compiled by 自己學號 \n 5. 利用小黑框，路徑移置\xa0tmp > solvespace > build 打上\xa0mingw32-makemingw32-make 指令 \n 6. 完成後到\xa0solvespace > build >bin 開啟\xa0slovespace.exe ，進help 點 about 確認驗證完成 \n 7.\xa0錄製操作影片 \n https://youtu.be/_645vxhGprU \n \n \n 完成圖 \n \n \n \n Sol vespace 繪圖認證 \n 1.\xa0 繪製零件3 \n 2.\xa0 錄製操作影片 \n https://youtu.be/wy8zfTwbQhY \n \n \n 完成圖 \n \n WEEK 8 \n CMSimfly網際內容管理啟用 \n \n \n \n https://youtu.be/q95RlvUWfcg \n \n", 'tags': '', 'url': 'week6-9.html'}, {'title': 'week10-14', 'text': '', 'tags': '', 'url': 'week10-14.html'}, {'title': 'week15-18', 'text': '\n', 'tags': '', 'url': 'week15-18.html'}, {'title': 'note', 'text': '', 'tags': '', 'url': 'note.html'}, {'title': 'About', 'text': '此內容管理系統以\xa0 https://github.com/mdecourse/cmsimde \xa0作為 submodule 運作, 可以選定對應的版本運作, cmsimde 可以持續改版, 不會影響之前設為 submodule, 使用舊版 cmsimde 模組的內容管理相關運作. \n 利用 cmsimde 建立靜態網誌方法: \n 1. 在 github 建立倉儲, git clone 到近端 \n 2. 參考\xa0 https://github.com/mdecourse/newcms , 加入除了 cmsimde 目錄外的所有內容 \n 以 git submodule add\xa0 https://github.com/mdecourse/cmsimde \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 3.在近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add commit 及 push 將內容推到遠端. \n 4. 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: \n git clone --recurse-submodules  https://github.com/mdecourse/newcms.git \n', 'tags': '', 'url': 'About.html'}, {'title': 'Develop', 'text': 'https://github.com/mdecourse/cmsimde \xa0的開發, 可以在一個目錄中放入 cmsimde, 然後將 up_dir 中的內容放到與 cmsimde 目錄同位階的地方, 使用 command 進入 cmsimde 目錄, 執行 python wsgi.py, 就可以啟動, 以瀏覽器 https://localhost:9443\xa0就可以連接, 以 admin 作為管理者密碼, 就可以登入維護內容. \n cmsimde 的開發採用 Leo Editor, 開啟 cmsimde 目錄中的 cmsimde.leo 就可以進行程式修改, 結束後, 若要保留網際內容, 只要將 cmsimde 外部的內容倒回 up_dir 目錄中即可後續對 cmsimde 遠端倉儲進行改版. \n init.py 位於\xa0 up_dir 目錄, 可以設定 site_title 與 uwsgi 等變數. \n', 'tags': '', 'url': 'Develop.html'}]};