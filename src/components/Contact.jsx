import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component {
    render() {
        return (
            <div className='Contact'>
                <div className='contactHeadings'>
                    <h1 className='contactTitle'>
                    Get in contact!
                    </h1>
                    <p className='contactDesc'>
                    Feel free to contact me for any
                    collaboration or project that
                    you may have in mind by filling
                    the form below.
                    </p>
                </div>
                <form className='contactForm' 
                        action="https://formspree.io/msfstef@gmail.com" method="POST">
                    <input className='contactEmail' 
                            type="email" name="email" 
                            placeholder="Your email.." />
                    <textarea className='contactText' 
                            name="message" 
                            placeholder="Your message.. (e.g. hi mr. stefanos, i like 
                                        your stuff make me something please.)"></textarea>
                    <button className='contactSend' 
                            type="submit"><span>SEND</span></button>
                </form>
            </div>
        );
    }
}

export default Contact;