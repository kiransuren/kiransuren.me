import React, {useContext, useEffect, useState} from "react";
import {useSpring, animated, useTrail, useTransition} from 'react-spring';
import './TitleCard.css'

//Components

const TitleCard = () => {
    const props = useSpring({transform: "translate3D(0,0,0)", from: {transform: "translate3D(-60vw,0,0)"}, config:{mass:10, tension:200, friction:60}});

    function typeWriter(text, speed, i, elementID) {
        if (i < text.length) {
            if(text.charAt(i) === " "){
                document.getElementById(elementID).innerHTML = document.getElementById(elementID).innerHTML + "&nbsp";
            }else{
                document.getElementById(elementID).innerHTML += text.charAt(i);
            }
          i++;
          setTimeout(function(){typeWriter(text, speed, i, elementID)}, speed);
        }
      }
    
      useEffect(() => {
           setTimeout(function(){typeWriter('Programmer.     Designer.   Tech Enthusiast.',100,0,"taglineClassic")}, 1500);
        }, []
      );

    return(
        <animated.div style={props} id="title-card">
            <p className="title">Kiran</p>
            <div id="divider"></div>
            <p className="title">Surendran</p>
            <p><span id="taglineClassic"></span><span class="blinking">|</span></p>
            <p style={{position:"absolute",right:"20px", bottom:"10px",color:"red"}}>CURRENTLY UNDER CONSTRUCTION</p>
        </animated.div>
    )
}

export default TitleCard;
