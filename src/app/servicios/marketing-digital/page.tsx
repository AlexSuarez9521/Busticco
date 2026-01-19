import { Metadata } from 'next';
import ServicePageTemplate from '@/components/templates/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Marketing Digital | BUSTICCO',
  description: 'Estrategias de visibilidad digital que posicionan tu marca y atraen clientes potenciales. SEO, SEM, redes sociales y más.',
};

const features = [
  {
    icon: 'Search',
    title: 'SEO y Posicionamiento',
    description: 'Optimización para motores de búsqueda. Aparece en los primeros resultados de Google.',
  },
  {
    icon: 'Target',
    title: 'Publicidad Digital (SEM)',
    description: 'Campañas en Google Ads, Facebook Ads, Instagram y LinkedIn para generar leads calificados.',
  },
  {
    icon: 'Share2',
    title: 'Redes Sociales',
    description: 'Gestión profesional de redes sociales: contenido, comunidad y estrategia de crecimiento.',
  },
  {
    icon: 'Mail',
    title: 'Email Marketing',
    description: 'Campañas de email que convierten: newsletters, automatizaciones y secuencias de nurturing.',
  },
  {
    icon: 'PenTool',
    title: 'Marketing de Contenidos',
    description: 'Creación de contenido valioso: blogs, infografías, ebooks y recursos descargables.',
  },
  {
    icon: 'BarChart3',
    title: 'Analítica y Reportes',
    description: 'Medición de resultados con KPIs claros. Reportes mensuales y optimización continua.',
  },
];

const benefits = [
  {
    title: 'Mayor Visibilidad Online',
    description: 'Que te encuentren cuando buscan lo que ofreces. Presencia donde están tus clientes.',
  },
  {
    title: 'Generación de Leads',
    description: 'Atraemos clientes potenciales interesados en tus productos o servicios.',
  },
  {
    title: 'ROI Medible',
    description: 'Cada peso invertido es rastreable. Sabes exactamente qué funciona y qué no.',
  },
  {
    title: 'Construcción de Marca',
    description: 'Posiciona tu marca como referente en tu industria con contenido de valor.',
  },
  {
    title: 'Segmentación Precisa',
    description: 'Llega exactamente a tu cliente ideal por demografía, intereses y comportamiento.',
  },
  {
    title: 'Resultados Escalables',
    description: 'Estrategias que crecen contigo. Aumenta inversión cuando ves resultados.',
  },
];

const processSteps = [
  {
    number: '01',
    title: 'Auditoría Digital',
    description: 'Analizamos tu presencia digital actual, competencia y oportunidades de mercado.',
  },
  {
    number: '02',
    title: 'Estrategia Personalizada',
    description: 'Diseñamos un plan de marketing digital alineado con tus objetivos de negocio y presupuesto.',
  },
  {
    number: '03',
    title: 'Configuración de Canales',
    description: 'Optimizamos perfiles, configuramos herramientas de tracking y preparamos campañas.',
  },
  {
    number: '04',
    title: 'Creación de Contenido',
    description: 'Producimos contenido atractivo y optimizado para cada canal y audiencia.',
  },
  {
    number: '05',
    title: 'Ejecución y Monitoreo',
    description: 'Lanzamos campañas y monitoreamos métricas en tiempo real para optimizar resultados.',
  },
  {
    number: '06',
    title: 'Análisis y Optimización',
    description: 'Reportes detallados, aprendizajes y mejora continua de las estrategias.',
  },
];

const technologies = [
  'Google Ads', 'Meta Ads', 'LinkedIn Ads', 'TikTok Ads',
  'Google Analytics 4', 'Google Search Console', 'SEMrush', 'Ahrefs',
  'Hootsuite', 'Buffer', 'Later', 'Sprout Social',
  'Mailchimp', 'Klaviyo', 'ActiveCampaign', 'HubSpot',
  'Canva', 'Adobe Creative Suite', 'Figma', 'CapCut',
  'Hotjar', 'Clarity', 'Tag Manager', 'Data Studio',
];

const faqs = [
  {
    question: '¿Cuánto debo invertir en marketing digital?',
    answer: 'Recomendamos destinar entre 5-15% de tus ingresos a marketing. Para empezar, un presupuesto mínimo de $1.500.000 COP/mes permite ver resultados en canales seleccionados.',
  },
  {
    question: '¿En cuánto tiempo veré resultados?',
    answer: 'La publicidad pagada puede generar resultados inmediatos. El SEO y contenidos requieren 3-6 meses para ver resultados significativos. Diseñamos estrategias con objetivos a corto y largo plazo.',
  },
  {
    question: '¿Qué redes sociales debería usar mi empresa?',
    answer: 'Depende de tu audiencia. B2B generalmente funciona mejor en LinkedIn, B2C en Instagram y Facebook. TikTok es excelente para audiencias jóvenes. Te ayudamos a identificar los canales correctos.',
  },
  {
    question: '¿Cómo miden el éxito de las campañas?',
    answer: 'Definimos KPIs específicos: tráfico web, leads generados, costo por adquisición, ROI, engagement en redes. Recibirás reportes mensuales con métricas claras y accionables.',
  },
  {
    question: '¿Crean el contenido o solo lo publican?',
    answer: 'Ofrecemos servicio completo: estrategia, creación de contenido (textos, diseños, videos), publicación y análisis. También podemos trabajar con contenido que tú proporciones.',
  },
  {
    question: '¿Pueden manejar mi publicidad en Google?',
    answer: 'Sí, somos expertos en Google Ads (Search, Display, Shopping, YouTube). Optimizamos campañas para máximo ROI con presupuestos de cualquier tamaño.',
  },
];

const relatedServices = [
  { title: 'Desarrollo Web', href: '/servicios/desarrollo-web-app', color: '#00D4FF' },
  { title: 'E-Commerce', href: '/servicios/ecommerce', color: '#BFFF00' },
  { title: 'Audiovisuales', href: '/servicios/audiovisuales', color: '#FF6B6B' },
];

export default function MarketingDigitalPage() {
  return (
    <ServicePageTemplate
      badge="Marketing Digital"
      title="Haz Crecer tu"
      highlightedText="Presencia Digital"
      description="Estrategias de marketing digital que generan resultados reales. Desde SEO y publicidad pagada hasta redes sociales y email marketing. Conectamos tu marca con los clientes que buscas."
      color="#8B5CF6"
      icon="TrendingUp"
      features={features}
      benefits={benefits}
      processSteps={processSteps}
      technologies={technologies}
      faqs={faqs}
      relatedServices={relatedServices}
    />
  );
}
