import { Button, Container, Image, Nav } from "react-bootstrap";
import FluidContainer from "../utils/FluidContainer";
import MusicCard from "../utils/MusicCard";
import music from '../../data/music.json';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import { useContext } from "react";
import { MusicContext, ThemeContext } from "../../App";
import { Link } from "react-router-dom";

const Home = () => {
  const { theme } = useContext(ThemeContext)
  const { setProject } = useContext(MusicContext)

  return (
    <FluidContainer>
      <FluidContainer fluid style={{height: '100vh', display: 'flex', justifyContent: 'center'}}>
        <Image src="/westapecover.jpg" style={{width: '100%', height: 'auto', objectFit: 'cover'}} />
        <div style={{
          zIndex: 1,
          backgroundColor: theme.id === 'wes-clinton' ? 'rgba(0, 0, 0, 0.5)' : 'rgba(255, 255, 255, 0.5)',
          width: '100%',
          height: '100vh',
          position: 'absolute',
          display: 'flex',
          alignContent: 'flex-end',
          flexDirection: 'column',
          justifyContent: 'end',
          textAlign: 'center',
          padding: '2%'
        }}>
          <h1>The Wes Tape</h1>
          <Button style={{ width: '30%', alignSelf: 'center'}}>Listen Now</Button>
        </div>
      </FluidContainer>
      <FluidContainer style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <Container fluid style={{ padding: '2%', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly', color: theme.primary }}>
          {music.slice(0, music.length >= 3 ? 3 : music.length === 1 ? 1 : music.length).map((project) => 
              <MusicCard
                key={project.id}
                id={project.id}
                cover={project.cover}
                name={project.name}
                onClick={() => {
                  window.scrollTo(0, 0)
                  setProject(project)
                }}
              />
          )}
        </Container>
        <Nav.Link href="/music" style={{ width: '50%' }}>
          <Button style={{ width: '100%' }}>See All Music</Button>
        </Nav.Link>
      </FluidContainer>
      <Container fluid style={{ textAlign: 'center', minHeight: '30vh', padding: '10%' }}>
        <h1>Merch ain't here yet, baby. Be patient.</h1>
      </Container>
      <Container fluid style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap' }}>
        <h1>Instagram</h1>
        <TwitterTimelineEmbed sourceType="profile" screenName="wes_clinton" options={{height: '75vh', width: '27em'}} theme={theme.id === 'wes-clinton' && "dark"} noScrollbar />
        <h1>Tik Tok or sum...</h1>
      </Container>
    </FluidContainer>
  )
}

export default Home;
