import { Metadata } from 'next';
import ServicePageTemplate from '@/components/templates/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Desarrollo de Software a Medida | BUSTICCO',
  description: 'Soluciones empresariales a medida que optimizan y escalan tu operación. Software personalizado para las necesidades únicas de tu negocio.',
};

const features = [
  {
    icon: 'Boxes',
    title: 'Software Empresarial',
    description: 'Sistemas ERP, gestión de inventarios, facturación y procesos específicos de tu industria.',
  },
  {
    icon: 'Database',
    title: 'Bases de Datos',
    description: 'Diseño e implementación de bases de datos escalables, seguras y de alto rendimiento.',
  },
  {
    icon: 'Server',
    title: 'APIs y Microservicios',
    description: 'Arquitecturas modernas que permiten integración flexible con cualquier sistema.',
  },
  {
    icon: 'Cloud',
    title: 'Soluciones Cloud',
    description: 'Infraestructura en la nube escalable, segura y con alta disponibilidad.',
  },
  {
    icon: 'Lock',
    title: 'Seguridad',
    description: 'Implementación de mejores prácticas de seguridad, encriptación y protección de datos.',
  },
  {
    icon: 'RefreshCw',
    title: 'Mantenimiento',
    description: 'Soporte continuo, actualizaciones y evolución del software según tus necesidades.',
  },
];

const benefits = [
  {
    title: 'Solución a tu Medida',
    description: 'Software diseñado específicamente para tus procesos, no soluciones genéricas.',
  },
  {
    title: 'Ventaja Competitiva',
    description: 'Herramientas únicas que diferencian tu operación de la competencia.',
  },
  {
    title: 'Integración Total',
    description: 'Conectamos el software con todos tus sistemas existentes sin fricciones.',
  },
  {
    title: 'Escalabilidad',
    description: 'Arquitectura preparada para crecer con tu negocio sin rediseños costosos.',
  },
  {
    title: 'Propiedad del Código',
    description: 'Tú eres dueño del software. Sin dependencia de proveedores externos.',
  },
  {
    title: 'ROI Medible',
    description: 'Reducción de costos operativos y aumento de eficiencia cuantificables.',
  },
];

const processSteps = [
  {
    number: '01',
    title: 'Levantamiento de Requerimientos',
    description: 'Documentamos detalladamente tus procesos, necesidades y expectativas del sistema.',
  },
  {
    number: '02',
    title: 'Diseño de Arquitectura',
    description: 'Diseñamos la arquitectura técnica: tecnologías, bases de datos, integraciones y seguridad.',
  },
  {
    number: '03',
    title: 'Desarrollo Ágil',
    description: 'Programamos en sprints de 2 semanas con demos frecuentes. Ajustamos según feedback.',
  },
  {
    number: '04',
    title: 'Testing Riguroso',
    description: 'Pruebas unitarias, de integración, de carga y de seguridad. Calidad garantizada.',
  },
  {
    number: '05',
    title: 'Despliegue',
    description: 'Implementación gradual con migración de datos, capacitación y periodo de estabilización.',
  },
  {
    number: '06',
    title: 'Soporte y Evolución',
    description: 'Mantenimiento correctivo, preventivo y evolutivo. Tu software siempre actualizado.',
  },
];

const technologies = [
  'Python', 'Django', 'FastAPI', 'Node.js',
  'TypeScript', 'React', 'Next.js', 'Vue.js',
  'PostgreSQL', 'MySQL', 'MongoDB', 'Redis',
  '.NET Core', 'Java', 'Spring Boot', 'Go',
  'AWS', 'Google Cloud', 'Azure', 'Docker',
  'Kubernetes', 'Terraform', 'CI/CD', 'Git',
  'REST APIs', 'GraphQL', 'gRPC', 'WebSockets',
];

const faqs = [
  {
    question: '¿Por qué desarrollar software a medida en vez de usar uno existente?',
    answer: 'El software a medida se adapta 100% a tus procesos, no al revés. No pagas por funciones que no usas y tienes control total. Es ideal cuando los software genéricos no cubren tus necesidades específicas.',
  },
  {
    question: '¿Cuánto cuesta desarrollar software empresarial?',
    answer: 'Depende de la complejidad. Un sistema básico puede empezar desde $20.000.000 COP. Sistemas empresariales complejos con múltiples módulos pueden superar los $100.000.000 COP.',
  },
  {
    question: '¿Cuánto tiempo toma desarrollar un sistema?',
    answer: 'Un MVP funcional puede estar listo en 2-3 meses. Un sistema empresarial completo puede tomar 6-12 meses. Hacemos entregas incrementales para que veas valor desde el inicio.',
  },
  {
    question: '¿Puedo modificar el software después de entregado?',
    answer: 'Absolutamente. El software está diseñado para evolucionar. Ofrecemos planes de mantenimiento y desarrollo continuo para agregar nuevas funcionalidades.',
  },
  {
    question: '¿Qué pasa si necesito integrar con otros sistemas?',
    answer: 'Diseñamos pensando en integración. Creamos APIs para conectar con cualquier sistema: ERP, CRM, contabilidad, bancos, transportadoras, y más.',
  },
  {
    question: '¿Ofrecen garantía sobre el software?',
    answer: 'Sí, incluimos 3-6 meses de garantía que cubre corrección de bugs sin costo adicional. Después ofrecemos planes de mantenimiento con SLAs definidos.',
  },
];

const relatedServices = [
  { title: 'Automatización IA', href: '/servicios/automatizacion-ia', color: '#00D4FF' },
  { title: 'CRM', href: '/servicios/crm', color: '#E91E8C' },
  { title: 'Desarrollo Web', href: '/servicios/desarrollo-web-app', color: '#8B5CF6' },
];

export default function SoftwarePage() {
  return (
    <ServicePageTemplate
      badge="Software a Medida"
      title="Soluciones"
      highlightedText="Empresariales"
      description="Desarrollamos software personalizado que se adapta perfectamente a los procesos únicos de tu negocio. Desde sistemas de gestión hasta plataformas complejas, creamos herramientas que impulsan tu operación."
      color="#BFFF00"
      icon="Code2"
      features={features}
      benefits={benefits}
      processSteps={processSteps}
      technologies={technologies}
      faqs={faqs}
      relatedServices={relatedServices}
    />
  );
}
