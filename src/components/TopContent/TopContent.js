import React from 'react'
import { Link } from 'react-scroll';
import "./TopContent.css";

const TopContent = () => {
    return (
        <div className='topContent'>
            <div className="topContent_container">
                <h1>Mr. Saravanan</h1>
                <p>Certified Web Developer</p>
                <a href='https://drive.google.com/file/d/1feokzkkA-oF-ZMB1WoHb50mZgfCI5dCI/view?usp=share_link'>
                    <button className='topContent_downloadButton'>View to Download Cv
                   </button>
                </a>
                <Link to="projects" smooth={true} duration={500}>
                    <button className='topContent_myProjects'>My Projects</button>
                </Link>

            </div>

        </div>
    )
}

export default TopContent
