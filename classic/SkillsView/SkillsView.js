import React, {Suspense, useEffect}  from 'react'
import './SkillsView.css'
import './HoverableImage.css'

import data from './dataCat.json'

const HoverableImage = ({source, text}) => {
    return(
        <div className="hoverable-image">
            <img className="hovimg-img" src={require( "../.."+source )} />
            <p className="hovimg-text"><span className="hovimg-textwrapper">{text}</span></p>
        </div>
    )
}


const SkillsView = () => {
    useEffect(()=>{console.log(data[0])})
    return(
        <div id="skillview-container">

            <div className="skill-container">
                <h1 className="skill-label">Languages</h1>
                <div className="skill-image-container">
                    {data[0].languages.map(skill => (
                        <HoverableImage source={skill.source} text={skill.text}/>
                    ))}
                </div>
            </div>

            <div className="skill-container">
                <h1 className="skill-label">Web Development Tools</h1>
                <div className="skill-image-container">
                    {data[1].webskills.map(skill => (
                        <HoverableImage source={skill.source} text={skill.text}/>
                    ))}
                </div>

            </div>

            <div className="skill-container">
                <h1 className="skill-label">Python Tools</h1>
                <div className="skill-image-container">
                    {data[2].pythonskills.map(skill => (
                        <HoverableImage source={skill.source} text={skill.text}/>
                    ))}
                </div>
            </div>


            <div className="skill-container">
                <h1 className="skill-label">Other Tools</h1>
                <div className="skill-image-container">
                    {data[3].otherskills.map(skill => (
                        <HoverableImage source={skill.source} text={skill.text}/>
                    ))}
                </div>
            </div>
 
           {/*  <div id="pythonskills">
                {data[0].pythonskills.map(skill => (
                    <HoverableImage source={skill.source} text={skill.text}/>
                ))}
            </div>

            <div id="cppskills">
                {data[1].cppskills.map(skill => (
                    <HoverableImage source={skill.source} text={skill.text}/>
                ))}
            </div>

            <div id="javascriptskills">
                 {data[2].javascriptskills.map(skill => (
                    <HoverableImage source={skill.source} text={skill.text}/>
                ))}
            </div>

            <div id="javaskills">
                {data[3].javaskills.map(skill => (
                    <HoverableImage source={skill.source} text={skill.text}/>
                ))}
            </div>

            <div id="csharpskills">
            {data[4].csharpskills.map(skill => (
                    <HoverableImage source={skill.source} text={skill.text}/>
                ))}
            </div>

            <div id="swiftskills">
            {data[5].swiftskills.map(skill => (
                    <HoverableImage source={skill.source} text={skill.text}/>
                ))}
            </div>

            <div id="octaveskills">
            {data[6].octaveskills.map(skill => (
                    <HoverableImage source={skill.source} text={skill.text}/>
                ))}
            </div>

            <div id="gitskills">
            {data[7].gitskills.map(skill => (
                    <HoverableImage source={skill.source} text={skill.text}/>
                ))}
            </div>

            <div id="otherskills">
            {data[8].otherskills.map(skill => (
                    <HoverableImage source={skill.source} text={skill.text}/>
                ))}
            </div>

 */}
        </div>
    )
}

export default SkillsView;



//Requires
require("../../public/SkillsLogo/python.svg")
require("../../public/SkillsLogo/tensorflow.png")
require("../../public/SkillsLogo/matplotlib.svg")
require("../../public/SkillsLogo/scipy.png")
require("../../public/SkillsLogo/scikitlearn.svg")
require("../../public/SkillsLogo/pygame.gif")
require("../../public/SkillsLogo/pandas.svg")
require("../../public/SkillsLogo/numpy.png")

require("../../public/SkillsLogo/cpp.svg")
require("../../public/SkillsLogo/ros.svg")
require("../../public/SkillsLogo/arduino.svg")

require("../../public/SkillsLogo/javascript.svg")
require("../../public/SkillsLogo/html.svg")
require("../../public/SkillsLogo/css.svg")
require("../../public/SkillsLogo/react.svg")
require("../../public/SkillsLogo/threejs.png")
require("../../public/SkillsLogo/expressjs.png")
require("../../public/SkillsLogo/nodejs.svg")
require("../../public/SkillsLogo/reactspring.gif")
require("../../public/SkillsLogo/passportjs.png")
require("../../public/SkillsLogo/firebase.svg")
require("../../public/SkillsLogo/firebase.png")
require("../../public/SkillsLogo/redux.png")


require("../../public/SkillsLogo/java.png")
require("../../public/SkillsLogo/javafx.png")

require("../../public/SkillsLogo/csharp.svg")
require("../../public/SkillsLogo/unity.svg")

require("../../public/SkillsLogo/swift.svg")
require("../../public/SkillsLogo/iosappdev.png")

require("../../public/SkillsLogo/octave.svg")

require("../../public/SkillsLogo/git.svg")
require("../../public/SkillsLogo/git2.svg")
require("../../public/SkillsLogo/linux.svg")
require("../../public/SkillsLogo/archlinux.svg")
require("../../public/SkillsLogo/jupyter.svg")
require("../../public/SkillsLogo/mongodb.svg")
require("../../public/SkillsLogo/blender.svg")
require("../../public/SkillsLogo/onshape.svg")
require("../../public/SkillsLogo/solidworks.svg")

require("../../public/SkillsLogo/keras.png")