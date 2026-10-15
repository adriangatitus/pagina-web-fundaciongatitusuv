import { Link } from "react-router-dom"

import { Navbar, Footer, CardContainer, TextHeader, Hero, AdoptionCard } from "../components"

import { INFO_CATS } from "../data"

const AdoptionPage = () => {
    return (
        <>
            <Navbar />
            <Hero eyebrow="Adoptar un gatito es" title="una gran responsabilidad para toda la vida" subtitle=" necesitará tu amor, dedicación y cuidados" VIDEO_SRC="video/videoLanding.mp4" POSTER_SRC="img/backgroundExample.jpg">
                <Link to="https://docs.google.com/forms/d/e/1FAIpQLSciIIrRrUmTSB5LstM51w-Sx6egJ2VA7_pf6DwxpDFJD1kLOw/viewform?pli=1" className="btn btn--primary">
                    Aplica al proceso de adopción
                </Link>
                <Link to="https://wa.link/xh7dax" className="btn btn--primary">
                    Contactanos!
                </Link>
            </Hero>
            <TextHeader eyebrow="conoce a todos" title="NUESTROS GATITUS" subtitle="disponibles para adopción inmediata" />
            <CardContainer isFirstSection={false}>
                {INFO_CATS.map((cat) => (
                    <AdoptionCard cat={cat} />
                ))}
            </CardContainer>
            <Footer />
        </>
    )
}

export default AdoptionPage
