import { Icon } from "minista"
import "./Header.scss"

export default () => {
  const socialItems = [
    {
      label: "Telegram",
      icon: "telegram",
      href: "https://t.me/irinafox13",
    },
    {
      label: "Whats-App",
      icon: "whatsapp",
      href: "https://wa.me/79536741550",
    }
  ]
  return (
    <header className="header">
      <div className="header__inner container">
        <span className="header__name">portfolio.</span>
        <ul className="header__socials">
          {socialItems.map(({ label, href, icon }, index) => (
            <li key={index} className="header__socials-item">
              <a className="header__socials-link" href={href} target="_blank">
                <span className="visually-hidden">{label}</span>
                <Icon iconId={icon} width={28} height={28}/>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
