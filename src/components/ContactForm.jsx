import React, { useState } from 'react'

const ContactForm = () => {

    const [toSend, setToSend] = useState({message: ''});

    const onSubmit = (e) => {
        e.preventDefault();
        {/* --- METHOD TO SEND THE MAIL --- */}
    };
    
    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };

    return (
        <div className="contact-form-area">
            <h3 className="contact">お問い合わせ</h3>
            <p className="contact-subtitle">SEESOに関する質問、不具合、改善案など、<br/>
            何でも受け付けています。</p>
            <form onsubmit={onSubmit}>
                <textarea
                    type='text'
                    name='message'
                    placeholder='お問い合わせ内容を入力してください'
                    className='contact-message-area'
                    value={toSend.message}
                    onChange={handleChange}>

                </textarea>
                <div>
                    <button type='submit' className="contact">上記の内容で送信する</button>
                </div>
            </form>
            <p class="emergency-contact">※緊急時の連絡は、情報システム学科2年、白神智慧(20120022)まで直接GoogleChatを送ってください。</p>  
        </div>
    )
}

export default ContactForm
