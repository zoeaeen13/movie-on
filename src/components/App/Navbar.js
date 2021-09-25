import React, { useState } from 'react'
import { isEmpty } from 'lodash'
import Search from '@rsuite/icons/Search'
import { Link } from 'react-router-dom'
import useRouter from '../../hooks/useRouter'

const Navbar = ({ isTop, setSearchWord }) => {
  const { changeRouter } = useRouter()
  const [isFocus, setInputFocus] = useState(false)

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      if (isEmpty(e.target.value)) {
        setInputFocus(false)
        changeRouter('/')
      } else {
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
          <Link to="/">
            首頁
          </Link>
          <Link to="/browse">電影分類</Link>
          {/* <Link to="/myWatchlist">我的片單</Link> */}
        </ul>
      </div>
      <div>
        <div className={`navbar-input-group ${isFocus && 'isFocus'}`}>
          <button>
            <Search size="3em" style={{ color: 'white', fontSize: '22px' }} onClick={() => setInputFocus(true)} />
          </button>
          <input type="text" onKeyDown={handleKeyDown} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;