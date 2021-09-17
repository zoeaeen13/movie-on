import React, { useState } from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Home from '../../pages/Home';
import Navbar from './Navbar';
import { removeCards } from '../../utils'

const App = () => {
  const [isTop, setTop] = useState(true)
  window.addEventListener('scroll', () => {
    // navbar background
    const y = window.scrollY
    setTop(y < 150)

    // remove floating cards while scrolling
    if (document.documentElement.scrollTop > 150) removeCards('.floating-card-wrapper')
  })

  return (
    <>
      <BrowserRouter>
        <Navbar isTop={isTop}/>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;

