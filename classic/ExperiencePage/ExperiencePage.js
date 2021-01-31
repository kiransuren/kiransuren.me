import React, {useContext, useEffect} from "react";
import {useSpring, animated, useTrail} from 'react-spring';
import './ExperiencePage.css'
import MainContext from '../../MainContext';
import data from './experience.json';

const ExperienceCard = ({position, employer, description}) => {
    return(
        <div className="experienceCardWrapper">
            <div className="experienceTitle">
                <p className="experiencePosition">{position}</p>
                <span style={{fontSize:"3vw"}} >{"|"}</span>
                <p className="experienceEmployer">{ employer}</p>
            </div>
            <p className="experienceDescription">{description}</p>
        </div>
    )
}


const ExperiencePage = () => {
    const [scaleUnderline, setScaleUnderline, stopScale] = useSpring(() => ({from: {transform: "scale(0)", duration:3000}}));
    const [trail, setTrail, stopTrail] = useTrail(data.length, ()=>({from:{transform: "translate(-100vw,0vw)"},config:{ mass: 5, tension: 1000, friction: 200 }}))
    const AnimatedExperienceCard = animated(ExperienceCard);    
    const api = useContext(MainContext);
    
    useEffect(() =>{
        if(api.classicPage() === "EXPERIENCE"){
            setScaleUnderline({transform: "scale(1)", delay:300})
            setTrail({transform: "translate(0vw,0vw)", delay:100})
        }
    },[api.classicPage()])

    return(
        <animated.div id="experience-card">
            <p id="experienceTitle">Experiences</p>
            <animated.div id="experienceTitleUnderline" style={scaleUnderline}></animated.div>
            <div id="experience-container">
                {trail.map((props, index) => 
                   /*  <AnimatedExperienceCard style={props} position={data[index].position} employer={data[index].employer} description={data[index].description} /> */
                    <animated.div style={props} className="experienceCardWrapper">
                        <div className="experienceTitle">
                            <p className="experiencePosition">{data[index].position}</p>
                            <span style={{fontSize:"3vw"}} >{"|"}</span>
                            <p className="experienceEmployer">{data[index].employer}</p>
                        </div>
                        <p className="experienceDescription">{data[index].description}</p>
                    </animated.div>
                )
                }
            </div>
        </animated.div>
    )
}

export default ExperiencePage;
