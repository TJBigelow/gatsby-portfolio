import React from "react"

const nav = () => {
  return (
    <nav className="nav">
      <div className="nav__bg">
        <ul className="nav__links">
          <li className="nav__item">
            <a href="/#skills" className="nav__link">
              Skills
            </a>
          </li>
          <li className="nav__item">
            <a href="/#projects" className="nav__link">
              Projects
            </a>
          </li>
          <li className="nav__item">
            <a href="/#experience" className="nav__link">
              Professional Experience
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default nav
