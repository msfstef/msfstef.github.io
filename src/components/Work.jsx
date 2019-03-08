import React, { Component } from 'react';
import WorkItem from './WorkItem'
import './Work.css'

class Work extends Component {
    componentDidMount() {
        (function() {
            function scrollHorizontally(e) {
                e = window.event || e;
                var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
                document.getElementById('WorkWrapper').scrollLeft -= (delta*70);
                e.preventDefault();
            }
            if (document.getElementById('WorkWrapper').addEventListener) {
                // IE9, Chrome, Safari, Opera
                document.getElementById('WorkWrapper').addEventListener("mousewheel", scrollHorizontally, false);
                // Firefox
                document.getElementById('WorkWrapper').addEventListener("DOMMouseScroll", scrollHorizontally, false);
            } else {
                // IE 6/7/8
                document.getElementById('WorkWrapper').attachEvent("onmousewheel", scrollHorizontally);
            }
        })();

        const slider = document.getElementById('WorkWrapper');
        var isDown = false;
        var startX;
        var scrollLeft;

        slider.addEventListener('mousedown', (e) => {
            isDown = true;
            setTimeout(()=>{
                if (isDown) {
                    slider.classList.add('active');
                    startX = e.pageX - slider.offsetLeft;
                    scrollLeft = slider.scrollLeft;
                }
            }, 100)
        });
        slider.addEventListener('mouseleave', () => {
            isDown = false;
            slider.classList.remove('active');
        });
        slider.addEventListener('mouseup', () => {
            isDown = false;
            slider.classList.remove('active');
        });
        slider.addEventListener('mousemove', (e) => {
            if(!isDown) return;
            e.preventDefault();
            const x = e.pageX - slider.offsetLeft;
            const walk = (x - startX) * 2; //scroll-fast
            slider.scrollLeft = scrollLeft - walk;
        });
    }

    render() {
        return (
            <div id="WorkWrapper" className='Work wrapper'>
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
            </div>
        );
    }
}

export default Work;



