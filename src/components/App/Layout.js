import React, { useEffect } from 'react'
import { removeCards } from '../../utils'
import { initGA, logPageView } from '../../services/GA'

const Layout = ({ children, style, className }) => {
  useEffect(() => {
    if (!window.GA_INITIALIZED) {
      initGA()
      window.GA_INITIALIZED = true
    }
    logPageView()
    removeCards()
  }, [])

  return (
    <div style={style} className={`layout ${className}`}>{children}</div>
  )
}

export default React.memo(Layout)