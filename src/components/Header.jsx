import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
    state = {
        toggle: false
    }
    
    toggleMenu = () => {
        this.setState({toggle: !this.state.toggle})
    }

    render() {
        if (window.location.pathname === '/') {
            return <div></div>
        }

        return (
            
            <div className='Header'>
                <img className="navbar logo"
                    src={'/assets/logo.svg'} alt="msfstef logo"/>
                
                <div className={"navbar menuicon " + (this.state.toggle?"change":"")}
                    onClick={()=>this.toggleMenu()}>
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                </div>
            </div>
        );
    }
}

export default Header;