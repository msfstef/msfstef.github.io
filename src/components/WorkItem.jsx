import React, { Component } from 'react';
import { Route } from 'react-router-dom';

class WorkItem extends Component {
    render() {
        return (
            <div>
                <img className={this.props.itemName + 'image'}
                    src='https://c1.staticflickr.com/5/4845/30794937597_8a527efc46_b.jpg'
                    alt={this.props.itemName} />
                
                <h2>{this.props.itemTitle}</h2>
                <p>{this.props.itemDesc}</p>

                <Route exact path={"/" + this.props.itemName} 
                        component={this.props.itemName} />
            </div>
        );
    }
}

export default WorkItem;