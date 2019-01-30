import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
            <div className={"Header " + (this.state.toggle?"change":"")}
                onClick={()=>{if(this.state.toggle){this.toggleMenu()}}}>
                <Link className='landingLink' to="/">
                    <img className="navbar logo"
                        onClick={()=> {if(this.state.toggle){this.toggleMenu()}}}
                        src={'/assets/logo.svg'} alt="msfstef logo"/>
                </Link>

                <div className={"navbar menuicon " + (this.state.toggle?"change":"")}
                    onClick={()=>this.toggleMenu()}>
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                </div>

                <div className={"navbar menu container " + (this.state.toggle?"change":"")}>
                    <Link className='menu item work' to="/work"
                        onClick={()=>{this.toggleMenu()}}>Portfolio</Link>
                    <Link className='menu item about' to="/about"
                        onClick={()=>{this.toggleMenu()}}>About</Link>
                    <Link className='menu item contact' to="/contact"
                        onClick={()=>{this.toggleMenu()}}>Contact</Link>
                </div>
            </div>
        );
    }
}

export default Header;