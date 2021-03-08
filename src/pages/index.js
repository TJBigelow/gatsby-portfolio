import React from "react"
import Layout from "../components/Layout"
import Header from "../components/Header"
import SkillsContainer from "../components/SkillsContainer"
import ProjectsContainer from "../components/ProjectsContainer"
import JobsContainer from "../components/JobsContainer"

export default function Home() {
  return (
    <Layout>
      <Header />
      <SkillsContainer />
      <ProjectsContainer />
      <JobsContainer />
    </Layout>
  )
}
