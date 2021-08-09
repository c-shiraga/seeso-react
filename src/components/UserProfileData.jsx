import React, { useContext, useState} from "react";
import { UserProfile } from "./Main";
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

  const [currentUser] = useContext(UserProfile);
  const [gender, setGender] = useState('未設定');
  const [department, setDepartment] = useState('未設定');
  const [schoolYear, setSchoolYear] = useState('未設定');
  const [message, setMessage] = useState('');
  

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpen2 = () => {
    setGender(currentUser.gender);
    setDepartment(currentUser.department);
    setSchoolYear(currentUser.schoolYear);
    setMessage(currentUser.message);
    setOpen2(true);
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
                <img src={currentUser.photo} alt="" className="profilePhoto" />
              </div>
              <p className="profileName">{currentUser.name}</p>
              <div className="basicUserProfileDataArea">
                <div className="basicUserProfileData">
                  <p>性別: {currentUser.gender}</p>
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
        gender={gender}
        setGender={setGender}
        department={department}
        setDepartment={setDepartment}
        schoolYear={schoolYear}
        setSchoolYear={setSchoolYear}
        message={message}
        setMessage={setMessage}
      />
      
    </div>
  );
}

export default UserProfileData
