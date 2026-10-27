import { Link } from 'react-router-dom';

import { GOOGLE_MAPS_UBICATION } from "../../../data";

import "./CafeSection.css"

export default function CafeSection() {
  return (
    <section className="section cafe" id="cafeteria">
      <div className="cafe__col cafe__col--quote">
        <p className="eyebrow">El gatisario Cat-fetería</p>
        {/* poner el logo en version chiquita al lado del texto */}
        <p className="cafe__quote">
          Mucho más que un café de gatos:<br />
          experiencias, eventos y momentos que también cambian vidas.<br /><br />
          Proyecto autosostenible donde cada experiencia en el Gatisario <br></br>es una donación directa a los gatitos rescatados de la
          Fundación Gatitus.<br /><br />

          Descúbrelo aquí.
        </p>
        <Link to="/catfeteria" className="btn btn--primary">
          Haz tu reserva (solo con reserva previa)
        </Link>
      </div>
      <div className="cafe__col cafe__col--map">
        <iframe
          className="cafe__map"
          src={GOOGLE_MAPS_UBICATION}
          title="Ubicación de El Gatisario Cat-fetería"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}
