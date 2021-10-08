import React, { useState, useEffect } from 'react'
import { intersection, isEmpty } from 'lodash'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from '../../pages/Home'
import LoginPage from '../../pages/Login'
import ProfilePage from '../../pages/Profile'
import SearchPage from '../../pages/Search'
import BrowsePage from '../../pages/Browse'
import Navbar from './Navbar'
import { removeCards } from '../../utils'
import UserProvider from "../../providers/UserProvider";
import { initGA } from '../../services/GA'

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
    const elementArr = ['nav-bar', 'search-wrapper', 'home-content-wrapper', 'movie-list-wrapper', 'home-banner', 'movie-gallery', 'conditions-wrapper']
    if (!isEmpty(intersection(e.target.classList, elementArr))) {
      removeCards()
    }
  })

  useEffect(() => {
    initGA()
  }, [])

  return (
    <UserProvider>
      <BrowserRouter>
        <Navbar isTop={isTop} setSearchWord={setSearchWord}/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/search" render={props => <SearchPage {...props} searchWord={searchWord} />} />
          <Route exact path="/browse" component={BrowsePage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/profile" component={ProfilePage} />
        </Switch>
      </BrowserRouter>
    </UserProvider>
  )
}

export default App
