import React, { useContext, useState, useEffect } from "react";
import { UserProfile } from "./Main";
import firebase from "../firebase/firebase";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const EditUserProfile = (props) => {

  const [currentUser, setCurrentUser] = useContext(UserProfile);

  const handleClose = () => {
    props.setOpen2(false);
  };

  return (
    <div>
      <Dialog
        open={props.open2}
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
              
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            キャンセル
          </Button>
        </DialogActions>
      </Dialog>
      
    </div>
  )
}

export default EditUserProfile
