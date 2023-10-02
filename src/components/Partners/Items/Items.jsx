import React from 'react';
import './Items.css';
import Marquee from 'react-fast-marquee';
import img1 from './images/one.png';
import img2 from './images/two.png';
import img3 from './images/three.png';
import img4 from './images/four.png';
import img5 from './images/five.png';
import img6 from './images/six.png';
import img7 from './images/seven.png';
import img8 from './images/eight.png';
import img9 from './images/nine.png';
import img10 from './images/ten.png';

export default function Items() {
  return (
    <div className='marquee'>
        <Marquee direction="left" speed={100} delay={5}>
            <div className="image_wrapper">
                <img src={img1} alt="" />
            </div>
            <div className="image_wrapper">
                <img src={img2} alt="" />
            </div>
            <div className="image_wrapper">
                <img src={img3} alt="" />
            </div>
            <div className="image_wrapper">
                <img src={img4} alt="" />
            </div>
            <div>
                <img src={img5} alt="" />
            </div>
            <div className="image_wrapper">
                <img src={img6} alt="" />
            </div>
            <div className="image_wrapper">
                <img src={img7} alt="" />
            </div>
            <div className="image_wrapper">
                <img src={img8} alt="" />
            </div>
            <div className="image_wrapper">
                <img src={img9} alt="" />
            </div>
            <div className="image_wrapper">
                <img src={img10} alt="" />
            </div>
        </Marquee>
    </div>
  )
}
