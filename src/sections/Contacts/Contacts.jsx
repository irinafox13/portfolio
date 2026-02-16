import "./Contacts.scss"
import Section from "@/layouts/Section"

const Contacts = () => {
  const contactsList = [
    {
      name: "telegram",
      href: "https://t.me/irinafox13",
      blank: true,
    },
    {
      name: "whatsapp",
      href: "https://wa.me/79536741550",
      blank: true,
    },
    {
      name: "телефон",
      href: "tel:+79536741550",
      blank: false,
    },
    {
      name: "почта",
      href: "mailto:irinafox93@gmail.com",
      blank: false,
    },
  ]

  return (
    <Section
      title="Контакты"
      positionTitle="center"
      titleId="contacts-title"
      className="contacts"
      id="contacts"
    >
      <ul className="contacts__list">
        {contactsList.map((contact, index) => (
          <li key={index}>
            <a href={contact.href} {...(contact.blank && { target: "_blank" })}>
              {contact.name}
            </a>
          </li>
        ))}
      </ul>
    </Section>
  )
}

export default Contacts
