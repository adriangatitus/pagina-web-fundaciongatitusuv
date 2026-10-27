import { Link } from "react-router-dom";

import {
  AdoptionCard,
  CardContainer,
  Footer,
  Hero,
  Navbar,
  TextHeader,
} from "../components";

import { INFO_CATS } from "../data";

const AdoptionPage = () => {
  return (
    <>
      <Navbar />
      <Hero
        eyebrow=""
        title="Adoptar un gatito es una responsabilidad para toda la vida"
        subtitle=""
        VIDEO_SRC="video/videoLanding.mp4"
        POSTER_SRC="img/backgroundExample.jpg"
      >
        <Link
          to="https://docs.google.com/forms/d/e/1FAIpQLSciIIrRrUmTSB5LstM51w-Sx6egJ2VA7_pf6DwxpDFJD1kLOw/viewform?pli=1"
          className="btn btn--primary"
        >
          Aplica al proceso de adopción
        </Link>
        <Link to="https://wa.link/xh7dax" className="btn btn--primary">
          Contactanos!
        </Link>
      </Hero>
      
      <section className="section resposibility" id="responsabilidad">
        <div className="section__header">
          <p className="infographic-item__body">Es importante ser consciente que es un ser que necesita amor, dedicación, atención veterinaria, comida de buena calidad y arena. Piensa muy bien antes de adoptar, recuerda que es un miembro de la familia al cual no puedes abandonar. Nosotros hacemos proceso responsable de adopción:formulario, llamada telefónica y visita domiciliaria (virtual). Si quieres iniciar el proceso de adopción, haz clic en el siguiente enlace para diligenciar el formulario de adopción.</p>
        </div>
      </section>

      <TextHeader
        eyebrow="conoce a todos"
        title="NUESTROS GATITUS"
        subtitle="disponibles en adopción"
      />
      <CardContainer isFirstSection={false}>
        {INFO_CATS.map((cat) => (
          <AdoptionCard cat={cat} />
        ))}
      </CardContainer>
      <Footer />
    </>
  );
};

export default AdoptionPage;
