import React from "react"
import styled from "styled-components"
import Header from "../pages/header"
import Footer from "../pages/footer"
function Layout({ children }) {
  return (
    <Wrapper>
      <Header />
      {children}
      <Footer />
    </Wrapper>
  )
}

export default Layout
const Wrapper = styled.div``
