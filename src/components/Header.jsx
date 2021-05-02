import React, {useEffect, useState} from 'react';
import { Link } from 'react-scroll';


const Header = () => {

    const [scrollPosition, setScrollPosition] = useState(0);
    const [maxScrollPosition, setMaxScrollPosition] = useState(0);
    
    
    
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
                <h2>{maxScrollPosition}</h2>
                <button id="sign-out">sign out</button>
                <nav className="hd">
                    <div className="hd">
                        {/* <HashLink smooth to="/Main#Events-area"> */}
                        <Link
                            activeClass="active"
                            to="Events-area"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration= {400}
                        >
                            <span className={(maxScrollPosition - scrollPosition) > 2151 ? 'current' : 'noCurrent'}>
                                Events
                            </span> 
                        </Link>
                        {/* </HashLink> */}
                        {/* <HashLink smooth to="/Main#Community-area"> */}
                        <Link
                            activeClass="active"
                            to="Community-area"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration= {400}
                        >
                            <span className={(maxScrollPosition - scrollPosition) < 1997 && (maxScrollPosition - scrollPosition) > 1257 ? 'current' : 'noCurrent'}>
                                Community
                            </span> 
                        </Link>
                        {/* </HashLink>
                        <HashLink smooth to="/Main#Contact-area"> */}
                        <Link
                            activeClass="active"
                            to="Contact-area"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration= {400}
                        >
                            <span className={(maxScrollPosition - scrollPosition) < 1097 ? 'current' : 'noCurrent'}>
                                Contact
                            </span> 
                        </Link>
                        {/* </HashLink> */}
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Header
