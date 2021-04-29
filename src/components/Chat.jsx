import React, { useEffect, useState } from 'react';
import firebase from '../firebase/firebase';

const Chat = () => {

    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const db = firebase.firestore();
        db.collection("chatroom").orderBy("date", "asc").get().then((querySnapshot) => {
            const _messages = [];
            querySnapshot.forEach((doc) => {
                _messages.push({
                    messageId: doc.id,
                    ...doc.data()
                });
            });

            setMessages(_messages);
        });
        
    },[])

    const getStrTime = (time) => {
        let t = new Date(time);
        return(
            ("0" + (t.getMonth() + 1)).slice(-2) + "/" +
            ("0" + t.getDate()       ).slice(-2) + " " +
            ("0" + t.getHours()      ).slice(-2) + ":" +
            ("0" + t.getMinutes()    ).slice(-2)
        );
    }

    return (
        <div>
            {messages.map(message => 
                <div className="message">
                    <img src={message.photo} alt="" className="chat-photo" />
                    <div>
                        <span className="chat-name">{message.name}</span><br/>
                        <div className="chat-msg-box">
                            <span className="chat-msg">{message.msg}</span>
                        </div>
                        <span className="chat-time">{getStrTime(message.date)}</span>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Chat
