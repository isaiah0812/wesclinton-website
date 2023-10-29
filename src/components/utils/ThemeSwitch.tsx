import React, { useContext } from 'react';
import { Form } from 'react-bootstrap';
import { ThemeContext } from '../../App';

export const ThemeSwitch = () => {
  const { theme, switchTheme } = useContext(ThemeContext)

  return (
    <Form.Switch
      id="custom-switch"
      onChange={() => switchTheme()}
      checked={ theme.id === 'wes-clinton' }
    />
  )
}