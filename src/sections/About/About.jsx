import { Image } from "minista"
import "./About.scss"
import Section from "@/layouts/Section"

const About = () => {
  const dataAboutMe = {
    name: "Пушкарева Ирина",
    description:
      "Frontend-разработчик с опытом работы более 4 лет в создании интерактивных и отзывчивых веб-сайтов. Уверенно владею такими технологиями, как HTML, CSS и JavaScript, а также имею базовые знания React и Vue, достаточные для верстки страниц.",
    skills: [
      "Кроссбраузерная, адаптивная верстка",
      "Верстка по макетам Figma, Photoshop",
      "Рефакторинг, оптимизация, редизайн сайтов",
      "Pixel Perfect",
      "CSS3, предпроцессоры SASS и Stylus, BEM",
      "Tailwind, Bootstrap",
      "Git, GitLab, GitHub",
      "HTML, шаблонизаторы: handlebars, nunjucks, twig",
      "Синтаксис JSX (верстка react, фреймворк Minista.js)",
      "Верстка на Vue (проекты на Nuxt.js, фреймворке Quasar)",
      "Сборщики проектов: webpack, vite, gulp",
      "Верстка Email-писем",
      "Vanilla JavaScript, JQuery",
      "REST API",
      "Eslint, Prettier",
    ],
    hobbies: [
      "Йога, стретчинг",
      "Вело- и пешие прогулки",
      "Обучаюсь каллиграфии",
      "Интересуюсь психологией",
      "Нравится активный отдых: сплавы, горы",
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
          <Image src="/src/assets/images/my_photo.jpg" />
        </div>
        <div className="about__brief-info">
          <h2 className="about__name">{dataAboutMe.name}</h2>
          <p className="about__text">{dataAboutMe.description}</p>
        </div>
      </div>

      <div className="about__grid">
        <div className="about__column">
          <h3>Навыки</h3>
          <ul className="about__list">
            {dataAboutMe.skills.map((skill) => (
              <li>{skill}</li>
            ))}
          </ul>
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
