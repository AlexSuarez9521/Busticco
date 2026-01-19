import { Metadata } from 'next';
import ServicePageTemplate from '@/components/templates/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Automatización con IA | BUSTICCO',
  description: 'Asistentes virtuales y procesos automatizados con inteligencia artificial de última generación. Chatbots, automatización de procesos y más.',
};

const features = [
  {
    icon: 'MessageSquare',
    title: 'Chatbots Inteligentes',
    description: 'Asistentes virtuales que atienden clientes 24/7, responden preguntas y generan leads.',
  },
  {
    icon: 'Brain',
    title: 'IA Generativa',
    description: 'Implementación de GPT-4, Claude y modelos de IA para generar contenido y automatizar tareas.',
  },
  {
    icon: 'Workflow',
    title: 'Automatización de Procesos',
    description: 'Elimina tareas repetitivas. Conecta aplicaciones y automatiza flujos de trabajo completos.',
  },
  {
    icon: 'Cpu',
    title: 'Procesamiento de Datos',
    description: 'Análisis automático de documentos, extracción de información y clasificación inteligente.',
  },
  {
    icon: 'Headphones',
    title: 'Atención al Cliente IA',
    description: 'Sistemas de soporte automatizado que escalan y aprenden de cada interacción.',
  },
  {
    icon: 'BarChart3',
    title: 'Analytics Predictivo',
    description: 'Modelos de predicción para ventas, inventario y comportamiento del cliente.',
  },
];

const benefits = [
  {
    title: 'Atención 24/7',
    description: 'Tus clientes reciben respuestas inmediatas a cualquier hora, sin esperas.',
  },
  {
    title: 'Reducción de Costos',
    description: 'Automatiza tareas que antes requerían horas de trabajo manual.',
  },
  {
    title: 'Escalabilidad Infinita',
    description: 'Atiende a 1 o 1,000 clientes simultáneamente sin aumentar costos.',
  },
  {
    title: 'Decisiones Más Inteligentes',
    description: 'Insights basados en datos para tomar mejores decisiones de negocio.',
  },
  {
    title: 'Experiencia Personalizada',
    description: 'Interacciones personalizadas para cada cliente basadas en su historial.',
  },
  {
    title: 'Ventaja Competitiva',
    description: 'Adelántate a la competencia adoptando tecnología de punta.',
  },
];

const processSteps = [
  {
    number: '01',
    title: 'Identificación de Oportunidades',
    description: 'Analizamos tus procesos actuales para identificar dónde la IA puede generar mayor impacto.',
  },
  {
    number: '02',
    title: 'Diseño de Solución',
    description: 'Diseñamos la arquitectura de IA: qué modelos usar, cómo entrenarlos y cómo integrarlos.',
  },
  {
    number: '03',
    title: 'Desarrollo y Entrenamiento',
    description: 'Construimos y entrenamos los modelos de IA con datos relevantes de tu negocio.',
  },
  {
    number: '04',
    title: 'Integración',
    description: 'Conectamos la solución de IA con tus sistemas existentes: CRM, web, WhatsApp, etc.',
  },
  {
    number: '05',
    title: 'Pruebas y Ajustes',
    description: 'Probamos exhaustivamente, refinamos respuestas y optimizamos el rendimiento.',
  },
  {
    number: '06',
    title: 'Monitoreo y Mejora',
    description: 'Supervisamos el rendimiento, analizamos conversaciones y mejoramos continuamente.',
  },
];

const technologies = [
  'OpenAI GPT-4', 'Claude AI', 'Google Gemini', 'LangChain',
  'Pinecone', 'ChromaDB', 'Hugging Face', 'TensorFlow',
  'WhatsApp Business API', 'Twilio', 'Dialogflow', 'Botpress',
  'Zapier', 'Make', 'n8n', 'Python',
  'FastAPI', 'Node.js', 'AWS Lambda', 'Google Cloud',
  'Vector Databases', 'RAG Systems', 'Fine-tuning', 'Embeddings',
];

const faqs = [
  {
    question: '¿Qué tipo de chatbot necesito para mi negocio?',
    answer: 'Depende de tus necesidades. Un chatbot de FAQ responde preguntas frecuentes, uno transaccional procesa pedidos, y uno con IA generativa mantiene conversaciones naturales. Te ayudamos a elegir.',
  },
  {
    question: '¿El chatbot puede conectarse a WhatsApp?',
    answer: 'Sí, integramos chatbots con WhatsApp Business API. Tus clientes pueden interactuar por WhatsApp y el bot responde automáticamente, 24/7.',
  },
  {
    question: '¿Qué tan precisa es la IA para responder preguntas?',
    answer: 'Con el entrenamiento adecuado, la IA alcanza +95% de precisión en respuestas. Además, puede escalar a un humano cuando detecta que no puede resolver una consulta.',
  },
  {
    question: '¿Puedo automatizar procesos internos, no solo atención al cliente?',
    answer: 'Absolutamente. Automatizamos generación de reportes, procesamiento de documentos, análisis de datos, envío de emails, actualización de sistemas y mucho más.',
  },
  {
    question: '¿Cuánto cuesta implementar IA en mi empresa?',
    answer: 'Un chatbot básico puede empezar desde $2.000.000 COP. Soluciones más complejas con IA generativa y múltiples integraciones pueden superar los $10.000.000 COP.',
  },
  {
    question: '¿La IA reemplazará a mi equipo?',
    answer: 'No, la IA potencia a tu equipo. Automatiza tareas repetitivas para que tu equipo se enfoque en actividades de mayor valor: ventas complejas, relaciones con clientes y estrategia.',
  },
];

const relatedServices = [
  { title: 'CRM', href: '/servicios/crm', color: '#E91E8C' },
  { title: 'Software a Medida', href: '/servicios/software', color: '#BFFF00' },
  { title: 'Desarrollo Web', href: '/servicios/desarrollo-web-app', color: '#00D4FF' },
];

export default function AutomatizacionIAPage() {
  return (
    <ServicePageTemplate
      badge="Automatización con IA"
      title="Inteligencia Artificial"
      highlightedText="Para tu Negocio"
      description="Transformamos tu empresa con inteligencia artificial. Desde chatbots que atienden clientes 24/7 hasta automatizaciones que eliminan tareas repetitivas. La tecnología del futuro, disponible hoy."
      color="#00D4FF"
      icon="Bot"
      features={features}
      benefits={benefits}
      processSteps={processSteps}
      technologies={technologies}
      faqs={faqs}
      relatedServices={relatedServices}
    />
  );
}
