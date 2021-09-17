import React from 'react';
import { IconButton, Icon, ButtonToolbar } from 'rsuite';
import { Link } from 'react-router-dom';

const Navbar = ({ isTop }) => {
  return (
    <nav className={`navbar ${isTop && 'top'}`}>
      <Link className="logo" to="/" />
      <ul className="navbar-list" >
        <Link className="active" to="/">
          首頁
        </Link>
        <Link to="/">電影分類</Link>
        <Link to="/">熱門電影</Link>
        <Link to="/">我的片單</Link>
      </ul>
      <ButtonToolbar>
        <IconButton size="lg" icon={<Icon icon={'search'} />} />
        <IconButton size="lg" icon={<Icon icon={'commenting'} />} />
        <IconButton size="lg" icon={<Icon icon={'user'} />} />
      </ButtonToolbar>
    </nav>
  );
};

export default Navbar;