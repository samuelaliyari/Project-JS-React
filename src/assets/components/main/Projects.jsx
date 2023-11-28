import Techstack from "../independent/Techstack";
import Card from "./Card";
import './Projects.css'

const Projects = () => {
    return ( 
        <section className="projects">
            <h2>PROJECTS</h2>
            <div>
                <Card
                    title = {'Project1'}
                    text = {'amet, consectetur adipisicing elit. Ullam incidunt obcaecati, similique optio eaque repellat tempora culpa quos, quo est veniam alias quae, vitae eum'}
                    techstack = {Techstack}
                />
                <Card
                    title = {'Project2'}
                    text = {'amet, consectetur adipisicing elit. Ullam incidunt obcaecati, similique optio eaque repellat tempora culpa quos, quo est veniam alias quae, vitae eum'}
                    techstack = {Techstack}
                />
                <Card
                    title = {'Project3'}
                    text = {'amet, consectetur adipisicing elit. Ullam incidunt obcaecati, similique optio eaque repellat tempora culpa quos, quo est veniam alias quae, vitae eum'}
                    techstack = {Techstack}
                />
            </div>
        </section>
    );
}

export default Projects;