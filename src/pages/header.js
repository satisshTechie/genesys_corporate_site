import React from "react"
import styled from "styled-components"
import scrollTo from "gatsby-plugin-smoothscroll"
import { Link } from "gatsby"

function Header() {
  return (
    <Wrapper>
      <List>
        <li>
          <Logo to="/">Genesys</Logo>
        </li>
        <PageList>
          <Home_link to="/">Home</Home_link>
        </PageList>
        <PageList>
          <Projects_link
            onClick={() => {
              scrollTo("#projects")
            }}
          >
            Projects
          </Projects_link>
        </PageList>
        <PageList>
          <Beliefs_link
            onClick={() => {
              scrollTo("#beliefs")
            }}
          >
            Beliefs
          </Beliefs_link>
        </PageList>
        <PageList>
          <Blogs_link to="/blog">Blog</Blogs_link>
        </PageList>
        <PageList>
          <Carrers_link to="/carrers">Carrers</Carrers_link>
        </PageList>
        <PageList>
          <Aboutus_link to="/about_us">About us</Aboutus_link>
        </PageList>
        <PageList>
          <Contact_link to="/contact" className="call">
            Contact
          </Contact_link>
        </PageList>
      </List>
    </Wrapper>
  )
}

export default Header
const Wrapper = styled.nav`
  max-width: 800px;
  margin: 0 auto;
  background: #f0faff;
  height: 10rem;
  display: inline;
  align-items: center;
  font-family: "poppins", sans-serif;
`
const Logo = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 2rem;
  font-weight: 700;
  font-family: "poppins", sans-serif;
`
const Home_link = styled(Link)`
  text-decoration: none;
  color: #5e5959;
  font-weight: 300;
  :hover {
    color: #34a994;
    font-weight: 500;
  }
`
const Projects_link = styled.button`
  border: none;
  background: transparent;
  font-size: 1.05rem;
  text-transform: uppercase;
  color: #5e5959;
  font-weight: 300;

  :hover {
    color: #34a994;
    font-weight: 500;
  }
`
const Beliefs_link = styled.button`
  border: none;
  background: transparent;
  color: #5e5959;
  font-size: 1rem;
  text-transform: uppercase;
  font-weight: 300;
  :hover {
    color: #34a994;
    font-weight: 500;
  }
`
const Blogs_link = styled(Link)`
  text-decoration: none;
  color: #5e5959;
  font-weight: 300;
  :hover {
    color: #34a994;
    font-weight: 500;
  }
`
const Carrers_link = styled(Link)`
  text-decoration: none;
  color: #5e5959;
  font-weight: 300;
  :hover {
    color: #34a994;
    font-weight: 500;
  }
`
const Aboutus_link = styled(Link)`
  text-decoration: none;
  color: #5e5959;
  font-weight: 300;
  :hover {
    color: #34a994;
    font-weight: 500;
  }
`
const Contact_link = styled(Link)`
  text-decoration: none;
  color: #5e5959;
  font-weight: 300;
  :hover {
    color: #34a994;
    font-weight: 500;
  }
`

const List = styled.ul`
  display: grid;
  grid-template-columns: 3fr 0.65fr 0.8fr 0.7fr 0.5fr 0.7fr 0.8fr 0.8fr;
  font-size: 1.1rem;
  list-style: none;
  padding: 0rem 4rem;
  align-items: center;
  text-transform: uppercase;
`
const PageList = styled.li``
