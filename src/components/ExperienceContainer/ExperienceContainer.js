import React from 'react'
import { Element } from "react-scroll";
import Experience from '../ExperienceBox/Experience';
import "./ExperienceContainer.css";


const ExperienceContainer = () => {
    return (
        <Element className="experienceContainer" id="exp">
            <h1>Experience</h1>
            <div className='experienceContainer_info'>
               
                <Experience number="15+" title="Projects"  style={{backgroundColor:"#f64"}} />
                <p className='experience_p'>As a Beginner ,I am searching for a career in <span className='experience_span'>F</span>ull <span className='experience_span'>S</span>tack <span className='experience_span'>D</span>evloper</p>
                </div>

        </Element>
    )
}

export default ExperienceContainer;
