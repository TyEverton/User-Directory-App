import React from "react"
// import data from "./data"

function ContactCard(props) {
  return(
    <div>
      <p>{props.data}</p>
      <h1>{props.name}</h1>
      <p>From: {props.city}, {props.country}</p>
      <p>Employer: {props.employer}</p>
      <p>Job Title: {props.title}</p>
      <p>{props.favoriteMovies}</p> 
      </div>
   
  )
}

export default ContactCard