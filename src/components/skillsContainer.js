import React from "react"
import SkillBox from "./skillBox"

const skillsContainer = () => {
  return (
    <section className="section-skills" id="skills">
      <div className="u-center-text">
        <h2 className="heading-section">Skills</h2>
      </div>
      <div className="skill-box-container">
        <SkillBox />
        <SkillBox />
        <SkillBox />
      </div>
    </section>
  )
}

export default skillsContainer
