import React from "react"
import Job from "./Job"

const jobs = [
  {
    company: "Sound Investment",
    title: "Video Technician",
    location: "Chicago, IL",
    dates: "April 2018 - October 2019",
    resp: [
      "Managed video event productions for large-scale clients such as PwC and the Art Institute of Chicago",
      "Lead teams of subcontractors including delegating tasks and ensuring production was set up in a safe, effective way",
      "Designed custom video systems such as an interactive mural with electroconductive paint and Raspberry Pi",
    ],
    image: "https://www.tjbigelow.com/img/jobs/sound-investment.png",
  },
]

const renderJobs = () => {
  return jobs.map(job => {
    return <Job job={job} key={job.company} />
  })
}

const JobsContainer = () => {
  return (
    <section className="section-experience" id="experience">
      <div className="u-center-text">
        <h2 className="heading-section">Professional Experience</h2>
      </div>
      {renderJobs()}
    </section>
  )
}

export default JobsContainer
