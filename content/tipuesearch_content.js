var tipuesearch = {"pages": [{'title': 'About', 'text': '此內容管理系統以\xa0 https://github.com/mdecourse/cmsimde \xa0作為 submodule 運作, 可以選定對應的版本運作, cmsimde 可以持續改版, 不會影響之前設為 submodule, 使用舊版 cmsimde 模組的內容管理相關運作. \n 利用 cmsimde 建立靜態網誌方法: \n 1. 在 github 建立倉儲, git clone 到近端 \n 2. 參考\xa0 https://github.com/mdecourse/newcms , 加入除了 cmsimde 目錄外的所有內容 \n 以 git submodule add\xa0 https://github.com/mdecourse/cmsimde \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 3.在近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add commit 及 push 將內容推到遠端. \n 4. 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: \n git clone --recurse-submodules  https://github.com/mdecourse/newcms.git \n', 'tags': '', 'url': 'About.html'}, {'title': 'Develop', 'text': 'https://github.com/mdecourse/cmsimde \xa0的開發, 可以在一個目錄中放入 cmsimde, 然後將 up_dir 中的內容放到與 cmsimde 目錄同位階的地方, 使用 command 進入 cmsimde 目錄, 執行 python wsgi.py, 就可以啟動, 以瀏覽器 https://localhost:9443\xa0就可以連接, 以 admin 作為管理者密碼, 就可以登入維護內容. \n cmsimde 的開發採用 Leo Editor, 開啟 cmsimde 目錄中的 cmsimde.leo 就可以進行程式修改, 結束後, 若要保留網際內容, 只要將 cmsimde 外部的內容倒回 up_dir 目錄中即可後續對 cmsimde 遠端倉儲進行改版. \n init.py 位於\xa0 up_dir 目錄, 可以設定 site_title 與 uwsgi 等變數. \n', 'tags': '', 'url': 'Develop.html'}, {'title': '每周練習內容', 'text': '', 'tags': '', 'url': '每周練習內容.html'}, {'title': 'week1', 'text': '中秋節吃月餅~~~ \n', 'tags': '', 'url': 'week1.html'}, {'title': 'week2', 'text': 'week2 \n', 'tags': '', 'url': 'week2.html'}, {'title': 'CMSiMDE', 'text': 'https://github.com/mdecourse/cmsimde \xa0是一套以 Python 加上 flask, bs4, lxml, mardown, pelican, flask_cors, leo 等模組所建構的網際內容管理系統. \n flask 模組是一套網際程式框架, CMSiMDE 利用此一框架編寫網際相關的函式, 用來執行動態的內容管理系統. \n bs4 在 CMSiMDE 擔任解析 config/content.htm 超文件檔案的工作, 根據 h1, h2 與 h3 標註, 對 content.htm 進行分頁, 因此使用者可以透過 3 個階次的內容架構進行編輯. \n lxml 模組主要用來將 content.htm 逐一轉換為 content 目錄中的個別檔案, 也就是在 CMSiMDE 動態系統中, 點擊 generate_pages 之後, 呼叫 lxml 模組中的分頁方法, 將動態內容轉為靜態內容. \n markdown 與 pelican 在 CMSiMDE 主要用來產生靜態網誌, 而網誌的設計與編輯則透過 Leo Editor 進行, 此外 CMSiMDE 除了網際內容管理與網誌之外, 還透過 Leo Editor 管理 reveal.js 網際簡報系統. \n flask_cors 模組, 在 CMSiMDE 是為了配合 Dartpad 程式編寫過程, 需要跨網站擷取資料的需求而加入, 在舊版的可攜系統中若無此模組, 執行 CMSiMDE 之前必須透過 \n python -m pip install flask_cors\xa0 \n 安裝. \n CMSiMDE 可以放入 Javascript 前端程式, 進行簡單的設計運算, 例如: \n http://mde.tw/cp2019/content/Task3.html \xa0中的猜數字遊戲. \n 也可以嵌入 STL文字格式零件, 例如: \n http://mde.tw/cad2019/content/STL.html \n 也可以利用前端的 Javascript 與伺服器後端的程式進行非同步設計運算或遠端控制, 例如: \n http://mde.tw/cad2019/content/Task1.html \xa0中的網際虛擬雙輪車控制. \n', 'tags': '', 'url': 'CMSiMDE.html'}, {'title': 'week3', 'text': '編譯步驟: \n 先將 Y:\\portablegit\\bin\\sh.exe 改名為 sh_rename_for_solvespace.exe \n git version 查驗 git 版本 \n git 2.13 版本以上, 可以使用下列 git clone\xa0 --recurse-submodules 取得所有子模組資料 \n git clone --recurse-submodules https://github.com/solvespace/solvespace.git solvespace \n edit Y:\\tmp\\solvespace\\extlib\\angle\\CMakeLists.txt comment out line 713 and 714 \n #list(APPEND ANGLE_DEFINITIONS #"-DANGLE_PRELOADED_D3DCOMPILER_MODULE_NAMES={ \\"d3dcompiler_47.dll\\", \\"d3dcompiler_46.dll\\", \\"d3dcompiler_43.dll\\" }") endif() \n 需要手動進行 libpng.dll.a 的編譯, 並改名為 libpng_static.a, 並放到編譯系統的 lib 目錄中: \n cd solvespace \n cd extlib \n cd libpng \n mkdir build \n cd build \n cmake .. -G "MinGW Makefiles" -DCMAKE_BUILD_TYPE=Release mingw32-make \n rename\xa0libpng.dll.a to libpng_static.a and copy to\xa0Y:\\msys64\\mingw64\\lib \n 接著回到 solvespace 原始碼目錄, 建立 build 目錄後進入 build 目錄, 執行: \n cmake .. -G "MinGW Makefiles" -DCMAKE_BUILD_TYPE=Release mingw32-make \n \n', 'tags': '', 'url': 'week3.html'}, {'title': 'week4', 'text': '蔡英文講了6次中華民國，韓國瑜講了11次，宇宙大導演萬歲 \n \n', 'tags': '', 'url': 'week4.html'}, {'title': 'week5', 'text': '', 'tags': '', 'url': 'week5.html'}, {'title': 'week6', 'text': '\xa0 V-rep 使用，下載V-REP3與web_vrep2執行車輛模擬 \n \n', 'tags': '', 'url': 'week6.html'}, {'title': 'week7', 'text': '', 'tags': '', 'url': 'week7.html'}, {'title': 'week8', 'text': '', 'tags': '', 'url': 'week8.html'}, {'title': 'week9', 'text': '影片必須加上期中考時段所宣布的內容浮水印後, 上傳至 Youtube 嵌入個人網誌後回報至下列回應 \n', 'tags': '', 'url': 'week9.html'}]};