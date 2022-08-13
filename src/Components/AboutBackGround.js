import {React, useEffect, useRef} from 'react';
import './CSS/AboutBackGround.css'

// const rand_hex = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];

// const rand_color = () => {
//     let result = '#';
//     for(let i = 0; i < 6; i++){
//         result += rand_hex[Math.floor(Math.random() * rand_hex.length)]
//     }
//     return result;
// }

/**Started using react snippet extension */
function AboutBackGround () {
    /**Ref for AboutBackGround */
    const abg_ref = useRef();
    
    /**Generate random squared */
    const generate_stars = () => {
        /**Generate squares */
        if(abg_ref.current !== undefined){
            abg_ref.current.innerHTML = '';
            for(let i = 0; i < 60; i++){
                let width_ = Math.floor(Math.random() * 4) + 4;
                let location = Math.floor(Math.random() * window.innerWidth);
                let square = document.createElement("div");
                square.style.width = width_ + 'px'; square.style.height = width_ + 'px';
                square.style.left = location + 'px'; 
                square.style.background = '#eee';
                square.style.animationDelay = Math.random() * 8 +'s';
                square.setAttribute('class', 'Square');
                abg_ref.current.appendChild(square);
            }
        }
    }

    useEffect(()=>{
        generate_stars();
    })

    /**Floating 2d squares */
    return ( 
        <div className='AboutBackGround' ref={abg_ref}>
        </div> 
    );
}

export default AboutBackGround ;