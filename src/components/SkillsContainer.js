import React from "react"
import SkillBox from "./SkillBox"

const skillBoxes = [
  {
    heading: "Technologies",
    skills: ["Javascript", "Ruby", "HTML", "CSS", "Raspberry Pi", "Arduino"],
  },
  {
    heading: "Frameworks/Libraries",
    skills: [
      "React.js",
      "Redux",
      "Ruby on Rails",
      "Bootstrap",
      "Gatsby",
      "Sass",
    ],
  },
  {
    heading: "Tools",
    skills: [
      "Heroku",
      "Netlify",
      "Strapi",
      "Visual Studio Code",
      "Adobe Creative Cloud",
    ],
  },
]

const renderSkillBoxes = () => {
  return skillBoxes.map(box => {
    return (
      <SkillBox heading={box.heading} skills={box.skills} key={box.heading} />
    )
  })
}

const skillsContainer = () => {
  return (
    <section className="section-skills" id="skills">
      <div className="u-center-text">
        <h2 className="heading-section">Skills</h2>
      </div>
      <div className="skill-box-container">{renderSkillBoxes()}</div>
    </section>
  )
}

export default skillsContainer
