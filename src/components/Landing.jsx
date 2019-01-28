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
            <div className='wrapper Landing'>
                <img className={"item logo " + (this.state.logoActive?"active":"")}
                    onClick={() => {this.logoHandleClick()}}
                    src={'/assets/logo.svg'} alt="msfstef logo"/>
                <Link className='item work' to="/work">Portfolio</Link>
                <Link className='item about' to="/about">About</Link>
                <Link className='item contact' to="/contact">Contact</Link>
                <div className='item social'>
                    <a target="_blank" rel="noopener noreferrer" 
                        href="https://www.linkedin.com/in/stefanosmousafeiris/"> 
                        <i class="fa fa-linkedin"></i>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" 
                        href="https://github.com/msfstef"> 
                        <i class="fa fa-github"></i>
                    </a>
                    <a href="mailto:msfstef@gmail.com"> 
                        <i class="fa fa-envelope"></i>
                    </a>
                </div>
            </div>
        );
    }
}

export default Landing;