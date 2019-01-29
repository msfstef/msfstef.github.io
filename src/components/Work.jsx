import React, { Component } from 'react';
import WorkItem from './WorkItem'
import './Work.css'

class Work extends Component {
    render() {
        return (
            <div className='Work wrapper'>
                <WorkItem
                        itemName='headbattle' 
                        itemTitle='Headbattle'
                        itemDesc='A plain JS 1v1 football inspired game.' />
                <WorkItem
                        itemName='headbattle'
                        itemTitle='Headbattle'
                        itemDesc='A plain JS 1v1 football inspired game.'/>
                <WorkItem
                        itemName='headbattle'
                        itemTitle='Headbattle'
                        itemDesc='A plain JS 1v1 football inspired game.'/>
                <WorkItem
                        itemName='headbattle'
                        itemTitle='Headbattle'
                        itemDesc='A plain JS 1v1 football inspired game.'/>
                <WorkItem
                        itemName='headbattle'
                        itemTitle='Headbattle'
                        itemDesc='A plain JS 1v1 football inspired game.'/>
            </div>
        );
    }
}

export default Work;