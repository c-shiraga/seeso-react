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

const UserProfileData = (props) => {
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);

  const [currentUser, setCurrentUser] = useContext(UserProfile);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpen2 = () => {
    setOpen2(true);
  };


  

  const editUserData = async () => {
    // const venue = document.form1.venue.value;
    // if (
    //   date != "" &&
    //   title != "" &&
    //   venue != "" &&
    //   content != "" &&
    //   lineUrl != ""
    // ) {
    //   if (/line\.me/.test(lineUrl)) {
    //     //テキスト内のURLにaタグをつける機能を実装予定。
    //     const db = firebase.firestore();
    //     await db
    //       .collection("events")
    //       .doc(props.id)
    //       .update({
    //         name: currentUser.name,
    //         photo: currentUser.photo,
    //         date: date,
    //         title: title,
    //         venue: venue,
    //         content: content,
    //         lineUrl: lineUrl.replace(/オ.+」/, ""),
    //       });

    //     setOpen(false);
    //     alert("イベントを更新しました。");
    //   } else {
    //     alert("URLには、LINEのオープンチャットのリンクを貼ってください。");
    //     return;
    //   }
    // } else {
    //   alert("未入力の項目があります。");
    //   return;
    // }
  };

  return (
    <div>
      <img 
        src={currentUser.photo} 
        alt="" 
        className="userPhoto"
        onClick={handleClickOpen}
      />
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          <i class="fas fa-user fa-lg fa-edit-color"></i>
          {"　Profile"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <div className="userProfileArea">
              <div className="profileImageArea">
                <img src={currentUser.photo} alt="" className="profilePhoto" />
              </div>
              <p className="profileName">{currentUser.name}</p>
              <div className="basicUserProfileDataArea">
                <div className="basicUserProfileData">
                  <p>性別: {currentUser.gender}</p>
                  <p>年齢: {currentUser.age}</p>
                  <p>学科: {currentUser.department}</p>
                  <p>学年: {currentUser.schoolYear}</p>
                </div>
              </div>
              <p className="profileMessage">{currentUser.message}</p>
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => {
            handleClose();
            handleClickOpen2();
          }} color="primary" autoFocus>
            編集
          </Button>
        </DialogActions>
      </Dialog>
      <EditUserProfile 
        open2={open2}
        setOpen2={setOpen2}
        
      />
      
    </div>
  );
}

export default UserProfileData
