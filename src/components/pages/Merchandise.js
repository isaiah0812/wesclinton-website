import { useContext } from "react";
import { Nav } from "react-bootstrap";
import Helmet from "react-helmet";
import { ThemeContext } from "../../App";
import FluidContainer from "../utils/FluidContainer"

const Merchandise = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <FluidContainer style={{ display: 'flex', height: '100vh', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', textAlign: 'center' }}>
      <Helmet>
        <title>Merchandise - CoreyArnell! and We$ Clinton</title>
      </Helmet>
      <h1>{theme.id === 'wes-clinton' ? "Calm yourself. I told you I ain't got merch yet." : "Merchandise coming soon."}</h1>
      <Nav.Link href="/music">
        <h2 className={theme.id === 'wes-clinton' ? "glitch" : ""}>
          {theme.id === 'wes-clinton' && <span aria-hidden="true">{theme.id === 'wes-clinton' ? "Go bump my shit until I got a shirt for you." : "Please continue to support me by listening to my music!"}</span>}
          {theme.id === 'wes-clinton' ? "Go bump my shit until I got a shirt for you." : "Please continue to support me by listening to my music!"}
          {theme.id === 'wes-clinton' && <span aria-hidden="true">{theme.id === 'wes-clinton' ? "Go bump my shit until I got a shirt for you." : "Please continue to support me by listening to my music!"}</span>}
        </h2>
      </Nav.Link>
    </FluidContainer>
  )
}

export default Merchandise;