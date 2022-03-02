import React from "react"
import styled from "styled-components"
import Layout from "./layout"
function Design() {
  return (
    <Wrapper>
      <Layout>
        <Hero>
          <Title>ux designer</Title>
          <Sub>Join us and get started your journey as a UX Designer</Sub>
        </Hero>
        <Info>
          <h2>About The Job ----</h2>
          <p>
            Egestas lectus ac nunc, id. In ullamcorper turpis velit habitasse
            donec nisl justo. Non lectus nisl vel aliquet. Malesuada sem mauris
            feugiat fermentum, sem etiam iaculis congue. Feugiat nascetur
            tristique egestas fringilla ipsum ut. Tellus orci fermentum, amet,
            bibendum phasellus accumsan. Magna rhoncus in gravida commodo magnis
            diam. Lacus morbi lectus at quam neque, tristique. Massa diam
            aliquet mattis dictum purus placerat mauris. Id aliquam vitae arcu
            ac dolor tortor, dui. Dignissim amet, dui egestas suspendisse massa
            nunc in dolor volutpat. Sed mi eget praesent eget non vitae neque
            orci. Rhoncus, proin tristique sem congue. Sit ut mattis purus odio
            dictumst turpis. Id nullam neque leo quisque. Neque gravida egestas
            sed rhoncus suspendisse mi. Feugiat platea tempus tellus id ac. Quam
            odio sed bibendum platea dui. Blandit sed feugiat quis in enim eu.
            Mauris pellentesque ut magna sollicitudin magna. Gravida egestas
            iaculis lobortis turpis rhoncus mi vestibulum. Ac odio est et arcu
            suscipit convallis. Non nisl leo, amet tortor, tellus integer a
            suspendisse. Egestas nisi, viverra eget scelerisque turpis nibh
            ultrices turpis maecenas. Convallis magna lectus urna consectetur.
            Pharetra aliquam volutpat commodo libero pretium et magna quis.
            Neque, id maecenas tortor sed. Faucibus nulla amet, curabitur
            aliquet lacus, in.
          </p>
          <Require>
            <h3>Requirements</h3>
            <h3>Responsibilities</h3>
          </Require>
          <ul>
            <li>Quam odio sed bibendum platea dui.</li>
            <li>
              Arcu scelerisque ultrices proin non ligula lorem leo mattis.
            </li>
            <li>Turpis nec velit purus commodo auctor.</li>
            <li>Enim amet neque, id quis.</li>
            <li>A facilisis egestas consequat senectus ultrices amet.</li>
            <li>
              Odio scelerisque faucibus tincidunt tristique mi blandit at.
            </li>
            <li>Et quam nunc, blandit vivamus et volutpat felis, viverra.</li>
          </ul>
          <Apply>Apply Now ----</Apply>
        </Info>

        <Form>
          <Input type="text" placeholder="First Name" />
          <Input type="text" placeholder="Last Name" />
          <Input type="email" placeholder="Email" />
          <Input type="number" placeholder="Phone" />
          <Input type="file" />
        </Form>
        <Buttons>
          <Submit>Submit</Submit>
        </Buttons>
      </Layout>
    </Wrapper>
  )
}

export default Design
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
const Sub = styled.p`
  color: #34a994;
  margin-top: 0rem;
`
const Info = styled.div`
  max-width: 800px;
  margin: 0 auto;
`
const Require = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
`
const Apply = styled.h2`
  margin-top: 3rem;
`
const Form = styled.div`
  margin: 0 auto;
  max-width: 800px;
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`
const Input = styled.input`
  padding: 1.5rem;
  font-size: 1rem;
  border: 1px solid #aeaeae;
  box-sizing: border-box;
  width: 24rem;

  ::placeholder {
    color: #aeaeae;
  }
`
const Buttons = styled.div`
  margin: 0 auto;
  max-width: 800px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 15vh;
  margin-bottom: 4rem;
`
const Submit = styled.button`
  border: none;
  font-family: poppins;
  font-size: 1.5rem;
  color: white;
  background: #34a994;
  text-transform: uppercase;
  padding: 0.5rem 3.3rem;
  margin: 3rem 0rem;
`
