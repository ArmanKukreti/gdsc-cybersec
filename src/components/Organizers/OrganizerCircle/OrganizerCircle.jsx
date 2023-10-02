import React from 'react';
import './OrganizerCircle.css';

export default function OrganizerCircle(props) {
  const circleStyle = {
    background: `url(${props.backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };
  return (
    <div>
      <div className="circle" style={circleStyle}></div>
      <p className='name'>{props.name}</p>
    </div>
  )
}

