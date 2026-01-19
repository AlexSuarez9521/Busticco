import { Metadata } from 'next';
import ServicePageTemplate from '@/components/templates/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'E-Commerce y Tiendas Online | BUSTICCO',
  description: 'Creamos tiendas en línea seguras y optimizadas para convertir visitantes en clientes leales. Soluciones e-commerce completas para tu negocio.',
};

const features = [
  {
    icon: 'ShoppingCart',
    title: 'Catálogo de Productos',
    description: 'Sistema completo para gestionar productos, categorías, variantes, inventario y precios.',
  },
  {
    icon: 'CreditCard',
    title: 'Pasarelas de Pago',
    description: 'Integración con múltiples métodos de pago: tarjetas, PSE, Nequi, Daviplata, PayPal y más.',
  },
  {
    icon: 'Package',
    title: 'Gestión de Inventario',
    description: 'Control de stock en tiempo real, alertas de inventario bajo y sincronización multi-canal.',
  },
  {
    icon: 'Truck',
    title: 'Envíos y Logística',
    description: 'Integración con transportadoras, cálculo automático de envío y seguimiento de pedidos.',
  },
  {
    icon: 'BarChart3',
    title: 'Analytics y Reportes',
    description: 'Dashboard con métricas de ventas, conversión, productos más vendidos y comportamiento del cliente.',
  },
  {
    icon: 'Shield',
    title: 'Seguridad SSL',
    description: 'Certificados de seguridad, cumplimiento PCI-DSS y protección de datos del cliente.',
  },
];

const benefits = [
  {
    title: 'Ventas 24/7',
    description: 'Tu tienda abierta todo el día, todos los días. Genera ingresos mientras duermes.',
  },
  {
    title: 'Alcance Nacional e Internacional',
    description: 'Vende a clientes en toda Colombia y el mundo sin limitaciones geográficas.',
  },
  {
    title: 'Menor Costo Operativo',
    description: 'Reduce costos de local físico, personal y procesos manuales con automatización.',
  },
  {
    title: 'Datos de Clientes',
    description: 'Conoce a tus clientes: qué compran, cuándo y cómo. Toma decisiones basadas en datos.',
  },
  {
    title: 'Escalabilidad',
    description: 'Crece sin límites. Tu tienda puede manejar desde 10 hasta 10,000 pedidos diarios.',
  },
  {
    title: 'Marketing Integrado',
    description: 'Herramientas de email marketing, cupones, programas de fidelidad y remarketing.',
  },
];

const processSteps = [
  {
    number: '01',
    title: 'Análisis de Negocio',
    description: 'Entendemos tu modelo de negocio, productos, público objetivo y objetivos de venta. Analizamos la competencia.',
  },
  {
    number: '02',
    title: 'Estrategia E-commerce',
    description: 'Definimos la arquitectura de la tienda, flujo de compra, métodos de pago y estrategia de envíos.',
  },
  {
    number: '03',
    title: 'Diseño de Tienda',
    description: 'Creamos un diseño atractivo y optimizado para conversión. Experiencia de compra fluida y profesional.',
  },
  {
    number: '04',
    title: 'Desarrollo e Integraciones',
    description: 'Programamos la tienda e integramos pasarelas de pago, transportadoras, ERP y otras herramientas.',
  },
  {
    number: '05',
    title: 'Carga de Productos',
    description: 'Configuramos catálogo, subimos productos con fotos optimizadas y configuramos precios e inventario.',
  },
  {
    number: '06',
    title: 'Lanzamiento y Capacitación',
    description: 'Lanzamos tu tienda, te capacitamos en su administración y configuramos herramientas de marketing.',
  },
];

const technologies = [
  'Shopify', 'WooCommerce', 'Magento', 'PrestaShop',
  'Next.js Commerce', 'Medusa.js', 'Stripe', 'PayU',
  'MercadoPago', 'Wompi', 'Coordinadora', 'Servientrega',
  'Google Analytics', 'Facebook Pixel', 'Klaviyo', 'Mailchimp',
  'Algolia', 'Cloudinary', 'AWS', 'Vercel',
];

const faqs = [
  {
    question: '¿Qué plataforma de e-commerce es mejor para mi negocio?',
    answer: 'Depende de tus necesidades. Shopify es excelente para empezar rápido, WooCommerce ofrece más personalización, y soluciones headless como Next.js Commerce son ideales para alto tráfico. Te asesoramos según tu caso.',
  },
  {
    question: '¿Cuánto cuesta crear una tienda en línea?',
    answer: 'El precio varía según funcionalidades. Una tienda básica puede empezar desde $3.000.000 COP, mientras que una tienda empresarial con integraciones avanzadas puede superar los $15.000.000 COP.',
  },
  {
    question: '¿Qué métodos de pago puedo ofrecer?',
    answer: 'Integramos todas las opciones populares en Colombia: tarjetas de crédito/débito, PSE, Nequi, Daviplata, efectivo (Efecty, Baloto), PayPal y más. También pagos internacionales.',
  },
  {
    question: '¿Cómo manejo los envíos y la logística?',
    answer: 'Integramos tu tienda con transportadoras como Coordinadora, Servientrega, Inter Rapidísimo. El sistema calcula costos automáticamente y genera guías. También soportamos recogida en tienda.',
  },
  {
    question: '¿Puedo vender en redes sociales también?',
    answer: 'Sí, configuramos ventas en Instagram Shopping, Facebook Shops y WhatsApp Business. Tu inventario se sincroniza automáticamente en todos los canales.',
  },
  {
    question: '¿Incluyen capacitación para administrar la tienda?',
    answer: 'Absolutamente. Te damos capacitación completa para gestionar productos, pedidos, clientes e inventario. También incluimos documentación y videos tutoriales.',
  },
];

const relatedServices = [
  { title: 'Desarrollo Web', href: '/servicios/desarrollo-web-app', color: '#00D4FF' },
  { title: 'Marketing Digital', href: '/servicios/marketing-digital', color: '#8B5CF6' },
  { title: 'CRM', href: '/servicios/crm', color: '#E91E8C' },
];

export default function EcommercePage() {
  return (
    <ServicePageTemplate
      badge="E-Commerce"
      title="Tu Tienda Online"
      highlightedText="Que Vende"
      description="Creamos tiendas en línea que no solo se ven increíbles, sino que están diseñadas para convertir visitantes en clientes. Optimizadas para SEO, velocidad y experiencia de compra perfecta."
      color="#BFFF00"
      icon="ShoppingCart"
      features={features}
      benefits={benefits}
      processSteps={processSteps}
      technologies={technologies}
      faqs={faqs}
      relatedServices={relatedServices}
    />
  );
}
