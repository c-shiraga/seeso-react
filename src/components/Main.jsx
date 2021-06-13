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

    const [currentUser , setCurrentUser] = useState({ name: "", photo: "" });
    const [searchWord  , setSearchWord ] = useState("");

    const history = useHistory();

    

    useEffect(() => {
        const loginIdReg1 = new RegExp(process.env.REACT_APP_APP_ID);
        const loginIdReg2 = new RegExp(process.env.REACT_APP_APP_ID2);
        firebase.auth().onAuthStateChanged(function(user) {
            if (!user) {
                history.push('/ErrorPage');
            } else if(user.email.match(loginIdReg1) || user.email.match(loginIdReg2)){
                setCurrentUser({name: user.displayName, photo: user.photoURL});
                
            }else{
                history.push('/ErrorPage');
            }
        });
    },[])

    return (
        <div>
            <KeyWord.Provider value={[searchWord  , setSearchWord ]}>
                <Header />
                <div id="main-content-area">
                <UserProfile.Provider value={[currentUser, setCurrentUser]}>
                    <Events/>
                    <Community/>
                </UserProfile.Provider>
                <Contact/>
                </div>
            </KeyWord.Provider>
            <Footer />
        </div>
    )
}

export default Main
