import React from 'react';
import '../assets/styles/index.css';
import '../assets/styles/events.css';
import CreateEvent from './CreateEvent';



const Events = () => {
    return (
        <div id="Events-area">
            <h2 className="content-title">Events</h2>
            <CreateEvent />
            <section className="main-section">
                <div id="events-area">
                    <div id="eventlog"></div>
                </div>
            </section>
            <div className="smf-nav">
                <div className="smf-nav-list">
                    <div><a href="./events.html"><img src="../img/calender_icon.png" alt="" /></a></div>
                    <div><a href="./community.html"><img src="../img/chat_icon.png" alt="" /></a></div>
                    <div><a href="./contact.html"><img src="../img/mail_icon.png" alt="" /></a></div>
                </div>
            </div>
        </div>
    )
}

export default Events
