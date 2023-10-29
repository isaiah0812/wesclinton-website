import React, { useContext, useState } from "react";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../App";

type MusicCardProps = {
  id: string,
  cover: string,
  name: string,
  onClick?: React.MouseEventHandler<HTMLAnchorElement>
}

const MusicCard = ({ id, cover, name, onClick }: MusicCardProps) => {
  const { theme } = useContext(ThemeContext)

  const [padding, setPadding] = useState('1%')
  const [bgColor, setBgColor] = useState('transparent')
  const [border, setBorder] = useState<string | number>(0)
  const [color, setColor] = useState(theme.primary);
  const [borderRadius, setBorderRadius] = useState('1em');


  const handleHover = () => {
    setPadding('2.5%')
    setBgColor(theme.id === 'corey-arnell' ? theme.primary : theme.secondary)
    setBorder(`3px solid ${theme.borderColor}`)
    setBorderRadius('0em');

    if (theme.id === 'corey-arnell') setColor(theme.secondary);
  }
  const handleLeave = () => {
    setPadding('1%')
    setBgColor('transparent')
    setBorder(0)
    setBorderRadius('1em');

    if (theme.id === 'corey-arnell') setColor(theme.primary);
  }

  return (
    <Link
      className={theme.id === 'wes-clinton' ? "glitch-button" : ""}
      to="/music"
      onClick={onClick}
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
      style={{
        width: '27em', 
        padding: padding, 
        textAlign: 'center', 
        border: border,
        borderRadius: theme.id === 'wes-clinton' ? borderRadius : '1em',
        backgroundColor: bgColor,
        transition: 
          theme.id === 'corey-arnell'
            ? 'padding 0.5s, background-color 0.5s, border 0.5s, opacity 0.5s'
            : 'padding 1ms, background-color 1ms, border 1ms, opacity 1ms',
        marginTop: '1%',
        marginBottom: '1%',
        cursor: 'pointer',
        color: color,
        textDecoration: 'none',
        transform: 'scale(1)'
      }}
    >
      <Image src={cover} style={{ width: '100%', height: 'auto', margin: '0% 0% 10%'}} />
      <h3 className={theme.id === 'wes-clinton' ? "glitch-static" : ""} style={{ transform: 'scale(1)' }}>
        {name}
      </h3>
    </Link>
  )
}

export default MusicCard;