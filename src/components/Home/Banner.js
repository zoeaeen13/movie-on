import React from 'react'
import { Link } from 'react-router-dom'

export const Banner = () => {
  return (
    <div className="home-banner">
      <div className="info">
        <h3>沙丘 Dune</h3>
        <p>講述一個神祕又性格強烈的英雄之心路歷程，本片講述保羅亞崔迪的故事，他是一個聰明又富有天賦的年輕人，肩負超越自己理解的偉大天命，且必須遠行至宇宙中最危險的行星，以確保他家人及族人未來的延續。敵對勢力為搶奪唯有此行星才出產的珍貴資源大打出手，而這也是人類最珍視的資源，一種能解鎖人類偉大潛能的物質，唯有能戰勝自己恐懼的人才能存活。</p>
        <div className="buttons">
          {/* <Link to="/">
            <Icon icon="info" />
            查看內容
          </Link> */}
          <Link to="/browse">
            {/* <Icon icon="arrow-circle-right" /> */}
            更多好片
          </Link>
        </div>
      </div>
      <div className="home-banner-bottom" />
    </div>
  );
};
