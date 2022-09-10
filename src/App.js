import NavBar from "./components/Navbar";
import Introduction from "./components/Introduction";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import React from "react";

const mainSkills = ["HTML", "CSS", "JavaScript", "TypeScript", "ReactJS"];
const otherSkills = [
  "Git and Github",
  "Restful APIS",
  "problem solving",
  "SQL and noSQL databases",
];
const softSkills = [
  "Cooperative in team works",
  "Works under pressure",
  "Good at communication skills",
  "Motivated to learn",
  "Integrity",
];
const myProjects = [
  {
    title: "CSS tasks",
    languages: "CSS and HTML",
    description:
      "during my internship at Foothill i designed 6 CSS tasks including login Page,full site,movie card and more.",
    link: "https://github.com/Mohammad-Awadallah/CSS-Tasks",
  },
  {
    title: "Vanilla js Todo List",
    languages: "Javascript,CSS and HTML",
    description:
      "during my internship at Foothill i designed a todo list app to apply what i have learnt in javascript",
    link: "https://github.com/Mohammad-Awadallah/To-Do-list-Task",
  },
  {
    title: "Todo list React",
    languages: "Reactjs",
    description:
      "To do list app to add,remove todos connected to cloud database using firebase.",
    link: "https://github.com/Mohammad-Awadallah/Todo-list-app-react-",
  },
  {
    title: "Gym tracker React",
    languages: "Reactjs",
    description:
      "A gym tracker app which makes you add your workout sets and reps, it includes react routes and authentication using firebase.",
    link: "https://github.com/Mohammad-Awadallah/Gym-project-react",
  },
  {
    title: "Socket Server Project",
    languages: "Python,HTML,CSS",
    description:
      "A network course Project which is a frontend application connected to a backend server using sockets in Python.",
    link: "https://github.com/Mohammad-Awadallah/Network-proj",
  },
  {
    title: "Find optimal way between 2 cities",
    languages: "Python",
    description:
      "An AI course Project to find the optimal was between 2 or more palestinian cities using diffrenet kinds of search such as DFS,BFS,greedy and A*.",
    link: "https://github.com/Mohammad-Awadallah/Ai-search",
  }
  ,
  {
    title: "Real time Course projects",
    languages: "C",
    description:
      "2 Real time projects about using multi processing and multi threading.",
    link: "https://github.com/Mohammad-Awadallah/Real-time-Projects",
  }

];


function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Introduction />
      <Skills
        mainSkills={mainSkills}
        otherSkills={otherSkills}
        softSkills={softSkills}
      />
      <Projects myProjects={myProjects} />
      <ContactMe />
      <Footer />
      
    </React.Fragment>
  );
}

export default App;
