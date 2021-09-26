import React, { useState } from 'react'
import { intersection, isEmpty } from 'lodash'
import { Route, Switch } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import Home from '../../pages/Home'
import SearchPage from '../../pages/Search'
import BrowsePage from '../../pages/Browse'
import Navbar from './Navbar'
import { removeCards } from '../../utils'

const App = () => {
  const [isTop, setTop] = useState(true)
  const [searchWord, setSearchWord] = useState('  ')

  // 滑動時移除卡片
  window.addEventListener('scroll', () => {
    setTop(window.scrollY < 150)
    if (document.documentElement.scrollTop > 150) removeCards('.floating-card-wrapper')
  })


  window.addEventListener('mouseover', (e) => {
    const elementArr = ['search-wrapper', 'home-content-wrapper', 'movie-list-wrapper', 'home-banner', 'movie-gallery', 'conditions-wrapper']
    if (!isEmpty(intersection(e.target.classList, elementArr))) {
      removeCards()
    }
  })

  return (
    <>
      <BrowserRouter>
        <Navbar isTop={isTop} setSearchWord={setSearchWord}/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/search" render={props => <SearchPage {...props} searchWord={searchWord} />} />
          <Route exact path="/browse" component={BrowsePage} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;

