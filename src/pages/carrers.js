import React from "react"
import styled from "styled-components"
import Layout from "./layout"
import { Link } from "gatsby"
function Carrers() {
  return (
    <Wrapper>
      <Layout>
        <Hero>
          <Sub>WE’R HIRING</Sub>
          <Title>BECOME A PART OF OUR TEAM</Title>

          <Roles>
            <Sales to="/slaes">Sales</Sales>
            <Sales to="/marketing">Marketing</Sales>
            <Sales to="/design">Design</Sales>
            <Sales to="/developer">Developer</Sales>
            <Sales to="/research">R&D</Sales>
            <Sales to="/research">R&D</Sales>
          </Roles>
        </Hero>
        <Main>
          <Card>
            <Type>UI Designer</Type>
            <Location>Kakinada, Ap</Location>
            <Click to="#">Apply Now &#62;</Click>
          </Card>
          <Card>
            <Type>UX Designer</Type>
            <Location>Kakinada, Ap</Location>
            <Click to="/design">Apply Now &#62;</Click>
          </Card>
          <Card>
            <Type>Motion Designer</Type>
            <Location>Kakinada, Ap</Location>
            <Click to="#">Apply Now &#62;</Click>
          </Card>
          <Card>
            <Type>Vector Designer</Type>
            <Location>Kakinada, Ap</Location>
            <Click to="#">Apply Now &#62;</Click>
          </Card>
        </Main>
      </Layout>
    </Wrapper>
  )
}

export default Carrers
const Wrapper = styled.div`
  margin: 0 auto;
  font-family: poppins;
`
const Hero = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 50vh;
`
const Sub = styled.p`
  letter-spacing: 0.3rem;
  margin: 0;
  color: #34a994;
`
const Title = styled.h1`
  font-size: 3rem;
  margin: 1.5rem;
`
const Roles = styled.div``
// const Button = styled.button`
//   border: 3px solid #f0faff;
//   color: #34a994;
//   padding: 0.5rem 1rem;
//   background: transparent;
//   font-size: 1rem;
//   margin: 0.4rem;
//   border-radius: 5px;

//   :hover {
//     background: #34a994;
//     color: white;
//     cursor: pointer;
//   }
// `
const Main = styled.div`
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  margin-bottom: 6rem;
  align-items: center;
  justify-content: center;
`
const Card = styled.div`
  background: #f0faff;
  height: 9rem;
  width: 16rem;
  padding: 1.5rem;
`

const Location = styled.p`
  margin: 0rem 0rem 4rem 0rem;
`
const Type = styled.h2`
  margin: 0rem;
`
const Click = styled(Link)`
  text-decoration: none;
  color: #34a994;
`
const Sales = styled(Link)`
  text-decoration: none;
  border: 1px solid #f0faff;
  color: #34a994;
  border-radius: 5px;
  padding: 0.4rem 1rem;
  font-size: 1rem;
  margin-left: 0.5rem;
  :hover {
    background: #34a994;
    color: white;
    cursor: pointer;
  }
`
