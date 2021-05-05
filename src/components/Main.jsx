import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import firebase from '../firebase/firebase';
import Events from './Events';
import Community from './Community';
import Contact from './Contact';
import Header from './Header';
import Footer from './Footer';


export const UserProfile = React.createContext();

const Main = () => {

    const [currentUser , setCurrentUser] = useState({ name: "", photo: "" });

    const history = useHistory();

    useEffect(() => {
        firebase.auth().onAuthStateChanged(function(user) {
            if (!user) {
                history.push('/ErrorPage');
            } else if(user.email.match(/@oic-ok/)){
                setCurrentUser({name: user.displayName, photo: user.photoURL});
                
            }else{
                history.push('/ErrorPage');
            }
          });
    },[])

    return (
        <div>
            <Header />
            <div id="main-content-area">
                <UserProfile.Provider value={[currentUser, setCurrentUser]}>
                    <Events/>
                    <Community/>
                </UserProfile.Provider>   
                <Contact/>
            </div>
            <Footer />
        </div>
    )
}

export default Main
