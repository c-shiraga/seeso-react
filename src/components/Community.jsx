import React from 'react';
import '../assets/styles/index.css';
import '../assets/styles/community.css';

const Community = () => {
    return (
        <div>
            <section className="main-section">
                    <div id="messages-area">
                        <div id="chatlog"></div>
                    </div>
                    <div id="bms_send">
                        <textarea id="bms_send_message"></textarea>
                        <div id="bms_send_btn">送信</div>
                    </div>
            </section>
            <div className="smf-nav">
                <div className="smf-nav-list">
                    <div><a href="./events.html"><img src="../img/calender_icon.png" alt="" /></a></div>
                    <div><a href="./community.html"><img src="../img/chat_icon.png" alt="" /></a></div>
                    <div><a href="./contact.html"><img src="../img/mail_icon.png" alt="" /></a></div>
                </div>
            </div>
            <footer>
                <div className="copy">&copy;2021 seeso</div>
            </footer>
        </div>
    )
}

export default Community
