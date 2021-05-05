import React, { useEffect, useState } from 'react';
import firebase from '../firebase/firebase';

const Event = () => {

    const [eventsData, setEventsData] = useState([]);

    useEffect(() => {
        const db = firebase.firestore();
        const unsubscribe =  db.collection("events").orderBy("date", "desc").onSnapshot((querySnapshot) => {
            const _eventsData = querySnapshot.docs.map((doc) => {
                return {
                    eventsDataId: doc.id,
                    ...doc.data()
                }
            });
            setEventsData(_eventsData);
        });
        return () => {
            unsubscribe();
        }  
    },[])

    return (
        <>
            {eventsData.map(event => 
            <div className="event">
                <div className="date">
                    <p>開催日: {event.date}</p>
                    <p>会場:
                        <span className={event.venue === 'オンライン' ? 'online' : 'offline'}>{event.venue}</span>
                    </p>
                </div>
                <h2 className="event">{event.title}</h2>
                <div>
                    <p className="author-name">作成者: {event.name}</p>
                    <a href={event.lineUrl} target="_blank" rel="noopener nofollow">参加</a>
                </div>
                <details className="event">
                    <summary>イベント内容</summary>
                    <p className="event-content">{event.content}</p>
                </details>
            </div>
            )}
        </>
    )
}

export default Event
