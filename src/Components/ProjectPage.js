import React from 'react';
import './CSS/ProjectPage.css'

function ProjectPage () {
    return ( <div className="ProjectPage">
        <img className='background' alt="#" src="https://www.exascaleproject.org/wp-content/uploads/2019/11/PathForward-scaled.jpg"/>
        <div id="title" className="font-effect-shadow-multiple"><h1>Projects</h1></div>
        <div className="Projects">
            <div className="Project">
                <img alt='#' src='https://images.chesscomfiles.com/uploads/v1/article/27319.746c2259.668x375o.c6cf8543e2d5@2x.png'/>
                <h1>Multiplayer Chess Application</h1>
                <h2>Description</h2>
                <h4> * Web Application enabling multiple people to compete against each other in Chess.</h4>
                <h4> * Server side handled using Node and Express, deployed to Heroku </h4>
                <h4> * UI Designed with html/css and JavaScript. </h4>
                <div className='buttons'>
                    <a href='https://chess-ml.herokuapp.com/'>
                        <div className='ProjectButton'>
                            Live Demo
                        </div>
                    </a>
                    <a href=''>
                        <div className='ProjectButton'>
                            Source Code
                        </div>
                    </a>
                </div>
            </div>
            <div className="Project">
                <img alt='#' src='https://cdn.hswstatic.com/gif/airplane-windows.jpg'/>
                <h1>OpenFlights DB Pathfinder</h1>
                <h2>Description</h2>
                <h4> * Used OpenFlights DB Dataset to map out nearest flight distance between two waypoints</h4>
                <h4> * Implemented BFS, A* and Djikstra's algorithms</h4>
                <h4> * Compiled using gcc and cmake, built in C++</h4><div className='buttons'>
                    <a href='https://github.com/Mattli8312/CS225FinalProject/tree/main/CS225FinalProject'>
                        <div className='ProjectButton'>
                            Source Code
                        </div>
                    </a>
                </div>
            </div>
            <div className="Project">
                <img alt='#' src='https://ssb.wiki.gallery/images/9/9b/Pac-Man_%28PMVS%29.png'/>
                <h1>SDL2 PacMan</h1>
                <h2>Description</h2>
                <h4> * Used C++'s SDL2 API to recreate Namco's original PacMan</h4>
                <h4> * Includes Game logic and AI based pathfinding algorithms for the ghost</h4>
                <h4> * Built Using CodeBlocks IDE, and built the executable for the game</h4>
                <div className='buttons'>
                    <a href='https://github.com/Mattli8312/Pacman2.0'>
                        <div className='ProjectButton'>
                            Source Code
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div> );
}

export default ProjectPage ;