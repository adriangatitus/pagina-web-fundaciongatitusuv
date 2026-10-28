import { Navbar, Footer, SponsorGrid } from "../components";

import { GENERAL_BENEFITS, DEFAULT_TIERS } from "../data";

import './SponsorPage.css';

const SponsorPage = () => {
    return (
        <>
            <Navbar />
            <SponsorGrid tiers={DEFAULT_TIERS} GENERAL_BENEFITS={GENERAL_BENEFITS} />
            <div className="sponsor-text-bottom">
                <p>Apadrinar va más allá de un aporte económico
                    💚 Es ser parte del cambio en la vida de un ser que lo necesita.
                    💚 Es dar refugio, cuidado y calma a un corazón herido.
                    💚 Es convertirte en su familia, aunque sea a la distancia.</p>
            </div>
            <Footer />
        </>
    )
}

export default SponsorPage
