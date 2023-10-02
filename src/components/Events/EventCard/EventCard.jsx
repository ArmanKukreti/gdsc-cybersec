import React from 'react';
import './EventCard.css';

export default function EventCard(props) {
  return (
    <>
      <div className="card">
        <p className="event-name">
            Inaugral Ceremony
        </p>
        <p className="event-date">
            4 Oct 2k23
        </p>
        <p className="event-desc">
            "Cybersecurity Carnival: Fun and Safety Online" is where we navigate the digital world safely while having fun.
        </p>
        <div className="line"></div>
        <div className="buttons" style={{gap: props.status==='Upcomming'? '30px': '70px'}}>
            <button className="view-all">VIEW ALL</button>
            <button className={props.status==='Upcomming'? 'upcomming': 'live'}>{props.status}</button>
        </div>
      </div>
    </>
  )
}
