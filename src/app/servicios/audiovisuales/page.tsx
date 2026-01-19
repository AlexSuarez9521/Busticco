import { Metadata } from 'next';
import ServicePageTemplate from '@/components/templates/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Servicios Audiovisuales | BUSTICCO',
  description: 'Producción y edición multimedia profesional que cuenta tu historia de forma impactante. Videos corporativos, contenido para redes y más.',
};

const features = [
  {
    icon: 'Film',
    title: 'Videos Corporativos',
    description: 'Presenta tu empresa de forma profesional. Videos institucionales que generan confianza.',
  },
  {
    icon: 'Play',
    title: 'Contenido para Redes',
    description: 'Reels, TikToks, YouTube Shorts optimizados para engagement y viralización.',
  },
  {
    icon: 'Camera',
    title: 'Fotografía Profesional',
    description: 'Sesiones fotográficas para productos, equipo, eventos y contenido de marca.',
  },
  {
    icon: 'Clapperboard',
    title: 'Spots Publicitarios',
    description: 'Comerciales de alto impacto para TV, digital y redes sociales.',
  },
  {
    icon: 'Music',
    title: 'Producción de Audio',
    description: 'Locución profesional, jingles, podcasts y diseño sonoro.',
  },
  {
    icon: 'Sparkles',
    title: 'Motion Graphics',
    description: 'Animaciones y gráficos en movimiento que dan vida a tu marca.',
  },
];

const benefits = [
  {
    title: 'Mayor Engagement',
    description: 'El video genera 1200% más compartidos que texto e imágenes combinados.',
  },
  {
    title: 'Conexión Emocional',
    description: 'El audiovisual conecta con las emociones de tu audiencia como ningún otro formato.',
  },
  {
    title: 'Mejor Conversión',
    description: 'Las landing pages con video convierten hasta 80% más que las que solo tienen texto.',
  },
  {
    title: 'Profesionalismo',
    description: 'Contenido de alta calidad que eleva la percepción de tu marca.',
  },
  {
    title: 'Versatilidad',
    description: 'Un video puede adaptarse para web, redes, presentaciones y publicidad.',
  },
  {
    title: 'Storytelling Efectivo',
    description: 'Cuenta la historia de tu marca de forma memorable e impactante.',
  },
];

const processSteps = [
  {
    number: '01',
    title: 'Briefing Creativo',
    description: 'Entendemos tu visión, objetivos, audiencia y mensaje. Definimos el concepto creativo.',
  },
  {
    number: '02',
    title: 'Preproducción',
    description: 'Guión, storyboard, casting, scouting de locaciones y planificación logística.',
  },
  {
    number: '03',
    title: 'Producción',
    description: 'Filmación/fotografía con equipo profesional. Dirección artística y técnica de alto nivel.',
  },
  {
    number: '04',
    title: 'Postproducción',
    description: 'Edición, colorización, efectos visuales, animación y diseño sonoro.',
  },
  {
    number: '05',
    title: 'Revisión y Ajustes',
    description: 'Te presentamos el producto para feedback. Realizamos ajustes hasta tu satisfacción.',
  },
  {
    number: '06',
    title: 'Entrega Final',
    description: 'Exportación en todos los formatos necesarios: web, redes, TV, cine.',
  },
];

const technologies = [
  'Cámaras Cinema (RED, Blackmagic)', 'Drones DJI', 'Iluminación Profesional', 'Audio Profesional',
  'Adobe Premiere Pro', 'DaVinci Resolve', 'After Effects', 'Cinema 4D',
  'Audition', 'Pro Tools', 'Photoshop', 'Lightroom',
  'Final Cut Pro', 'Capcut', 'Blender', 'Figma',
  '4K/8K Video', 'HDR', 'Dolby Atmos', 'Color Grading Profesional',
];

const faqs = [
  {
    question: '¿Qué tipo de videos producen?',
    answer: 'Producimos todo tipo: corporativos, publicitarios, testimoniales, tutoriales, contenido para redes, videos de producto, documentales, eventos y más.',
  },
  {
    question: '¿Cuánto cuesta producir un video?',
    answer: 'Depende de la complejidad. Un video testimonial simple puede costar desde $1.500.000 COP. Un comercial de alto nivel puede superar los $15.000.000 COP. Te cotizamos según tu proyecto.',
  },
  {
    question: '¿Cuánto tiempo toma producir un video?',
    answer: 'Un video simple puede estar listo en 1-2 semanas. Proyectos más complejos con múltiples locaciones y postproducción avanzada pueden tomar 3-6 semanas.',
  },
  {
    question: '¿Incluyen locución y música?',
    answer: 'Sí, ofrecemos locución profesional en español y otros idiomas. Usamos música con licencia y también podemos crear música original.',
  },
  {
    question: '¿Pueden grabar en mis instalaciones?',
    answer: 'Por supuesto. Llevamos todo el equipo necesario a tu ubicación. También tenemos acceso a estudios profesionales si lo prefieres.',
  },
  {
    question: '¿Entregan el material en bruto?',
    answer: 'Normalmente entregamos el producto final editado. Si necesitas el material en bruto, lo incluimos por un costo adicional.',
  },
];

const relatedServices = [
  { title: 'Marketing Digital', href: '/servicios/marketing-digital', color: '#8B5CF6' },
  { title: 'Desarrollo Web', href: '/servicios/desarrollo-web-app', color: '#00D4FF' },
  { title: 'E-Commerce', href: '/servicios/ecommerce', color: '#BFFF00' },
];

export default function AudiovisualesPage() {
  return (
    <ServicePageTemplate
      badge="Audiovisuales"
      title="Contenido que"
      highlightedText="Impacta"
      description="Producción audiovisual profesional que cuenta tu historia de forma memorable. Videos corporativos, contenido para redes sociales, fotografía y más. Creatividad y técnica al servicio de tu marca."
      color="#FF6B6B"
      icon="Video"
      features={features}
      benefits={benefits}
      processSteps={processSteps}
      technologies={technologies}
      faqs={faqs}
      relatedServices={relatedServices}
    />
  );
}
