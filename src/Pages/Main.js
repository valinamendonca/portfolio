import React from 'react'
import About from '../Components/About'
import Projects from '../Components/Projects'
import Contact from '../Components/Contact'
import Technologies from '../Components/Technologies'
import Education from '../Components/Education'
import NavbarComp from '../Components/NavbarComp'

function Main() {
  return (
    <div>
        <NavbarComp/><About/><Education/><Technologies/><Projects/><Contact/>
    </div>
  )
}

export default Main