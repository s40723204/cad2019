var tipuesearch = {"pages": [{'title': 'week', 'text': 'week2-5 \n week6-9 \n week10-14 \n week15-18 \n', 'tags': '', 'url': 'week.html'}, {'title': 'week2-5', 'text': 'WEEK 2 \n 使用github建立倉儲和開啟近端 \n 1. 至mde.tw 2019Fall電腦輔助設計實習下載2019fall可攜程式至隨身碟 \n 2. 利用git config指令設定user name和email及proxy \n 3. git clone 建立個人github倉儲 \n 4. 利用submodule指令設定cmsimde \n 5. 設定flask_cors \n 6. 利用cmsimde python wsgi.py 開啟近端網址 \n 7. 錄製操作影片 \n https://youtu.be/8rPCwZ-RVuk \n \n \n WEEK 3 \n 編譯Slovespace \n 1. 將 Y:\\portablegit\\bin\\sh.exe 改名為 sh_rename_for_solvespace.exe \n 2. 查驗 git 版本在 2.13 以上，即可使用 git clone --recurse-submodules 指令取得所有子模組資料 \n 3. 將CMakeLists line 713 and 714 前面加上 # \n 4. 手動進行 libpng.dll.a 的編譯，並且改名為 libpng_static.a 後放到Y槽的 lib 目錄 \n 5. 回到 solvespace 目錄， 建立 build 目錄後進入 build 目錄，執行以下兩行程式 \n cmake .. -G "MinGW Makefiles" -DCMAKE_BUILD_TYPE=Release mingw32-make \n 6. 錄製操作影片 \n https://youtu.be/pi_DWE3nSlY \n \n \n \n WEEK 4 \n 跟上第 二 三 周進度 \n \n \n WEEK 5 \n Slovespace 操作 \n 1.\xa0 進行分組作業，利用solvespace進行零組件繪製 \n 2.\xa0 各組每人分別選擇要繪製之零組件 \n 3.\xa0 利用solvespace進行繪製 \n 4.\xa0\xa0錄製操作影片 \n https://www.youtube.com/watch?v=IhD4QhuxYQI \n \n 完成圖 \n \n', 'tags': '', 'url': 'week2-5.html'}, {'title': 'week6-9', 'text': "WEEK 6 \n \n Solvespace 繪製 \n 1.\xa0\xa0 利用 Solvespace 繪製雙輪車所需要的零組件 \n 2.\xa0 首先繪製自走車之輪子，定義適當尺寸 \n 3.\xa0 開新檔繪製自走車本體，並對前端進行部分除料 \n 4.\xa0 於本體上除料裝置輪軸之孔 \n 5.\xa0 開新檔組裝自走車本體與輪子 \n 6.\xa0 錄製操作影片 \n https://www.youtube.com/watch?v=_nad16BPAiw \n \n \n 完成圖 \n \n \n \n \n V-rep 模型控制 \n 1. \xa0下載 V-rep 3.6.1 rev4 與 web_vrep2.zip(local)至個人隨身碟 \n 2.\xa0 開啟V-rep 3.6.1 rev4裡的vrep.exe後開啟\xa0web_vrep2裡的two_wheeler.ttt \n 3.\xa0 利用小白框開啟web_vrep2裡的app.py以開啟localhost:5000 \n 4.\xa0\xa0利用localhost:5000操控小車轉向與速度 \n 5.\xa0\xa0web_vrep2裡沒有remoteApi.dll檔的話，要到V-rep 3.6.1 rev4找到programming裡 \n remoteApiBindings裡lib裡Windows裡64bit裡複製到web_vrep2，才可使用app.py開 \n 啟localhost:5000操控小車 \n 6.\xa0\xa0錄製操作影片 \n https://youtu.be/A2EmOCHyZ78 \n \n \n \n \n 新增啟動與停止按鈕 \n 1.\xa0 首先開啟 wed_vrep2 資料夾裡tempate資料夾的controls進編輯器 \n 2.\xa0 利用原有按鈕的程式進行複製修改，新增啟動及停止的按鈕 \n 3. 接著拉wed_vrep2 資料夾裡的 vrep_linefollower.py檔進編輯器 \n 4. 在 def to direction 下加上\xa0if direction == 'start': 後打上vrep.simxStartSimulation(self.clientID, vrep.simx_opmode_oneshot)\xa0 定義開始按鈕 \n 5. 接著打上\xa0\xa0elif direction == 'stop':  vrep.simxStopSimulation(self.clientID, vrep.simx_opmode_oneshot) 定義停止按鈕 \n 6.\xa0 後續打上else :\xa0 並排列好順序 \n 7. 利用 app.py 開啟 localhost:5000\xa0 \n 8. 打開vrep 導入雙輪車，利用\xa0\xa0\xa0localhost:5000\xa0 進行開始與停止操控 \n 9.\xa0  錄製操作影片 \n https://youtu.be/L9n3tCWMm-0 \n \n \n \n WEEK 7 \n Slovespace編譯 \n 1.\xa0\xa0 到tmp > solvespace > build >src >CMakeFiles > solvespace.dir刪掉\xa0 \xa0 \xa0 \xa0 \xa0 \xa0slovespace.cpp.obj檔 \n 2. 到 \xa0solvespace\xa0>src找到\xa0\xa0slovespace.cpp 拉進編輯器 \n 3. 利用ctrl + f 進行搜尋 ，找GPL \n 4.\xa0 找到\xa0\xa0this\xa0 is\xa0\xa0 solvespace 在後面加上 is compiled by 自己學號 \n 5. 利用小黑框，路徑移置\xa0tmp > solvespace > build 打上\xa0mingw32-makemingw32-make 指令 \n 6. 完成後到\xa0solvespace > build >bin 開啟\xa0slovespace.exe ，進help 點 about 確認驗證完成 \n 7.\xa0錄製操作影片 \n https://youtu.be/_645vxhGprU \n \n \n 完成圖 \n \n \n \n Sol vespace 繪圖認證 \n 1.\xa0 繪製零件3 \n 2.\xa0 錄製操作影片 \n https://youtu.be/wy8zfTwbQhY \n \n \n 完成圖 \n \n WEEK 8 \n CMSimfly網際內容管理啟用 \n 1.\xa0 打開小黑框打 leo ，等待開啟 \n 2. 到cad2019>config資料夾找到pelican.leo拉進開啟的leo裡\xa0 \n 3. 開啟個人網頁home下裡的blog，複製個人blog網址 \n 4.\xa0 到leo裡的path裡的pelican裡的遠端下，把個人部落格網址貼上 ，然後把名稱改成個人學號 \n 5. 點旁邊的 local blog按右鍵點goto script \n 6. 複製pelican markdown -o blog -s local_publishconf.pypelican markdown -o blog -s local_publishconf.py指令，利用小黑框將位置改至個人倉儲，貼上指令 \n 7.\xa0 完成後到cad2019 > blog 檢查有東西後，開啟 localhost8444確定blog啟用成功後git push上去即完成 \n 8.\xa0錄製操作影片 \n https://youtu.be/q95RlvUWfcg \n \n \n \n \n 導入webots \n https://www.youtube.com/watch?v=TkaFIxF0V70 \n \n \n", 'tags': '', 'url': 'week6-9.html'}, {'title': 'week10-14', 'text': 'WEEK 10 \n 創建分組倉儲，組長利用fork將組員加入，組員利用pull\u3000 requests參與倉儲作業 \n \n Solidworks 和 NX 繪圖練習\xa0 :\xa0 \xa0 \n https://youtu.be/NCWQq-12Jwc \n \n \n Solidworks 和 NX 繪圖差異分析 : \n Solidworks和NX差異性分析  :  \n 草圖模式  : \xa0 \xa0Solidworks建立草圖模式分為草圖繪製和 3D 草圖。NＸ分為草圖和在任務環境中繪製草圖。 \n 草圖平面： Solidworks是直接選擇草圖平面，NX在創建草圖時會提示你是選擇現有平面還是創建平面。 \n 參數化： Solidworks是直接定義幾何關係。NX有尺寸約束與幾何約束。 \n 以約束來說，NX可以通過標註直接約束。Solidworks則無此指令。 \n 優點  : \n Solidworks :\xa0 \xa0以初學者來說Solidworks相比NX來的容易上手，Solidworks較簡單易學，界面清晰簡潔，具備機械傳動結構建模等基礎功能，適合初階機械設計。 \n NX :\xa0 \xa0適用於模具設計、 NC 加工、複雜零件、曲面，做複雜零件和裝配修改非常方便，操作人性化可同步建模。 \n 缺點  : \n Solidworks :\xa0 \xa0功能局限性大，只是一個參數化建模，不能做變量化方程的設計，曲面建模較差，模具、限元、運動力學方面相比NX要差。 \n \xa0NX :\xa0 導出的圖檔不利於尺寸參數二次修改，較複雜難上手。 \n Solidworks, NX, Inventor 與 Creo (Pro/E) 的開發緣起/套件安裝/設定流程/零組件繪圖的相關差異與特點分析 : \n 負責章節 :\xa0 4－5 \n 章節4 :\xa0 \n 1960年代中期至後期的研究 :\xa0 \xa0 1960年代初期，出現了第一個實驗性CAD系統，例如Sutherland的Sketchpad，Itek的電子繪圖機和通用汽車的DAC-1。而後半期，研究活動激增，為這項技術的最終商業化。因為專用大型機Sutherland使用的TX-2等電腦不適用於商業用途系統。另外，鑑於當時可用的計算機處理能力有限，所以，這一段時間有了三個重要設備的開發  :  商業CAD系統的一部分-存儲管顯示器，小型電腦和平板電腦。 \n 數位板作為光筆替代品的發展  :\xa0 隨著對電腦圖形學的興趣開始增長， 逐漸開始開發低成本的圖形輸入設備來代替光筆。最早的開發出的設備之一是由總部位於加利福尼亞州聖莫尼卡的RAND Corporation發明。 \n 控製圖形顯示設備 :\xa0 \xa0最初，平板電腦提供了一種替代光筆的低成本替代品，但最終，光筆還是被證明是無價的，而平板電腦則轉讓給其他研究機構。 此時，麻省理工學院的林肯實驗室也創建了一個實驗性指向設備，使用四個超聲波傳感器在三維空間中發揮作用。儘管該技術可行但從未被製造。大約在同一時間在林肯實驗室開發的另一種設備  :  比較器， 根據羅伯茨的說法，此帶有中央顯示器的比較器比電筆更可取，因為不需要追踪而且指向更加精確，並且可以長期保持工作 。1966年《華爾街日報》的文章 :一篇由Scott R. Schmendal撰寫發表於1966年10月25日有關於CAD的文章標題為  :  工程師可通過電腦進行可視化設計。\xa0Schmendal在他的著作中寫到如何創建，編輯和旋轉汽車草圖以使其具有不同的觀察方向。文章的一大部分談到了這些預期產品的未來能力、圖形系統以創建用於數控機床的控制帶。 \n   電腦圖形學發展  :\xa0 \xa0 \xa0\xa0在1960年代後半期，電腦圖形設備，線圖刷新顯示和存儲管顯示等設備逐漸失寵，因為它們無法產生工程設計或類似應用所需的高質量圖像。涉及刷新顯示設備的主要問題之一是顯示器上的圖像CRT屏幕必須每秒重新繪製或刷新30次或更多次，以避免圖像閃爍。最初，這是通過擁有主機來完成的，電腦須確定要顯示多少圖像並在剪輯後落在觀看區域。這種類型的操作十分重主機計算能力的一部分。所使用的技術是裝備顯示終端具有自己的內存和類似電腦的處理器，可以將要存儲的數據存儲在顯示並持續重新生成CRT上的圖像。稱為“顯示列表”。D. E. Rippy和D. E.撰寫的文章中介紹了國家標準局的”自動與電腦圖形接口的機器”。另一個小組正在開發圖形終端，該終端將放置在主機上。一實驗室在1965年建立一個名為GRAPHIC 1的系統，它是由一個PDP-5小型電腦和340型精密增量顯示器組成。根據William Ninke的說法，大約200英寸的線條圖或1,000個字符可以每秒30幀的速度自由閃爍。一旦圖像是與GRAPHIC 1通訊，將其儲存在PDP-5的內存和圖像中，主機無需繼續執行任何操作即可繼續刷新。提供每兩到六分鐘一次的間隔訪問圖形，但這個不利於實時應用，它表明了對商業應用的需求可以在更具交互性的分時模式下運行的大型機系統。貝爾實驗室的研究人員關注的一個主題是 : 使用光筆與最近開發的數位板。Ninke表示，他們發現光筆優於平板電腦。可能是GRAPHIC 1系統的兩個特徵導致了這一結論。首先，PDP-5並不是特別快的電腦，並且沒有硬件並劃分功能，查找用戶所用的商品將非常耗時。第二，信息量在GRAPHIC 1屏幕上顯示的內容非常有限，這使光筆更容易區分顯示的元素。如果電腦或顯示器速度更快，映像容量用作控制台配置的一部分，兩個設備的感覺可能有所不同。兩年之內，貝爾實驗室在開發方面取得了實質性進展。 IBM 7094被GE 645大型計算機取代。名為GRAPHIC 2的新交互式終端。與GRAPHIC 1一起使用的PDP-5被Digital PDP-9取代。 \n 商業顯示終端的增長 :\xa0 許多公司在1960年代開始生產商業刷新型計算機圖形終端，包括Information Display Incorporated，艾格（Adage），埃文斯（Evans）和薩瑟蘭（Sutherland）和伊姆拉克（Imlac）另外，幾台電腦包括IBM，Control Data Corporation和數字設備公司。這些顯示產品中許多都需要計算機系統提供刷新屏幕圖像的內存，而其他包含刷新顯示控制器中的內存。有些具有線，圓和字符生成器內置在基本產品中，而其他產品則作為選項出售。1960年代後期的計算機顯示終端並不便宜。典型系統與微型計算機的接口，其售價在45,000至120,000美元之間。也許到1968年末可用的性能最高的圖形終端是AGT單位由位於波士頓的Adage出售。該公司的AGT10是設計用於支持二維操作，而AGT30和AGT50針對性的三維應用程序。雖然結果令人讚嘆不已，但設備實在太昂貴了，無法用於大量CAD操作。但直到Adage開始製造價格便宜的終端，該終端與IBM 2250-類型顯示公司產生了可觀的收入。 \n 低成本終端的出現 :\xa0 \xa0 在此期間，向量刷新終端技術正在迅速發展。在大多數應用中，典型單元的成本過高。雖然幾個商業CAD系統，包括CADAM和CATIA，將繼續使用vector刷新終端，直到1980年代中期IBM推出5080光柵顯示器。 1960年代後期的儲存管CRT已經存在了幾十年。最初開發為示波器的顯示組件，它們還用作儲存器儲存設備在像MIT的Whirlwind I這樣的早期計算機中。作為交互式顯示設備，與刷新顯示器相比，具有顯著的成本優勢。但對要顯示的圖像進行了更改，必須刪除整個屏幕，然後必須重新生成整個圖像。泰克是至今為止領先的製作人，該公司也是世界領先的示波器製造商。然而，公司的升值速度很慢，存儲管作為低成本顯示終端的適用性涉及使用存儲管顯示器的早期開發是在麻省理工學院MAC項目。劍橋地區，計算機顯示器，計算機和影像學。電腦顯示器原為Rob Stotz和Tom Cheek以及麻省理工學院電子系統實驗室的其他幾位研究人員創立。該公司的第一個產品稱為ARDS（高級遠程顯示站）終端。 \n 電腦400系列顯示系統 :\xa0 Computek由Michael Dertouzos創立，  Computek 400 系列機器使用了直徑為11英寸的存儲管顯示器。Conographic由Luis Villalobos創立。 Conograph / 10提供了有限的刷新功能除了存儲的圖像。最終，泰克意識到銷售終端可以賺錢，除了簡單地以OEM方式銷售存儲管模塊外。公司的第一個終端產品是Model T4002， 售價約為10,000美元。泰克的銷售組織比計算機顯示器，Computek或Conographic大得多，並且很快成為了主要的銷售商。低成本存儲管終端市場。同時，它繼續出售存儲電子管顯示器以OEM為基礎，向任何想要構建自己的終端機的公司提供。與T4002一起，泰克還推出了4601硬拷貝單元。這個設備複製了終端屏幕上顯示的內容，而無需進行任何操作計算機處理數據。 \xa0 \n 微型計算機成為關鍵技術的組成部分  :\xa0 \xa0 早期的大多數圖形研究都是在大型主機上完成的，如林肯實驗室的TX-2或通用公司使用的大型IBM System / 360機器。Itek開發的電子繪圖機，後來成為了Control Data的Digigraphics系統的基礎。到1964年，除Digital之外，還有數家公司，包括Scientific Data System和Computer Control，正在銷售適用於交互式圖形應用程序。在接下來的五年中，計算機的這一部分行業經歷了顯著增長，並且16到24位計算機的數量可以支持交互式圖形應用程序迅速擴展。1969年1月推出16位Nova。Data General的創始人，設計代替了最終成為PDP-11的另一個計劃，。Nova是公司的第一台產品，針對交互式進行了很好的調整應用程序。Digital PDP-11與Nova一起是微型計算機， 激發了早期的CAD行業， 1970年初首次發布。直到進入 1990年代。兩台機器的初始操作系統都相當基本並且是早期的CAD 軟件開發人員被迫自己提供大部分功能。微型計算機與8K內存，11英寸存儲管的組合顯示器和平板電腦為新興的CAD提供了經濟的硬件配置系統供應商。 \n 圖像處理和表面幾何  :\xa0 \xa0 在圖形技術開發的初期，大多數開發人員仍然無法有效地處理二維線圖。錫拉丘茲大學和猶他大學創建三維模型涉及復雜的曲面並生成這些模型的陰影圖像。大衛·埃文斯（David Evans）開發用於創建陰影圖像的技術  :  單色顯示器。從事該項目的其他人是克里斯·威利（Chris Wylie），戈登.羅姆尼和艾倫·埃爾達爾。位於猶他州的亞瑟·阿佩爾（Arthur Appel）正在位於IBM的IBM研究中心解決類似的問題。紐約州約克敦高地（Yorktown Heights），嘗試使用光線跟踪技術來創建陰影圖像。Appel採用了一種稱為藝術家和插圖畫家使用“明暗對比”，通過明暗來達到三維效果。在1968年春季聯合計算機大會上發表的一篇論文中，阿佩爾（Appel）評論“如果是自動測定明膠的技術，具有良好的分辨率應證明與線圖具有競爭力，機器生成的照片可能會取代線條圖，成為工程和建築學中圖形通信的主要模式。 \n 數據管理和應用程序開發 :\xa0 \xa0 隨著圖形硬件和計算機技術在1960年代中期開始成熟越來越明顯的是，必須開發新技術來存儲和存儲處理工程設計數據。道格·羅斯（Doug Ross）的“ plex”架構概念做出了重要貢獻。伊万·薩瑟蘭（Ivan Sutherland）在林肯實驗室（Lincoln Laboratory）的最初圖形工作很快導致了更廣泛的研究項目系列。拉里·羅伯茨（Larry Roberts）寫了幾篇技術論文，幫助定義了管理顯示文件和矩陣的理論基礎。（伯特）伊万（Ivan）的哥哥薩瑟蘭（Sutherland）在1964年開發了可以促進在林肯實驗室的TX-2上實現圖形應用程序電腦。  Andries Van Dam 和David Evans，曾在布朗大學和賓夕法尼亞大學分別開發了一種名為PENCIL使指針的範圍最小化被使用。  1967 年左右，哈佛大學加入了越來越多的學術界從事交互式圖形技術的機構。最早加入它的人之一該領域的工作人員是威廉·紐曼（William Newman）。在1968年大西洋春季聯合計算機會議上發表的論文中，紐曼（Newman）新澤西市市（Newman）描述了當時哈佛大學正在進行的為圖形應用程序開發面向問題的編程語言。在此期間發布的系統出現在1968年秋季的會議記錄中，由Sperry Rand Corporation的Ira Cotton和Frank撰寫Adams Associates的Greatorex，它描述了一種能夠支持遠程的系統圖形終端在UNIVAC 1108計算機上實現。直到1990年代個人計算機和Windows成為行業標準。從事此項目的團隊包括R. Ladson，N。Fritchie和G.UNIVAC的Halliday以及Adams Associates的Dan Cohen和Roger Baust。 \n 顯示複雜圖像 :\xa0 \xa0可以支持交互式的低成本微型計算機圖形開始變得可用，但是在顯示終端上生成複雜曲線需要大量的時間，每次刷新圖像時要執行的指令執行次數或大量內存來存儲大量短向量。因此，許多研究人員探索了不同的方式可以更有效地顯示這些曲線。1960年代由蒂姆·約翰遜（Tim Johnson），拉里·羅伯茨（Larry Roberts）在林肯實驗室完成的，包括實驗性建築用於生成與主機無關的圓錐曲線的硬件。在1960年代後期，哈佛大學也成為圖形的溫床與Ivan Sutherland，Robert Sproull，Dan Cohen，Ted Lee和羅賓·福雷斯特（Robin Forrest）領導了一些更重要的工作。薩瑟蘭和Sproull合作進行的是一種顯示部分的快速方法，CRT屏幕上的二維和三維圖像。提出了一種通過計算來查找落在窗口內的元素的技術線的連續中點。哈佛團隊建立了矩陣乘法器單元，以促進三維 彎曲幾何圖形平移所需的變換。他們也在探索 結合了猶他大學開發的新的隱藏線去除算法 John Warnock（幾年後將繼續組建Adobe Systems）與修剪分隔線，但似乎從未完成，至少在哈佛沒有完成。 \n 內部CAD發展勢頭強勁 :\xa0 \xa0 研究實驗室開發之間的主要區別，是否 學術或工業環境，以及在商業環境中進行的開發 環境是，預期後一種活動會在 合理的時間段。洛克希德-喬治亞州安裝了數字類型為340的UNIVAC 418計算機1963年展出。UNIVAC 418是一台相對較新的18位計算機，其中有四個微秒的添加時間和硬件浮點數。由於幾乎沒有可用於該系統的交互式圖形軟件，洛克希德-喬治亞州程序員必須從頭開始開發軟件。形項目一樣使用光筆以及28個按鈕的功能框。每個按鈕的目的都特定於當前正在使用的應用程序。該軟件能夠創建和編輯三維模型，可以在傳統的三個正交模型和一個正交模型中進行查看。透視圖格式。等軸測視圖也使用單獨的程序來支持。在三維空間中工作的創建和編輯功能相當不錯基本–點，圓弧線，繞垂直於視圖的軸旋轉，以及規模變化。在二維模式下運行時，其他圖形提供了一些功能，例如構造與兩個圓相切的圓。鑑於340型顯示器的限制，可以處理的模型和圖像是相當有限。 \n IBM開發混合電路設計系統\xa0 :\xa0 \xa0 \xa01960年代中期是IBM專注於用戶交互的。IBM System 360計算機主要由小型混合動力設備構成集成電路約半平方英寸。每個電路通常由幾個電路組成分立晶體管和/或二極管，幾個電阻器和互連電路的這些模塊的製造過程涉及許多所需的步驟，產生幾種圖形佈局圖案或遮罩。該系統的硬件配置由相對較慢的IBM 1620 Mod II組成一台計算機，它具有一對140微秒的五位數字的加法時間，兩個IBM 1311磁盤驅動器，每個驅動器存儲2 MB數據和一個19英寸顯示屏功能鍵和一支電筆。顯示器具有自己的內存，能夠顯示1,023個直線段，大約5,000個字符或其組合。用戶通過指向電路板與電路設計和佈局軟件進行交互。到1970年代初，用於集成電路和印刷品的藝術品生產系統。主要集中於任務的幾何圖形部分，將藝術品製作成一個單一的系統。定義技術原理圖佈局，然後使用以下命令設計該佈局的物理實現原理圖佈局中的數據以驗證物理設計。 \n 通用汽車定義圖形要求 :\xa0 \xa0 \xa0在1967年在阿納海姆舉行的秋季聯合計算機會議上發表的論文中， 加州通用汽車研究中心的John Joyce和Marilyn Cianciolo 密歇根州沃倫（Warren）提供了關於 交互式圖形系統。喬伊斯和錢安喬洛所做的許多發言最終將成為商業CAD系統的功能，包括那些使用存儲管圖形的系統以及平板電腦。他們的一些關鍵點是 : 典型的用戶幾乎沒有計算機經驗。  / 應盡量減少使用字母數字數據來驅動這些系統 / 僅允許語法正確的數據就可以消除許多錯誤。 / 相似類型的數據應該能夠組合在一起。/ 數據的選擇性增亮是一種強大的反饋機制。底紋有助於用戶理解三維表面。  /  圖形通信系統必須自然且易於使用。/ 完成特定任務所需的步驟數應為最小化。/ 應用程序程序員應該能夠有選擇地允許或禁用使用不同的輸入設備。/ 顯示控制器應能夠識別選定的圖形實體不需要主機執行廣泛的數據庫搜索。不應人為限制顯示的數據量除了硬件的物理限制緊隨工作之後，以環形結構組裝的數據庫的描述。 \n WEEK 12 \n 利用 NX 12或 NX3 進行NX導引，分章節閱讀及操作： \n 負責章節 :\xa0 2 \n NX操作模擬 :\xa0 https://youtu.be/gFpu92G0dJk \n \n Webots 與 V-rep Tutorial操作： \n Webots : \n webots tutorial 1 :\xa0 https://youtu.be/Syi3X1j469Q \n \n \n V-rep : \n \n WEEK13 \n reveal 簡報 \n 簡報 :\xa0\xa0 https://youtu.be/rOYvSCGnyHE \n \n WEEK14 \n Webots Tutorial操作： \n \n', 'tags': '', 'url': 'week10-14.html'}, {'title': 'week15-18', 'text': 'WEEK15 \n 學員個人學習成果回報 \n 回報影片 :\xa0 https://youtu.be/zOHPHDy__Lc \n \n \n WEEK16 \n 越野車零組件設計繪圖 \n 影片:\xa0 https://youtu.be/IHBNrtJ77fM \n \n \n WEEK17 \n 個人任務 \n 影片:\xa0 https://www.youtube.com/watch?v=H--Yj6Q0ris \n \n \n \xa0 \n \n', 'tags': '', 'url': 'week15-18.html'}, {'title': 'note', 'text': '', 'tags': '', 'url': 'note.html'}, {'title': 'About', 'text': '此內容管理系統以\xa0 https://github.com/mdecourse/cmsimde \xa0作為 submodule 運作, 可以選定對應的版本運作, cmsimde 可以持續改版, 不會影響之前設為 submodule, 使用舊版 cmsimde 模組的內容管理相關運作. \n 利用 cmsimde 建立靜態網誌方法: \n 1. 在 github 建立倉儲, git clone 到近端 \n 2. 參考\xa0 https://github.com/mdecourse/newcms , 加入除了 cmsimde 目錄外的所有內容 \n 以 git submodule add\xa0 https://github.com/mdecourse/cmsimde \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 3.在近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add commit 及 push 將內容推到遠端. \n 4. 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: \n git clone --recurse-submodules  https://github.com/mdecourse/newcms.git \n', 'tags': '', 'url': 'About.html'}, {'title': 'Develop', 'text': 'https://github.com/mdecourse/cmsimde \xa0的開發, 可以在一個目錄中放入 cmsimde, 然後將 up_dir 中的內容放到與 cmsimde 目錄同位階的地方, 使用 command 進入 cmsimde 目錄, 執行 python wsgi.py, 就可以啟動, 以瀏覽器 https://localhost:9443\xa0就可以連接, 以 admin 作為管理者密碼, 就可以登入維護內容. \n cmsimde 的開發採用 Leo Editor, 開啟 cmsimde 目錄中的 cmsimde.leo 就可以進行程式修改, 結束後, 若要保留網際內容, 只要將 cmsimde 外部的內容倒回 up_dir 目錄中即可後續對 cmsimde 遠端倉儲進行改版. \n init.py 位於\xa0 up_dir 目錄, 可以設定 site_title 與 uwsgi 等變數. \n', 'tags': '', 'url': 'Develop.html'}]};