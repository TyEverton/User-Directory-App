import React from "react"
// import './App.css';
// import Data from "./user-directory/src/Data"
import AddNew from "./components/AddNew"
import ContactCard from "./components/ContactCard"
// import Footer from "./components/Footer"
import Header from "./components/Header"
import Next from "./components/Next"
import Previous from "./components/Previous"
import Remove from "./components/Remove"
import Edit from "./components/Edit"

function App() {
  return(
    <div>
      <AddNew />
      <Header />
      <Next />
      <Previous />
      <Remove />
      <Edit />
      <ContactCard />
    </div>
  )

}

export default App
