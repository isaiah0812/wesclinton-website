import React, { useContext, useState } from 'react';
import { ThemeContext } from '../../App';
import FluidContainer from './FluidContainer';

type SocialMedia = {
  name: string,
  href: string
}

const socials: SocialMedia[] = [
  {
    "name": "Bandcamp",
    "href": "https://wesclinton.bandcamp.com/"
  },
]

type FooterItemProps = {
  item: SocialMedia
}

const FooterItem = ({ item }: FooterItemProps) => {
  const { theme } = useContext(ThemeContext);
  const [hovering, setHovering] = useState(false);
  const [color, setColor] = useState(theme.primary);

  const handleHover = () => {
    setHovering(true);
    setColor(theme.secondary);
  }
  const handleLeave = () => {
    setHovering(false);
    setColor(theme.primary);
  }

  return (
    <a href={item.href} onMouseEnter={handleHover} onMouseLeave={handleLeave} style={{
      margin: '0.3em 4em',
      color: color,
      textDecoration: hovering ? 'underline' : 'none',
      fontSize: '0.9em',
      transform: theme.id === 'wes-clinton' ? 'scale(1.5)' : undefined,
    }}>
      {item.name}
    </a>
  );
}

export const Footer = () => {
  return (
    <FluidContainer style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '3%', flexWrap: 'wrap' }}>
      {socials.map(social => <FooterItem item={social} />)} 
    </FluidContainer>
  );
}