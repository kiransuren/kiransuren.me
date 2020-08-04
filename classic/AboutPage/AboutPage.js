import React, {useContext, useEffect, useState} from "react";
import {useSpring, animated, useTrail, useTransition} from 'react-spring';
import './AboutPage.css'
import MainContext from '../../MainContext';
import SkillsView from '../SkillsView/SkillsView'

const aboutcont = [["Passionate Software Developer", "/public/codeabout.svg"], ["Electrical Meddler", "/public/electronicabout.svg"],["3D Design/Mechanical Tinkerer", "/public/mechanicalabout.svg"]]

const AboutPage = () => {
    const api = useContext(MainContext);
    const [props, set, stop] = useSpring(() => ({from: {transform: "translate(110vw,0vw)", visibility:"hidden"}, config:{mass:10, tension:200, friction:60}}));

    const [props2, set2, stop2] = useSpring(() => ({from: {transform: "translate(-50vw,0vw)"}, config:{ mass: 3, tension: 170, friction: 50 }}));
    const [scaleUnderline, setScaleUnderline, stopScale] = useSpring(() => ({from: {transform: "scale(0)", duration:3000}}));

    const [trail, setTrail, stopTrail] = useTrail(aboutcont.length, ()=>({from:{transform: "translate(-50vw,0vw)",visibility:"hidden"},config:{ mass: 5, tension: 1000, friction: 200 }}))

    useEffect(() =>{
        console.log(api.classicPage(),"cirrpage");
        if(api.classicPage() === "ABOUT"){
            console.log("ABOUT PAGE NETERERERERREER")
            set2({transform: "translate(0vw,0vw)",  delay:300});
            setScaleUnderline({transform: "scale(1)", delay:300})
            set({transform: "translate(0vw,0vw)",visibility:"visible"})
            setTrail({transform: "translate(0vw,0vw)",visibility:"visible", delay:100})
        }/* else{
            set2({transform: "translate(-50vw,0vw)"});
        } */
    })

    return(
        <animated.div id="about-card">
            <p class="glitch" id="aboutTitle">About Me</p>
            <animated.div id="aboutTitleUnderline" style={scaleUnderline}></animated.div>
            <div id="aboutContent">
                <div id="aboutContentTextWrapper" /* style={props2} */>
{/*                     {trail.map((props, index) => 
                        <animated.div className="aboutContentPairWrapper" style={props}>
                            <img className="aboutContentImg" src={require(aboutcont[index][1])} />
                            <p className="aboutContentPTag">{aboutcont[index][0]}</p>
                        </animated.div>
                    )} */}

            {trail.map((props, index) => 
                        <animated.div className="aboutContentPairWrapper" style={props}>
                            <img className="aboutContentImg" src={require(aboutcont[index][1])} />
                            <p className="aboutContentPTag">{aboutcont[index][0]}</p>
                        </animated.div>
                    )}
                </div>

                <animated.div id="aboutContentProfileWrapper" style={props}>
                    <img id="aboutContentProfile" src={require("../../public/profilepicsqr.png")}/>
                </animated.div> 

            </div>
            <div id="skillDirectionDiv">
                <p id="skillDirectionText">Check out my skills!</p>
                <img id="skillDirectionArrow" src={require("/public/downarrow.svg")}/>
            </div>
            <SkillsView />
        </animated.div>
    )
}

export default AboutPage;

require("/public/downarrow.svg")
require("/public/codeabout.svg")
require("/public/electronicabout.svg")
require("/public/mechanicalabout.svg")
{/* <div className="aboutContentPairWrapper">
<img className="about-img" src={require("/public/codeabout.svg")} />
<p>Passionate Software Developer</p>
</div>
<div className="aboutContentPairWrapper">
<img className="about-img" src={require("/public/electronicabout.svg")} />
<p>Electrical Meddler</p>
</div>
<div className="aboutContentPairWrapper">
<img className="about-img" src={require("/public/mechanicalabout.svg")} />
<p>3D Design/Mechanical Tinkerer</p>
</div> */}