import React from 'react';

function TopImage(props) {
  return (
    <div>
      <div
        className="top-image"
        style={{
          backgroundImage: `url(${props.image})`,
          backgroundPosition: `center ${props.position}%`,
        }}
      ></div>
    </div>
  );
}

export default TopImage;
