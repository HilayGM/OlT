'use client';

import React, { useState } from 'react';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Head from "next/head";
import FooterComponent from '../../../components/footer/footer';
import NavbarComponent from '../../../components/navbar/navbar';
import styles from './ShippingQuotePage.module.css';

interface Agent {
  name: string;
  role: string;
  imageUrl: string;
  phone: string;
  email: string;
  whatsapp: string;
}

const agents: Agent[] = [
  {
    name: 'Juan Pérez',
    role: 'Agente de ventas',
    imageUrl: './public/lic.webp',
    phone: '+522382186185',
    email: 'Martinlibreros0@gmail.com',
    whatsapp: '521234567890',
  },
  {
    name: 'María López',
    role: 'Atención al cliente',
    imageUrl: '/images/maria.jpg',
    phone: '+521987654321',
    email: 'maria@logistica.com',
    whatsapp: '521987654321',
  },
  {
    name: 'Carlos Ramírez',
    role: 'Soporte logístico',
    imageUrl: '/images/carlos.jpg',
    phone: '+5215551234567',
    email: 'carlos@logistica.com',
    whatsapp: '5215551234567',
  },
  {
    name: 'Ana Torres',
    role: 'Ejecutiva de cuentas',
    imageUrl: '/images/ana.jpg',
    phone: '+5215587654321',
    email: 'ana@logistica.com',
    whatsapp: '5215587654321',
  },
];

interface FormData {
  nombre: string;
  telefono: string;
  mercancia: string;
  origen: string;
  destino: string;
  ancho: string;
  alto: string;
  volumen: string;
  agente: string;
}

const ShippingQuotePage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    telefono: '',
    mercancia: '',
    origen: '',
    destino: '',
    ancho: '',
    alto: '',
    volumen: '',
    agente: '',
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { nombre, telefono, mercancia, origen, destino, ancho, alto, volumen, agente } = formData;

    let mensaje = `Hola, solicito una cotización para envío de mercancía:%0A%0A`;
    mensaje += `*Nombre:* ${nombre}%0A`;
    mensaje += `*Mercancía:* ${mercancia}%0A`;
    mensaje += `*Origen:* ${origen}%0A`;
    mensaje += `*Destino:* ${destino}%0A`;
    mensaje += `*Dimensiones:* ${ancho}cm x ${alto}cm, ${volumen}kg%0A`;

    let whatsappNumber = '522381652135';

    if (agente) {
      const selectedAgent = agents.find(agent => agent.name === agente);
      if (selectedAgent) {
        whatsappNumber = selectedAgent.whatsapp;
      }
      mensaje += `*Agente solicitado:* ${agente}%0A`;
    }

    window.open(`https://wa.me/${whatsappNumber}?text=${mensaje}`, '_blank');
  };

  return (
    <div>
      <NavbarComponent />

      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
          integrity="sha512-xX2Wjj6AA0IVpUJ6zGZUg19U7tOLqXb0nEomGpD6zvZq7gS8K5TLNwKRMuvFkBPLyU4VnnttLGe1qc9WZixI1A=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <h1>Cotiza tu envío en minutos</h1>
          <p>Obtén una cotización rápida y personalizada para tus envíos de mercancía. Nuestro equipo de expertos te atenderá directamente por WhatsApp.</p>
          <div className={styles.whatsappBadge}>
            <i className="fab fa-whatsapp"></i> Cotización vía WhatsApp
          </div>
        </div>
      </section>

      <section className={styles.agents}>
        <div className={styles.sectionTitle}>
          <h2>Nuestros Agentes</h2>
          <p>Contacta directamente con nuestros asesores para ayudarte en tu proceso logístico.</p>
        </div>

        <div className={styles.agentsGrid}>
          {agents.map((agent, index) => (
            <div key={index} className={styles.agentCard}>
              <div className={styles.agentImage}>
                <img src={agent.imageUrl} alt={agent.name} />
              </div>
              <div className={styles.agentInfo}>
                <h3>{agent.name}</h3>
                <p>{agent.role}</p>
                <div className={styles.agentContact}>
                  <a href={`tel:${agent.phone}`} className={styles.phone} title="Llamar">
                    <i className="fas fa-phone"></i>
                  </a>
                  <a
                    href={`https://mail.google.com/mail/?view=cm&to=${agent.email}`}
                    className={styles.email}
                    title="Correo"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fas fa-envelope"></i>
                  </a>
                  <a
                    href={`https://wa.me/${agent.whatsapp}`}
                    className={styles.whatsapp}
                    title="WhatsApp"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-whatsapp"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quote Form Section */}
      <section className={styles.quoteForm}>
        <div className={styles.formContainer}>
          <div className={styles.formTitle}>
            <h2>Solicita tu cotización</h2>
            <p>Completa el formulario y te enviaremos las mejores propuestas por WhatsApp en menos de 30 minutos</p>
          </div>

          <form id="cotizacion-form" onSubmit={handleSubmit}>
            <div className={styles.formGrid}>
              <div className={styles.formGroup}>
                <label htmlFor="nombre">Nombre completo *</label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleInputChange}
                  required
                  placeholder="Nombre completo"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="agente">Agente de preferencia</label>
                <select
                  id="agente"
                  name="agente"
                  value={formData.agente}
                  onChange={handleInputChange}
                >
                  <option value="">Seleccionar agente (opcional)</option>
                  {agents.map(agent => (
                    <option key={agent.name} value={agent.name}>{agent.name}</option>
                  ))}
                </select>
              </div>

              <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                <label htmlFor="mercancia">¿Qué deseas transportar? *</label>
                <textarea
                  id="mercancia"
                  name="mercancia"
                  value={formData.mercancia}
                  onChange={handleInputChange}
                  required
                  placeholder="Describe detalladamente el tipo de mercancía que deseas enviar"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="origen">Ciudad de origen *</label>
                <input
                  type="text"
                  id="origen"
                  name="origen"
                  value={formData.origen}
                  onChange={handleInputChange}
                  required
                  placeholder="Ej. Tehuacán, Puebla"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="destino">Ciudad de destino *</label>
                <input
                  type="text"
                  id="destino"
                  name="destino"
                  value={formData.destino}
                  onChange={handleInputChange}
                  required
                  placeholder="Ej. Ciudad de México"
                />
              </div>

              <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                <label>Dimensiones del paquete *</label>
                <div className={styles.dimensionsGroup}>
                  <div>
                    <input
                      type="number"
                      id="ancho"
                      name="ancho"
                      value={formData.ancho}
                      onChange={handleInputChange}
                      required
                      placeholder="Ancho (cm)"
                    />
                  </div>
                  <div>
                    <input
                      type="number"
                      id="alto"
                      name="alto"
                      value={formData.alto}
                      onChange={handleInputChange}
                      required
                      placeholder="Alto (cm)"
                    />
                  </div>
                  <div>
                    <input
                      type="number"
                      id="volumen"
                      name="volumen"
                      value={formData.volumen}
                      onChange={handleInputChange}
                      required
                      placeholder="Volumen (kg)"
                    />
                  </div>
                </div>
              </div>

              <div className={`${styles.formGroup} ${styles.fullWidth}`} style={{ textAlign: 'center', marginTop: '20px' }}>
                <button type="submit" className={styles.submitButton}>
                  <i className="fab fa-whatsapp"></i> Solicitar cotización por WhatsApp
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>

      {/* Footer Section */}
      <FooterComponent />
    </div>
  );
};

export default ShippingQuotePage;