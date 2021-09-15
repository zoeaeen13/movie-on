import React, { useState, useEffect, useRef, useCallback } from 'react'
import { FloatingCard } from './FloatingCard'
import createModel from '../../utils/createModel'
// const MyPortal = ({ children }) => {
//   const element = document.createElement('div')
//   useEffect(() => {
//     document.body.appendChild(element)
//     return () => {
//       document.body.removeChild(element)
//     }
//   })
//   return createPortal(children, element)
// }

const  MovieCard = ({ data }) => {
  const [visible, setVisible] = useState(false)
  const cardRef = useRef(null)

  const handleStyle = () => {
    const { availWidth, availHeight } = window.screen
    const { width, height, top, left } = cardRef.current.getBoundingClientRect()
    const newWidth = width*1.5
    const newHeight = width*1.54
    let newTop = top - ((newHeight - height) / 2)
    let newLeft = left - ((newWidth - width) / 2)
    if(top + newHeight > availHeight) newTop =  availHeight - newHeight
    if(left + newWidth > availWidth) newLeft =  availWidth - newWidth - availWidth*0.04
    if (left <= availWidth*0.04) newLeft = availWidth*0.04
    return { position: { top: Math.floor(newTop), left: Math.floor(newLeft) }, size: { width: Math.floor(newWidth), height: Math.floor(newHeight) }}
  }

  const onMouseEnter = useCallback(() => {
    setVisible(true)
  }, [])

  useEffect(() => {
    visible && createModel(<FloatingCard id={data.id} style={handleStyle()} visible={visible} setVisible={setVisible}/>)
  }, [visible])

  return (
    <div
      onMouseEnter={onMouseEnter}
      className="movie-card"
      ref={cardRef}
    />
  )
}
export default React.memo(MovieCard)