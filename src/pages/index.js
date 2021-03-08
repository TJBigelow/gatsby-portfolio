import React from "react"
import Layout from "../components/Layout"
import Header from "../components/Header"
import SkillsContainer from "../components/SkillsContainer"
import ProjectsContainer from "../components/ProjectsContainer"

export default function Home() {
  return (
    <Layout>
      <Header />
      <SkillsContainer />
      <ProjectsContainer />
    </Layout>
  )
}
