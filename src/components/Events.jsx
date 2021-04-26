import React from 'react';
import '../assets/styles/index.css';
import '../assets/styles/events.css';



const Events = () => {
    return (
        <div>
            <h2 className="content-title">Events</h2>
            <section className="create" className="main-section">
                <details>
                    <summary className="event">イベントを作成する</summary>
                    <div className="event-form">
                        <form onsubmit="return false" name="form1" >
                            <div className="form-content">
                                <div>
                                    <label for="">日時</label>
                                </div>
                                <input type="date" id="date" className="form-area" name="field1" />
                            </div>
                            <div className="form-content">
                                <div>
                                    <label for="">タイトル</label>
                                </div>
                                <input type="text" id="title" className="form-area" name="field2" />
                            </div>
                            <div className="form-content">
                                <div>
                                    <label for="">会場</label>
                                </div>
                                <input type="radio" name="venue" value="オンライン" />オンライン
                                <input type="radio" name="venue" value="オフライン" />オフライン
                            </div>
                            <div className="form-content">
                                <div>
                                <label for="">URL</label><br />
                                <p className="url">
                                    ※既に作成している、LINEオープンチャットのリンクをコピーし、そのまま貼って下さい
                                </p>
                                </div>
                                <input type="text" id="url" className="form-area" />
                            </div>
                            <div className="form-content">
                                <div>
                                    <label for="">内容</label>
                                </div>
                                <textarea name="content" id="content" className="form-area" cols="40" rows="10"></textarea>
                                
                            </div>
                            <div>
                                <button id="send2">作成</button>
                            </div>
                        </form>
                    </div>
                </details>
            </section>
            <section className="main-section">
                <div id="events-area">
                    <div id="eventlog"></div>
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

export default Events
