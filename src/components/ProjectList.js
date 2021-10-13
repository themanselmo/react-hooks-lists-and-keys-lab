import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);

  const projectList = projects.map(project => {
    return <ProjectItem 
              name={project.name} 
              about={project.about} 
              technologies={project.technologies}
              id={project.id}
            />
  })

  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{/* render ProjectItem components here */}
        {projectList}
      </div>
    </div>
  );
}

export default ProjectList;
