import classNames from "classnames"
import "./Banner.scss"

const Banner = () => {
  const menuItems = [
    {
      name: "обо мне",
      id: "about",
    },
    {
      name: "проекты",
      id: "projects",
    },    
    {
      name: "контакты",
      id: "contacts",
    },
  ]

  return (
    <div className="banner">
      <div className="banner__inner container">
        <nav className="banner__side-nav">
          <ul className="banner__menu" data-js-menu>
            {menuItems.map((item, index) => (
              <li key={index} className="banner__menu-item">
                <a
                  className={classNames("banner__menu-anchor", {
                    [`banner__menu-anchor--current`]: index === 0,
                  })}
                  href={`#${item.id}`}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <h1 className="banner__post" data-js-typewritten="">
          Frontend-developer
        </h1>
      </div>
    </div>
  )
}

export default Banner
