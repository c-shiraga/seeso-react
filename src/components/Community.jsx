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
        <div id="Community-area">
            <h2 className="content-title">Community</h2>
            <section className="main-section">
                    <div id="messages-area">
                        <Chat />
                    </div>
                    <div id="bms_send">
                        <textarea
                            id="bms_send_message" 
                            value={message}
                            onChange={(event) => {setMessage(event.target.value)}}>
                        </textarea>
                        <div id="bms_send_btn" 
                            onClick={sendMessage}
                            className={message ? 'sendPossible' : 'sendImpossible'}>
                                <i class="fas fa-paper-plane fa-lg"></i>
                        </div>
                    </div>
            </section>
        </div>
    )
}

export default Community
