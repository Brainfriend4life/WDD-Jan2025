import { useState } from "react"
import FilterSection from "./components/FilterSection"
import Hero from "./components/Hero"
import NavBar from "./components/NavBar"
import Productsdisplay from "./components/Productsdisplay"

const App = () => { 
 
  return (
    <div className="container mx-auto">
      <NavBar/>
      <Hero/>
      <FilterSection/>
      <Productsdisplay/>
    </div>
  )
}

export default App