const VOLUNTEERING_TYPES = [
    {
        name: "Visitar y dar cuidados",
        image: "img/VolunteeringImage.jpeg",
        imageAlt: "Visitar y dar cuidados",
        functions: [
            "🐱💚 Visita y brinda cuidados a nuestros gatitus rescatados. Ayúdanos con la limpieza de sus espacios, comparte momentos de juego y socialización, y bríndales cariño mientras se preparan para encontrar un hogar definitivo.",
            "🐾🏡🕘 Horario: De 9:00 a 11:00 a. m., mínimo 2 veces por semana.",
        ]
    },
    {
        name: "Transporte de peluditos",
        image: "img/TransportImage.jpeg",
        imageAlt: "Transporte de peluditos",
        functions: [
            "🚗🐱 ¡Ayúdanos con el transporte de nuestros gatitus rescatados! Colabora con sus traslados dentro de Bogotá para que puedan recibir la atención y los cuidados que necesitan. 💚🐾",
            "🚘 Requisitos: Contar con un vehículo con espacio para transportar un guacal y disponibilidad para realizar traslados a veterinarias, rescates y otros lugares necesarios.",
        ]
    },
    {
        name: "Apoyo en Redes y Diseño Gráfico",
        image: "img/DesingImage1.jpg",
        imageAlt: "Apoyo en Redes y Diseño Gráfico",
        functions: [
            "🎨🐱 Redes Sociales y Diseño Gráfico ¡Ayúdanos con el diseño gráfico y la comunicación digital de nuestra Fundación! Crea publicaciones, reels, historias, campañas y productos solidarios, desarrollando estrategias digitales que nos permitan llegar a más personas y ayudar a nuestros gatitus. 💚🐾",
            "💻 Requisitos: Creatividad, conocimientos en diseño gráfico o redes sociales, manejo de herramientas como Canva, organización, trabajo en equipo y compromiso con los proyectos asignados.",
        ]
    },
    {
        name: "Proyecto autosostenible, Productos Solidarios y Donaciones",
        image: "img/ProjectImage.jpg",
        imageAlt: "Proyecto autosostenible, Productos Solidarios y Donaciones",
        functions: [
            "🛍️🐱 GatituShop, Gatisario y Otras Donaciones ¡Ayúdanos a crear nuevas oportunidades para apoyar a nuestros gatitus! 💚🐾 Participa en la gestión de donaciones, creación de productos solidarios, promoción de GatituShop y Gatisario, y organización de talleres, servicios y actividades que nos permitan recaudar fondos para su bienestar. 🐱🛍️",
            "📋 Requisitos: Creatividad, iniciativa, organización, habilidades de comunicación y compromiso para desarrollar nuevas ideas, gestionar donaciones y promover nuestros productos, servicios y actividades.",
        ]
    },
    {
        name: "Apoyo en Recaudación de fondos",
        image: "img/FundraisingImage.jpeg",
        imageAlt: "Apoyo en recaudación de fondos",
        functions: [
            "💚🐱 Recaudación de fondos ¡Ayúdanos a recaudar los recursos que nuestros gatitus necesitan! Participa en la planeación, organización y promoción de actividades presenciales y virtuales, como rifas, bingos, eventos y campañas solidarias, para apoyar su alimentación, atención veterinaria y bienestar. 🐾💰",
            "📋 Requisitos: Creatividad, iniciativa, organización, habilidades de comunicación y compromiso para gestionar participantes, promover actividades y cumplir las metas de recaudación.",
        ]
    },
    {
        name: "Alianzas Empresariales",
        image: "img/BusinessAlliancesImage.jpg",
        imageAlt: "Alianzas Empresariales",
        functions: [
            "🤝💚 Alianzas Empresariales ¡Conecta empresas y emprendimientos con nuestra causa! Ayúdanos a crear alianzas estratégicas, gestionar donaciones, conseguir patrocinadores y desarrollar oportunidades de colaboración que nos permitan recaudar recursos y mejorar el bienestar de nuestros gatitus. 🐱🐾",
            "📋 Requisitos: Habilidades de comunicación y negociación, creatividad, iniciativa, organización y compromiso para buscar oportunidades, establecer acuerdos y dar seguimiento a las alianzas.",
        ]
    },
    {
        name: "Ayuda en procesos de adopción",
        image: "img/AdoptionImage.jpeg",
        imageAlt: "Ayuda en procesos de adopción",
        functions: [
            "🐱💚 Adopciones ¡Ayúdanos a encontrar hogares llenos de amor para nuestros gatitus! Apoya en la gestión de formularios, entrevistas, seguimiento de solicitudes, documentación, difusión y acompañamiento durante los procesos de adopción. 🏡🐾",
            "📋 Requisitos: Empatía, responsabilidad, organización, buena comunicación y compromiso para evaluar y acompañar a las familias adoptantes, garantizando el bienestar de nuestros gatitus. 💚",
        ]
    },
    {
        name: "Ayuda en procesos de voluntariado",
        image: "img/VolunteeringProcessImage.jpeg",
        imageAlt: "Ayuda en procesos de voluntariado",
        functions: [
            "🐱💚 Gestión de Voluntariado ¡Ayúdanos a conectar más corazones con nuestra causa! Apoya en la convocatoria, selección, capacitación y seguimiento de voluntarios, gestionando formularios, entrevistas, documentación, visitas y estrategias para fortalecer el compromiso de quienes ayudan a nuestros gatitus. 🐾🤝",
            "📋 Requisitos: Organización, responsabilidad, habilidades de comunicación, empatía, trabajo en equipo y compromiso para acompañar y coordinar a nuestros voluntarios.",
        ]
    },
    {
        name: "Fotografía",
        image: "img/A3.jpg",
        imageAlt: "Fotografía",
        functions: [
            "📸🐱 Fotografía, ¡Captura momentos que ayuden a transformar vidas gatunas! Ayúdanos a mostrar la personalidad y las historias de nuestros gatitus mediante fotografías, edición de imágenes y cobertura de eventos que apoyen su adopción y nuestras campañas. 💚🐾",
            "📋 Requisitos: Conocimientos en fotografía y edición, creatividad, sensibilidad hacia los animales y disponibilidad para realizar sesiones fotográficas y apoyar eventos.",
        ]
    },
    {
        name: "Gestores de Tecnología",
        image: "img/TechnologyVolunteering.jpeg",
        imageAlt: "Gestores de Tecnología",
        functions: [
            "💻🐱 Tecnología ¡Pon tus conocimientos tecnológicos al servicio de nuestros gatitus! Ayúdanos a desarrollar, mejorar y mantener nuestra página web, aplicaciones y herramientas digitales para optimizar los procesos de la Fundación y facilitar nuestra labor de rescate y protección animal. 💚🐾",
            "📋 Requisitos: Conocimientos en desarrollo web, aplicaciones, sistemas de información o herramientas tecnológicas, capacidad para resolver problemas, organización y compromiso con los proyectos asignados.",
        ]
    },
    {
        name: "Apoyo en eventos",
        image: "img/ApoyoEventosImage.JPG",
        imageAlt: "Apoyo en eventos",
        functions: [
            "🎉💚 Apoyo en eventos ¡Ayúdanos a crear experiencias inolvidables junto a nuestros gatitus! Participa en la organización y logística de eventos, acompaña las sesiones de Gatituterapia y apoya con fotografías y videos para compartir nuestras actividades. 🐱🎈",
            "📋 Requisitos: Organización, responsabilidad, buena cunicación, trabajo en equipo y disponibilidad para apoyar actividades presenciales.",
        ]
    },
    {
        name: "Talleristas",
        image: "img/TalleristasImage.png",
        imageAlt: "Talleristas",
        functions: [
            "🎨🐱 Tallestas ¡Comparte tu talento y ayúdanos a transformar vidas gatunas! Diseña y dirige talleres creativos, educativos o recreativos que permitan a las personas disfrutar de experiencias especiales mientras contribuyen al cuidado de nuestros gatitus. 💚🖌️",
            "📋 Requisitos: Conocimientos y experiencia en el área del taller, creatividad, habilidades para enseñar, responsabilidad y disponibilidad para realizar actividades presenciales.",
        ]
    },
    {
        name: "Apadrinamiento",
        image: "img/ApadrinamientoImage.jpeg",
        imageAlt: "Apadrinamiento",
        functions: [
            "💚🐾 Apadrinamiento ¡Ayúdanos a encontrar más GatiPadrinos y GatiMadrinas para nuestros rescatados! Apoya en la gestión de formularios, elaboración de reportes mensuales, comunicación con padrinos y creación de estrategias para fortalecer su compromiso y conseguir nuevos apoyos. 🐱💌",
            "📋 Requisitos: Organización, empatía, responsabilidad, buena comunicación escrita y compromiso para realizar seguimiento a nuestros GatiPadrinos y GatiMadrinas.",
        ]
    },
    {
        name: "Medicos Felinos",
        image: "img/MedicinaFelinaImage.jpeg",
        imageAlt: "Médicos Felinos",
        functions: [
            "🩺🐱 Proyectos de Medicina Felina ¡Pon tus conocimientos al servicio de la salud y el bienestar de nuestros gatitus! 💚🐾 Apoya en el desarrollo de proyectos de salud felina, seguimiento de tratamientos, prevención de enfermedades, educación sobre cuidados y estrategias para mejorar la calidad de vida de nuestros rescatados.",
            "📋 Requisitos: Estudiante o profesional de Medicina Veterinaria, interés en medicina felina, responsabilidad, organización, trabajo en equipo y compromiso con el bienestar animal. Las actividades clínicas deberán realizarse bajo supervisión veterinaria.",
        ]
    },
    {
        name: "Apoyo Administrativo",
        image: "img/ApoyoAdministrativoImage.jpg",
        imageAlt: "Apoyo Administrativo",
        functions: [
            "📋🐱 Apoyo Administrativo ¡Ayúdanos a fortalecer la gestión de nuestra Fundación! Apoya en tareas administrativas, búsqueda de información, organización de documentos, seguimiento de procesos, coordinación de actividades y apoyo contable para mejorar nuestro funcionamiento y seguir ayudando a más gatitus. 💚🐾",
            "📋 Requisitos: Organización, responsabilidad, proactividad, manejo de herramientas ofimáticas, buena comunicación y conocimientos administrativos o contables según las tareas asignada",
        ]
    },

]

export default VOLUNTEERING_TYPES