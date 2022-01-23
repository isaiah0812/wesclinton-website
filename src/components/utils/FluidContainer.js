import React from "react"
import { Container } from "react-bootstrap"

const FluidContainer = (props) => {
  return (
    <Container {...props} fluid style={{padding: 0, ...props.style}}>
      {props.children}
    </Container>
  )
}

export default FluidContainer;
