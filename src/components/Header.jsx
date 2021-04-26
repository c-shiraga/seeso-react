import React, {useEffect, useState} from 'react';
import { HashLink } from 'react-router-hash-link';


const Header = () => {

    const [scrollPosition, setScrollPosition] = useState(0);
    const [maxScrollPosition, setMaxScrollPosition] = useState(0);
    
    useEffect(() => {
        setMaxScrollPosition(document.documentElement.scrollHeight - document.documentElement.clientHeight);
        window.addEventListener('scroll', () => {
            setScrollPosition(window.pageYOffset);
            
        })
    })
       
    return (
        <div>
            <header>
                <h1 className="title-logo">SEESO</h1>
                <button id="sign-out">sign out</button>
                <nav className="hd">
                    <div className="hd">
                        <HashLink smooth to="/Main#Events-area">
                            <span className={(maxScrollPosition - scrollPosition) > 1445 ? 'current' : 'noCurrent'}>
                                Events
                            </span> 
                        </HashLink>
                        <HashLink smooth to="/Main#Community-area">
                            <span className={(maxScrollPosition - scrollPosition) < 1170 && (maxScrollPosition - scrollPosition) > 700 ? 'current' : 'noCurrent'}>
                                Community
                            </span> 
                        </HashLink>
                        <HashLink smooth to="/Main#Contact-area">
                            <span className={(maxScrollPosition - scrollPosition) < 524 ? 'current' : 'noCurrent'}>
                                Contact
                            </span> 
                        </HashLink>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Header
