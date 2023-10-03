import React from 'react';
import './Footer.css';
import icon1 from './images/Vector.png';
import icon2 from './images/bi_linkedin.png';
import icon3 from './images/ic_baseline-reddit.png';
import icon4 from './images/ic_baseline-telegram.png';
import icon5 from './images/mdi_youtube.png';
import icon6 from './images/ri_instagram-fill.png';

export default function Footer() {
  return (
    <>
    <footer>
        <div class="cnt-ftr">
            <h3>Contact Us</h3>
            <a href="">Academy</a>
            <a href="">Blog</a>
            <a href="">Themes</a>
            <a href="">Developers</a>
            <a href="">Support</a>
        </div>

        <div class="abt-ftr">
            <h3>ITMBU</h3>
            <a href="">About Us</a>
            <a href="">Events</a>
            <a href="">FAQs</a>
            <a href="">Teams</a>
            <a href="">Contact Us</a>
        </div>

        <div className="last-row">
            <div className="icon-row1">
                <img src={icon1} alt="" />
                <img src={icon2} alt="" />
                <img src={icon3} alt="" />
                <img src={icon4} alt="" />
                <img src={icon5} alt="" />
                <img src={icon6} alt="" />
            </div>

            <div className="last-line">
                <p className="copyright-text">GDSC-ITMBU ALL RIGHTS RESERVED</p>
                <p className="contributors">CREATORS: ARMAN KUKRETI, VANSHAM KAMBOJ</p>
            </div>
        </div>
    </footer>
    </>
  )
}
