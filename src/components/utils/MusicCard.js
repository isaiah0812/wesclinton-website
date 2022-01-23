import { useContext } from "react";
import { useState } from "react";
import { Container, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../App";

const MusicCard = ({id, cover, name, onClick}) => {
  const { theme } = useContext(ThemeContext)

  const [padding, setPadding] = useState('1%')
  const [bgColor, setBgColor] = useState('transparent')
  const [border, setBorder] = useState(0)


  const handleHover = () => {
    setPadding('2.5%')
    setBgColor(theme.tertiary)
    setBorder(`3px solid ${theme.borderColor}`)
  }
  const handleLeave = () => {
    setPadding('1%')
    setBgColor('transparent')
    setBorder(0)
  }

  return (
    <Link
      to="/music"
      onClick={onClick}
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
      style={{
        width: '27em', 
        padding: padding, 
        textAlign: 'center', 
        border: border,
        borderRadius: '1em',
        backgroundColor: bgColor,
        transition: 'padding 0.5s, background-color 0.5s, border 0.5s, opacity 0.5s',
        marginTop: '1%',
        marginBottom: '1%',
        cursor: 'pointer',
        color: theme.primary,
        textDecoration: 'none'
      }}
    >
      <Image src={cover} style={{ width: '100%', height: 'auto', margin: '0% 0% 10%'}} />
      <h3>{name}</h3>
    </Link>
  )
}

export default MusicCard;