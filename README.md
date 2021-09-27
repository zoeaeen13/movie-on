## MoiveOn：整合了 IMDb、爛番茄及豆瓣的影評搜索網站

多達 40,000 部電影的評分搜尋系統，整合各大平台，能客製化條件搜尋自己想看的電影，讓推薦電影不再是煩惱！

- 首頁仿造 Netflix 風格，以 carousel 滑動各類型電影，移動滑鼠到對應卡片即獲得電影資訊
- 右上角按鈕，可以輸入關鍵字尋找電影
- 導覽列的「電影分類」，可以進階搜尋條件
- 進階搜尋條件包含「評分、參考標準、類型、年份」，條件可以搭配結合
- 無限滾動載入

[![](https://i.imgur.com/76PXZ7C.jpg)](https://zoeaeen13.github.io/movie-on/#/)

[![](https://i.imgur.com/D0T2yrh.jpg)](https://zoeaeen13.github.io/movie-on/#/)

[![](https://i.imgur.com/Y4CU41m.jpg)](https://zoeaeen13.github.io/movie-on/#/browse)


---

### 使用技術
- 以 React 搭配 React-router 建立棋盤遊戲，使用 funciton component 及 hook 管理狀態
- 實作 Custom Hook 整理獲取電影的邏輯
- 利用 Portal 方式動態渲染電影資訊


### 專案結構
- /src
    - /components
      - /App
        - index.js
        - Navbar.js
        - Layout.js
        - _App.scss
      - /Home
        - index.js
        - Banner.js
        - MovieList.js
      - Movie
        - index.js
        - MovieCard.js
        - MovieDetail.js
        - FloatingCard.js
        - RecommendCard.js
        - _Movie.scss
    - /constants
        - index.js
        - type.js
    - /hooks
        - useFetchMovies.js
        - useRouter.js
    - /pages
        - /Home
          - index.js
          - _Home.scss
        - /Browse
          - index.js
        - /Search
          - index.js
          - _Search.scss
    - /style/scss
        - _colors.scss
        - _mixins.scss
        - _reset.scss
        - global.scss
        - main.scss
    - /utils
      - index.js
      - createModel.js
      - removeCards.js
    - api.js
    - index.js
