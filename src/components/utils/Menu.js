import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { useState } from "react";
import { Container, Image, Nav, Offcanvas } from "react-bootstrap";
import { ThemeContext } from "../../App";
import { ThemeSwitch } from "./ThemeSwitch"

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
    <Nav.Item onMouseEnter={handleHover} onMouseLeave={handleLeave} style={{ marginBottom: 5 }}>
      <Nav.Link className="glitch" href={href} style={{color: hover, fontSize: '1.55em'}}>
        {name}
      </Nav.Link>
    </Nav.Item>
  )
}

const Menu = () => {
  const { theme } = useContext(ThemeContext)
  
  const [show, setShow] = useState(false);
  const [closeColor, setCloseColor] = useState(theme.primary);
  const [menuColor, setMenuColor] = useState(theme.white)

  const handleCloseHover = () => setCloseColor(theme.hoverPrimary);
  const handleCloseLeave = () => setCloseColor(theme.primary);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleMenuHover = () => setMenuColor(theme.gray);
  const handleMenuLeave = () => setMenuColor(theme.white);

  return (
    <Container fluid style={{zIndex: 2, top: 0, position: 'fixed', display: 'flex', justifyContent: 'flex-end', padding: '1%'}}>
      <ThemeSwitch />
      <FontAwesomeIcon
        icon={faBars}
        onClick={handleShow}
        style={{
          color: menuColor,
          height: '3.1em',
          width: '3.1em',
          transition: 'color 0.2s',
          cursor: 'pointer'
        }}
        onMouseEnter={handleMenuHover}
        onMouseLeave={handleMenuLeave}
      />
      <Offcanvas show={show} onHide={handleClose} placement="top" scroll style={{backgroundColor: theme.secondary}}>
        <Offcanvas.Header style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
          <Image src={theme.id === 'wes-clinton' ? "/WesClintonLogo.PNG" : "/CoreyArnellLogo.png"} style={{ width: '10vw', minWidth: 100, maxWidth: 200, position: 'fixed', top: 0 }}/>
          <FontAwesomeIcon 
            icon={faTimes} 
            style={{ 
              color: closeColor,
              position: 'fixed',
              top: 0,
              right: 0,
              alignSelf: 'flex-end',
              height: '2em',
              width: '2em',
              margin: '1%',
              cursor: 'pointer',
              transition: 'color 0.2s',
            }} 
            onClick={handleClose}
            onMouseEnter={handleCloseHover}
            onMouseLeave={handleCloseLeave}
          />
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav justify style={{ display: 'flex', flexDirection: 'column' }}>
            {pages.map((page, index) => <MenuItem key={index} name={page.name} href={page.href} />)}
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </Container>
  )
}

export default Menu;