import {React, useRef, useEffect} from 'react'
import './CSS/BackGround.css'

const BackGround = () => {
    /**use ref for grabbing background element */
    const background_ref = useRef();
    /**Function for rendering stars */
    const render_stars = () => {
        // console.log(background_ref.current);
        if(background_ref.current !== undefined){
            /**Add random stars */
            for(let i = 0; i < 60; i++){
                let randX = Math.floor(Math.random() * window.innerWidth * 0.9) + window.innerWidth * 0.05;
                let randY = Math.floor(Math.random() * window.innerHeight * 0.9) + window.innerHeight * 0.05;
                let element = document.createElement("div");
                let randSize = Math.floor(Math.random() * 3) + 1;
                element.setAttribute('id', 'Star');
                element.style.top = randY + 'px'; element.style.left = randX + 'px';
                element.style.width = randSize + 'px';
                element.style.height = randSize + 'px';
                background_ref.current.appendChild(element);
            }
        }
    }
    /**Function for rendering clouds */
    const render_clouds = () => {
        if(background_ref.current !== undefined){
            /**Add 5 random clouds */
            for(let i = 0; i < 10; i++){
                let randLayer = Math.random() > 0.5 ? '7' : '3'
                let randX = Math.floor(Math.random() * window.innerWidth/4);
                let randY = Math.floor(Math.random() * window.innerHeight/2) + 10;
                let randLength = Math.floor(Math.random() * 30) + 5;
                let element = document.createElement("div");
                element.setAttribute('id', 'Cloud')
                element.style.top = randY + 'px'; element.style.right = randX + 'px';
                element.style.zIndex = randLayer;
                element.style.width = randLength + 'vw';
                element.style.animationDelay = Math.floor(Math.random() * 10) + 's';
                background_ref.current.appendChild(element);
            }
        }
    }
    /**Function for rendering mountaints */
    const render_mountain = () => {
        const mountains = [{
            width: '28vw',
            height: '28vw',
            bottom: '-14vw',
            right: '30vw'
        }, {
            width: '40vw',
            height: '40vw',
            bottom: '-20vw',
            right: '0vw'
        }, {
            width: '30vw',
            height: '30vw',
            bottom: '-15vw',
            right: '-5vw'
        }];
        if(background_ref.current !== undefined){
            for(const m of mountains){
                let element = document.createElement("div");
                element.setAttribute('id', 'Mountain');
                element.style.width = m.width;
                element.style.height = m.height;
                element.style.bottom = m.bottom;
                element.style.right = m.right;
                background_ref.current.appendChild(element);
            }
        }
    }
    useEffect(()=>{render_stars(); render_clouds(); render_mountain()}, [])
    /**This is the sun */
    return(<div className ="BackGround" ref={background_ref}>
        <div className="Sun"/>
    </div>);
}

export default BackGround;