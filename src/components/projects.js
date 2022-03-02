import React from "react"
import styled from "styled-components"
import Academy from "../assets/Genesys Academy Logo.svg"
import Capital from "../assets/Genesys Capital Logo.svg"
import Interactive from "../assets/Genesys Interactive Logo.svg"
import OurProject from "../assets/Our Projects.svg"

function Projects() {
  return (
    <Wrapper id="projects">
      <Title_logo src={OurProject} alt="Our Project" />
      <Title>Our Projects</Title>
      <Project>
        <Genesys_academy>
          <Logo src={Academy} alt="academy" />
          <Titles>Genesys Academy</Titles>
          <Link href="#">Learn More &#62;</Link>
        </Genesys_academy>
        <Genesys_capital>
          <Logo src={Capital} alt="capital" />
          <Titles>Genesys Capital</Titles>
          <Link1 href="#">Learn More &#62;</Link1>
        </Genesys_capital>
        <Genesys_interactive>
          <Logo src={Interactive} alt="Interactive" />
          <Titles>Genesys Interactive</Titles>
          <Link2 href="#">Coming Soon</Link2>
        </Genesys_interactive>
      </Project>
    </Wrapper>
  )
}

export default Projects
const Wrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 4rem 0rem 2rem 0rem;
  margin-bottom: 6rem;
`
const Title_logo = styled.img``

const Title = styled.h1`
  position: absolute;
  top: 24.2em;
  font-size: 2rem;
`
const Project = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
  padding-top: 5rem;
`
const Genesys_academy = styled.div`
  background: #c2e2ff;
  height: 32em;
`
const Genesys_capital = styled.div`
  background: #ffde9f;
  margin-top: 4rem;
  height: 30em;
`
const Genesys_interactive = styled.div`
  background: #ffdada;
  margin-top: 1rem;
  height: 30em;
`

const Logo = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding: 5rem 2rem;
`
const Titles = styled.h1`
  color: white;
  padding: 0rem 0rem 2rem 2rem;
  text-transform: uppercase;
  margin: 0rem;
  font-size: 2rem;
  line-height: 2rem;
`
const Link = styled.a`
  text-decoration: none;
  padding-left: 11rem;
  color: #369fff;
`
const Link1 = styled.a`
  text-decoration: none;
  padding-left: 11rem;
  color: #ff9900;
`
const Link2 = styled.a`
  text-decoration: none;
  padding-left: 11rem;
  color: #ff4f44;
`
