import React from 'react';
import { Icon } from 'rsuite';
import { Link } from 'react-router-dom';

export const Banner = () => {
  return (
    <div className="home-banner">
      <div className="info">
        <h3>測試標題</h3>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the standard dummy text since the 1500s
        </p>
        <div className="buttons">
          <Link to="/">
            <Icon icon="info" />
            查看內容
          </Link>
          <Link to="/">
            <Icon icon="arrow-circle-right" />
            更多新片
          </Link>
        </div>
      </div>
    </div>
  );
};
