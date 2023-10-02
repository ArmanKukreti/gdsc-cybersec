import React from 'react'
import './Events.css';
import EventCard from './EventCard/EventCard';

export default function Events() {
  return (
    <div className='events'>
      <h1 className='heading'>Events</h1>
      <div className="event-cards">
        <EventCard status="LIVE"/>
        <EventCard status="Upcomming"/>
        <EventCard status="Upcomming"/>
      </div>
    </div>
  )
}
