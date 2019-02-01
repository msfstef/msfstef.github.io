import React, { Component } from 'react';
import './About.css';

class About extends Component {
    render() {
        return (
            <div className="About">
            <div className="aboutWrapper">
                <img className="aboutPic landscape"
                    src="/assets/face_square.jpg"
                    alt="my face" />
                <p className="aboutText">
                My name is Stefanos Mousafeiris, and I'm a 
                Greek-Italian physicist turned software developer. 
                <br/><br/>
                More info at some point - currently working on my portfolio.
                </p>
                <div className='aboutSocial'>
                    <a className='aboutSocialItem'
                        target="_blank" rel="noopener noreferrer" 
                        href="https://www.linkedin.com/in/stefanosmousafeiris/"> 
                        <i className="fa fa-linkedin"></i>
                    </a>
                    <a className='aboutSocialItem'
                        target="_blank" rel="noopener noreferrer" 
                        href="https://github.com/msfstef"> 
                        <i className="fa fa-github"></i>
                    </a>
                    <a className='aboutSocialItem'
                        href="mailto:msfstef@gmail.com"> 
                        <i className="fa fa-envelope"></i>
                    </a>
                </div>
                
            </div>  
            </div>
        );
    }
}

export default About;