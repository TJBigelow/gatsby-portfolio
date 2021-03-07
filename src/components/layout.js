import React from "react"
import Nav from "./nav"
import Footer from "./footer"
import "../assets/sass/main.scss"

const layout = ({ children }) => {
  return (
    <div>
      <Nav />
      {children}
      <Footer />
    </div>
  )
}

export default layout
