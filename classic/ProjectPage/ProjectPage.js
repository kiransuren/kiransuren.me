import React, {useContext, useEffect, useState} from "react";
import {useSpring, animated, useTrail, useTransition} from 'react-spring';
import './ProjectPage.css'
import MainContext from '../../MainContext';
import Tilt from 'react-parallax-tilt';
import data from './project.json';

const ProjectCard = ({source, projectname, description, link}) => {
    return(
        <div className="projectCardWrapper">
            <a href={link} target="_blank">
            {/* <img className="project-image" src={require(source)}/> */}
            <img className="project-image" src={source}/> 
            <div className="overlay">   
                <p className="projectName">{projectname}</p>
                <p className="projectDescription">{description}</p>
            </div>
            </a>
        </div>
    )
}

const ProjectPage = () => {
    const api = useContext(MainContext);
    const [scaleUnderline, setScaleUnderline, stopScale] = useSpring(() => ({from: {transform: "scale(0)", duration:3000}}));
    const [trail, setTrail, stopTrail] = useTrail(data.length, ()=>({from:{transform: "scale(0)"},config:{ mass: 1, tension: 600, friction: 100 }}))
    
    useEffect(() =>{
        if(api.classicPage() === "PROJECT"){
            setScaleUnderline({transform: "scale(1)", delay:300})
            setTrail({transform: "scale(1)", delay:100})
        }
    })

    return(
        <animated.div id="project-card">
            <p id="projectTitle">Projects</p>
            <animated.div id="projectTitleUnderline" style={scaleUnderline}></animated.div>

            <div id="project-container">
                {trail.map((props, index) => 
                <animated.div style={props} className="projectCardWrapper">
                            <a className="projectATag" href={data[index].link} target="_blank">
                            {/* <img className="project-image" src={require(source)}/> */}
                            <img className="project-image" src={data[index].firebaselink}/> 
                            <div className="overlay">   
                                <p className="projectName">{data[index].name}</p>
                                <p className="projectDescription">{data[index].description}</p>
                            </div>
                            </a>
                </animated.div>
                )}
{/*                            {data.map(proj => (
                        <ProjectCard projectname={proj.name} description={proj.description} source={proj.firebaselink} link={proj.link}/>
                    ))
                    } */}
               
            </div>
        </animated.div>
    )
}

export default ProjectPage;


require("../../public/demos/croppedfoodster.gif");
require("../../public/demos/LiveLaunchDemo.gif");
require("../../public/demos/deadwatchdemo.gif")