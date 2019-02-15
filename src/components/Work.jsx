import React, { Component } from 'react';
import WorkItem from './WorkItem'
import './Work.css'

class Work extends Component {
    render() {
        return (
            <div className='Work wrapper'>
                <WorkItem
                        itemName='crosspix' 
                        itemTitle='CrossPiX'
                        itemDesc='Web app to convert pictures to cross-stitch patterns.'
                        link='https://msfstef.github.io/CrossPiX' />
                <WorkItem
                        itemName='headbattle'
                        itemTitle='Headbattle'
                        itemDesc='A plain JS 1v1 football inspired game.'
                        link="https://msfstef.github.io/headbattle"/>
                <WorkItem
                        itemName='headbattle'
                        itemTitle='Headbattle'
                        itemDesc='A plain JS 1v1 football inspired game.'
                        link="https://msfstef.github.io/headbattle"/>
                <WorkItem
                        itemName='headbattle'
                        itemTitle='Headbattle'
                        itemDesc='A plain JS 1v1 football inspired game.'
                        link="https://msfstef.github.io/headbattle"/>
                <WorkItem
                        itemName='headbattle'
                        itemTitle='Headbattle'
                        itemDesc='A plain JS 1v1 football inspired game.'
                        link="https://msfstef.github.io/headbattle"/>
            </div>
        );
    }
}

export default Work;