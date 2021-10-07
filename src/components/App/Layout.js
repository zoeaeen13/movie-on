import React, { useEffect } from 'react'
import { removeCards } from '../../utils'
import PropTypes from 'prop-types'

const Layout = ({ children, style, className }) => {
  useEffect(() => {
    removeCards()
    console.log('removeCards')
  }, [])

  return (
    <div style={style} className={`layout ${className}`}>{children}</div>
  )
}

Layout.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object,
  className: PropTypes.string.isRequired,
}

export default Layout