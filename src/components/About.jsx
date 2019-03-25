import React, { Component } from 'react';
import './About.css';

class About extends Component {
    state = {
        clicked: false
    }

    clickPic = ()=>{
        this.setState({clicked : true});
        setTimeout(()=>{this.setState({clicked : false})}, 3000);
    }

    render() {
        return (
            <div className="About">
            <div className="aboutWrapper">
                <div className="aboutPicContainer">
                <img className="aboutPic"
                    src="/assets/face_square.jpg"
                    alt="my face"
                    />
                <img className={"aboutPicLogo" + (this.state.clicked?" clicked":" ")}
                    src="/assets/logo.svg"
                    alt="logo"
                    onClick={()=>{
                            if(!this.state.clicked){
                                this.clickPic();
                            }
                        }
                    }/>
                </div>
                <p className="aboutText">
                My name is <b>Stefanos Mousafeiris</b>, and I'm a 
                Greek-Italian physicist turned software developer. 
                <br/><br/>
                Currently working on my portfolio.
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
                        href="mailto:contact@msfstef.dev"> 
                        <i className="fa fa-envelope"></i>
                    </a>
                </div>
                
            </div>  
            </div>
        );
    }
}

export default About;