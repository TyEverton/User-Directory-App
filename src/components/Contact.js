import React from "react"
import data from "./data"

function Contact(props) {
  return (
    <div>
      <h1>Name: {props.name}</h1>
      <h1>City: {props.city}</h1>
      <h1>Country: {props.country}</h1>
      <h1>Employer: {props.employer}</h1>
      <h1>Title: {props.title}</h1>
      <h1>Favorite Movies: {props.favoriteMovies}</h1>
    </div>
  )
}

export default Contact