import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import firebase from '../firebase/firebase';
import Events from './Events';
import Community from './Community';
import Contact from './Contact';
import Header from './Header';

export const UserProfile = React.createContext();

const Main = () => {

    const [currentUser , setCurrentUser] = useState({ name: "", photo: "" });

    const history = useHistory();

    useEffect(() => {
        firebase.auth().onAuthStateChanged(function(user) {
            if (user.email.match(/@oic-ok/)) {
                setCurrentUser({name: user.displayName, photo: user.photoURL});
            } else {
                history.push('/ErrorPage');
            }
          });
    },[])

    return (
        <div>
            <Header />
            <div id="main-content-area">
                <section id="Events-area">
                    <Events/>
                </section>
                <section id="Community-area">
                    <UserProfile.Provider value={[currentUser, setCurrentUser]}>
                        <Community/>
                    </UserProfile.Provider>   
                </section>
                <section id="Contact-area">
                    <Contact/>
                </section>
            </div>
        </div>
    )
}

export default Main
