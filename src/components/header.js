import React from "react"

const header = () => {
  return (
    <header className="header">
      <div className="header__text">
        <h1 className="header__hero">
          <span className="header__hero--main">Thomas Bigelow</span>
          <span className="header__hero--sub">Full-Stack Web Developer</span>
        </h1>
        <div className="socials">
          <ul className="socials__list">
            <li className="socials__item">
              <a
                href="https://www.linkedin.com/in/tjbigelow/"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener"
                className="socials__link"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </li>
            <li className="socials__item">
              <a
                href="https://github.com/TJBigelow"
                aria-label="GitHub"
                target="_blank"
                rel="noopener"
                className="socials__link"
              >
                <i className="fab fa-github-square"></i>
              </a>
            </li>
            <li className="socials__item">
              <a
                href="mailto:tjbigelow@att.net"
                aria-label="Email"
                className="socials__link"
              >
                <i className="fas fa-envelope-square"></i>
              </a>
            </li>
          </ul>
        </div>
        <p className="header__bio">
          I am a recent Flatiron School graduate. With a lifetime of experience
          with computers and technology, I am a quick study in software
          development. My background in event video production has helped me to
          develop a keen eye for troubleshooting and quickly finding clever
          solutions to unexpected problems.
        </p>
      </div>
    </header>
  )
}

export default header
