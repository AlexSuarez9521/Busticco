import { Metadata } from 'next';
import ServicePageTemplate from '@/components/templates/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'CRM - Gestión de Clientes | BUSTICCO',
  description: 'Sistemas de gestión de relaciones con clientes que impulsan tus ventas y fidelización. CRM personalizado para tu negocio.',
};

const features = [
  {
    icon: 'Users',
    title: 'Gestión de Contactos',
    description: 'Base de datos centralizada de clientes y prospectos con historial completo de interacciones.',
  },
  {
    icon: 'Target',
    title: 'Pipeline de Ventas',
    description: 'Visualiza y gestiona tu embudo de ventas. Seguimiento de oportunidades desde el primer contacto.',
  },
  {
    icon: 'Mail',
    title: 'Email Marketing',
    description: 'Campañas de email automatizadas, plantillas personalizadas y métricas de apertura y clicks.',
  },
  {
    icon: 'Calendar',
    title: 'Agenda y Recordatorios',
    description: 'Programa reuniones, llamadas y seguimientos. Nunca pierdas una oportunidad de venta.',
  },
  {
    icon: 'PieChart',
    title: 'Reportes y Analytics',
    description: 'Dashboard con KPIs de ventas, rendimiento del equipo y pronósticos de ingresos.',
  },
  {
    icon: 'Workflow',
    title: 'Automatización',
    description: 'Flujos de trabajo automáticos para nutrir leads, asignar tareas y enviar notificaciones.',
  },
];

const benefits = [
  {
    title: 'Aumento de Ventas',
    description: 'Empresas con CRM reportan hasta 29% más de ventas al tener mejor seguimiento de clientes.',
  },
  {
    title: 'Mejor Retención de Clientes',
    description: 'Conoce a tus clientes, anticipa sus necesidades y aumenta la fidelización.',
  },
  {
    title: 'Equipo Más Productivo',
    description: 'Automatiza tareas repetitivas y permite que tu equipo se enfoque en vender.',
  },
  {
    title: 'Decisiones Basadas en Datos',
    description: 'Reportes en tiempo real para tomar decisiones estratégicas informadas.',
  },
  {
    title: 'Comunicación Centralizada',
    description: 'Todo el historial del cliente en un solo lugar: emails, llamadas, reuniones y notas.',
  },
  {
    title: 'Escalabilidad',
    description: 'Sistema que crece contigo, desde 5 hasta 500+ usuarios sin perder rendimiento.',
  },
];

const processSteps = [
  {
    number: '01',
    title: 'Diagnóstico Comercial',
    description: 'Analizamos tu proceso de ventas actual, equipo comercial y necesidades específicas del negocio.',
  },
  {
    number: '02',
    title: 'Diseño del CRM',
    description: 'Configuramos campos personalizados, etapas del pipeline, automatizaciones y permisos de usuario.',
  },
  {
    number: '03',
    title: 'Migración de Datos',
    description: 'Importamos tu base de clientes existente desde Excel, otro CRM o cualquier fuente de datos.',
  },
  {
    number: '04',
    title: 'Integraciones',
    description: 'Conectamos el CRM con tu email, WhatsApp, sitio web, herramientas de marketing y más.',
  },
  {
    number: '05',
    title: 'Capacitación del Equipo',
    description: 'Entrenamiento práctico para tu equipo comercial. Aseguramos adopción y uso correcto del sistema.',
  },
  {
    number: '06',
    title: 'Optimización Continua',
    description: 'Monitoreamos uso, ajustamos configuraciones y agregamos nuevas funcionalidades según necesites.',
  },
];

const technologies = [
  'Salesforce', 'HubSpot', 'Zoho CRM', 'Pipedrive',
  'Monday CRM', 'Notion', 'Airtable', 'Custom CRM',
  'Zapier', 'Make', 'n8n', 'API Integrations',
  'WhatsApp Business API', 'Twilio', 'SendGrid', 'Mailchimp',
  'Google Workspace', 'Microsoft 365', 'Slack', 'Teams',
];

const faqs = [
  {
    question: '¿Qué es un CRM y por qué lo necesito?',
    answer: 'Un CRM (Customer Relationship Management) es un sistema para gestionar todas las interacciones con tus clientes y prospectos. Te ayuda a vender más, retener clientes y tomar mejores decisiones.',
  },
  {
    question: '¿Cuál CRM es mejor para mi empresa?',
    answer: 'Depende del tamaño de tu empresa y necesidades. HubSpot es excelente para PyMEs, Salesforce para empresas grandes, y podemos crear un CRM personalizado si tienes requisitos específicos.',
  },
  {
    question: '¿Puedo integrar el CRM con WhatsApp?',
    answer: 'Sí, integramos con WhatsApp Business API para que puedas enviar mensajes, recibir respuestas y registrar conversaciones automáticamente en el CRM.',
  },
  {
    question: '¿Cómo migro mis datos actuales al nuevo CRM?',
    answer: 'Nos encargamos de la migración completa. Importamos contactos, empresas, historial de ventas y cualquier dato relevante desde Excel, hojas de cálculo u otros sistemas.',
  },
  {
    question: '¿Cuánto tiempo toma implementar un CRM?',
    answer: 'Una implementación básica puede estar lista en 2-3 semanas. Proyectos más complejos con integraciones avanzadas pueden tomar 1-2 meses.',
  },
  {
    question: '¿Ofrecen soporte después de la implementación?',
    answer: 'Sí, ofrecemos planes de soporte mensual que incluyen ajustes, nuevas automatizaciones, capacitación adicional y soporte técnico.',
  },
];

const relatedServices = [
  { title: 'Marketing Digital', href: '/servicios/marketing-digital', color: '#8B5CF6' },
  { title: 'Automatización IA', href: '/servicios/automatizacion-ia', color: '#00D4FF' },
  { title: 'Software a Medida', href: '/servicios/software', color: '#BFFF00' },
];

export default function CRMPage() {
  return (
    <ServicePageTemplate
      badge="CRM"
      title="Gestiona tus Clientes"
      highlightedText="Inteligentemente"
      description="Implementamos sistemas CRM que transforman la manera en que tu equipo comercial trabaja. Más ventas, mejor seguimiento y clientes más satisfechos con herramientas diseñadas para tu negocio."
      color="#E91E8C"
      icon="Users"
      features={features}
      benefits={benefits}
      processSteps={processSteps}
      technologies={technologies}
      faqs={faqs}
      relatedServices={relatedServices}
    />
  );
}
