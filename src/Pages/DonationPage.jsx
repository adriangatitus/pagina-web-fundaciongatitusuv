import { Navbar, Footer, CardContainer, PaymentCard, TextHeader, VolunteeringCard } from "../components"

import { DONATION_TYPES, PAYMENT_METHODS } from "../data"
/**
 * 
 * Props:
 * - image:      URL de la imagen (reemplaza el SVG embebido)
 * - imageAlt:   texto alternativo de la imagen (opcional, cae en `name`)
 * - bandText:   texto que se ve en la franja negra antes del hover
 * - name:       título mostrado en el hover (antes "Ethereum")
 * - category:   subtítulo mostrado en el hover (antes "Cryptocurrency")
 * - price:      precio mostrado en el hover
 */

const DonationPage = () => {
    return (
        <>
            <Navbar />
            <TextHeader eyebrow="En Fundación Gatitus, cada donación nos permite seguir rescatando, cuidando y brindando nuevas oportunidades a gatitus que han vivido situaciones de abandono y vulnerabilidad." title="🐱💚 ¡Tu ayuda transforma vidas!" subtitle="🐾 Puedes apoyarnos con donaciones monetarias o en especie, contribuyendo a su alimentación, salud, bienestar y recuperación. 💚 ¡No importa el tamaño de tu aporte, cada ayuda cuenta y nos permite seguir salvando vidas!" isFirstSection={true} />
            <TextHeader eyebrow="ayudanos con tu" title="DONACIÓN EN ESPECIE" subtitle="Recibimos alimento premium, arena, medicamentos, insumos médicos, guacales, camitas, cobijas, juguetes y accesorios para gatos." isFirstSection={false} />
            <CardContainer>
                {DONATION_TYPES.map((donationType) => (
                    <VolunteeringCard
                        key={donationType.name}
                        volunteeringType={donationType}
                    />
                ))}
            </CardContainer>
            <TextHeader eyebrow="Tambien recibimos" title="DONACIÓNES MONETARIAS" subtitle="💚 Para alimentación, arena, tratamientos veterinarios, medicamentos, esterilizaciones y sostenimiento de nuestros gatitus rescatados." />
            <CardContainer>
                {PAYMENT_METHODS.map((paymentMethod) => (
                    <PaymentCard
                        key={paymentMethod.id}
                        paymentMethod={paymentMethod}
                    />
                ))}
            </CardContainer>
            <TextHeader title="🐾 ¡Cada aporte cuenta!" subtitle="Puedes donar a través de nuestras cuentas oficiales de Fundación Gatitus UV." />
            <Footer />
        </>
    )
}

export default DonationPage
