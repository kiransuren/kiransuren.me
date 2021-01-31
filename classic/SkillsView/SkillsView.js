import React from 'react'
import './SkillsView.css'
import './HoverableImage.css'

import data from './dataCat.json'

const HoverableImage = ({source, text}) => {
    return(
        <div className="hoverable-image">
            <img className="hovimg-img" src={source} />
            <p className="hovimg-text"><span className="hovimg-textwrapper">{text}</span></p>
        </div>
    )
}


const SkillsView = () => {
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

        </div>
    )
}

export default SkillsView;