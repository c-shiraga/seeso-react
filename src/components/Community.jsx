import React, { useContext, useState } from 'react';
import {UserProfile} from './Main';
import firebase from '../firebase/firebase';
import '../assets/styles/index.css';
import '../assets/styles/community.css';
import Chat from './Chat';

const Community = () => {

    const [currentUser , setCurrentUser] = useContext(UserProfile);

    const [message, setMessage] = useState("");

    const sendMessage = async () => {
        if(!message){
            alert("メッセージを入力してください");
            return;
        }

        const db = firebase.firestore();
        await db.collection('chatroom').add({
            msg  : message,
            name : currentUser.name,
            photo: currentUser.photo,
            date : new Date().getTime()
        });

        setMessage('');

    }

    return (
        <div>
            <h2 className="content-title">Community</h2>
            <section className="main-section">
                    <div id="messages-area">
                        <div id="chatlog">
                            <Chat />
                        </div>
                    </div>
                    <div id="bms_send">
                        <textarea
                            id="bms_send_message" 
                            value={message}
                            onChange={(event) => {setMessage(event.target.value)}}>
                         </textarea>
                        <div id="bms_send_btn" onClick={sendMessage}>送信</div>
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

export default Community
