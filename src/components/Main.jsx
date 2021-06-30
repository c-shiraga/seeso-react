import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import firebase from '../firebase/firebase';
import Events from './Events';
import Community from './Community';
import Contact from './Contact';
import Header from './Header';
import Footer from './Footer';

export const KeyWord = React.createContext();
export const UserProfile = React.createContext();


const Main = () => {

    const [currentUser , setCurrentUser] = useState({
        name: "", 
        photo: "", 
        email: "",
        gender: "",
        age: "",
        department: "",
        schoolYear: "",
        message: ""
    });

    const [searchWord  , setSearchWord ] = useState("");

    const history = useHistory();

    useEffect(() => {
        const loginIdReg1 = new RegExp(process.env.REACT_APP_APP_ID);
        const loginIdReg2 = new RegExp(process.env.REACT_APP_APP_ID2);
        const db = firebase.firestore();
        firebase.auth().onAuthStateChanged(async function(user) {
            if (!user) {
                history.push('/ErrorPage');
            } else if(user.email.match(loginIdReg1) || user.email.match(loginIdReg2)){

                // ユーザーのプロフィール有無を調べて、なければ追加
                const usersRef = db.collection('users').where('email', '==', user.email);
                const profile = await usersRef.get();
                const defaultProfile = {
                    name : user.displayName,
                    photo: user.photoURL,
                    email: user.email,
                    gender: '未設定',
                    age: '未設定',
                    department: '未設定',
                    schoolYear: '未設定',
                    message: '未設定'
                }
                
                if(profile.empty){
                    await db.collection('users').add(defaultProfile)
                    setCurrentUser(defaultProfile)
                }else{
                    profile.forEach((doc) => {
                        setCurrentUser({
                            name: user.displayName, 
                            photo: user.photoURL, 
                            email: user.email,
                            gender: doc.data().gender,
                            age: doc.data().age,
                            department: doc.data().department,
                            schoolYear: doc.data().schoolYear,
                            message: doc.data().message
                        })
                    })
                }
                
            }else{
                history.push('/ErrorPage');
            }
        });
    },[])

    return (
        <div>
            <KeyWord.Provider value={[searchWord  , setSearchWord ]}>
            <UserProfile.Provider value={[currentUser, setCurrentUser]}>
                <Header />
                <div id="main-content-area">
                    <Events/>
                    <Community/>
                <Contact/>
                </div>
            </UserProfile.Provider>
            </KeyWord.Provider>
            <Footer />
        </div>
    )
}

export default Main
