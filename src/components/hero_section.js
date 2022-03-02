import React from "react"
import styled from "styled-components"
import Playstore from "../assets/Playstore_genesys.svg"
import Appstore from "../assets/Appstore_genesys.svg"
// import Bg from "../assets/Bg1.svg"

function Hero_section() {
  return (
    <MainWrapper>
      <Wrapper>
        <Launch>Launching</Launch>
        <Title>
          Unleashing The <Span>Ultimate Learning</Span> Experience On
        </Title>
        <Launch_date>
          <Date>15th AUGUST 2021</Date>
        </Launch_date>
        <Button_store>
          <Button_play>
            <img src={Playstore} alt="Playstore_img" />
            <Main>Google Play</Main>
          </Button_play>
          <Button_app>
            <img src={Appstore} alt="Appstore_img" />
            <Main_app>App Store</Main_app>
          </Button_app>
        </Button_store>
      </Wrapper>
    </MainWrapper>
  )
}

export default Hero_section
const MainWrapper = styled.div``
const Wrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding-top: 6rem;
  margin-bottom: 4rem;
  font-family:'poppins',sans-serif;
`

const Launch = styled.h3`
  font-family: "Poppins", sans-serif;
  font-size: 1.5rem;
  font-weight: 400;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.6rem;
  line-height: 1rem;
  color: #f0faff;
  font-weight: 600;
`
const Title = styled.h1`
  font-family: "Poppins", sans-serif;
  font-size: 3.5rem;
  font-weight: 700;
  line-height: 4.5rem;
  text-align: center;
`
const Span = styled.span`
  background: linear-gradient(
    139.09deg,
    #33a994 17.09%,
    #33a994 17.09%,
    #8dde9f 76.79%,
    #8dde9f 76.79%
  );
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
`

const Date = styled.button`
  border: 1px solid #000000;
  box-sizing: border-box;
  margin: 1rem 0rem;
  padding: 1.5rem 3rem;
  font-size: 1.3rem;
  font-family: Josefin Sans;
  text-align: center;
  background: transparent;
`
const Launch_date = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const Button_store = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4rem;
  margin: 3rem 0rem 1rem 0rem;
`
const Button_play = styled.button`
  display: flex;
  gap: 0.5rem;
  border: none;
  align-items: center;
  padding: 0.5em 1rem;
  background: #a5f8b7;
  border-radius: 5px;
`
const Button_app = styled.button`
  display: flex;
  border: none;
  align-items: center;
  padding: 0.4rem 1.4rem;
  background: #000000;
  border-radius: 5px;
`
const Main = styled.h1`
  margin: 0;
`

const Main_app = styled.h1`
  color: white;
  margin: 0;
`
