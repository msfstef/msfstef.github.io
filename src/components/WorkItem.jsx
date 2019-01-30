import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './WorkItem.css'

class WorkItem extends Component {
    render() {
        return (
            
            <div className='WorkItem'
                >
                <Link className={this.props.itemName + ' worklink'}
                        to={"/" + this.props.itemName}>
                <div className='workImageContainer'>
                    <img className={this.props.itemName + ' work image landscape'}
                        src={'/assets/' + this.props.itemName + '_landscape.PNG'}
                        alt={this.props.itemName} />
                    <img className={this.props.itemName + ' work image portrait'}
                        src={'/assets/' + this.props.itemName + '_portrait.PNG'}
                        alt={this.props.itemName} />
                </div>

                <div className='WorkItemText'>
                    <h2 className='WorkItemTitle'>{this.props.itemTitle}</h2>
                    <p className='WorkItemDesc'>{this.props.itemDesc}</p>
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