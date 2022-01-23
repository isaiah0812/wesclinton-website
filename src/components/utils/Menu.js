import { useContext } from "react";
import { useState } from "react";
import { Button, Container, Nav, Offcanvas } from "react-bootstrap";
import { ThemeContext } from "../../App";

const pages = [
  {
    name: 'Home',
    href: '/'
  },
  {
    name: 'Music',
    href: '/music'
  },
  {
    name: 'Merch',
    href: '/merch'
  },
]

const MenuItem = ({name, href}) => {
  const {theme } = useContext(ThemeContext)

  const [hover, setHover] = useState(theme.primary)

  const handleHover = () => setHover(theme.hoverPrimary)
  const handleLeave = () => setHover(theme.primary)

  return (
    <Nav.Item onMouseEnter={handleHover} onMouseLeave={handleLeave}>
      <Nav.Link href={href} style={{color: hover}}>
        {name}
      </Nav.Link>
    </Nav.Item>
  )
}

const Menu = () => {
  const { theme } = useContext(ThemeContext)
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container fluid style={{zIndex: 2, top: 0, position: 'fixed', display: 'flex', justifyContent: 'flex-end', padding: '1%'}}>
      <Button onClick={handleShow}>Menu</Button>
      <Offcanvas show={show} onHide={handleClose} placement="top" scroll style={{backgroundColor: theme.secondary}}>
        <Offcanvas.Header closeButton closeVariant={theme.id === 'wes-clinton' ? 'white' : undefined} style={{textAlign: 'center', color: theme.primary}}>
          <Offcanvas.Title>Wes Clinton</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav justify style={{display: 'flex', flexDirection: 'column'}}>
            {pages.map((page, index) => <MenuItem key={index} name={page.name} href={page.href} />)}
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </Container>
  )
}

export default Menu;