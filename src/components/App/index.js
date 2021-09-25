import React, { useState } from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Home from '../../pages/Home';
import SearchPage from '../../pages/Search'
import Navbar from './Navbar'
import { removeCards } from '../../utils'

const App = () => {
  const [isTop, setTop] = useState(true)
  const [searchWord, setSearchWord] = useState('')

  // 滑動時移除卡片
  window.addEventListener('scroll', () => {
    setTop(window.scrollY < 150)
    if (document.documentElement.scrollTop > 150) removeCards('.floating-card-wrapper')
  })

  return (
    <>
      <BrowserRouter>
        <Navbar isTop={isTop} setSearchWord={setSearchWord}/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/search" render={props => <SearchPage {...props} searchWord={searchWord} />} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;

