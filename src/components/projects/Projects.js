import React from "react";
import Title from "../layouts/Title";
import {
  projectOne,
  projectTwo,
  projectThree,
  projectFour,
  projectFive,
  projectSix,
} from "../../assets/index";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  const url = {
    pr1: "https://github.com/danglinh2k1/my_card.git",
    pr2: "https://github.com/danglinh2k1/my_card.git",
    pr3: "https://github.com/danglinh2k1/my_card.git",
    pr4: "https://github.com/danglinh2k1/weather_api.git",
    pr5: "https://github.com/danglinh2k1/dlvmedia.git",
    pr6: "https://todo-list-tau-topaz.vercel.app/",
  };
  const website = {
    wb1: "https://danglinh2k1.github.io/my_card/",
    wb2: "https://danglinh2k1.github.io/my_card/",
    wb3: "https://danglinh2k1.github.io/my_card/",
    wb4: "https://weather-api-steel-beta.vercel.app/",
    wb5: "https://mdlmedia123.id.vn/",
    wb6: "https://todo-list-tau-topaz.vercel.app/",
  };
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
          url={url.pr1}
          website={website.wb1}
        />
        <ProjectsCard
          title="MY-CARD"
          des=" Project : My card is built from HTML & CSS and designed with Neumorphism UI style. A place to store information so people can contact me quickly."
          src={projectTwo}
          url={url.pr1}
          website={website.wb1}
        />
        <ProjectsCard
          title="MY-PROFILE"
          des=" Project : My-Profile, that's the website you're showing right in front of your eyes, built using reactjs and tailwind CSS. A place full of information about myself."
          src={projectThree}
          url={url.pr1}
          website={website.wb1}
        />
        <ProjectsCard
          title="Weather-API"
          des=" Project : Weather-API, a project about weather forecasting in cities around the world using OpenWeatherMap API and Reactjs."
          src={projectFour}
          url={url.pr4}
          website={website.wb4}
        />
        <ProjectsCard
          title="MDLMdia-web"
          des=" Project : MDLMedia-web, The website introduces the company and I am one of the founding and operating members. The website is designed in a simple and modern way, bringing a sense of comfort to users."
          src={projectFive}
          url={url.pr5}
          website={website.wb5}
        />
        <ProjectsCard
          title="TODO-list-web"
          des=" Project : Project todo list is written using nestjs and Tailwind css technology."
          src={projectSix}
          url={url.pr6}
          website={website.wb6}
        />
      </div>
    </section>
  );
};

export default Projects;
