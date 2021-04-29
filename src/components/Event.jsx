import React from 'react'

const Event = () => {
    return (
        <div>
            <div className="event">
                <div className="date">
                    <p>日時</p>
                    <p>会場:
                        <span className="online or offline">オンラインorオフライン</span>
                    </p>
                </div>
                <h2>タイトル</h2>
                <div>
                    <p>作成者</p>
                    <a href="url" target="_blank" rel="noopener nofollow">参加</a>
                </div>
                <details>
                    <summary>詳細</summary>
                    <p className="event-content">内容</p>
                </details>
            </div>
        </div>
    )
}

export default Event
