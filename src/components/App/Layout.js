import React, { useEffect } from 'react'
import { removeCards } from '../../utils'

const Layout = ({ children, style, className }) => {
  useEffect(() => {
    removeCards()
    console.log('removeCards')
  }, [])

  return (
    <div style={style} className={`layout ${className}`}>{children}</div>
  )
}

export default Layout