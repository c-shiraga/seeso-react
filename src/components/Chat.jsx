import React, { useEffect, useState, useContext } from 'react';
import {UserProfile} from './Main';
import firebase from '../firebase/firebase';
import Linkify from 'linkifyjs/react';



const Chat = () => {
    const [currentUser , setCurrentUser] = useContext(UserProfile);

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

    // 投稿削除機能
    const chatDelete = async (document, chatName) => {
        if(currentUser.name === chatName){
            const res = window.confirm("投稿を削除しますか？");
            if(res){
                const db = firebase.firestore();
                await db.collection("chatroom").doc(document).delete()
                alert("投稿を削除しました。")
            }  
                // console.log("Document successfully deleted!");
            
        }
    }


    return (
        <div>
            {messages.map(message =>
                message.name === currentUser.name ?
                
                <div className="current-message">
                    <div className="message-box">
                        <span className="chat-time">{getStrTime(message.date)}</span>
                        <div className="current-chat-msg-box" >
                            <span className="chat-msg">
                                <Linkify options={{target: '_blank', rel: 'noopener noreferrer', className: 'linkified'}}>
                                    {message.msg.replace(/http/g, " http")}
                                </Linkify>
                            </span>
                        </div>
                        
                    </div>
                    <img src={message.photo} alt="" className="current-chat-photo" onClick={() => chatDelete(message.messageId, message.name)} />
                </div>
                :
                <div className="message">
                    <img src={message.photo} alt="" className="chat-photo" />
                    <div>
                        <span className="chat-name">{message.name}</span><br/>
                        <div className="message-box">
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
                </div>
            )}
        </div>
    )
}

export default Chat
