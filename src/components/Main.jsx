import React from 'react';
import Events from './Events';
import Community from './Community';
import Contact from './Contact';
import Header from './Header';

const Main = () => {
    return (
        <div>
            <Header />
            <div id="main-content-area">
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
        </div>
    )
}

export default Main
