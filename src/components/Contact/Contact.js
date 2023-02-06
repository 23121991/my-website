import { IconButton } from '@mui/material';
import React from 'react'
import { Element } from "react-scroll";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import "./Contact.css";

const Contact = () => {
    return (
        <Element className='contact'id="contact">
            <h1 className='contact_title'>Contact</h1>
            <div className='contact_container'>
                <p>
                <CallIcon/> Mobile No: <span>8667811645</span>
                </p>
                <p>
                   <EmailIcon/> Email: <span>sb9489.rs@gmail.com</span>

                </p>
                <p>
                <EmailIcon/> ALternate email:<span>sb9489.rs@outlook.com</span>

                </p>
                <p>
                    Github username:<span>23121991</span>

                </p>
                
                <div className='contact__icons'>
                    <a href="linked.com">
                        <IconButton>
                            <LinkedInIcon 
                            color="info"
                            />
                        </IconButton>
                        <IconButton>
                            <GitHubIcon  
                            color="success"/>
                        </IconButton>
                    </a>
                </div>
            </div>
        </Element>
    )
}

export default Contact
