import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const CreateEvent = () => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <button className="event" onClick={handleClickOpen}>イベントを作成する</button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title"><i class="fas fa-edit fa-lg fa-edit-color"></i>{" Event creation form"}</DialogTitle>
                <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    <div className="event-form">
                        <form onsubmit="return false" name="form1" >
                            <div className="form-content">
                                <div>
                                    <label for="" className="event">日時</label>
                                </div>
                                <input type="date" id="date" className="form-area" name="field1" />
                            </div>
                            <div className="form-content">
                                <div>
                                    <label for="" className="event">タイトル</label>
                                </div>
                                <input type="text" id="title" className="form-area" name="field2" />
                            </div>
                            <div className="form-content">
                                <div>
                                    <label for="" className="event">会場</label>
                                </div>
                                <input type="radio" name="venue" value="オンライン" />オンライン
                                <input type="radio" name="venue" value="オフライン" />オフライン
                            </div>
                            <div className="form-content">
                                <div>
                                <label for="" className="event">URL</label><br />
                                <p className="url">
                                    ※既に作成している、LINEオープンチャットのリンクをコピーし、そのまま貼って下さい
                                </p>
                                </div>
                                <input type="text" id="url" className="form-area" />
                            </div>
                            <div className="form-content">
                                <div>
                                    <label for="" className="event">内容</label>
                                </div>
                                <textarea name="content" id="content" className="form-area" cols="40" rows="10"></textarea>
                            </div>
                        </form>
                    </div>
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                <Button onClick={handleClose} color="primary">
                    キャンセル
                </Button>
                <Button onClick={handleClose} color="primary" autoFocus>
                    作成
                </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default CreateEvent
