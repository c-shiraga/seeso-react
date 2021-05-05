import React, { useEffect, useState } from 'react';
import firebase from '../firebase/firebase';
import Linkify from 'linkifyjs/react';



const Chat = () => {
    

    const [messages, setMessages] = useState([]);



    useEffect(() => {
        const db = firebase.firestore();
        const unsubscribe =  db.collection("chatroom").orderBy("date", "asc").onSnapshot((querySnapshot) => {
            const _messages = querySnapshot.docs.map((doc) => {
                return {
                    messageId: doc.id,
                    ...doc.data()
                }
            });
            setMessages(_messages);
            // スクロール位置を1番下へ移動
            const scrollHeight = document.getElementById("messages-area").scrollHeight;
            document.getElementById("messages-area").scrollTop = scrollHeight;
        });
        return () => {
            unsubscribe();
        }  
    },[])

    const getStrTime = (time) => {
        let t = new Date(time);
        return(
            ("0" + (t.getMonth() + 1)).slice(-2) + "/" +
            ("0" +  t.getDate()      ).slice(-2) + " " +
            ("0" +  t.getHours()     ).slice(-2) + ":" +
            ("0" +  t.getMinutes()   ).slice(-2)
        );
    }


    return (
        <>
            {messages.map(message => 
                <div className="message">
                    <img src={message.photo} alt="" className="chat-photo" />
                    <div>
                        <span className="chat-name">{message.name}</span><br/>
                        <div className="chat-msg-box">
                            <span className="chat-msg">
                                <Linkify options={{target: '_blank', rel: 'noopener noreferrer', className: 'linkified'}}>
                                    {message.msg.replace(/http/g, " http")}
                                </Linkify>
                            </span>
                        </div>
                        <span className="chat-time">{getStrTime(message.date)}</span>
                    </div>
                </div>
            )}
        </>
    )
}

export default Chat
