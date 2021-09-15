import React, { useCallback } from 'react'
import styled from 'styled-components'

const FloatingCardWrapper = styled.div`
  height: auto;
  z-index: 100;
  position: fixed;
  text-align: center;
  font-size: 16px;
`

// closeModal
const FloatingCard = React.memo(({ id, style, visible, closeModal, setVisible }) => {
  const { position, size } = style
  const iframeStyle = { 
    width: size.width,
    height: size.height*0.56,
    border: 'none'
  }

  const onMouseLeave = useCallback(() => {
    setVisible(false)
    closeModal()
  }, [])

  return (
    <FloatingCardWrapper className={`pop-up-animation ${visible && 'show'}`} style={position}>
      <div className="movie-floating-card" style={size} onMouseLeave={onMouseLeave}>
        <div className="movie-card-info">
          <iframe
            style={iframeStyle}
            src={`https://www.youtube.com/embed/${id}?rel=0&autoplay=1&mute=1&enablejsapi=1`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
          <div className="content">
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
    </FloatingCardWrapper> 
  )
})


export { FloatingCardWrapper, FloatingCard }
