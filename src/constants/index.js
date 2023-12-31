import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  java,
  python,
  html,
  css,
  npm,
  reactjs,
  tailwind,
  nodejs,
  git,
  githubIcon,
  mysql,
  bootstrap,
  axa,
  tp,
  oneLink,
  carrent,
  jobit,
  tripguide,
  javadev,
  java1,
  java2,

} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "Sobre mí",
  },
  {
    id: "work",
    title: "Experiencia",
  },
  {
    id: "contact",
    title: "Contacto",
  },
];

const services = [
  {
    title: "Desarrollador web",
    icon: web,
  },
  {
    title: "Frontend developer",
    icon: mobile,
  },
  {
    title: "Especialista Java",
    icon: backend,
  },
  {
    title: "Ingeniero de sistemas",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "NPM",
    icon: npm,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "git",
    icon: git,
  }, 
  {
    name: "Github",
    icon: githubIcon,
  },
];

const experiences = [
  {
    title: "Desarrollador",
    company_name: "Axa Colpatria",
    icon: axa,
    iconBg: "#383E56",
    date: "Junio 2020 - Actualmente",
    points: [
      "Análisis y desarrollo de sistemas de información",
      "Apoyo en el desarrollo de aplicativos web con PHP a través de Symfony",
      "Implementación de diseños a través de maquetación con HTML / CSS",
      "Manejo de repositorios a través de GIT",
      "Creación e integración de funcionalidades a través de JavaScript y JQuery",
      "Uso del framework Bootstrap y Materialize para implementación de diseños responsive",
      "Manejo de TWIG templates para consumo de Backend PHP a través de arquitectura MVC",
      "Documentación técnica y de usuario de los programas desarrollados",
      "Testing a través de casos de usuario, visualización y creación de pruebas",
      "Cumplimiento de requerimientos antes de etapa de despliegue",
    ],
  },
  {
    title: "Técnico de TI",
    company_name: "Teleperfomance",
    icon: tp,
    iconBg: "#E6DEDD",
    date: "Junio 2021 - Febrero 2022",
    points: [
      "Instalación de VPN’s y configuraciones de Firewalls",
      "Manejo de CRM para creación de usuarios, asignación de roles y permisos",
      "Limpieza y mantenimiento de equipos",
      "Instalación de aplicativos, configuración de permisos en windows",
      "Manejo de bash tanto en sistemas operativos Linux como Windows",
      "Configuración y asistencia de redes",
      "Solución de tickets de soporte de usuario",
    ],
  },
  {
    title: "Asesor de servicio al cliente",
    company_name: "Teleperformance",
    icon: tp,
    iconBg: "#383E56",
    date: "Julio 2020 - Mayo 2021",
    points: [
      "Asesor de servicio al cliente semibilingüe a través de llamadas telefónicas y correos electrónicos",
    ],
  },
  {
    title: "Asesor de servicio al cliente",
    company_name: "OneLink - WebHelp",
    icon: oneLink,
    iconBg: "#E6DEDD",
    date: "Julio 2019 - Febrero 2020",
    points: [
      "Asesor de servicio al cliente a través de llamadas telefónicas y correos electrónicos",
    ],
  },
];

const testimonials = [
  {
    certificate: javadev,
    name: "Especialista de desarrollo Java",
    company: "Linkedin Learning",
    image: "https://media.licdn.com/dms/image/C560BAQHaVYd13rRz3A/company-logo_100_100/0/1638831590218/linkedin_logo?e=1712188800&v=beta&t=krwiuiVUoMTiMiFmWn8SrgXPSL1RnNBomyOxC-RHIoo",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    certificate: java1,
    name: "Java: Código robusto",
    company: "Linkedin Learning",
    image: "https://media.licdn.com/dms/image/C560BAQHaVYd13rRz3A/company-logo_100_100/0/1638831590218/linkedin_logo?e=1712188800&v=beta&t=krwiuiVUoMTiMiFmWn8SrgXPSL1RnNBomyOxC-RHIoo",
  },
  {
    certificate: java2,
    name: "Java: Esencial",
    company: "Linkedin Learning",
    image: "https://media.licdn.com/dms/image/C560BAQHaVYd13rRz3A/company-logo_100_100/0/1638831590218/linkedin_logo?e=1712188800&v=beta&t=krwiuiVUoMTiMiFmWn8SrgXPSL1RnNBomyOxC-RHIoo",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
