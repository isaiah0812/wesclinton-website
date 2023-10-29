import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import { Container, Image, Nav, Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../App";
import { ThemeSwitch } from "./ThemeSwitch"

type Page = {
  name: string;
  href: string;
}

const pages: Page[] = [
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

const MenuItem = ({name, href}: Page) => {
  const {theme } = useContext(ThemeContext)

  const [hover, setHover] = useState(theme.primary)

  const handleHover = () => setHover(theme.hoverPrimary)
  const handleLeave = () => setHover(theme.primary)

  return (
    <Nav.Item onMouseEnter={handleHover} onMouseLeave={handleLeave} style={{ marginBottom: 5, width: 'max-content', alignSelf: 'center', margin: '0.65em' }}>
      <Nav.Link className={theme.id === 'wes-clinton' ? "glitch" : ""} href={href} style={{color: hover, fontSize: '1.55em', padding: 0, transition: theme.id === 'wes-clinton' ? 'color 1ms' : undefined}}>
        {theme.id === 'wes-clinton' && <span aria-hidden="true">{name}</span>}
        {name}
        {theme.id === 'wes-clinton' && <span aria-hidden="true">{name}</span>}
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
          <Link to={'/'} onClick={() => {
            handleClose()
            window.scrollTo({top: 0, behavior: 'smooth'})
          }}>
            <Image src={theme.id === 'wes-clinton' ? "/WesClintonLogo.PNG" : "/CoreyArnellLogo.png"} style={{ width: '10vw', minWidth: 100, maxWidth: 200, position: 'fixed', top: 0 }}/>
          </Link>
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
          <Nav className={theme.id === "wes-clinton" ? "wes-clinton" : "corey-arnell"} justify style={{ display: 'flex', flexDirection: 'column' }}>
            {pages.map((page, index) => <MenuItem key={index} name={page.name} href={page.href} />)}
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </Container>
  )
}

export default Menu;