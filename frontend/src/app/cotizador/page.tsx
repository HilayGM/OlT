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
  image: string;
  phone: string;
  whatsapp: string;
  email: string;
}

const ShippingQuotePage: React.FC = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    mercancia: '',
    origen: '',
    destino: '',
    ancho: '',
    alto: '',
    volumen: '',
    fecha: '',
    agente: ''
  });

  const agents: Agent[] = [
    {
      name: 'Carlos Rodríguez',
      role: 'Especialista en envíos nacionales',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=500&q=80',
      phone: '+522381234567',
      whatsapp: '522381234567',
      email: 'carlos@olt.com.mx'
    },
    {
      name: 'Laura Méndez',
      role: 'Coordinadora de logística',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=500&q=80',
      phone: '+522387654321',
      whatsapp: '522387654321',
      email: 'laura@olt.com.mx'
    },
    {
      name: 'Miguel Ángel Torres',
      role: 'Especialista en carga pesada',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=500&q=80',
      phone: '+522389876543',
      whatsapp: '522389876543',
      email: 'miguel@olt.com.mx'
    },
    {
      name: 'Ana García',
      role: 'Atención a clientes corporativos',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=500&q=80',
      phone: '+522383456789',
      whatsapp: '522383456789',
      email: 'ana@olt.com.mx'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const { nombre, telefono, mercancia, origen, destino, ancho, alto, volumen, fecha, agente } = formData;
    
    let mensaje = `Hola, solicito una cotización para envío de mercancía:%0A%0A`;
    mensaje += `*Nombre:* ${nombre}%0A`;
    mensaje += `*Teléfono:* ${telefono}%0A`;
    mensaje += `*Mercancía:* ${mercancia}%0A`;
    mensaje += `*Origen:* ${origen}%0A`;
    mensaje += `*Destino:* ${destino}%0A`;
    mensaje += `*Dimensiones:* ${ancho}cm x ${alto}cm, ${volumen}kg%0A`;
    
    if (fecha) {
      mensaje += `*Fecha estimada:* ${fecha}%0A`;
    }
    
    if (agente) {
      mensaje += `*Agente solicitado:* ${agente}%0A`;
    }
    
    const whatsappNumber = '522381620950';
    window.open(`https://wa.me/${whatsappNumber}?text=${mensaje}`, '_blank');
  };

  return (
    <div>
         <NavbarComponent/>


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

      {/* Agents Section */}
      <section className={styles.agents}>
        <div className={styles.sectionTitle}>
          <h2>Nuestro equipo está listo para ayudarte</h2>
          <p>Estos son los agentes que te atenderán personalmente para resolver todas tus dudas y brindarte la mejor cotización.</p>
        </div>
        
        <div className={styles.agentsGrid}>
          {agents.map((agent) => (
            <div key={agent.name} className={styles.agentCard}>
              <div className={styles.agentImage}>
                <img src={agent.image} alt={agent.name} />
              </div>
              <div className={styles.agentInfo}>
                <h3>{agent.name}</h3>
                <p>{agent.role}</p>
                <div className={styles.agentContact}>
                  <a href={`tel:${agent.phone}`} className={styles.phone}>
                    <i className="fas fa-phone"></i>
                  </a>
                  <a href={`https://wa.me/${agent.whatsapp}`} className={styles.whatsapp}>
                    <i className="fab fa-whatsapp"></i>
                  </a>
                  <a href={`mailto:${agent.email}`} className={styles.email}>
                    <i className="fas fa-envelope"></i>
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
            <p>Completa el formulario y te enviaremos tu cotización por WhatsApp en menos de 30 minutos</p>
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
                  placeholder="Ej. Juan Pérez"
                />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="telefono">Número de WhatsApp *</label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleInputChange}
                  required
                  placeholder="Ej. 238 123 4567"
                />
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
              
              <div className={styles.formGroup}>
                <label htmlFor="fecha">Fecha estimada de envío</label>
                <input
                  type="date"
                  id="fecha"
                  name="fecha"
                  value={formData.fecha}
                  onChange={handleInputChange}
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
          <FooterComponent/>
    </div>
  );
};

export default ShippingQuotePage;