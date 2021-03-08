import React from "react"
import Project from "./Project"

const projects = [
  {
    title: "Party Game",
    description:
      "A game for 4 or more players based on Quiplash and Cards against Humanity that allows users to view and play the game remotely on any web browser enabled device.",
    image: "https://www.tjbigelow.com/img/projects/game.png",
  },
  {
    title: "Party Game",
    description:
      "A game for 4 or more players based on Quiplash and Cards against Humanity that allows users to view and play the game remotely on any web browser enabled device.",
    image: "https://www.tjbigelow.com/img/projects/game.png",
  },
  {
    title: "Party Game",
    description:
      "A game for 4 or more players based on Quiplash and Cards against Humanity that allows users to view and play the game remotely on any web browser enabled device.",
    image: "https://www.tjbigelow.com/img/projects/game.png",
  },
]

const renderProjects = () => {
  return projects.map(project => {
    return <Project project={project} />
  })
}

const ProjectsContainer = () => {
  return (
    <section className="section-projects" id="projects">
      <div className="u-center-text">
        <h2 className="heading-section">Projects</h2>
      </div>
      {renderProjects()}
    </section>
  )
}

export default ProjectsContainer
