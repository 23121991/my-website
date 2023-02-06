import React from 'react';
import { Element } from 'react-scroll';
import allskill from "../../assets/allskill.webp";
import { LinearProgress } from "@mui/material";
import './SkillContainer.css';


const SkillContainer = () => {
    return (

        <Element className='skillContainer' id="skills">
            <div className='skillContainer_image'>
                <img src={allskill} alt="" /> </div>
            <div className='skillContainer_text'>
                <h2 className='mainskill_header'>SKILLSET</h2>
                <div className='skillContainer_skillSet'>
                    <h5 className='skill_header1'>REACT</h5><p>75%</p>
                    <div className='skillContainer_slider1'>
                        <LinearProgress
                            variant="determinate"
                            value={75}
                            color="primary"  />
                    </div>
                </div>
                <div className='skillContainer_skillSet'>
                    <h5 className='skill_header2'>HTML</h5> <p>70%</p>
                   <div className='skillContainer_slider skillContainer_slider2'>
                        <LinearProgress
                            variant="determinate"
                            value={70}
                            color="success" />
                    </div>
                </div>
                <div className='skillContainer_skillSet'>
                    <h5 className='skill_header3'>JAVASCRIPT</h5><p>65%</p>
                    <div className='skillContainer_slider skillContainer_slider3'>
                        <LinearProgress
                            variant="determinate"
                            value={65}
                            color="primary" />
                    </div>
                </div>
                <div className='skillContainer_skillSet'>
                    <h5 className='skill_header4'>CSS</h5><p>60%</p>
                    <div className='skillContainer_slider skillContainer_slider4'>
                        <LinearProgress
                            variant="determinate"
                            value={60}
                            color="secondary" />
                    </div>
                </div>
                <div className='skillContainer_skillSet'>
                    <h5 className='skill_header5'>NODE JS</h5><p>70%</p>
                    <div className='skillContainer_slider skillContainer_slider5'>
                        <LinearProgress
                            variant="determinate"
                            value={70}
                            color="success" />
                    </div>
                </div>
                <div className='skillContainer_skillSet'>
                    <h5 className='skill_header6'>MY SQL</h5><p>85%</p>
                    <div className='skillContainer_slider skillContainer_slider6'>
                        <LinearProgress
                            variant="determinate"
                            value={85}
                            color="secondary" />
                    </div>
                </div>
                <div className='skillContainer_skillSet'>
                    <h5 className='skill_header7'>MONGODB</h5><p>75%</p>
                <div className='skillContainer_slider skillContainer_slider7'>
                        <LinearProgress variant="determinate"
                            value={75}
                            color="inherit" />
                    </div>
                </div>


            </div>
        </Element>
    )
}

export default SkillContainer
