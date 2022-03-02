import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Technovation from "../assets/Technovation_logo.svg"
import Facebook from "../assets/Fb-gen.svg"
import Instagram from "../assets/Insta-gen.svg"
import Twitter from "../assets/Twitter-gen.svg"
import Linkedin from "../assets/Linkedin-gen.svg"
import scrollTo from "gatsby-plugin-smoothscroll"
function Footer() {
  return (
    <Wrapper>
      <Footer_links>
        <Genesys_logo to="#">
          {" "}
          <img src={Technovation} alt="logo" />
        </Genesys_logo>
        <Company_links>
          <Company>Company</Company>
          <Projects_link
            onClick={() => {
              scrollTo("#projects")
            }}
          >
            Projects
          </Projects_link>

          <Beliefs_link
            onClick={() => {
              scrollTo("#beliefs")
            }}
          >
            Beliefs
          </Beliefs_link>
          <Blog_link to="/blog">Blog</Blog_link>
          <Carrers_link to="/carrers">Careers</Carrers_link>
          <About_link to="/about_us">About us</About_link>
        </Company_links>
        <Legal_links>
          <Legal>Legal</Legal>
          <Terms_link to="/terms_conditions">Terms & Conditions</Terms_link>
          <Privacy_link to="/privacy_policy">Privacy Policy</Privacy_link>
        </Legal_links>
        <Support_links>
          <Support>Support</Support>
          <Contact_link to="/contact">Contact</Contact_link>
        </Support_links>
      </Footer_links>
      <Copyrights>
        <p>
          © 2021 GENESYS TECHNOVATION PVT LTD. All Rights Reserved. All Wrongs
          Reversed.
        </p>
        <Social_icons>
          <Link to="#">
            {" "}
            <img src={Instagram} alt="insta_icon" />
          </Link>
          <Link to="#">
            {" "}
            <img src={Facebook} alt="facebook_icon" />
          </Link>
          <Link to="#">
            {" "}
            <img src={Twitter} alt="twitter_icon" />
          </Link>
          <Link to="#">
            {" "}
            <img src={Linkedin} alt="likedin_icon" />
          </Link>
        </Social_icons>
      </Copyrights>
    </Wrapper>
  )
}

export default Footer
const Wrapper = styled.div`
  background: #f0faff;
  padding: 4rem 0rem 2rem 0rem;
  font-family: poppins;
`
const Footer_links = styled.div`
  display: grid;
  grid-template-columns: 2fr 1.2fr 1.5fr 1fr;
  max-width: 1000px;
  margin: 0 auto;
`
const Genesys_logo = styled(Link)`
  padding-top: 1.2rem;
`
const Company_links = styled.div`
  display: grid;
  grid-template-rows: 1.5fr repeat(5, 0.8fr);
`
const Legal_links = styled.div`
  display: grid;
  grid-template-rows: 0fr 0.22fr 0fr;
`
const Support_links = styled.div``
const Company = styled.h2``
const Legal = styled.h2``
const Support = styled.h2``
const Copyrights = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1000px;
  margin: 0 auto;
  margin-top: 2rem;
`
const Social_icons = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 2fr);
  gap: 0.6rem;
  align-items: center;
`
const Projects_link = styled(Link)`
  text-decoration: none;
  color: #5e5959;
  text-transform: uppercase;
`
const Beliefs_link = styled(Link)`
  text-decoration: none;
  color: #5e5959;
  text-transform: uppercase;
`
const Blog_link = styled(Link)`
  text-decoration: none;
  color: #5e5959;
  text-transform: uppercase;
`
const Carrers_link = styled(Link)`
  text-decoration: none;
  color: #5e5959;
  text-transform: uppercase;
`
const About_link = styled(Link)`
  text-decoration: none;
  color: #5e5959;
  text-transform: uppercase;
`
const Terms_link = styled(Link)`
  text-decoration: none;
  color: #5e5959;
  text-transform: uppercase;
`
const Privacy_link = styled(Link)`
  text-decoration: none;
  color: #5e5959;
  text-transform: uppercase;
`
const Contact_link = styled(Link)`
  text-decoration: none;
  color: #5e5959;
  text-transform: uppercase;
`
