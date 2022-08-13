import './App.css';
import {useEffect, useRef} from 'react';
/**Import corresponding pages */
import TitlePage from './Components/TitlePage'
import AboutPage from './Components/AboutPage';
import SideBar from './Components/SideBar';
import ProjectPage from './Components/ProjectPage';
import ContactForm from './Components/ContactForm';

function App() {
  /**UseRef for progress */
  const window_top = useRef();

  /**Current Progress Bar */
  const curr_progress = useRef();

  /**Scroll Down button */
  const scroll_down = useRef();

  /**Function for rendering scroll down icon */

  /**UseEffect for scrolling */
  useEffect(()=>{
      /**scrolling */
      if(window_top.current !== undefined){
          window.addEventListener("scroll", ()=> {
            /**Handle UI interactions*/
            let curr_ = window_top.current.getBoundingClientRect().top;
            curr_progress.current.style.height = Math.abs(curr_) / (document.body.scrollHeight - window.innerHeight) * window.innerHeight  + 'px';
            if(curr_ < -100){
              /** Don't display the scroll down button*/
              scroll_down.current.style.opacity = '0';
            }
            else{
              /**Show the scroll down button */
              scroll_down.current.style.opacity = '1';
            }
          })
      }
  },[]);
  return (
    <div className="App" ref={window_top}>
      {/* Different Pages */}
      <TitlePage/>
      <AboutPage/>
      <ProjectPage/>
      <ContactForm/>
      {/* Side Bar with hyperlinks */}
      <SideBar/>
      {/* Progress Bar */}
      <div className = 'ProgressBar'>
          <div id='Progress' ref={curr_progress}></div>
      </div>
      {/* Scroll down button */}
      <i className="fa-solid fa-angles-down" id="scroll_down" ref={scroll_down}></i>
    </div>
  );
}

export default App;
