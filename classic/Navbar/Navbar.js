import React, {useState, useContext, useEffect, useRef} from "react";
import {useSpring, animated} from 'react-spring'
import './Navbar.css'
import MainContext from '../../MainContext';
//DONT MESS WITH THE TEMPLATE STRING
const Navbar = () => {
    const api = useContext(MainContext);
    const scrollToRef = (ref) => window.scrollTo({top:ref.offsetTop+2, behavior: 'smooth' });
    var primaryref = document.getElementById("title-card");
    var aboutref = document.getElementById("about-card");
    var projectref = document.getElementById("project-card");
    var experienceref = document.getElementById("experience-card");
    let navref = useRef(null);

    useEffect(() => {
        document.addEventListener('scroll', trackScrolling);
        aboutref = document.getElementById("about-card");
        primaryref = document.getElementById("title-card");
        projectref = document.getElementById("project-card");
        experienceref = document.getElementById("experience-card");
        if(betweenBottomDiv(experienceref)){
            api.setClassicPage("EXPERIENCE");
        } else if(betweenBottomDiv(projectref)){
            api.setClassicPage("PROJECT");
        }  else if(betweenBottomDiv(aboutref)){
            api.setClassicPage("ABOUT");
        } else if(betweenBottomDiv(primaryref)){
            api.setClassicPage("HOME");
        }
    }, []);


    useEffect(() => {
        document.addEventListener('scroll', trackScrolling);
        aboutref = document.getElementById("about-card");
        primaryref = document.getElementById("title-card");
        projectref = document.getElementById("project-card");
        experienceref = document.getElementById("experience-card");
        const marg = 0;
    }, [api.classicPage()]);



    const betweenDiv = (divRef) => {
        const margin = 0;
        return ((window.scrollY >= divRef.offsetTop-margin)  && (window.scrollY <= (divRef.offsetTop+divRef.offsetHeight)))
    }

    const betweenBottomDiv = (divRef) => {
        const margin = 0;
        return  ((window.scrollY + window.innerHeight) >= (divRef.offsetTop) +margin)
    }



    const trackScrolling = () => {
        const off = 600;
        const marg = 300;

        if(betweenBottomDiv(experienceref)){
            api.setClassicPage("EXPERIENCE");
        } else if(betweenBottomDiv(projectref)){
            api.setClassicPage("PROJECT");
        }  else if(betweenBottomDiv(aboutref)){
            api.setClassicPage("ABOUT");
        } else if(betweenBottomDiv(primaryref)){
            api.setClassicPage("HOME");
        }
        
        if(window.scrollY > primaryref.offsetTop + primaryref.offsetHeight - off){
            navref.current.id = "aboutNavbar";
        }
        else if(window.scrollY < primaryref.offsetTop + primaryref.offsetHeight + off){
            navref.current.id = "splashNavbar";
        }
        if(window.scrollY > aboutref.offsetTop + aboutref.offsetHeight){
            navref.current.id = "projectNavbar";
        }
    }

    const onAboutDown = (event) =>{
        aboutref = document.getElementById("about-card");
        aboutref.scrollIntoView({ 
            behavior: 'smooth' 
          });
        //scrollToRef(aboutref);
    }
    const onProjectsDown = (event) =>{
        projectref = document.getElementById("project-card");
        projectref.scrollIntoView({ 
            behavior: 'smooth' 
          });
        //scrollToRef(projectref);
    }
    const onExperienceDown = (event) =>{
        experienceref = document.getElementById("experience-card");
        experienceref.scrollIntoView({ 
            behavior: 'smooth' 
          });
        //scrollToRef(experienceref);
    }
    const onHomeDown = (event) =>{
        primaryref = document.getElementById("title-card");
        primaryref.scrollIntoView({ 
            behavior: 'smooth' 
          });
        //scrollToRef(primaryref);
    }

    return(
        <animated.nav id="splashNavbar" className="basenav" ref={navref}>
            <div id="contactButtons" >
                <a className="contactA" href="https://github.com/kiransuren" target="_blank">
                    <img className="contacts" src={require("../../public/github.png")}/>
                </a>
                <a className="contactA" href="https://www.linkedin.com/in/kiran-surendran1" target="_blank">
                    <img className="contacts" src={require("../../public/linkedin.png")}/>
                </a>
                <a className="contactA" href="mailto:kirank.suren@gmail.com" target="_blank">
                    <img className="contacts" src={require("../../public/email.png")}/>
                </a>
            </div>
            <animated.div id="navButtons">
                <animated.input onMouseDown={onAboutDown} value="About" type="button" className="navbutton"/>
                <animated.input onMouseDown={onProjectsDown} value="Projects" type="button" className="navbutton"/>
                <animated.input onMouseDown={onExperienceDown} value="Experience" type="button" className="navbutton"/>
                <animated.input onMouseDown={onHomeDown} value="Home" type="button" className="navbutton"/>
            </animated.div>
        </animated.nav>
    )
}


export default Navbar;