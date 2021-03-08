import React from "react"

const renderSkills = skills => {
  return skills.map(skill => {
    return (
      <li className="skill-box__item" key={skill}>
        <span className="skill-box__name">{skill}</span>
      </li>
    )
  })
}

const skillBox = props => {
  return (
    <div className="skill-box">
      <h3 className="skill-box__heading">{props.heading}</h3>
      <ul className="skill-box__content">{renderSkills(props.skills)}</ul>
    </div>
  )
}

export default skillBox
