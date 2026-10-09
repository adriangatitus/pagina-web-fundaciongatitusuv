import { ProductCard } from "../../../components";

import { SERVICE_CATEGORIES } from '../../../data'

import "./Catalog.css";

function handleReservation(service) {
    console.log("Reserva solicitada:", {
        id: service.id,
        titulo: service.title,
        subtitulo: service.subtitle,
        precio: service.price,
    });
}

export default function Catalog() {
    return (
        <div className="gatitu-page">
            <header className="gatitu-header">
                <p className="gatitu-header-kicker">Conoce todos</p>
                <h1 className="gatitu-header-title">Nuestros servicios</h1>
                <p className="gatitu-header-sub">
                    Toca para ver tooodo lo que incluyen nuestros gatiplanes 🐱
                    recuerda que todos los ingresos irán destinados a nuestros gatitos residentes.
                </p>
            </header>

            {SERVICE_CATEGORIES.map((category) => (
                <section className="gatitu-section" key={category.id}>
                    <div className="gatitu-section-head">
                        <h2 className="gatitu-section-title">{category.label}</h2>
                        <p className="gatitu-section-tagline">{category.tagline}</p>
                    </div>
                    <div className="gatitu-grid">
                        {category.services.map((service) => (
                            <ProductCard
                                key={service.id}
                                service={service}
                                category={category}
                                onReserve={handleReservation}
                            />
                        ))}
                    </div>
                </section>
            ))}
        </div>
    );
}
