import { Container, Image } from "react-bootstrap";
import FluidContainer from "../utils/FluidContainer";
import music from '../../data/music.json';
import MusicCard from "../utils/MusicCard";
import { useContext } from "react";
import { MusicContext, ThemeContext } from "../../App";

const Music = () => {
  const { theme } = useContext(ThemeContext)
  const { project: selected, setProject } = useContext(MusicContext)

  const changeProject = (project) => {
    setProject(project)
  }

  const handleSelect = (id) => {
    changeProject(music.find(project => project.id === id))
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const showcaseMargins = '2% 3em'
  return (
    <FluidContainer>
      <FluidContainer style={{ height: '75vh', display: 'flex', justifyContent: 'center' }}>
        <Image src={selected.cover} style={{width: '100%', height: 'auto', objectFit: 'cover'}} />
        <div style={{
          zIndex: 1,
          background: `radial-gradient(transparent 20%, ${theme.secondary})`,
          width: '100%',
          height: '75vh',
          position: 'absolute',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <h1 className={theme.id === 'wes-clinton' ? "glitch-static" : ""} style={{fontSize: '3vw'}}>
            {theme.id === 'wes-clinton' && <span aria-hidden="true">{selected.name}</span>}
            {selected.name}
            {theme.id === 'wes-clinton' && <span aria-hidden="true">{selected.name}</span>}
          </h1>
          <hr style={{ width: '50%', margin: '1% 0%', border: `2.5px solid ${theme.primary}`}} />
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', width: '100%' }}>
            <Image className="player-cover" src={selected.cover} style={{ height: 'auto', margin: showcaseMargins, alignSelf: 'center'}} />
            <iframe className="player-bandcamp" title="Bandcamp Player" style={{border: 0, margin: showcaseMargins, alignSelf: 'center'}} src={selected.bandcampEmbed} seamless>
              <a href={selected.bandcampEmbed}>{selected.name} by {selected.wes ? "We$ Clinton" : "Corey [Arnell]"}</a>
            </iframe>
          </div>
        </div>
      </FluidContainer>
      <Container fluid style={{ padding: '2%', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
        {music.filter(project => theme.id === 'wes-clinton' ? project.wes : !project.wes).filter(project => project.id !== selected.id).map((project) => <MusicCard key={project.id} id={project.id} cover={project.cover} name={project.name} onClick={() => handleSelect(project.id)} />)}
      </Container>
    </FluidContainer>
  )
}

export default Music;