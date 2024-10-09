# MoiveOn

A movie introduction website that enables users to search for rating data, integrating information from IMDb, Rotten Tomatoes, and Douban.

![movie-on](https://imgur.com/wVJNOrL.png)

### Key Features:
- Rating search system for up to 40,000 movies
- Integration of ratings from major platforms
- Customizable search conditions to help users find their desired movies

![](https://imgur.com/iFoy53A.gif)

### Functionality:

1. Netflix-style homepage design
   - Utilizes carousels to show various movie genres
   - Hover over movie cards to view detailed information
2. Search button in the top-right corner
   - Allows keyword input to find movies
3. Advanced search conditions
   - Includes options for ratings, reference standards, genres, and release years
   - Conditions can be combined for refined searches
4. Infinite scroll loading
   - Ensures a smooth browsing experience

### Technologies Used

- Built with React and axios, using function components and hooks for state management
- Implemented Custom Hooks to organize movie fetching logic
- Utilized React Portals for dynamic rendering of movie information


![movie-on](https://imgur.com/w62ogfx.png)

![](https://i.imgur.com/CIUa9Jr.png)


### Project Structure
```
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
```
