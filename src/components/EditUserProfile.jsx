import React, { useContext } from "react";
import { UserProfile } from "./Main";
import firebase from "../firebase/firebase";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

const genderValues = [
  {value: '未設定'},
  {value: '男性'},
  {value: '女性'}
];

const departmentValues = [
  {value: '未設定'},
  {value: '医療'},
  {value: '診療'},
  {value: 'ホテブラ'},
  {value: '経営'},
  {value: '公務員'},
  {value: '公務員速修'},
  {value: '保育'},
  {value: '情スペ'},
  {value: '情シス'},
  {value: 'ゲークリ'},
  {value: 'ゲープロ'},
  {value: 'データマ'},
  {value: 'ネット・動画'},
  {value: 'CGデザイン'},
  {value: '国際IT'}
];

const schoolYearValues = [
  {value: '未設定'},
  {value: '1年'},
  {value: '2年'},
  {value: '3年'}
];

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '30ch',
    },
  },
}));

const EditUserProfile = (props) => {

  const [currentUser, setCurrentUser] = useContext(UserProfile);

  const classes = useStyles();
  

  

  const handleClose = () => {
    props.setOpen2(false);
  };

  const updateUserProfileData = async () => {
    const db = firebase.firestore();
    const usersRef = db.collection('users').where('email', '==', currentUser.email);
    const profile = await usersRef.get();
    await profile.forEach((document) => {
        db.collection('users')
        .doc(document.id)
        .update({
          name: currentUser.name,
          photo: currentUser.photo,
          email: currentUser.email,
          gender: props.gender,
          department: props.department,
          schoolYear: props.schoolYear,
          message: props.message
        });
    })
    setCurrentUser({
      ...currentUser,
      gender: props.gender,
      department: props.department,
      schoolYear: props.schoolYear,
      message: props.message
    });
    alert('プロフィールを更新しました。');
  }

  return (
    <div>
      <Dialog
        open={props.open2}
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
              Edit Profile
            </span>
          </div>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <div className="userProfileArea">
              <div className={classes.root}>
                <TextField
                  id="standard-select-currency"
                  select
                  label="性別"
                  value={props.gender}
                  onChange={(event) => {
                    props.setGender(event.target.value);
                  }}
                  helperText="性別を選択してください"
                >
                  {genderValues.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.value}
                    </MenuItem>
                  ))}
                </TextField>
                <TextField
                  id="standard-select-currency"
                  select
                  label="学科"
                  value={props.department}
                  onChange={(event) => {
                    props.setDepartment(event.target.value);
                  }}
                  helperText="学科を選択してください"
                >
                  {departmentValues.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.value}
                    </MenuItem>
                  ))}
                </TextField>
                <TextField
                  id="standard-select-currency"
                  select
                  label="学年"
                  value={props.schoolYear}
                  onChange={(event) => {
                    props.setSchoolYear(event.target.value);
                  }}
                  helperText="学年を選択してください"
                >
                  {schoolYearValues.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.value}
                    </MenuItem>
                  ))}
                </TextField>
                <TextField
                  id="standard-multiline-flexible"
                  label="自己紹介"
                  multiline
                  value={props.message}
                  onChange={(event) => {
                    props.setMessage(event.target.value);
                  }}
                />
              </div>
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            キャンセル
          </Button>
          <Button onClick={() => {
            updateUserProfileData();
            handleClose();
          }} color="primary" autoFocus>
            更新
          </Button>
        </DialogActions>
      </Dialog>
      
    </div>
  )
}

export default EditUserProfile
