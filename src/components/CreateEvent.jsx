import React, { useContext, useState } from 'react';
import {UserProfile} from './Main';
import firebase from '../firebase/firebase';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const CreateEvent = () => {
    const [open, setOpen] = React.useState(false);

    const [currentUser] = useContext(UserProfile);
    const [date, setDate] = useState("");
    const [title, setTitle] = useState("");
    const [lineUrl, setLineUrl] = useState("");
    const [content, setContent] = useState("");
    

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const sendEventData = async () => {
        const venue = document.form1.venue.value;
        if(date !== "" && title !== "" && venue !== "" && content !== "" && lineUrl !== ""){
            if(/line\.me/.test(lineUrl)){
                //テキスト内のURLにaタグをつける機能を実装予定。
                const db = firebase.firestore();
                await db.collection('events').add({
                    name: currentUser.name,
                    photo: currentUser.photo,
                    email: currentUser.email,
                    date: date,
                    title: title,
                    venue: venue,
                    content: content,
                    lineUrl: lineUrl.replace(/オ.+」/,"")
                })

                setDate('');
                setTitle('');
                setLineUrl('');
                setContent('');
                document.form1.reset();
                setOpen(false);
                alert("イベントを作成しました。")
                // window.location.reload();
                
            }else{
                alert("URLには、LINEのオープンチャットのリンクを貼ってください。")
                return;
            }   
        }else{
            alert("未入力の項目があります。")
            return;
        }
    }



    return (
        <div>
            <button className="event" onClick={handleClickOpen}>イベントを作成する</button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    <div className="dialogTitleArea">
                        <div>
                            <i class="fas fa-edit fa-lg fa-edit-color"></i>
                        </div>
                        <span>
                            Event creation form
                        </span>
                    </div>
                </DialogTitle>
                <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    <div className="event-form">
                        <form onsubmit="return false" name="form1" >
                            <div className="form-content">
                                <div>
                                    <label for="" className="event">開催日時</label>
                                </div>
                                <input 
                                    type="date" 
                                    id="date" 
                                    className="form-area" 
                                    name="field1"
                                    value={date}
                                    onChange={(event) => {setDate(event.target.value)}} />
                            </div>
                            <div className="form-content">
                                <div>
                                    <label for="" className="event">タイトル</label>
                                </div>
                                <input 
                                    type="text" 
                                    id="title" 
                                    className="form-area" 
                                    name="field2" 
                                    value={title}
                                    onChange={(event) => {setTitle(event.target.value)}} />
                            </div>
                            <div className="form-content">
                                <div>
                                    <label for="" className="event">会場</label>
                                </div>
                                <input 
                                    type="radio" 
                                    name="venue" 
                                    value="オンライン"
                                    />オンライン
                                <input 
                                    type="radio" 
                                    name="venue" 
                                    value="オフライン"
                                    />オフライン
                            </div>
                            <div className="form-content">
                                <div>
                                <label for="" className="event">LINEオープンチャットの招待リンク</label><br />
                                <p className="url">
                                    ※既に作成している、LINEオープンチャットの招待リンクをコピーし、そのまま貼って下さい
                                </p>
                                </div>
                                <input 
                                    type="text" 
                                    id="url" 
                                    className="form-area"
                                    value={lineUrl}
                                    onChange={(event) => {setLineUrl(event.target.value)}} />
                            </div>
                            <div className="form-content">
                                <div>
                                    <label for="" className="event">イベント内容</label>
                                </div>
                                <textarea 
                                    name="content" 
                                    id="content" 
                                    className="form-area" 
                                    cols="40" 
                                    rows="10"
                                    value={content}
                                    onChange={(event) => {setContent(event.target.value)}}>
                                </textarea>
                            </div>
                        </form>
                    </div>
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                <Button onClick={handleClose} color="primary">
                    キャンセル
                </Button>
                <Button onClick={sendEventData} color="primary" autoFocus>
                    作成
                </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default CreateEvent
