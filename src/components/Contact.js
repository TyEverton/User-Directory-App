import React from "react"
import ContactCard from "./ContactCard"
import data from "./data"

function Contact() {
  const contactCards = data.map(data => <ContactCard key={data} name={data.name} city={data.city} country={data.country} />)

  return(
    <div>
      {contactCards}
    </div>
  )
}

export default Contact