
import './ShelterSection.css';

export default function ShelterSection() {
    return (
        <section className="shelter-section" id="shelter">
            <div className="shelter-container">

                <div className="shelter-content">
                    <span className="shelter-tag">
                        <span>🐾</span> Fundación Gatitus - Uniendo Vidas
                    </span>

                    <h2>
                        Un hogar temporal,
                        <span> una oportunidad para toda la vida.</span>
                    </h2>

                    <p className="shelter-intro">
                        ¿Quieres una linda compañía y no te decides
                        todavía a adoptar gatitos?
                    </p>

                    <p className="shelter-description">
                        Conviértete en <strong>hogar de paso</strong> de la
                        Fundación Gatitus-Uniendo Vidas y ayúdanos a cambiar
                        vidas gatunas. Con tu ayuda podemos rescatar más
                        peluditos que lo necesiten.
                    </p>

                    <div className="shelter-benefit">
                        <div className="shelter-benefit-icon">💗</div>
                        <div>
                            <h3>¡Nosotros nos encargamos de apoyarte!</h3>
                            <p>
                                Se responde por comida, arena y todo lo que
                                necesiten nuestros rescatados.
                            </p>
                        </div>
                    </div>

                    <p className="shelter-description">
                        Aunque tú también puedes correr con estos gastos
                        y apoyarnos, pues tenemos muy pocas donaciones y
                        nuestros recursos son limitados.
                    </p>

                    <div className="shelter-final">
                        <span className="shelter-paw">🐱</span>
                        <p>
                            No esperes más y resguarda un peludito hasta que
                            esté recuperado y encuentre su hogar ideal.
                        </p>
                    </div>

                    <a href="#contacto" className="shelter-button">
                        Quiero ser hogar de paso
                        <span>→</span>
                    </a>
                </div>

                <div className="shelter-visual">
                    <div className="shelter-image-frame">
                        <img
                            src="https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=900"
                            alt="Gatito esperando encontrar un hogar lleno de amor"
                        />
                        <div className="shelter-image-label">
                            <span>🐾</span>
                            <div>
                                <strong>Un espacio seguro</strong>
                                <small>Puede cambiar una vida</small>
                            </div>
                        </div>
                    </div>

                    <div className="shelter-decoration shelter-decoration-one">
                        ♥
                    </div>
                    <div className="shelter-decoration shelter-decoration-two">
                        ✿
                    </div>

                    <div className="shelter-sticker">
                        <span>🐈</span>
                        <strong>Amor</strong>
                        <small>que transforma</small>
                    </div>
                </div>

            </div>
        </section>
    );
}
