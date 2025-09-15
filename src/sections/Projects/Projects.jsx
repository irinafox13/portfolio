import Section from "@/layouts/Section"
import "./Projects.scss"
import {projectsList} from "./ProjectsList"
import ProjectCard from "@/components/ProjectCard"

const Projects = () => {
  return (
    <Section title="Проекты" titleId="projects-title"
    id="projects" positionTitle="center">
      <ul className="projects__list">
        {projectsList.map((project) => (
          <ProjectCard
            className="projects__item"
            key={project.id}
            project={project}
          />
        ))}
      </ul>
    </Section>
  )
}

export default Projects
