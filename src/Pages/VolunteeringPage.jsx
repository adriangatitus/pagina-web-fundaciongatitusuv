// import { Navbar, Footer, CardContainer, TextHeader } from "../components/General"
//import VolunteeringCard from "../components/Volunteering/VolunteeringCard"

import { Navbar, Footer, CardContainer, TextHeader, VolunteeringCard } from "../components"
import { VOLUNTEERING_TYPES } from "../data"

const VolunteeringPage = () => {
    return (
        <>
            <Navbar />
            <TextHeader isFirstSection={true} eyebrow="Conoce todos los " title="PROGRAMAS DE VOLUNTARIADO" subtitle="Estamos buscando voluntarios que nos permitan crecer mucho más como fundación y para ayudar más gatitos en condiciones vulnerables. Tu ayuda es muy valiosa para nosotros, haz parte de nuestro equipo y cambiarás vidas felinas todos los días. Contamos con los programas de ayuda de manera virtual o presencial:" />
            <CardContainer>
                {VOLUNTEERING_TYPES.map((volunteeringType) => (
                    <VolunteeringCard
                        key={volunteeringType.name}
                        volunteeringType={volunteeringType}
                    />
                ))}
            </CardContainer>
            <Footer />
        </>
    )
}

export default VolunteeringPage
