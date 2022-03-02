import React from "react"
import styled from "styled-components"
import Hero_section from "../components/hero_section"
import OurProject from "../components/projects"
import Belief from "../pages/belief"
import Layout from "./layout"

function Home() {
  return (
    <Wrapper>
      <Layout>
        <Hero_section />
        <OurProject />
        <Belief />
      </Layout>
    </Wrapper>
  )
}
export default Home
const Wrapper = styled.div`
  font-family: "Poppins", sans-serif;
`
