import "./Section.scss"
import classNames from "classnames"

const Section = (props) => {
  const { className, id, title, titleId, positionTitle = "left", children } = props
  return (
    <section
      className={classNames(className, "section container")}
      id={id}
      aria-labelledby={titleId}
    >
      <header className="section__header">
        <h2
          className={classNames("section__title h3", {
            [`section__title--${positionTitle}`]: positionTitle,
          })}
          id={titleId}
        >
          {title}
        </h2>
      </header>

      <div className="section__body">{children}</div>
    </section>
  )
}

export default Section
