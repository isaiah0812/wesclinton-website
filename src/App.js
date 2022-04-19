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
import { Footer } from './components/utils/Footer';
import './transitions.css'

export const commonColors = {
  black: '#000000',
  white: '#ffffff',
  red: '#ff0000',
  blue: '#0000ff',
  green: '#00ff00',
  gray: '#cccccc',
}

const themes = {
  wesClinton: {
    ...commonColors,
    id: 'wes-clinton',
    primary: '#0bf709',
    secondary: '#652293',
    tertiary: '#0b0b0b',
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
    primary: '#0068aa',
    secondary: '#f7853a',
    // tertiary: '#969aa5',
    tertiary: '#f7853a',
    borderColor: '#212124',
    hoverPrimary: '#004c7d',
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
  saveTheme: () => {},
  switchTheme: () => {}
})

const EntryPicker = () => {
  const { saveTheme } = useContext(ThemeContext)
  const { setProject } = useContext(MusicContext)

  const [coreyWidth, setCoreyWidth] = useState('50%')
  const [coreyFontSize, setCoreyFontSize] = useState('2vw')

  const [wesWidth, setWesWidth] = useState('50%')
  const [wesFontSize, setWesFontSize] = useState('2vw')

  const handleCoreyHover = () => {
    setCoreyWidth('80%')
    setWesWidth('20%')

    setCoreyFontSize('3vw')
    setWesFontSize('1vw')
  }

  const handleWesHover = () => {
    setCoreyWidth('20%')
    setWesWidth('80%')

    setCoreyFontSize('1vw')
    setWesFontSize('3vw')
  }

  const handleLeave = () => {
    setCoreyWidth('50%')
    setWesWidth('50%')

    setCoreyFontSize('2vw')
    setWesFontSize('2vw')
  }

  const handleCoreySelect = () => {
    saveTheme(themes.coreyArnell)
    setProject(music.find(project => !project.wes))

    window.sessionStorage.setItem('wes', 'false')
  }

  const handleWesSelect =() => {
    saveTheme(themes.wesClinton)
    setProject(music.find(project => project.wes))

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
        <h1 className='corey-arnell' style={{ fontSize: coreyFontSize, transition: 'font-size 0.5s' }}>Corey [Arnell]</h1>
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
        <h1 className="glitch-static wes-clinton" style={{ fontSize: wesFontSize, transition: 'font-size 0.5s' }}>
          <span aria-hidden="true">We$ Clinton</span>
          We$ Clinton
          <span aria-hidden="true">We$ Clinton</span>
        </h1>
      </Container>
      {/* <h1 className={promptClass} style={{
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
      </h1> */}
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

  const [project, setProject] = useState(music.find(project => theme.id === 'wes-clinton' ? project.wes : !project.wes))

  const saveTheme = (newTheme) => {
    setTheme(newTheme)
    window.sessionStorage.setItem('wes', newTheme.id === 'wes-clinton' ? 'true' : 'false')
  }

  const switchTheme = () => {
    if (theme.id === 'wes-clinton') {
      // Change to Corey [Arnell]
      saveTheme(themes.coreyArnell)
      setProject(music.find(project => !project.wes))
    } else {
      // Change to We$ Clinton
      saveTheme(themes.wesClinton)
      setProject(music.find(project => project.wes))
    }
  }

  return (
    <ThemeContext.Provider value={{ theme, saveTheme, switchTheme }}>
      <MusicContext.Provider value={{project: project, setProject: setProject}}>
        {theme ? (
            <FluidContainer className={theme.id === 'wes-clinton' ? "wes-clinton" : "corey-arnell"} fluid style={{ minHeight: '100vh', color: theme.primary, backgroundColor: theme.tertiary }}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/music" element={<Music />} />
                <Route path="/merch" element={<Merchandise />} />
              </Routes>
              <Footer />
              <Menu />
            </FluidContainer>
          ) : <EntryPicker />
        }
      </MusicContext.Provider>
    </ThemeContext.Provider>
  )
}

export default App;
