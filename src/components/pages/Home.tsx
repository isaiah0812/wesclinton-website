import { Container, Image, Nav } from "react-bootstrap";
import FluidContainer from "../utils/FluidContainer";
import MusicCard from "../utils/MusicCard";
import music from '../../data/music.json';
import React, { useContext } from "react";
import { MusicContext, ThemeContext } from "../../App";
import { Helmet } from "react-helmet";
import CButton from "../utils/CButton";
import header from "../../data/header";
import styled from 'styled-components';

const ResponsiveLink = styled(Nav.Link)`
  width: ${props => props.width};

  @media (max-width: 700px) {
    width: 100%;
  }
`

const BigHeader = styled.h1<{ fontSize?: string,  theme: { id: string } }>`
  font-size: ${props => props.fontSize};

  @media (max-width: 700px) {
    font-size: ${props => props.theme.id === 'wes-clinton' ? '3em' : '2em'};
  }

  @media (max-width: 400px) {
    font-size: ${props => props.theme.id === 'wes-clinton' ? '2.5em' : '1.5em'};
  }
`

const Home = () => {
  const { theme } = useContext(ThemeContext)
  const { setProject } = useContext(MusicContext)

  const headerContent = theme.id === 'wes-clinton' ? header.wesClinton : header.coreyArnell;

  return (
    <FluidContainer>
      <Helmet>
        <title>Home - Corey [Arnell] and We$ Clinton</title>
      </Helmet>
      <FluidContainer style={{height: '100vh', display: 'flex', justifyContent: 'center'}}>
        <Image src={theme.id === 'wes-clinton' ? '/CoreyAndWes.JPG' : 'CoreyArnell.jpeg'} style={{width: '100%', height: 'auto', objectFit: 'cover'}} />
        <div style={{
          zIndex: 1,
          backgroundColor: 'rgba(11, 11, 11, 0.5)',
          width: '100%',
          height: '100vh',
          position: 'absolute',
          display: 'flex',
          alignContent: 'flex-end',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          padding: '2%'
        }}>
          <Image src={headerContent.image} style={{ minWidth: 200, width: '24%', margin: '1% 1%' }} />
          <BigHeader className={theme.id === 'wes-clinton' ? "glitch-static" : ""} fontSize={theme.id === 'wes-clinton' ? '4em' : undefined} theme={theme} style={{width: 'max-content', transform: 'scale(1)'}}>
            {theme.id === 'wes-clinton' && <span aria-hidden="true">{headerContent.name}</span>}
            {headerContent.name}
            {theme.id === 'wes-clinton' && <span aria-hidden="true">{headerContent.name}</span>}
          </BigHeader>
          <ResponsiveLink href={headerContent.url} width="50%">
            <CButton width="100%" text={headerContent.callToAction} />
          </ResponsiveLink>
        </div>
      </FluidContainer>
      <FluidContainer style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <Container fluid style={{ padding: '2%', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly', color: theme.primary }}>
          {music.filter(project => theme.id === 'wes-clinton' ? project.wes : !project.wes).slice(0, music.length >= 3 ? 3 : music.length === 1 ? 1 : music.length).map((project) => 
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
        <ResponsiveLink href="/music" width="50%" style={{ position: 'relative' }}>
          <CButton width="100%" text={theme.id === 'wes-clinton' ? "Run Up My Streams" : "See All Music"} />
        </ResponsiveLink>
      </FluidContainer>
      <Container fluid style={{ textAlign: 'center', minHeight: '30vh', padding: '10%' }}>
        <BigHeader>
          {theme.id === 'wes-clinton' ? "Merch ain't here yet, baby. Be patient." : "Merchandise coming soon..."}
        </BigHeader>
      </Container>
    </FluidContainer>
  )
}

export default Home;
