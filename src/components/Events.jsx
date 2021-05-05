import React from 'react';
import '../assets/styles/index.css';
import '../assets/styles/events.css';
import CreateEvent from './CreateEvent';
import Event from './Event';



const Events = () => {
    return (
        <div id="Events-area">
            <h2 className="content-title">Events</h2>
            <CreateEvent />
            <Event />
        </div>
    )
}

export default Events
