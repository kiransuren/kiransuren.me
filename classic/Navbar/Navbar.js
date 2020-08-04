import React, {useState, useContext, useEffect, useRef} from "react";
import {useSpring, animated} from 'react-spring'
import './Navbar.css'
import MainContext from '../../MainContext';
//DONT MESS WITH THE TEMPLATE STRING
const Navbar = () => {
    const api = useContext(MainContext);
    const scrollToRef = (ref) => window.scrollTo(0, ref.offsetTop+2);
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
        console.log("HOME IS TRUE");
        if(betweenBottomDiv(experienceref)){
            console.log("AT EXPERIENCE");
            api.setClassicPage("EXPERIENCE");
        } else if(betweenBottomDiv(projectref)){
            console.log("AT PROJECT");
            api.setClassicPage("PROJECT");
        }  else if(betweenBottomDiv(aboutref)){
            console.log((window.scrollY + window.innerHeight) >= (aboutref.offsetTop))
            console.log("AT ABOUT");
            api.setClassicPage("ABOUT");
        } else if(betweenBottomDiv(primaryref)){
            console.log("AT HOME");
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
        console.log("HOME IS TRUE");
    }, [api.classicPage()]);



    const betweenDiv = (divRef) => {
        const margin = 0;
        return ((window.scrollY >= divRef.offsetTop-margin)  && (window.scrollY <= (divRef.offsetTop+divRef.offsetHeight)))
    }

    const betweenBottomDiv = (divRef) => {
        console.log(divRef.offsetTop)
        const margin = 0;
        return  ((window.scrollY + window.innerHeight) >= (divRef.offsetTop) +margin)
    }



    const trackScrolling = () => {
        const off = 600;
        const marg = 300;
       /*  if(betweenDiv(window, primaryref, marg)){
            console.log("AT HOME");
            api.setClassicPage("HOME");
        }
        else if(betweenDiv(window, aboutref,marg)){
            console.log("AT ABOUT");
            api.setClassicPage("ABOUT");
        }
        else if(betweenDiv(window, projectref,marg)){
            console.log("AT PROJECT");
            api.setClassicPage("PROJECT");
        }
        else if(betweenDiv(window, experienceref,marg)){
            console.log("AT EXPERIENCE");
            api.setClassicPage("EXPERIENCE");
        } */

        if(betweenBottomDiv(experienceref)){
            console.log("AT EXPERIENCE");
            api.setClassicPage("EXPERIENCE");
        } else if(betweenBottomDiv(projectref)){
            console.log("AT PROJECT");
            api.setClassicPage("PROJECT");
        }  else if(betweenBottomDiv(aboutref)){
            console.log((window.scrollY + window.innerHeight) >= (aboutref.offsetTop))
            console.log("AT ABOUT");
            api.setClassicPage("ABOUT");
        } else if(betweenBottomDiv(primaryref)){
            console.log("AT HOME");
            api.setClassicPage("HOME");
        }

       /*  if(betweenBottomDiv(primaryref)){
            console.log("AT HOME");
            api.setClassicPage("HOME");
        }
        else if(betweenBottomDiv(aboutref)){
            console.log((window.scrollY + window.innerHeight) >= (aboutref.offsetTop))
            console.log("AT ABOUT");
            api.setClassicPage("ABOUT");
        }
        else if(betweenBottomDiv(projectref)){
            console.log("AT PROJECT");
            api.setClassicPage("PROJECT");
        }
        else if(betweenBottomDiv(experienceref)){
            console.log("AT EXPERIENCE");
            api.setClassicPage("EXPERIENCE");
        } */
        
        if(window.scrollY > primaryref.offsetTop + primaryref.offsetHeight - off){
            navref.current.id = "aboutNavbar";
            //navref.current.style.backgroundColor = "#080808";
        }
        else if(window.scrollY < primaryref.offsetTop + primaryref.offsetHeight + off){
            navref.current.id = "splashNavbar";
            //navref.current.style.backgroundColor = "#08080800";
        }
        if(window.scrollY > aboutref.offsetTop + aboutref.offsetHeight){
            navref.current.id = "projectNavbar";
            //navref.current.style.backgroundColor = "#080808";
        }
        console.log(api.classicPage());
        
    }

    const onAboutDown = (event) =>{
        aboutref = document.getElementById("about-card");
        console.log(aboutref)
        scrollToRef(aboutref);
        //api.setClassicPage("ABOUT");
    }
    const onProjectsDown = (event) =>{
        projectref = document.getElementById("project-card");
        console.log(projectref)
        scrollToRef(projectref);
        //api.setClassicPage("PROJECT");
    }
    const onExperienceDown = (event) =>{
        experienceref = document.getElementById("experience-card");
        console.log(experienceref)
        scrollToRef(experienceref);
        //api.setClassicPage("EXPERIENCE");
    }
    const onHomeDown = (event) =>{
        primaryref = document.getElementById("title-card");
        console.log(primaryref)
        //api.setClassicPage("HOME");
        scrollToRef(primaryref);
    }

    const onToggleExperimental = (event) =>{
        console.log(api.expMode());
        api.setExpMode(!api.expMode());
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
                {/* <input value="/toggleEXP" type="button" onClick={onToggleExperimental}/> */}
            </animated.div>
        </animated.nav>
    )
}


export default Navbar;