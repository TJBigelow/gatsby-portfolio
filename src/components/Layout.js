import React from "react"
import Nav from "./Nav"
import Footer from "./Footer"
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
