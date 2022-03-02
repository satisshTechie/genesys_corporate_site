import React from "react"
import styled from "styled-components"
import Layout from "./layout"
function About_us() {
  return (
    <Wrapper>
      <Layout>
        <Hero>
          <Title>Hi, We’re Genesys</Title>
          <Sub>
            Bibendum commodo lacus a, ac in ac massa ultrices. Elit pretium
            <br /> justo tortor aenean euismod fusce.
          </Sub>
        </Hero>
        <Main>
          <div>
            <Before>WHO WE ARE?</Before>
            <Questions>What drives us</Questions>
          </div>
          <div>
            <h2>
              We are a team of young professionals experimenting out of the box
              ideas and driving innovation. Making progress by trying to do
              things in unconventional and most unexplored of ways. We believe
              making things a little differently can create a lot of impact in
              human lives.{" "}
            </h2>
          </div>
        </Main>
        <Main>
          <div>
            <Before>OUR MISSION</Before>
            <Questions>
              <Span>What</Span> we do
            </Questions>
          </div>
          <div>
            <h2>
              We are a team of young professionals experimenting out of the box
              ideas and driving innovation. Making progress by trying to do
              things in unconventional and most unexplored of ways. We believe
              making things a little differently can create a lot of impact in
              human lives.{" "}
            </h2>
          </div>
        </Main>
        <Main>
          <div>
            <Before>Team</Before>
            <Questions>Meet the Team</Questions>
          </div>
          <div>
            <h2>
              We are a team of young professionals experimenting out of the box
              ideas and driving innovation. Making progress by trying to do
              things in unconventional and most unexplored of ways. We believe
              making things a little differently can create a lot of impact in
              human lives.{" "}
            </h2>
          </div>
        </Main>
        <Title2>
          <About>KNOW MORE ABOUT GENESYS</About>
        </Title2>
        <About_divs>
          <Div1></Div1>
          <Div2></Div2>
          <Div3></Div3>
        </About_divs>
      </Layout>
    </Wrapper>
  )
}

export default About_us
const Wrapper = styled.div`
  margin: 0 auto;
  font-family: poppins;
`
const Hero = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 50vh;
`
const Title = styled.h1`
  margin-bottom: 0rem;
  font-size: 3rem;
  text-align: center;
`
const Sub = styled.p`
  color: #34a994;
  margin-top: 0rem;
  text-align: center;
`
const Main = styled.div`
  margin: 0 auto;
  max-width: 1000px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  font-family: poppins;
  margin-bottom: 5rem;
  margin-top: 2rem;
`
const Before = styled.p`
  color: #34a994;
  text-transform: uppercase;
  margin-bottom: 0rem;
`
const Questions = styled.h2`
  margin: 0;
`
const Span = styled.span`
  color: #34a994;
`
const About = styled.h2`
  text-align: center;
`
const About_divs = styled.div`
  margin: 0 auto;
  max-width: 1000px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
  margin-bottom: 7rem;
`
const Div1 = styled.div`
  background: #f0faff;
  height: 23rem;
  width: 18rem;
`
const Div2 = styled.div`
  background: #f0faff;
  height: 23rem;
  width: 18rem;
`
const Div3 = styled.div`
  background: #f0faff;
  height: 23rem;
  width: 18rem;
`
const Title2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
