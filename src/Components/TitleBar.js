import React from 'react';
import './CSS/TitleBar.css';

const TitleBar = () => {
    //Using this temporarily because I'm not OP enough
    //https://stackoverflow.com/questions/17722497/scroll-smoothly-to-specific-element-on-page
    function Scroll(elementY, duration) { 
        var startingY = window.pageYOffset;
        var diff = elementY - startingY;
        var start;
      
        // Bootstrap our animation - it will get called right before next frame shall be rendered.
        window.requestAnimationFrame(function step(timestamp) {
          if (!start) start = timestamp;
          // Elapsed milliseconds since start of scrolling.
          var time = timestamp - start;
          // Get percent of completion in range [0, 1].
          var percent = Math.min(time / duration, 1);
      
          window.scrollTo(0, startingY + diff * percent);
      
          // Proceed with animation as long as we wanted it to.
          if (time < duration) {
            window.requestAnimationFrame(step);
          }
        })
      }
    /**Initialize scroll */
    const initialize_scroll = (page_) => {
        const ref_ = document.getElementsByClassName(page_)[0];
        if(!ref_){
            return;
        }
        Scroll(ref_.getBoundingClientRect().top, 500);
    }
    return(
        <div className = "TitleBar">
            {/* Title */}
            <h1 className = "Title">Matthew Lian</h1>
            <div className = "NavBar">
                <h1 style={{animation: '2s slide_down'}} onClick={()=>initialize_scroll('AboutPage')}>About</h1>
                <h1 style={{animation: '3s slide_down'}} onClick={()=>initialize_scroll('ProjectPage')}>Projects</h1>
                <h1 style={{animation: '4s slide_down'}} onClick={()=>initialize_scroll('ContactForm')}>Contact</h1>
            </div>
        </div>
    )
};

export default TitleBar;
