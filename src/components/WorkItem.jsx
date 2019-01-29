import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './WorkItem.css'

class WorkItem extends Component {
    render() {
        return (
            
            <div className='WorkItem'>
                <Link className={this.props.itemName + ' link'}
                    to={"/" + this.props.itemName}>
                <img className={this.props.itemName + ' image'}
                    src='https://c1.staticflickr.com/5/4845/30794937597_8a527efc46_b.jpg'
                    alt={this.props.itemName} />
                
                <div className='text'>
                    <h2>{this.props.itemTitle}</h2>
                    <p>{this.props.itemDesc}</p>
                </div>
                {/*
                <Route exact path={"/" + this.props.itemName} 
                        component={this.props.itemName} />
                */}
                </Link>
            </div>
        );
    }
}

export default WorkItem;