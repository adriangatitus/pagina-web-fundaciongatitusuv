import { TierCard, TextHeader } from "../../../components"

import "./SponsorGrid.css"
/**
 * Para personalizar el resplandor de una card, pasar el arreglo
 * `tiers` (mismo shape que DEFAULT_TIERS) y ajustar `glowColor` /
 * `glowIntensity` ('soft' | 'medium' | 'strong') por cada tier.
 */
export default function SponsorGrid({ tiers, GENERAL_BENEFITS }) {
    return (
        <section className="sponsor-cards">
            <TextHeader eyebrow="Apadrinamiento" title="Dona o apadrina y cambia la vida de miles de gatitos en condiciones vulnerables." subtitle="🐾💚 ¡Con nuestro Plan GatiPadrino/Madrina transformas la vida de un gatitu rescatado! 🐱✨
Al apadrinar, ayudas a cubrir sus necesidades esenciales: alimento 🍽️, arena limpia 🐾, churus 🍡, multivitamínicos y medicamentos 💊, insumos básicos y el arriendo del espacio donde encuentra un hogar seguro. 🏡💕
Cuando recibimos donaciones en especie, destinamos esos recursos económicos al pago del arriendo, garantizando un espacio seguro para todos nuestros gatitus. 💚🐱💚 ¡Apadrina un gatitu y sé parte de su segunda oportunidad!"/>
            <span className="text-header_subtitle"></span>
            <div className="sponsor-cards__grid">
                {tiers.map((tier) => (
                    <TierCard key={tier.id} tier={tier} GENERAL_BENEFITS={GENERAL_BENEFITS} />
                ))}
            </div>
        </section>
    );
}