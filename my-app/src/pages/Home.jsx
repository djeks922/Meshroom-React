import React from 'react'
import Footer from '../components/Footer/Footer'
import Main from '../components/Main/Main'
import Projects from '../components/ProjectsSection/Projects'
import Services from '../components/ServicesSection/Services'
import Video from '../components/VideoSection/Video'
import Joinour from '../components/JoinOur/Joinour'

function Home() {
    return (
        <section>
            <Main />
            <Video />
            <Services />
            <Projects />
            <Joinour />
        </section>
    )
}

export default Home
