import React from 'react';
import './Organizers.css';
import OrganizerCircle from './OrganizerCircle/OrganizerCircle';
import Partners from '../Partners/Partners';
import keyur from './images/keyur.png';
import aman from './images/aman.png';
import shubham from './images/shubham.png';
import yash from './images/yashkumar.png';
import vasu from './images/vasu.jpg';


export default function Organizers() {
  return (
    <div className='organizers'>
      <h1 className="heading">Organizers</h1>
      <div className="row-1">
        <OrganizerCircle name='Keyur Jain' photo={keyur} backgroundImage={keyur}/>
        <OrganizerCircle name='Aman Yadav' photo={aman} backgroundImage={aman}/>
        <OrganizerCircle name='Shubham Tiwari' photo={shubham} backgroundImage={shubham}/>
      </div>
      <div className="ellipse"></div>
      <div className="row-2">
        <OrganizerCircle name='YashKumar Keral' photo={yash} backgroundImage={yash}/>
        <OrganizerCircle name='Vasu Parmar' photo={vasu} backgroundImage={vasu}/>
      </div>
      <div className="numbers num1">0000000000 0000</div>
      <div className="numbers num2">0000000000 0000</div>
      <div className="numbers num3">0000000000 0000</div>

      <div className="division"></div>

        <div className="partners-marquee">
            <Partners/>
        </div>
    </div>
  )
}
