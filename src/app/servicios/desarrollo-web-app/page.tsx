import { Metadata } from 'next';
import ServicePageTemplate from '@/components/templates/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Desarrollo Web y App | BUSTICCO',
  description: 'Creamos aplicaciones móviles nativas e híbridas, y sitios web personalizados que cautivan a tus usuarios. Desarrollo profesional con las últimas tecnologías.',
};

const features = [
  {
    icon: 'Globe',
    title: 'Sitios Web Responsivos',
    description: 'Diseño adaptable que se ve perfecto en cualquier dispositivo: móvil, tablet o desktop.',
  },
  {
    icon: 'Smartphone',
    title: 'Apps Móviles',
    description: 'Aplicaciones nativas para iOS y Android, o híbridas con React Native y Flutter.',
  },
  {
    icon: 'Zap',
    title: 'Alto Rendimiento',
    description: 'Optimización de velocidad y rendimiento para una experiencia de usuario excepcional.',
  },
  {
    icon: 'Shield',
    title: 'Seguridad Avanzada',
    description: 'Implementación de mejores prácticas de seguridad y protección de datos.',
  },
  {
    icon: 'Palette',
    title: 'Diseño UI/UX',
    description: 'Interfaces intuitivas y atractivas que mejoran la experiencia del usuario.',
  },
  {
    icon: 'Search',
    title: 'SEO Optimizado',
    description: 'Estructura optimizada para motores de búsqueda desde el primer día.',
  },
];

const benefits = [
  {
    title: 'Presencia Digital Profesional',
    description: 'Destaca de la competencia con un sitio web o app que refleja la calidad de tu marca.',
  },
  {
    title: 'Mayor Alcance de Clientes',
    description: 'Llega a más clientes potenciales con presencia en web y tiendas de aplicaciones.',
  },
  {
    title: 'Automatización de Procesos',
    description: 'Reduce tareas manuales y mejora la eficiencia operativa de tu negocio.',
  },
  {
    title: 'Escalabilidad Garantizada',
    description: 'Arquitectura preparada para crecer junto con tu negocio sin limitaciones.',
  },
  {
    title: 'Soporte Continuo',
    description: 'Mantenimiento y actualizaciones para mantener tu plataforma siempre al día.',
  },
  {
    title: 'Integración con Sistemas',
    description: 'Conectamos tu web o app con CRM, ERP, pasarelas de pago y más.',
  },
];

const processSteps = [
  {
    number: '01',
    title: 'Descubrimiento y Análisis',
    description: 'Entendemos tu negocio, objetivos y usuarios. Analizamos la competencia y definimos los requerimientos del proyecto.',
  },
  {
    number: '02',
    title: 'Diseño UX/UI',
    description: 'Creamos wireframes y prototipos interactivos. Diseñamos una interfaz atractiva y centrada en el usuario.',
  },
  {
    number: '03',
    title: 'Desarrollo',
    description: 'Programamos con las mejores tecnologías y prácticas. Desarrollo ágil con entregas incrementales.',
  },
  {
    number: '04',
    title: 'Testing y QA',
    description: 'Pruebas exhaustivas de funcionalidad, rendimiento y seguridad. Aseguramos la calidad en cada detalle.',
  },
  {
    number: '05',
    title: 'Lanzamiento',
    description: 'Despliegue en producción y publicación en tiendas de apps. Monitoreo inicial y ajustes.',
  },
  {
    number: '06',
    title: 'Soporte y Evolución',
    description: 'Mantenimiento continuo, actualizaciones y nuevas funcionalidades según tus necesidades.',
  },
];

const technologies = [
  'React', 'Next.js', 'Vue.js', 'Angular', 'TypeScript',
  'Node.js', 'Python', 'PHP', 'Laravel',
  'React Native', 'Flutter', 'Swift', 'Kotlin',
  'PostgreSQL', 'MongoDB', 'MySQL', 'Redis',
  'AWS', 'Google Cloud', 'Vercel', 'Docker',
  'Tailwind CSS', 'Figma', 'REST API', 'GraphQL',
];

const faqs = [
  {
    question: '¿Cuánto tiempo toma desarrollar un sitio web o app?',
    answer: 'El tiempo varía según la complejidad. Un sitio web básico puede estar listo en 2-4 semanas, mientras que una app completa puede tomar 2-4 meses. Te daremos un cronograma detallado después de analizar tu proyecto.',
  },
  {
    question: '¿Qué tecnologías utilizan para el desarrollo?',
    answer: 'Utilizamos tecnologías modernas como React, Next.js, Node.js para web, y React Native o Flutter para apps móviles. Elegimos la mejor tecnología según las necesidades específicas de tu proyecto.',
  },
  {
    question: '¿El sitio web será responsive (adaptable a móviles)?',
    answer: 'Absolutamente. Todos nuestros sitios web son 100% responsivos y se adaptan perfectamente a cualquier dispositivo: smartphones, tablets, laptops y monitores de escritorio.',
  },
  {
    question: '¿Incluyen hosting y dominio?',
    answer: 'Podemos ayudarte a configurar el hosting y dominio. Ofrecemos opciones de hosting administrado o te asesoramos para que elijas la mejor opción según tu presupuesto.',
  },
  {
    question: '¿Ofrecen mantenimiento después del lanzamiento?',
    answer: 'Sí, ofrecemos planes de mantenimiento mensual que incluyen actualizaciones de seguridad, backups, monitoreo y soporte técnico. También podemos agregar nuevas funcionalidades.',
  },
  {
    question: '¿Puedo ver avances durante el desarrollo?',
    answer: 'Por supuesto. Trabajamos con metodología ágil y hacemos entregas incrementales cada 1-2 semanas. Tendrás acceso a un ambiente de pruebas donde podrás ver el progreso en tiempo real.',
  },
];

const relatedServices = [
  { title: 'E-Commerce', href: '/servicios/ecommerce', color: '#BFFF00' },
  { title: 'CRM', href: '/servicios/crm', color: '#E91E8C' },
  { title: 'Software a Medida', href: '/servicios/software', color: '#00D4FF' },
];

export default function DesarrolloWebAppPage() {
  return (
    <ServicePageTemplate
      badge="Desarrollo Web & App"
      title="Creamos Experiencias"
      highlightedText="Digitales Únicas"
      description="Desarrollamos sitios web de alto impacto y aplicaciones móviles que transforman la manera en que tus clientes interactúan con tu marca. Tecnología de vanguardia, diseño excepcional y resultados medibles."
      color="#00D4FF"
      icon="Smartphone"
      features={features}
      benefits={benefits}
      processSteps={processSteps}
      technologies={technologies}
      faqs={faqs}
      relatedServices={relatedServices}
    />
  );
}
