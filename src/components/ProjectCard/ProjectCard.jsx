import classNames from "classnames"
import "./ProjectCard.scss"
import { Picture } from "minista"

const ProjectCard = (props) => {
  const { className, project } = props

  return (
    <li className={classNames("project-card", className)}>
      <div className="project-card__header">
        <a href={project.url} target="_blank" className="project-card__image-wrapper">
          <Picture src={project.screenshot} formats={["webp", "inherit"]} formatOptions={"webp"} className="project-card__screenshot" />
        </a>
        {project.stack.length > 0 && (
          <ul className="project-card__stack">
            {project.stack.map((stack, index) => (
              <li className="project-card__stack-plash" key={index}>
                {stack}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="project-card__info">
        <h3 className="project-card__name">
          <a href={project.url} target="_blank" rel="noreferrer">
            {project.name}
          </a>
        </h3>
        <div className="project-card__description">{project.description}</div>
        {project.tasks.length > 0 && (
          <ul className="project-card__tasks">
            {project.tasks?.map((task, index) => (
              <li key={index} dangerouslySetInnerHTML={{ __html: task }}></li>
            ))}
          </ul>
        )}

        <a
          className="project-card__link"
          href={project.url}
          target="_blank"
          rel="noreferrer"
        >
          Посмотреть сайт
        </a>
      </div>
    </li>
  )
}

export default ProjectCard
