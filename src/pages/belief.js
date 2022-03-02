import React from "react"
import styled from "styled-components"
import Beliefs from "../assets/Beliefs.svg"
import Illustrate1 from "../assets/Illustration-1.svg"
import Illustrate2 from "../assets/Illustration-2.svg"
import Illustrate3 from "../assets/Illustration-3.svg"
import Quote from "../assets/Quote.svg"
function Belief() {
  return (
    <Wrapper id="beliefs">
      <img src={Beliefs} alt="belief" />
      <Title>Beliefs</Title>
      <Main>
        <div>
          <img src={Illustrate1} alt="illustration1" />
        </div>
        <div>
          <Sub_title>
            <Quot src={Quote} alt="quote" />
            <Sub_head>Accountability</Sub_head>
          </Sub_title>
          <h2>
            Acknowledging and owning up to the responsibility we have to our
            employees, customers, community, industry, and shareholders.
          </h2>
          <h2>
            Making things right when you’re responsible for a mistake, admitting
            when you are wrong, and seeing tasks and projects through until they
            are done – and done well.
          </h2>
        </div>
      </Main>
      <Main>
        <div>
          <Sub_title>
            <Quot src={Quote} alt="quote" />
            <Sub_head>Collaboration</Sub_head>
          </Sub_title>
          <div>
            <h2>“Working together towards a common goal.”</h2>
            <h2>
              Collaboration is valued by our employees who want to feel like
              their input matters, our partners who want to be by our side for a
              phenomenal customer experience, and our customers who want to feel
              like they’re more to you than just another client.”
            </h2>
          </div>
        </div>
        <div>
          <Img src={Illustrate2} alt="Illustration" />
        </div>
      </Main>
      <Main>
        <div>
          <img src={Illustrate3} alt="illustration3" />
        </div>
        <div>
          <Sub_title>
            <Quot src={Quote} alt="quote" />
            <Sub_head>Courage</Sub_head>
          </Sub_title>
          <div>
            <h2>
              The willingness and ability to overcome fear in order to do
              something meaningful.
            </h2>
            <h2>
              In our workplace, courage can be evidenced by anyone, ranging from
              the CEO to an individual contributor. We believe that a culture of
              courage is what it takes to fully embody this ideal.
            </h2>
          </div>
        </div>
      </Main>
    </Wrapper>
  )
}

export default Belief
const Wrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  margin-bottom: 5rem;
`
const Title = styled.h1`
  position: absolute;
  top: 100.2rem;
`
const Main = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 4rem 0rem;
  align-items: center;
`
const Sub_title = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`
const Quot = styled.img`
  padding: 1rem;
  background: #e2ffe9;
  border-radius: 7px;
`
const Img = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
`
const Sub_head = styled.h3`
  color: #33a94d;
`
