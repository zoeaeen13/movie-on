import React, { useState, useRef, useEffect } from 'react'

const handleStyle = ({ width, height, top, left }) => {
  const { availWidth, availHeight } = window.screen
  const newWidth = width*1.5 > 350 ? 350 : width*1.5
  const newHeight = newWidth*1.06
  let newTop = top - ((newHeight - height) / 2)
  let newLeft = left - ((newWidth - width) / 2)
  if(top + newHeight > availHeight) newTop =  availHeight - newHeight
  if(left + newWidth > availWidth) newLeft =  availWidth - newWidth - availWidth*0.04
  if (left <= availWidth*0.04) newLeft = availWidth*0.04
  return { position: { top: Math.floor(newTop), left: Math.floor(newLeft) }, size: { width: Math.floor(newWidth), height: Math.floor(newHeight) }}
}

const FloatingCard = React.memo(({ id, clintRect, closeModal, setVisible }) => {
  const [firstTimeer, setFirstTimer] = useState(null)
  const [secondTimer, setSecondTimer] = useState(null)
  const cardRef = useRef(null)
  const { position, size } = handleStyle(clintRect)

  const onMouseLeave = () => {
    if (cardRef) {
      cardRef.current.classList.add('hidden')
      const id = setTimeout(() => closeModal(), 300)
      setSecondTimer(id)
    }
    setVisible(false)
  }

  useEffect(() => {
    const id = setTimeout(() => {
      cardRef.current.classList.remove('hidden')
    }, 500)
    setFirstTimer(id)

    return () => {
      clearTimeout(firstTimeer)
      clearTimeout(secondTimer)
    }
  }, [])
  

  return (
    <div className="floating-card-wrapper" style={position}>
      <div className="floating-card hidden centered" style={size} onMouseLeave={onMouseLeave} ref={cardRef}>
        <div className="movie-card-info">
          <iframe
            src={`https://www.youtube.com/embed/${id}?rel=0&autoplay=1&mute=1&enablejsapi=1`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
          <div className="content">
            <div className="buttons">
              <div className="button play"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path d="M6 2l52 30L6 62V2z"></path></svg></div>
              <div className="button plus" data-tooltip="Agregar a mi lista"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path d="M32 16v32m16-16H16"></path></svg></div>
              <div className="button like" data-tooltip="Me gusta"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path d="M54 35h2a4 4 0 1 0 0-8H34a81 81 0 0 0 2-18 4 4 0 0 0-8 0s-4 22-18 22H4v24h10c4 0 12 4 16 4h20a4 4 0 0 0 0-8h2a4 4 0 0 0 0-8h2a4 4 0 0 0 0-8"></path></svg></div>
              <div className="button dislike" data-tooltip="No es para mí"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path d="M10 29H8a4 4 0 0 0 0 8h22a81 81 0 0 0-2 18 4 4 0 0 0 8 0s4-22 18-22h6V9H50c-4 0-12-4-16-4H14a4 4 0 0 0 0 8h-2a4 4 0 0 0 0 8h-2a4 4 0 0 0 0 8"></path></svg></div>
              <div className="button arrow" data-tooltip="Más información"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path d="M20 26l11.994 14L44 26"></path></svg></div></div>
            <div className="content-top">
              <h4>測試標題</h4>
              <div className="scores">分數</div>
            </div>
            <p className="preference">95% 適合您</p>
            <div className="tags">
              <p>機智風趣</p>
              <p>喜劇</p>
              <p>劇情片</p>
            </div>
          </div>
        </div>
      </div>
    </div> 
  )
})


export default FloatingCard
