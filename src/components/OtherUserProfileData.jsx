import React, { useContext, useState, useEffect } from "react";
import { UserProfile } from "./Main";
import firebase from "../firebase/firebase";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import EditUserProfile from "./EditUserProfile";

const OtherUserProfileData = (props) => {
  const [open, setOpen] = useState(false);
  const [gender, setGender] = useState('');
  const [department, setDepartment] = useState('');
  const [schoolYear, setSchoolYear] = useState('');
  const [message, setMessage] = useState('');

  const db = firebase.firestore();

  const handleClickOpen = async () => {
    const usersRef = db.collection('users').where('email', '==', props.email);
    const profile = await usersRef.get();
    profile.forEach((doc) => {
      setGender(doc.data().gender);
      setDepartment(doc.data().department);
      setSchoolYear(doc.data().schoolYear);
      setMessage(doc.data().message);
    })
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <img 
        src={props.photo} 
        alt="" 
        className="chat-photo"
        onClick={handleClickOpen}
      />
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          <div className="dialogTitleArea">
            <div>
              <i class="fas fa-user fa-lg fa-edit-color"></i>
            </div>
            <span>
              Profile
            </span>
          </div>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <div className="userProfileArea">
              <div className="profileImageArea">
                <img src={props.photo} alt="" className="profilePhoto" />
              </div>
              <p className="profileName">{props.name}</p>
              <div className="basicUserProfileDataArea">
                <div className="basicUserProfileData">
                  <p>性別: {gender}</p>
                  <p>学科: {department}</p>
                  <p>学年: {schoolYear}</p>
                </div>
              </div>
              <p className="profileMessage">{message}</p>
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            閉じる
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default OtherUserProfileData
