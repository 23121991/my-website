import React from 'react'
import { Element } from 'react-scroll';
import Project from '../Project/Project';
import "./ProjectContainer.css";

const ProjectContainer = () => {
  const projects = [
    {
      img: "./assets/gmail_clone.png",
      title: "Gmail Clone",
      desc: "gmail clone app using React,Mongodb & Nodejs",
      link: "https://regal-liger-dce38b.netlify.app/",

    },
    {
      img: "./assets/quotes.png",
      title: "Quotes App",
      desc: "Quotes App using frontend Reactjs with backend Mongodb & Nodejs",
      link: "https://master--reliable-medovik-bb2dd4.netlify.app/",
    },
    
    {
      img: "./assets/todolist.png",
      title: "ToDoList-app",
      desc: "ToDoList-app using frontend Reactjs with backend Mongodb & Nodejs",
      link: "https://master--papaya-moonbeam-cd5f86.netlify.app/",

    },
    {
      img: "./assets/zomato.png",
      title: "Zomato",
      desc: "zomato search-filter-app",
      link: "https://spontaneous-arithmetic-cc6a4e.netlify.app/",

    },
    {
      img: "./assets/form.png",
      title: "form",
      desc: "creating form using reactjs ",
      link: "https://main--comfy-churros-d38d02.netlify.app/",
    },
    {
      img: "../assets/covid_tracker.png",
      title: "Covid Tracker",
      desc: "covid tracker using html,javscript & css",
      link: "https://neon-halva-433c3b.netlify.app/",

    }

  ]
  return (
    <Element className="projectContainer" id="projects">
      <h1><b>Projects</b></h1>
      <p>
        Here are my projects which I have done
      </p>
      <div className='projectContainer_projects'>
        {
          projects.map((project, index) => {
            return (
              <Project
                key={index}
                img={project.img}
                title={project.title}
                desc={project.desc}
                link={project.link}
              />

            )
          }
          )
        }

      </div>
    </Element>
  )
}

export default ProjectContainer
