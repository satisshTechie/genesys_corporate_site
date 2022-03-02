import React from "react"
import styled from "styled-components"
import Layout from "./layout"
import Phone from "../assets/Phone.svg"
import Mail from "../assets/Mail.svg"
import Fb from "../assets/fb_hover.svg"
import Insta from "../assets/Insta_hover.svg"
import Twitter from "../assets/twitter_hover.svg"
import Linkedin from "../assets/Linkedin_hover.svg"

function Contact() {
  return (
    <Wrapper>
      <Layout>
        <Hero>
          <Title>contact us</Title>
        </Hero>
        <Main>
          <Get_in_touch>
            <h1>Get In Touch ----</h1>
            <Lorem>
              {" "}
              Lorem nunc sapien aliquet sollicitudin quis bibendum temporary
              Lorem nunc sapien aliquet sollicitudin quis bibendum tempor
            </Lorem>
            <Number>
              <img src={Phone} alt="phone" />
              <p>+91-9966249666</p>
            </Number>
            <Gmail>
              <img src={Mail} alt="mail" />
              <p>hello@realgenesys.tech</p>
            </Gmail>
          </Get_in_touch>
          <Social_media>
            <h1>Social Media ----</h1>
            <Social_icons>
              <a href="#">
                {" "}
                <Fb_logo>
                  <Facebook src={Fb} alt="fb" />
                </Fb_logo>
              </a>
              <a href="#">
                {" "}
                <Insta_logo>
                  <Instagram src={Insta} alt="instagram" />
                </Insta_logo>
              </a>
              <a href="#">
                {" "}
                <Twitter_logo>
                  <Tweet src={Twitter} alt="twitter " />
                </Twitter_logo>
              </a>
              <a href="#">
                {" "}
                <Linkedin_logo>
                  <Linked src={Linkedin} alt="linkedin" />
                </Linkedin_logo>
              </a>
            </Social_icons>
          </Social_media>
        </Main>
      </Layout>
    </Wrapper>
  )
}

export default Contact
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
  text-transform: uppercase;
  margin-bottom: 0rem;
  font-size: 3rem;
`
const Main = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  max-width: 1000px;
  margin: 0 auto;
  margin-bottom: 10rem;
`
const Get_in_touch = styled.div`
  margin-bottom: 3rem;
`
const Lorem = styled.p`
  color: #34a994;
`
const Number = styled.div`
  display: flex;
  gap: 3rem;
  align-items: center;
  font-size: 1.5rem;
`
const Gmail = styled.div`
  display: flex;
  gap: 3rem;
  align-items: center;
  font-size: 1.5rem;
`
const Social_media = styled.div`
  /* margin-bottom: 12rem; */
`
const Social_icons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.3rem;
`
const Fb_logo = styled.div`
  background: #f0faff;
`
const Facebook = styled.img`
  -webkit-filter: grayscale(100%);
  -webkit-transition: 0.5s ease-in-out;
  -moz-filter: grayscale(100%);
  -moz-transition: 0.5s ease-in-out;
  -o-filter: grayscale(100%);
  -o-transition: 0.5s ease-in-out;
  padding: 3.5rem 2.5rem;
  cursor: pointer;

  :hover {
    -webkit-filter: grayscale(0%);
    -webkit-transition: 0.5s ease-in-out;
    -moz-filter: grayscale(0%);
    -moz-transition: 0.5s ease-in-out;
    -o-filter: grayscale(0%);
    -o-transition: 0.5s ease-in-out;
  }
`
const Insta_logo = styled.div`
  background: #f0faff;
`
const Instagram = styled.img`
  -webkit-filter: grayscale(100%);
  -webkit-transition: 0.5s ease-in-out;
  -moz-filter: grayscale(100%);
  -moz-transition: 0.5s ease-in-out;
  -o-filter: grayscale(100%);
  -o-transition: 0.5s ease-in-out;
  padding: 3rem 2.5rem;
  cursor: pointer;

  :hover {
    -webkit-filter: grayscale(0%);
    -webkit-transition: 0.5s ease-in-out;
    -moz-filter: grayscale(0%);
    -moz-transition: 0.5s ease-in-out;
    -o-filter: grayscale(0%);
    -o-transition: 0.5s ease-in-out;
  }
`

const Twitter_logo = styled.div`
  background: #f0faff;
`
const Tweet = styled.img`
  -webkit-filter: grayscale(100%);
  -webkit-transition: 0.5s ease-in-out;
  -moz-filter: grayscale(100%);
  -moz-transition: 0.5s ease-in-out;
  -o-filter: grayscale(100%);
  -o-transition: 0.5s ease-in-out;
  padding: 3.7rem 2.5rem;
  cursor: pointer;

  :hover {
    -webkit-filter: grayscale(0%);
    -webkit-transition: 0.5s ease-in-out;
    -moz-filter: grayscale(0%);
    -moz-transition: 0.5s ease-in-out;
    -o-filter: grayscale(0%);
    -o-transition: 0.5s ease-in-out;
  }
`
const Linkedin_logo = styled.div`
  background: #f0faff;
`
const Linked = styled.img`
  -webkit-filter: grayscale(100%);
  -webkit-transition: 0.5s ease-in-out;
  -moz-filter: grayscale(100%);
  -moz-transition: 0.5s ease-in-out;
  -o-filter: grayscale(100%);
  -o-transition: 0.5s ease-in-out;
  padding: 3.7rem 3.5rem;
  cursor: pointer;

  :hover {
    -webkit-filter: grayscale(0%);
    -webkit-transition: 0.5s ease-in-out;
    -moz-filter: grayscale(0%);
    -moz-transition: 0.5s ease-in-out;
    -o-filter: grayscale(0%);
    -o-transition: 0.5s ease-in-out;
  }
`
