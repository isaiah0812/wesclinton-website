import { Nav } from "react-bootstrap";
import FluidContainer from "../utils/FluidContainer"

const Merchandise = () => {
  return (
    <FluidContainer style={{ display: 'flex', height: '100vh', justifyContent: 'center', alignItems: 'center' }}>
      <h1>Calm yourself. I told you I ain't got merch yet.</h1>
      <Nav.Link href="/music">
        <h2>Go bump my shit until I got a shirt for you.</h2>
      </Nav.Link>
    </FluidContainer>
  )
}

export default Merchandise;