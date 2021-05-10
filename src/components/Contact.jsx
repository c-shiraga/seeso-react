import React from 'react';
import '../assets/styles/index.css';
import '../assets/styles/contact.css';
import ContactForm from './ContactForm';


const Contact = () => {
    return (
        <div id="Contact-area">
            <h2 className="content-title">Contact</h2>
            <section class="main-section">
                <ContactForm />
            </section>
        </div>
    )
}
export default Contact
