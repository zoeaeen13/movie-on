import React, { useState } from 'react'
import { intersection, isEmpty } from 'lodash'
import { HashRouter, Switch, Route } from "react-router-dom";
import Home from '../../pages/Home'
import LoginPage from '../../pages/Login'
import SearchPage from '../../pages/Search'
import BrowsePage from '../../pages/Browse'
import Navbar from './Navbar'
import { removeCards } from '../../utils'
import UserProvider from "../../providers/UserProvider";

const App = () => {
  const [isTop, setTop] = useState(true)
  const [searchWord, setSearchWord] = useState('')

  // scroll 移除卡片
  window.addEventListener('scroll', () => {
    setTop(window.scrollY < 150)
    if (document.documentElement.scrollTop > 150) removeCards('.floating-card-wrapper')
  })
  // hover 移除卡片
  window.addEventListener('mouseover', (e) => {
    const elementArr = ['search-wrapper', 'home-content-wrapper', 'movie-list-wrapper', 'home-banner', 'movie-gallery', 'conditions-wrapper']
    if (!isEmpty(intersection(e.target.classList, elementArr))) {
      removeCards()
    }
  })

  return (
    <UserProvider>
      <HashRouter>
        <Navbar isTop={isTop} setSearchWord={setSearchWord}/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/search" render={props => <SearchPage {...props} searchWord={searchWord} />} />
          <Route exact path="/browse" component={BrowsePage} />
          <Route exact path="/login" component={LoginPage} />
        </Switch>
      </HashRouter>
    </UserProvider>
  )
}

export default App
