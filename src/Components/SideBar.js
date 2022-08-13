import {React, useEffect, useRef} from 'react'
import './CSS/SideBar.css'

const icons = [
    {class: "fa-brands fa-square-facebook", link: "https://www.facebook.com/matthew.lian.37",color: "#4267B2"},
    {class: "fa-brands fa-square-github", link: "https://github.com/Mattli8312",color: "#FFA500"},
    {class: "fa-brands fa-linkedin", link: "https://www.linkedin.com/in/matthew-lian-9a33871a0/",color: "#0072b1"},
    {class: "fa-solid fa-envelope", link: "mailto:mlian5@illinois.edu",color: "#f00"}
];

const SideBar = () => {
    const sidebar = useRef();
    useEffect(()=>{
        /**For hover animations */
        if(sidebar.current !== undefined){
            let delay = 1.5;
            sidebar.current.innerHTML = '';
            for(const i of icons){
                const icon = document.createElement("i");
                const anchor = document.createElement("a"); anchor.setAttribute("href", i.link); anchor.style.overflow = 'hidden'
                icon.setAttribute("class", i.class);
                icon.addEventListener("mouseover", ()=>{
                    icon.style.background = i.color;
                })
                icon.addEventListener("mouseleave", ()=>{
                    icon.style.background = 'none';
                })
                icon.style.animation = `${delay}s explode`; delay += 0.5;
                anchor.append(icon);
                sidebar.current.appendChild(anchor);
            }
        }
    },[]);
    return (
        <div className = "SideBar" ref={sidebar}>
        </div>
    )
}

export default SideBar;