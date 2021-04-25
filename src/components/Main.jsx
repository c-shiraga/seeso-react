import React from 'react';
import { HashLink } from 'react-router-hash-link';
import Events from './Events';
import Community from './Community';
import Contact from './Contact';

const Main = () => {
    return (
        <div>
            <div className="hd">
                <HashLink smooth to="/Main#Events-area" >Events</HashLink>
                <HashLink smooth to="/Main#Community-area" >Community</HashLink>
                <HashLink smooth to="/Main#Contact-area" >Contact</HashLink>
            </div>
            <section id="Events-area">
                <Events/>
            </section>
            <section id="Community-area">
                <Community/>    
            </section>
            <section id="Contact-area">
                <Contact/>
            </section>
            
            
        </div>
    )
}

export default Main
