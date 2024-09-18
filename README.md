# MoiveOn

A movie introduction website which enables search for rating data, with the integration of IMDb, RottenTomatoes, and Douban

多達 40,000 部電影的評分搜尋系統，整合各大平台，能客製化條件搜尋自己想看的電影，讓推薦電影不再是煩惱！

- 首頁仿 Netflix 風格，以 carousel 滑動各類型電影，移動滑鼠到對應卡片即獲得電影資訊
- 右上角按鈕，可以輸入關鍵字尋找電影
- 導覽列的「電影分類」，可以進階搜尋條件
- 進階搜尋條件包含「評分、參考標準、類型、年份」，條件可以搭配結合
- 無限滾動載入

#### 首頁
提供各類別的排行電影
![](https://i.imgur.com/76PXZ7C.jpg)

#### 電影資訊
點擊觀看電影預告，劇情及演員及導演資訊
![](https://i.imgur.com/D0T2yrh.jpg)

#### 搜尋及篩選電影
電影分類頁提供各種搜尋條件，結合可找出目前期待觀看的片子，降低踩雷機率
![](https://i.imgur.com/Y4CU41m.jpg)


---

### 使用技術
- 以 React 搭配 axios 建立，使用 funciton component 及 hook 管理狀態
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
