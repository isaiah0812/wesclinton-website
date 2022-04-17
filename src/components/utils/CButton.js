import React, { useContext, useState } from 'react';
import { Button } from 'react-bootstrap';
import { ThemeContext } from '../../App';

const CButton = ({text, width, style}) => {
  const { theme } = useContext(ThemeContext);
  const [fillColor, setFillColor] = useState('transparent')

  const hover = () => setFillColor(theme.primary);
  const leave = () => setFillColor('transparent');

  const buttonStyle = {
    // width: width ? width : '100%',
    width: '100%',
    border: `4px solid ${theme.primary}`,
    borderRadius: 0,
    backgroundColor: fillColor,
    color: fillColor === 'transparent' ? theme.primary : theme.secondary,
    fontSize: '1.5em',
    transition: theme.id === 'wes-clinton' ? 'background-color 1ms, color 1ms' : undefined,
  }

  return (
    <div className={theme.id === 'wes-clinton' ? 'glitch-button' : ''} style={{ width: width ? width : '100%' }}>
      <Button className={theme.id === 'wes-clinton' ? 'glitch' : ''} onMouseEnter={hover} onMouseLeave={leave} style={{
        ...buttonStyle,
        transform: 'scale(1)',
        ...style,
      }}>{text}</Button>
    </div>
  )
}

export default CButton;