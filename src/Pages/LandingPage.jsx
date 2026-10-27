import { Link } from 'react-router-dom';

import { Footer, Navbar, Hero, RescueSection, CafeSection, HelpSection, ScreenSlider, Infographic } from '../components';

import { SPECIAL_REGIME_DATA, SLIDER_LANDING_ITEMS } from "../data"

const LadingPage = () => {
    return (
        <>
            <Navbar />
            <Hero eyebrow="Fundación · Cat-fetería · Adopción"
                title="Uniendo la vida de gatitos con familias responsables para toda la vida."
                subtitle="Un hogar temporal, una taza de café y un gatitu esperando encontrarte."
                VIDEO_SRC="video/videoLanding.mp4" POSTER_SRC="img/backgroundExample.jpg">
                <Link to="/nosotros" className="btn btn--ghost">
                    ¿Quienes somos?
                </Link>
                <Link to="/adopta" className="btn btn--primary">
                    Quiero adoptar
                </Link>
                <Link to="/catfeteria" className="btn btn--ghost">
                    Conoce El Gatisario
                </Link>

            </Hero >
            <RescueSection />
            <CafeSection />
            <HelpSection />
            {/* <ScreenSlider items={SLIDER_LANDING_ITEMS} /> */}

            <Infographic ITEMS={SPECIAL_REGIME_DATA} />
            <Footer />
        </>
    )
}

export default LadingPage
