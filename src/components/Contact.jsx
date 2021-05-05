import React from 'react';
import Iframe from 'react-iframe'
import '../assets/styles/index.css';
import '../assets/styles/contact.css';


const Contact = () => {
    return (
        <div id="Contact-area">
            <h2 className="content-title">Contact</h2>
            <section class="main-section">
                <Iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdi96ezQRPinHSnc4wsMs5M-NEhmLs6-syzZHxeVpV7nTTxzQ/viewform?embedded=true" className="google-form" />
            </section>
            <p class="emergency-contact">※緊急時の連絡は、情報システム学科2年、白神智慧(20120022)まで直接GoogleChatを送ってください。</p>
            
        </div>
    )
}
export default Contact
