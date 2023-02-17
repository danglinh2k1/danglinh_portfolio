import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="WEBSITE-UI"
          des=" Project: is a first interface created by HTML and CSS when starting to learn, cut the interface from the website of the University of Natural Resources and Environment."
          src={projectOne}
        />
        <ProjectsCard
          title="MY-CARD"
          des=" Project : My card is built from HTML & CSS and designed with Neumorphism UI style. A place to store information so people can contact me quickly."
          src={projectTwo}
        />
        <ProjectsCard
          title="MY-PROFILE"
          des=" Project : My-Profile, that's the website you're showing right in front of your eyes, built using reactjs and tailwind CSS. A place full of information about myself."
          src={projectThree}
        />
       
      </div>
    </section>
  );
}

export default Projects