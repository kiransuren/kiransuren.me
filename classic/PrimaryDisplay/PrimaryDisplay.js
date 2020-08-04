import React, {useContext, useEffect, useState} from "react";
import {useSpring, animated, useTrail, useTransition} from 'react-spring';
import './PrimaryDisplay.css'
import Particles from 'react-particles-js';

//Components
import Navbar from '../Navbar/Navbar';
import TitleCard from '../TitleCard/TitleCard';
import AboutPage from '../AboutPage/AboutPage'
import ProjectPage from '../ProjectPage/ProjectPage'
import ExperiencePage from '../ExperiencePage/ExperiencePage'
import MainContext from '../../MainContext'

const PrimaryDisplay = () => {
    const api = useContext(MainContext);


    const renderPage = () =>{
        if (api.classicPage()==="HOME"){
            return <TitleCard/>
        }else if(api.classicPage()==="ABOUT"){
            return <AboutPage />
        }else if(api.classicPage()==="PROJECT"){
            return <ProjectPage />
        }else if(api.classicPage()==="EXPERIENCE"){
            return <ExperiencePage />
        }
    }

    const onToggleDown = (event) =>{
        api.setExpMode(true);
        console.log(api.expMode());
    }
    

    return(
        <MainContext.Provider value={api}>
            <animated.div id="primary-div">
                <Particles style={{'z-index':-10, position:'fixed' }} />
                <Navbar />
                <TitleCard/>
                <div className="division"></div>
                <AboutPage />
                <div className="division"></div>
                <ProjectPage />
                <div className="division"></div>
                <ExperiencePage />
                {/* <input onMouseDown={onToggleDown} value="Feeling Adventurous? Try Experimental Mode" type="button" id="modeToggle"/> */}
            </animated.div>
        </MainContext.Provider>
    )
}

export default PrimaryDisplay;



    /*const transitions = useTransition(classicPage(), null, {
        from: { position: 'absolute', opacity: 0, backgroundColor:"white" },
        enter: { opacity: 1, backgroundColor:"black" },
        leave: { opacity: 0,  backgroundColor:"white" },
    })
    return transitions.map(({ item, key, props }) => {
            if (item==="HOME"){
                return <TitleCard style={props}/>
            }else if(item==="ABOUT"){
                return <AboutPage style={props} />
            }
        });
    */