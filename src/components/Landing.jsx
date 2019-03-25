import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Landing.css';

class Landing extends Component {
    state = {
        logoActive: false
    }
    logoHandleClick = () => {
        if (!this.state.logoActive) {
            this.setState({ logoActive: true})
            setTimeout(()=>{this.setState({logoActive: false})}, 1000)
        }
    }


    render() {
        return (
            <div className='Landing'>
            <div className='landingCentering'>
            <img className={"landing item logo " + (this.state.logoActive?"active":"")}
                    onClick={() => {this.logoHandleClick()}}
                    src={'/assets/logo.svg'} alt="msfstef logo"/>
            <div className='landingWrapper'>
                <Link className='landing item work' to="/work">Portfolio</Link>
                <Link className='landing item about' to="/about">About</Link>
                <Link className='landing item contact' to="/contact">Contact</Link>
                <div className='landing item social'>
                    <a className='landing item social'
                        target="_blank" rel="noopener noreferrer" 
                        href="https://www.linkedin.com/in/stefanosmousafeiris/"> 
                        <i className="fa fa-linkedin"></i>
                    </a>
                    <a className='landing item social'
                        target="_blank" rel="noopener noreferrer" 
                        href="https://github.com/msfstef"> 
                        <i className="fa fa-github"></i>
                    </a>
                    <a className='landing item social'
                        href="mailto:contact@msfstef.dev"> 
                        <i className="fa fa-envelope"></i>
                    </a>
                </div>
            </div>
            </div>
            </div>
        );
    }
}

export default Landing;