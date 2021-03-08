import React from "react"

const Job = props => {
  const { company, title, location, dates, resp, image } = props.job

  const renderResponsibilities = () => {
    return resp.map(responsibility => {
      return (
        <li className="job__responsibility" key={responsibility}>
          {responsibility}
        </li>
      )
    })
  }

  return (
    <div className="row job">
      <div className="job__description-box">
        <h3 className="job__company">{company}</h3>
        <h4 className="job__title">{title}</h4>
        <h4 className="job__location">{location}</h4>
        <h4 className="job__dates">{dates}</h4>
        <ul className="job__responsibilities">{renderResponsibilities()}</ul>
      </div>
      <div className="col-1-of-4 job__image-box">
        <img src={image} className="job__image" />
      </div>
    </div>
  )
}

export default Job
