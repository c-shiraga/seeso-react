import React, { useEffect, useState, useContext } from 'react';
import {UserProfile} from './Main';
import {KeyWord} from './Main';
import firebase from '../firebase/firebase';
import Linkify from 'linkifyjs/react';
import UpdateEvent from './UpdateEvent';

const Event = () => {
    const [currentUser , setCurrentUser] = useContext(UserProfile);
    const [searchWord, setSearchWord] = useContext(KeyWord);

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

    // イベント削除機能
    const eventDelete = async (document, eventName) => {
        if(currentUser.name === eventName){
            const res = window.confirm("イベントを削除しますか？");
            if(res){
                const db = firebase.firestore();
                await db.collection("events").doc(document).delete()
                alert("イベントを削除しました。")
                // window.location.reload();
            }  
            
        }
    }

    return (
        <>
            {searchWord == "" ?
                eventsData.map(event => 
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
                        <a href={event.lineUrl} target="_blank" rel="noopener nofollow" className="event">参加</a>
                    </div>
                    <details className="event">
                        <summary>イベント内容</summary>
                        <p className="event-content">
                        <Linkify options={{target: '_blank', rel: 'noopener noreferrer', className: 'linkified'}}>
                            {event.content.replace(/http/g, " http")}
                        </Linkify>
                        </p>
                    </details>
                    <p className={event.name === currentUser.name ? 
                                    "event-delete-button" 
                                    : 
                                    "no-event-delete-button"}
                    >
                        
                        <UpdateEvent
                            id={event.eventsDataId}
                            date={event.date}
                            title={event.title}
                            lineUrl={event.lineUrl}
                            content={event.content}
                            venue={event.venue}
                        />
                        <button onClick={() => eventDelete(event.eventsDataId, event.name)}>
                            削除
                        </button>
                            
                    </p>
                </div>
                )
                :
                eventsData.filter(event => {
                    return event.title.includes(searchWord) || event.content.includes(searchWord);
                })
                .map(event => 
                    <div className="event">
                        <div className="date">
                            <p>開催日: {event.date}</p>
                            <p>会場:
                                <span className={event.venue === 'オンライン' ? 'online' : 'offline'}>{event.venue}</span>
                            </p>
                        </div>
                        <h2 className="event">{event.title}</h2>
                        {/* <h2 className="event">{searchWord}</h2> */}
                        <div>
                            <p className="author-name">作成者: {event.name}</p>
                            <a href={event.lineUrl} target="_blank" rel="noopener nofollow" className="event">参加</a>
                        </div>
                        <details className="event">
                            <summary>イベント内容</summary>
                            <p className="event-content">
                            <Linkify options={{target: '_blank', rel: 'noopener noreferrer', className: 'linkified'}}>
                                {event.content.replace(/http/g, " http")}
                            </Linkify>
                            </p>
                        </details>
                        <p className={event.name === currentUser.name ? 
                                        "event-delete-button" 
                                        : 
                                        "no-event-delete-button"}
                        >
                            <button onClick={() => eventDelete(event.eventsDataId, event.name)}>
                                削除
                            </button>
                                
                        </p>
                    </div>
                )
            }
        </>
    )
}

export default Event
