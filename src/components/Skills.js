import "./Skills.css"


const Skills = (props)=>{


    return <section className="skills" id="skillsSection">
        <h2 className="title">My Skills</h2>
        <div className='allSkills'>

        
        <div>
            <h3>Main Skills</h3>
            <ul>
            {props.mainSkills.map(skill =>{
                return <li key={skill}>{skill}</li>
            })}
        </ul></div>

        <div>
            <h3>Other Skills</h3>
        <ul>
            {props.otherSkills.map(skill =>{
                return <li key={skill}>{skill}</li>
            })}
        </ul>
        </div>
        <div>
            <h3>Soft Skills</h3>
            <ul>
            {props.softSkills.map(skill =>{
                return <li key={skill}>{skill}</li>
            })}
        </ul></div>
        
        
        </div>
        
    </section>

}

export default Skills