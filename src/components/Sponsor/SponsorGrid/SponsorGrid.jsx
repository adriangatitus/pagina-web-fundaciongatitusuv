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
            <TextHeader eyebrow="Apadrinamiento" title="Elige cómo ayudar a uno de nuestros gatitus" subtitle="Todos los planes son mes a mes: tú decides cuándo pausar o cancelar." />
            <div className="sponsor-cards__grid">
                {tiers.map((tier) => (
                    <TierCard key={tier.id} tier={tier} GENERAL_BENEFITS={GENERAL_BENEFITS} />
                ))}
            </div>
        </section>
    );
}