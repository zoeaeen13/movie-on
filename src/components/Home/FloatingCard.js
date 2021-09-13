import React from 'react'
import styled from 'styled-components'

const FloatingCardWrapper = styled.div`
  min-width: 350px;
  height: auto;
  z-index: 100;
  position: absolute;
  text-align: center;
  font-size: 16px;
`

const FloatingCard = React.memo(({ id }) => {
  return (
    <div className="movie-floating-card">
      <div className="movie-card-info">
        <iframe
          style={{ width: '100%', border: 'none' }}
          src={`https://www.youtube.com/embed/${id}`}
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
  )
})


export { FloatingCardWrapper, FloatingCard }
