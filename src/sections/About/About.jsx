import { Image } from "minista"
import "./About.scss"
import Section from "@/layouts/Section"

const About = () => {
  const dataAboutMe = {
    name: "Пушкарева Ирина",
    description:
      "Frontend-разработчик с 4-летним опытом верстки и создания интерактивных веб-приложений. Уверенно владею HTML, CSS, JavaScript и имею практический опыт верстки в окружении React и Vue. Ответственно подхожу к соблюдению сроков и качеству реализации проекта. Стремлюсь к написанию чистого, поддерживаемого кода и точному соответствию дизайну (Pixel Perfect).",
    skills: {
      "Верстка и стилизация": [
        "Адаптивная и кроссбраузерная верстка",
        "Pixel Perfect по макетам Figma/Photoshop",
        "CSS3, препроцессоры SASS/Stylus, методология BEM",
        "Фреймворки: Tailwind, Bootstrap",
        "Верстка email-писем",
      ],
      "JavaScript и фреймворки": [
        "Vanilla JavaScript, jQuery",
        "React",
        "Верстка во Vue (Nuxt.js, Quasar)",
        "Работа с REST API",
      ],
      "Инструменты и процессы": [
        "Сборщики: Webpack, Vite, Gulp",
        "Системы контроля версий: Git, GitLab, GitHub",
        "Шаблонизаторы: Handlebars, Nunjucks, Twig",
        "Инструменты качества кода: ESLint, Prettier",
        "Vibe-coding",
      ],
    },
    hobbies: [
      "Йога и стретчинг → развиваю концентрацию и устойчивость к стрессу",
      "Вело- и пешие прогулки → заряжаюсь новыми идеями на свежем воздухе",
      "Картины по номерам → тренирую терпение и внимание к деталям",
      "Психология → учусь слушать и слышать: пользователей, коллег, себя",
      "Активный отдых (сплавы, горы) → заряжаюсь энергией для сложных проектов и дедлайнов",
    ],
  }
  return (
    <Section
      title="Обо мне"
      positionTitle="center"
      titleId="about-title"
      className="about"
      id="about"
    >
      <div className="about__info-block">
        <div className="about__photo">
          <Image src="/src/assets/images/photo.jpg" />
        </div>
        <div className="about__brief-info">
          <h2 className="about__name">{dataAboutMe.name}</h2>
          <p className="about__text">{dataAboutMe.description}</p>
        </div>
      </div>

      <div className="about__grid">
        <div className="about__column">
          <h3>Навыки</h3>
          {Object.entries(dataAboutMe.skills).map(([category, skills]) => (
            <div key={category} className="about__skills">
              <h4 className="about__skills-title">{category}</h4>
              <ul className="about__list">
                {skills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="about__column">
          <h3>Увлечения</h3>
          <ul className="about__list">
            {dataAboutMe.hobbies.map((hobby) => (
              <li>{hobby}</li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}

export default About
