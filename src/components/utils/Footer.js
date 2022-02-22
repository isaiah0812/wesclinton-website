import React, { useContext, useState } from 'react';
import { ThemeContext } from '../../App';
import FluidContainer from './FluidContainer';

const socials = [
  {
    "name": "Instagram",
    "href": "https://www.instagram.com/wesxclinton"
  },
  {
    "name": "Twitter",
    "href": "https://www.twitter.com/wes_clinton"
  },
  {
    "name": "Bandcamp",
    "href": "https://coreyarnell.bandcamp.com/"
  },
]

const FooterItem = ({ item }) => {
  const { theme } = useContext(ThemeContext);

  const [hovering, setHovering] = useState(false);

  const handleHover = () => setHovering(true);
  const handleLeave = () => setHovering(false);

  return (
    <a href={item.href} onMouseEnter={handleHover} onMouseLeave={handleLeave} style={{
      margin: '0px 2em',
      color: theme.primary,
      textDecoration: hovering ? 'underline' : 'none',
      fontSize: '0.7em'
    }}>
      {item.name}
    </a>
  );
}

export const Footer = () => {
  return (
    <FluidContainer style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '3%' }}>
      {socials.map(social => <FooterItem item={social} />)} 
    </FluidContainer>
  );
}