import React from "react"

const Project = props => {
  return (
    <div className="row project">
      <div className="project__description-box">
        <h3 className="project__title">{props.project.title}</h3>
        <p className="project__description">{props.project.description}</p>
      </div>
      <div className="project__image-box">
        <img src={props.project.image} className="project__image" />
      </div>
    </div>
  )
}

export default Project
