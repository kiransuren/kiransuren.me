import React, {useContext, useEffect} from "react";
import {useSpring, animated, useTrail} from 'react-spring';
import './AboutPage.css'
import MainContext from '../../MainContext';
import SkillsView from '../SkillsView/SkillsView'


const aboutcont = [["Passionate Software Developer", "./public/codeabout.svg"], ["Electrical Meddler", "./public/electronicabout.svg"],["3D Design/Mechanical Tinkerer", "./public/mechanicalabout.svg"]]

const AboutPage = () => {
    const api = useContext(MainContext);
    const [props, set, stop] = useSpring(() => ({from: {transform: "translate(110vw,0vw)", visibility:"hidden"}, config:{mass:10, tension:200, friction:60}}));
    const [scaleUnderline, setScaleUnderline, stopScale] = useSpring(() => ({from: {transform: "scale(0)", duration:3000}}));
    const [trail, setTrail, stopTrail] = useTrail(aboutcont.length, ()=>({from:{transform: "translate(-50vw,0vw)",visibility:"hidden"},config:{ mass: 5, tension: 1000, friction: 200 }}))

    useEffect(() =>{
        if(api.classicPage() === "ABOUT"){
            setScaleUnderline({transform: "scale(1)", delay:300})
            set({transform: "translate(0vw,0vw)",visibility:"visible"})
            setTrail({transform: "translate(0vw,0vw)",visibility:"visible", delay:100})
        }
    }, [api.classicPage()])

    return(
        <animated.div id="about-card">
            <p class="glitch" id="aboutTitle">About Me</p>
            <animated.div id="aboutTitleUnderline" style={scaleUnderline}></animated.div>
            <div id="aboutContent">
                <div id="aboutContentTextWrapper">
                    {trail.map((props, index) => 
                                <animated.div className="aboutContentPairWrapper" style={props}>
                                    <img className="aboutContentImg" src={aboutcont[index][1]} />
                                    <p className="aboutContentPTag">{aboutcont[index][0]}</p>
                                </animated.div>
                    )}
                </div>


            </div>
            <div id="skillDirectionDiv">
                <p id="skillDirectionText">Check out my skills!</p>
                <img id="skillDirectionArrow" src={"/public/downarrow.svg"}/>
            </div>
            <SkillsView />
        </animated.div>
    )
}

export default AboutPage;

