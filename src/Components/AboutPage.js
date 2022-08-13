import {React, useRef, useEffect} from 'react'
import './CSS/AboutPage.css'
import AboutBackGround from './AboutBackGround'

const AboutPage = () => {

    /**UseRefs for different pages */
    const education_page = useRef();
    const skill_page = useRef();
    const interest_page = useRef();
    const experience_page = useRef();
    const buttons = useRef();

    /**UseEffect */
    useEffect(()=>{
        /**Switching Pages */
        const Switch_Page = (page_content) => {
            /**Erase all pages */
            if(education_page.current !== undefined){
                education_page.current.style.display = 'none';
                buttons.current.children[0].style.background = 'none';
            }
            if(skill_page.current !== undefined){
                skill_page.current.style.display = 'none';
                buttons.current.children[1].style.background = 'none';
            }
            if(interest_page.current !== undefined){
                interest_page.current.style.display = 'none';
                buttons.current.children[2].style.background = 'none';
            }
            if(experience_page.current !== undefined){
                experience_page.current.style.display = 'none';
                buttons.current.children[3].style.background = 'none';
            }
            switch(page_content){
                case 'Education':
                    education_page.current.style.display = 'flex';
                    education_page.current.style.animation = 'DropDown 0.5s'
                    buttons.current.children[0].style.background = 'orangered';
                    return;
                case 'Skills':
                    skill_page.current.style.display = 'flex';
                    skill_page.current.style.animation = 'DropDown 0.5s'
                    buttons.current.children[1].style.background = 'orangered';
                    return;
                case 'Experience':
                    experience_page.current.style.display = 'flex';
                    experience_page.current.style.animation = 'DropDown 0.5s'
                    buttons.current.children[3].style.background = 'orangered';
                    return;
                default:
                    interest_page.current.style.display = 'flex';
                    interest_page.current.style.animation = 'DropDown 0.5s'
                    buttons.current.children[2].style.background = 'orangered';
                    return;
            }
        }
        if(buttons.current !== undefined){
            const children = buttons.current.children;
            for(const c of children){
                const id_ = c.getAttribute("id");
                c.addEventListener("click", ()=>{
                    Switch_Page(id_);
                })
            }
        }
    },[]);
    return (
        <div className = "AboutPage">
            <AboutBackGround/>
            <div className = "title"><h1>About Me</h1></div>
            <div className = "AboutContent">
                <div className = "topics" ref={buttons}>
                    {/* Topics button including education, Skills-programming languages, and interests/hobbies */}
                    <div className = "aboutButton" id="Education" style={{background: 'orangered'}}>Education</div>
                    <div className = "aboutButton" id="Skills">Skills</div>
                    <div className = "aboutButton" id="Interests">Interests</div>
                    <div className = "aboutButton" id="Experience">Experience</div>
                </div>
                {/* Different Blocks */}
                {/* Education Box */}
                <div ref={education_page} className="ContentBox" id="Education_Box">
                    <div className="Box">
                        <h1 style={{color: 'orange'}}>University of Illinois at Urbana Champaign</h1>
                        <h2> * (Under-Graduate)</h2>
                        <h2> * Bachelors of Science.</h2>
                        <h2 style={{color: 'yellow'}}>Relevant Course Work: </h2>
                        <ul>
                            <li> * Data Structures</li>
                            <li> * Algorithms</li>
                            <li> * FPGA Programming</li>
                            <li> * Operating Systems</li>
                            <li> * DataBases</li>
                            <li> * Parallel Programming</li>
                            <li> * Computer Architecture</li>
                            <li> * Distributed Systems</li>
                            <li> * Embedded systems laboratory</li>
                        </ul>
                    </div>
                    <div className="Box" >
                        <h1 style={{color: 'orange'}}>Statistics</h1>
                        <h2> * GPA: 3.78 (As of Fall 2022)</h2>
                        <h2> * Date: August 2019 - May 2023</h2>
                        <h2 style={{color: 'yellow'}}>Major: </h2>
                        <h2> * Computer Engineering</h2>
                        <h2 style={{color: 'yellow'}}>Awards/Scholarships</h2>
                        <ul>
                            <li> * Deans List (Spring 2020, Spring 2021, Spring 2022)</li>
                            <li> * Kazkowitz Scholarship (Fall 2021)</li>
                        </ul>
                    </div>
                </div>
                {/* Skills Box */}
                <div style={{display: 'none'}}  ref={skill_page} className="ContentBox" id="Skills_Box">
                    {/* 
                        Programming Languages
                        - C/C++
                        - Java
                        - Python
                        - HTML/CSS/JavaScript
                        - SQL
                        - MongoDB
                        Libraries & FrameWorks
                        - React
                        - npm 
                        - Node & Express
                    */}
                    <div className="Row">
                        <div className="element">
                            <h2>Python </h2>
                            <h2>Automation/AI</h2>
                            <img alt="#" src="https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-512.png"/>
                        </div>
                        <div className="element">
                            <h2>Java </h2>
                            <h2>Android Dev</h2>
                            <i style={{color: "orange"}} className="fa-brands fa-java"></i>
                        </div>
                        <div className='element'>
                            <h2>C and C++</h2>
                            <h2>OS/Embedded Design</h2>
                            <img alt="#" src="https://user-images.githubusercontent.com/42747200/46140125-da084900-c26d-11e8-8ea7-c45ae6306309.png"/>
                        </div>
                    </div>
                    <div className="Row">
                        <div className="element">
                            <h2>HTML/CSS</h2>
                            <h2>Web Design</h2>
                            <span><i style={{marginRight: '5px', color: 'orangered'}} className="fa-brands fa-html5"></i><i style={{color: '#08f'}} className="fa-brands fa-css3-alt"></i></span>
                        </div>
                        <div className="element">
                            <h2>SQL</h2>
                            <h2>Relational</h2>
                            <h2>Database mgm.</h2>
                            <img alt="#" src="https://icons-for-free.com/download-icon-file+sql+icon-1320183612970878250_512.png"></img>
                        </div>
                        <div className="element">
                            <h2>MongoDB</h2>
                            <h2>Non-relational</h2>
                            <h2>Database mgm.</h2>
                            <i style={{color: 'lightgreen'}} className="fa-brands fa-envira"></i>
                        </div>
                    </div>
                    <div className="Row">
                        <div className="element">
                            <h2>FrontEnd</h2>
                            <h2>Development</h2>
                            <i style={{color: 'cyan'}} className="fa-brands fa-react"></i>
                        </div>
                        <div className="element">
                            <h2>Package</h2>
                            <h2>Management</h2>
                            <i style={{color: 'red'}} className="fa-brands fa-npm"></i>
                        </div>
                        <div className="element">
                            <h2>BackEnd</h2>
                            <h2>Development</h2>
                            <i style={{color: 'green'}} className="fa-brands fa-node"></i>
                        </div>
                        <div className="element">
                            <h2>JavaScript</h2>
                            <i style={{color: 'gold'}} className="fa-brands fa-square-js"></i>
                        </div>
                    </div>
                </div>
                {/* Interests Box*/}
                <div style={{display: 'none'}} ref={interest_page} className="ContentBox" id="Interests_Box">
                    <div className="Box">
                        <h1 style={{color: 'orangered'}}><i className="fa-solid fa-brain"></i> AI/Machine Learning </h1>
                        <h2 style={{fontFamily: 'Ariel'}}>Before you roast me, I know this sounds like a stereotypical answer for newb programmers like myself. 
                        But over the Summer, I had played around with AI problems using python and my Universities AI course website. I went through the machine problems
                        and worked on AI problems pertaining to configuration space planning, naive bayes, reinforcement learning, and a lot of other stuff. 
                        </h2><h2 style={{fontFamily: 'Ariel'}}>
                        It's honestly kinda neat what
                        we can do with AI in solving complex tasks we couldn't solve with general purpose programming, and working through these machine problems showed me this.</h2>
                        <h2 style={{fontFamily: 'Ariel'}}>I'll attach the link to this box so you can take a look at our school's AI course website if your interested :). And if you want to check out my
                        solutions to these machine problems, you can check them out in my github (repository name: CS440MPs)</h2>
                        <h2 style={{fontFamily: 'Ariel'}}>Link: <a href='https://courses.engr.illinois.edu/cs440/fa2021/'>CS440 Website</a></h2>
                    </div>
                    <div className="Box">
                        <h1 style={{color: 'orangered'}}><i className="fa-solid fa-microchip"></i> Embedded Systems </h1>
                        <h2 style={{fontFamily: 'Ariel'}}>
                            Embedded systems is pretty neat. One of the courses I had taken was a digital systems laboratory course where we learned 
                            a lot about digital design (I know, shocker).
                        </h2>
                        <h2 style={{fontFamily: 'Ariel'}}>
                            We started off with designing a 4 bit processor using a breadboard and the power source supplied by the de10lite FPGA. We then started using System Verilog to program our FPGAs 
                            and learned to create multiplexers, adders, and a simplified lc3 model (kind of painful). We then started programming in C using ecllipse, were we learned about basic SPI communcation 
                            protocols, different peripherals (e.g. jtag for usb), and custom modules. 
                        </h2>
                        <h2 style={{fontFamily: 'Ariel'}}>
                            Honestly, this above description doesn't do this class justice as we learned a ton in this class. But it's pretty interesting
                            how we can incorporate software into our hardware in completing certain tasks.
                        </h2>
                    </div>
                    <div className='Box'>
                        <h1 style={{color: 'orangered'}}><i className="fa-solid fa-layer-group"></i> Full Stack Development</h1>
                        <h2 style={{fontFamily: 'Ariel'}}>I had been using JavaScript for as long as I can remember now. After taking a database class, I started exploring backend development. </h2>
                        <h2 style={{fontFamily: 'Ariel'}}>FrontEnd Development is awesome, and I'm nowhere near as good as most professionals, but I had dabbled with FrontEnd development for a bit and
                        it does get a little repetitive.</h2>
                        <h2 style={{fontFamily: 'Ariel'}}>BackEnd development, however is another giant to tackle, and I got to play around with different platforms, like 
                        MongoDB atlas, PostMan, and other npm packages. For those who don't know, postman is an awesome software that allows you to test API endpoints, and
                        you can test different api calls, (e.g.get, post, delete, etc.). </h2>
                        <h2 style={{fontFamily: 'Ariel'}}>
                            So yeah, BackEnd is much more interesting than FrontEnd in my opinion. I won't sugarcoat it anymore, but that is one particular software engineering field I am interested in :). 
                        </h2>
                    </div>
                </div>
                {/* Experience Box */}
                <div style={{display: 'none'}} ref={experience_page} className="ContentBox" id="Experience_Box">
                    <div className="Box">
                        <h1 style={{color: 'orangered'}}>Digital QA Intern (Toyota Material Handling)</h1>
                        <h2>May 2022 to July 2022</h2>
                        <ul>
                            <li> * Worked with the Digital Advanced Services Team in developing and improving global telematics software</li>
                            <li> * Collaborated with the Marketing team to improve TMH's customer portal and Ecommerce Website</li>
                            <li> * Performed unit testing and integration testing on GTS platform and backlogged issues in Azure DevOps</li>
                        </ul>
                        <h1 style={{color: 'orangered'}}>ECE 220 Course Assistant (UIUC)</h1>
                        <h2>Aug 2021 - currently working</h2>
                        <ul>
                            <li> * Hosted weekly office hours to help students with Machine Problems (using LC3, C/C++) and helped students understand certain Computer Science concepts (OOP, recursion, etc.)</li>
                            <li> * Assisted TA with labs where we introduced various CS topics that lead into their machine problems</li>
                        </ul>
                        <h1 style={{color: 'orangered'}}>UnderGraduate Research Assistant (UIUC)</h1>
                        <h2>Aug 2019 - May 2020</h2>
                        <ul>
                            <li> * Assisted ECE graduate student in desiging PCBs using AnsysHFSS</li>
                            <li> * Wrote python scripts to automate PCB and IC models using the Anscript Library</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutPage