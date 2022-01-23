import './App.css';
import Home from './components/pages/Home';
import FluidContainer from './components/utils/FluidContainer';
import Menu from './components/utils/Menu';
import { Routes, Route } from 'react-router-dom';
import Music from './components/pages/Music';
import Merchandise from './components/pages/Merchandise';
import { createContext } from 'react';
import { Container } from 'react-bootstrap';
import { useState } from 'react';
import { useContext } from 'react';
import music from './data/music.json'

export const commonColors = {
  black: '#000000',
  white: '#ffffff',
  red: '#ff0000',
  blue: '#0000ff',
  green: '#00ff00'
}

const themes = {
  wesClinton: {
    ...commonColors,
    id: 'wes-clinton',
    primary: '#38c40a',
    secondary: '#18181a',
    tertiary: commonColors.black,
    borderColor: '#212124',
    hoverPrimary: '#228b22',
    primaryRGB: 'rgb(56, 196, 10)',
    secodaryRGB: 'rgba(24, 24, 26, 1)',
    tertiaryRGB: 'rgb(0, 0, 0)',
    borderColorRGB: 'rgb(33, 33, 36)',
    hoverPrimaryRGB: 'rgb(34, 139, 34)'
  },
  coreyArnell: {
    ...commonColors,
    id: 'corey-arnell',
    primary: '#242c91',
    secondary: '#e6e6e6',
    tertiary: '#c4c4c4',
    borderColor: '#212124',
    hoverPrimary: '#26adbf',
    primaryRGB: 'rgb(36, 44, 145)',
    secodaryRGB: 'rgba(230, 230, 230, 1)',
    tertiaryRGB: 'rgb(196, 196, 196)',
    borderColorRGB: 'rgb(33, 33, 36)',
    hoverPrimaryRGB: 'rgb(38, 173, 191)'
  }
}

export const MusicContext = createContext({
  project: music[0],
  setProject: () => {}
})
export const ThemeContext = createContext({
  theme: themes.wesClinton,
  setTheme: () => {}
})

const EntryPicker = () => {
  const { setTheme } = useContext(ThemeContext)

  const [coreyWidth, setCoreyWidth] = useState('50%')
  const [coreyFontSize, setCoreyFontSize] = useState('2vw')
  const [coreyPromptColor, setCoreyPromptColor] = useState(themes.coreyArnell.primary)

  const [wesWidth, setWesWidth] = useState('50%')
  const [wesFontSize, setWesFontSize] = useState('2vw')
  const [wesPromptColor, setWesPromptColor] = useState(themes.wesClinton.primary)

  const handleCoreyHover = () => {
    setCoreyWidth('80%')
    setWesWidth('20%')

    setCoreyFontSize('3vw')
    setWesFontSize('1vw')

    setWesPromptColor(themes.coreyArnell.primary)
  }

  const handleWesHover = () => {
    setCoreyWidth('20%')
    setWesWidth('80%')

    setCoreyFontSize('1vw')
    setWesFontSize('3vw')

    setCoreyPromptColor(themes.wesClinton.primary)
  }

  const handleLeave = () => {
    setCoreyWidth('50%')
    setWesWidth('50%')

    setCoreyFontSize('2vw')
    setWesFontSize('2vw')
    
    setCoreyPromptColor(themes.coreyArnell.primary)
    setWesPromptColor(themes.wesClinton.primary)
  }

  const handleCoreySelect = () => {
    setTheme(themes.coreyArnell)

    window.sessionStorage.setItem('wes', 'false')
  }

  const handleWesSelect =() => {
    setTheme(themes.wesClinton)

    window.sessionStorage.setItem('wes', 'true')
  }

  return (
    <FluidContainer style={{ display: 'flex', height: '100vh', width: '100%', justifyContent: 'center' }}>
      <Container 
        fluid
        onMouseEnter={handleCoreyHover}
        onMouseLeave={handleLeave}
        onClick={handleCoreySelect}
        style={{
          height: '100%', 
          width: coreyWidth, 
          display: 'flex', 
          justifyContent: 'center', 
          textAlign: 'center', 
          alignItems: 'center',
          cursor: 'pointer',
          backgroundColor: themes.coreyArnell.secondary,
          color: themes.coreyArnell.primary,
          transition: 'width 0.5s'
        }}
      >
        <h1 style={{ fontSize: coreyFontSize, transition: 'font-size 0.5s' }}>Corey [Arnell]</h1>
      </Container>
      <Container 
        fluid
        onMouseEnter={handleWesHover}
        onMouseLeave={handleLeave}
        onClick={handleWesSelect}
        style={{
          height: '100%', 
          width: wesWidth, 
          display: 'flex', 
          justifyContent: 'center', 
          textAlign: 'center', 
          alignItems: 'center',
          cursor: 'pointer',
          backgroundColor: themes.wesClinton.secondary,
          color: themes.wesClinton.primary,
          transition: 'width 0.5s'
        }}
      >
        <h1 style={{ fontSize: wesFontSize, transition: 'font-size 0.5s' }}>Wes Clinton</h1>
      </Container>
      <h1 style={{
        zIndex: 1,
        position: 'absolute',
        textAlign: 'center',
        top: '25%',
        backgroundImage: `linear-gradient(to right, ${coreyPromptColor}, ${wesPromptColor})`,
        backgroundSize: '100%',
        backgroundRepeat: 'repeat',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        transition: 'background-image 0.5s'
      }}>
        Pick Your Poison
      </h1>
    </FluidContainer>
  )
}

const App = () => {
  const [theme, setTheme] = useState(
    window.sessionStorage.getItem('wes') === null 
      ? false 
      : window.sessionStorage.getItem('wes') === 'true' 
        ? themes.wesClinton 
        : themes.coreyArnell
  )

  const [project, setProject] = useState(music[0])

  return (
    <ThemeContext.Provider value={{theme: theme, setTheme: setTheme}}>
      <MusicContext.Provider value={{project: project, setProject: setProject}}>
        {theme ? (
            <FluidContainer className={theme.id === 'wes-clinton' ? 'wes-clinton' : 'corey-arnell'} fluid style={{ minHeight: '100vh' }}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/music" element={<Music project={project} />} />
                <Route path="/merch" element={<Merchandise />} />
              </Routes>
              <Menu />
            </FluidContainer>
          ) : <EntryPicker />
        }
      </MusicContext.Provider>
    </ThemeContext.Provider>
  )
}

export default App;
