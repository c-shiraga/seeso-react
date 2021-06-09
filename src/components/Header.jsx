import React, {useEffect, useState} from 'react';
import { Link } from 'react-scroll';
import firebase from '../firebase/firebase';
import { useHistory } from 'react-router-dom';
import SearchBar from './SearchBar';


const Header = () => {

    const history = useHistory();

    const [scrollPosition, setScrollPosition] = useState(0);
    const [maxScrollPosition, setMaxScrollPosition] = useState(0);

    const signOut = async () => {
        await firebase.auth().signOut();
        alert('サインアウトしました。')
        history.push('/');
        window.scrollTo(0, 0);
    }
    
    
    useEffect(() => {
        setMaxScrollPosition(document.getElementById('root').scrollHeight);
        window.addEventListener('scroll', () => {
            setScrollPosition(window.pageYOffset);  
        })
    })
    
    return (
        <div>
            <header>
                <h1 className="title-logo">SEESO</h1>
                <h2>{scrollPosition}</h2>
                <button id="sign-out" onClick={signOut}>sign out</button>
                <div className="search-nav-area">
                <SearchBar />
                <nav className="hd">
                    <div className="hd">
                        <Link
                            activeClass="active"
                            to="Events-area"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration= {500}
                        >
                            <span className={(maxScrollPosition - scrollPosition) > 2151 ? 'current' : 'noCurrent'}>
                                Events
                            </span> 
                        </Link>
                        <Link
                            activeClass="active"
                            to="Community-area"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration= {500}
                        >
                            <span className={(maxScrollPosition - scrollPosition) < 1997 && (maxScrollPosition - scrollPosition) > 1257 ? 'current' : 'noCurrent'}>
                                Community
                            </span> 
                        </Link>
                        <Link
                            activeClass="active"
                            to="Contact-area"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration= {500}
                        >
                            <span className={(maxScrollPosition - scrollPosition) < 1097 ? 'current' : 'noCurrent'}>
                                Contact
                            </span> 
                        </Link>
                    </div>
                </nav>
                </div>
                
            </header>
                <div class="smf-nav">
                    <div class="smf-nav-list">
                        <Link
                            activeClass="active"
                            to="Events-area"
                            spy={true}
                            smooth={true}
                            offset={30}
                            duration= {500}
                        >
                            <span className={(maxScrollPosition - scrollPosition) > 2151 ? 'smf-current' : 'smf-noCurrent'}>
                                <i class="far fa-calendar-alt fa-lg"></i>
                            </span> 
                        </Link>
                        <Link
                            activeClass="active"
                            to="Community-area"
                            spy={true}
                            smooth={true}
                            offset={30}
                            duration= {500}
                        >
                            <span className={(maxScrollPosition - scrollPosition) < 1997 && (maxScrollPosition - scrollPosition) > 1257 ? 'smf-current' : 'smf-noCurrent'}>
                                <i class="far fa-comment-dots fa-lg"></i>
                            </span> 
                        </Link>
                        <Link
                            activeClass="active"
                            to="Contact-area"
                            spy={true}
                            smooth={true}
                            offset={30}
                            duration= {500}
                        >
                            <span className={(maxScrollPosition - scrollPosition) < 1097 ? 'smf-current' : 'smf-noCurrent'}>
                                <i class="fas fa-envelope-open-text fa-lg"></i>
                            </span> 
                        </Link>
                    </div>
                </div>
        </div>
    )
}

export default Header
