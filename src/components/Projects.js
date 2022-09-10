import "./Projects.css"
import { SocialIcon } from 'react-social-icons';

const Projects = (props)=>{

   

    return <div id="projectSection" className='projects'>
        <h2>Projects</h2>
        <ul className='plist'>
            {props.myProjects.map(project =>{
             return   <li key={project.title} className="element">
                    <h3>{project.title}</h3>
                    <h4>Languages: {project.languages}</h4>
                    <p>{project.description}</p>
                    
                    <a href={project.link} ><SocialIcon url={project.link} /></a>
                   
                </li>
            })}
        </ul>

    </div>
}

export default Projects