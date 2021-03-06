import React, { useState, useContext } from 'react'
import { FaUserCircle } from 'react-icons/fa';
import { isEmpty } from 'lodash'
import Search from '@rsuite/icons/Search'
import { Link } from 'react-router-dom'
import { useLocation } from "react-router";
import useRouter from '../../hooks/useRouter'
import { gaEvent } from '../../services/GA'
import { UserContext } from '../../providers/UserProvider';

const Navbar = ({ isTop, setSearchWord }) => {
  const location = useLocation();
  const user = useContext(UserContext)
  const { changeRouter } = useRouter()
  const [isFocus, setInputFocus] = useState(false)

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      if (isEmpty(e.target.value)) {
        setInputFocus(false)
        changeRouter('/')
      } else {
        gaEvent('navbar', 'enter to search movie', { value: e.target.value })
        setSearchWord(e.target.value)
        changeRouter('/search')
      }
    }
  }

  return (
    <nav className={`navbar ${isTop && 'top'}`}>
      <div>
        <Link className="logo" to="/" />
        <ul className="navbar-list" >
          <Link to="/" className={`${location.pathname === '/' && 'active'}`}>首頁</Link>
          <Link to="/browse" className={`${location.pathname === '/browse' && 'active'}`}>電影分類</Link>
          {/* <Link to="/watch_list">我的片單</Link> */}
        </ul>
      </div>
      <div>
        <div className={`navbar-input-group ${isFocus && 'isFocus'}`}>
          <button>
            <Search size="3em" style={{ color: 'white', fontSize: '22px' }} onClick={() => {
              gaEvent('navbar', 'click to search movie', { label: 'search-icon' })
              setInputFocus(true)
            }} />
          </button>
          <input type="text" onKeyDown={handleKeyDown} autoComplete="off"/>
        </div>
        <Link className="navbar-icon" to={`${user ? '/profile' : 'login'}`} onClick={() => gaEvent('navbar', 'click to see user page', { label: 'user-icon' })}>
          <FaUserCircle />
        </Link>
      </div>
    </nav>
  )
}

export default React.memo(Navbar)