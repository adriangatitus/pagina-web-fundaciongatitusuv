import { Link } from 'react-router-dom';

import { Footer, Navbar, Hero, RescueSection, CafeSection, HelpSection, ScreenSlider, Infographic } from '../components';

import { SPECIAL_REGIME_DATA } from "../data"

const LadingPage = () => {
    return (
        <>
            <Navbar />
            <Hero eyebrow="Catfeteria · Refugio · Adopción"
                title="Donde cada maullido encuentra esperanza y cada rescate tiene un nuevo comienzo"
                subtitle="Un hogar de paso, una taza de café y un gatito esperando encontrarte."
                VIDEO_SRC="video/videoLanding.mp4" POSTER_SRC="img/backgroundExample.jpg">
                <Link to="/adopta" className="btn btn--primary">
                    Quiero adoptar
                </Link>
                <Link to="/catfeteria" className="btn btn--ghost">
                    Conoce el café
                </Link>
            </Hero >
            <RescueSection />
            <CafeSection />
            <div className="section__header">
                <p className="eyebrow">Cuando ayudar cambia vidas</p>
                <h2 className="section__title">¿Cómo puedes ayudar?</h2>
            </div>
            <ScreenSlider />
            <HelpSection />
            <Infographic ITEMS={SPECIAL_REGIME_DATA} />
            <Footer />
        </>
    )
}

export default LadingPage
