"use client"
import type React from "react"
import { useState } from "react"
import "@fortawesome/fontawesome-free/css/all.min.css"
import Head from "next/head"
import FooterComponent from "../../../components/footer/footer"
import NavbarComponent from "../../../components/navbar/navbar"
import "./servicios.css"

interface ServiceDetail {
  title: string
  icon: string
  description: string
  features: string[]
  image?: string
}

interface ServiceDetailsMap {
  [key: string]: ServiceDetail
}

// Datos de los servicios con imágenes añadidas
const serviceDetails: ServiceDetailsMap = {
  paqueteria: {
    title: "Paquetería",
    icon: "fa-box",
    description:
      "Nuestro servicio de paquetería ofrece soluciones para el envío de paquetes de cualquier tamaño a nivel nacional. Contamos con una amplia red de distribución que nos permite llegar a cualquier punto del país con tiempos de entrega óptimos.",
    features: [
      "Envíos de 1 kg hasta 70 kg",
      "Seguimiento en tiempo real",
      "Notificaciones de entrega",
      "Tarifas competitivas",
    ],
    image:
      "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200&q=80",
  },
  "carga-consolidada": {
    title: "Carga Consolidada",
    icon: "fa-truck",
    description:
      "La carga consolidada es una solución ideal para optimizar costos de envío. Consiste en agrupar mercancías de diferentes clientes con destinos similares en un solo transporte, lo que permite reducir costos y tiempos de entrega.",
    features: [
      "Reducción de costos de transporte",
      "Menor impacto ambiental",
      "Ideal para envíos frecuentes",
      "Disponible para todo tipo de mercancías",
    ],
    image:
      "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200&q=80",
  },
  recoleccion: {
    title: "Recolección a Domicilio",
    icon: "fa-home",
    description:
      "Ofrecemos el servicio de recolección a domicilio para mayor comodidad de nuestros clientes. Un operador se presentará en la dirección indicada para recoger los paquetes o mercancías que desees enviar.",
    features: [
      "Programación de recolección",
      "Servicio disponible en todo el país",
      "Ahorro de tiempo y desplazamientos",
      "Confirmación de recolección",
    ],
    image:
      "https://images.unsplash.com/photo-1580674285054-bed31e145f59?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200&q=80",
  },
  embalaje: {
    title: "Embalaje",
    icon: "fa-box-open",
    description:
      "Contamos con un servicio profesional de embalaje para proteger tus mercancías durante el transporte. Utilizamos materiales de alta calidad y técnicas adecuadas según el tipo de producto a transportar.",
    features: [
      "Embalaje personalizado",
      "Materiales de protección",
      "Etiquetado profesional",
      "Asesoría en embalaje especial",
    ],
    image:
      "https://images.unsplash.com/photo-1607344645866-009c320c5ab8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200&q=80",
  },
  fletes: {
    title: "Fletes y Mudanzas",
    icon: "fa-truck-moving",
    description:
      "Nuestro servicio de fletes y mudanzas está diseñado para el transporte de mercancías de gran volumen o para traslados completos de oficinas y hogares. Contamos con vehículos de diferentes capacidades para adaptarnos a tus necesidades.",
    features: [
      "Fletes locales y nacionales",
      "Mudanzas residenciales y comerciales",
      "Personal capacitado",
      "Servicio de carga y descarga",
    ],
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200&q=80",
  },
  acuses: {
    title: "Acuses de Recibo",
    icon: "fa-clipboard-check",
    description:
      "El servicio de acuses de recibo proporciona una confirmación de entrega con la firma del destinatario. Este servicio es ideal para envíos de documentos importantes o mercancías de valor que requieren un control estricto.",
    features: [
      "Confirmación de entrega",
      "Firma del destinatario",
      "Acceso a comprobantes digitales",
      "Mayor seguridad en tus envíos",
    ],
    image:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200&q=80",
  },
  ocurre: {
    title: "Ocurre",
    icon: "fa-building",
    description:
      'El servicio "Ocurre" permite que el destinatario recoja su paquete en nuestras oficinas cuando le resulte conveniente. Es una excelente opción cuando no hay nadie disponible para recibir el envío en el domicilio o se requiere mayor flexibilidad.',
    features: [
      "Flexibilidad de horarios",
      "Notificación de disponibilidad",
      "Identificación requerida para recoger",
      "Almacenamiento seguro",
    ],
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200&q=80",
  },
  pallet: {
    title: "Pallet (Tarima)",
    icon: "fa-pallet",
    description:
      "El servicio de transporte de pallets o tarimas está diseñado para el envío de mercancías paletizadas. Es ideal para envíos de gran volumen o peso que requieren un manejo especial con montacargas o equipos de carga.",
    features: [
      "Transporte de mercancía paletizada",
      "Manejo con equipo especializado",
      "Optimización de espacio",
      "Ideal para envíos industriales",
    ],
    image:
      "https://images.unsplash.com/photo-1635340356377-5b5c74219e38?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200&q=80",
  },
  seguro: {
    title: "Seguro de Mercancías",
    icon: "fa-shield-alt",
    description:
      "Ofrecemos seguros para tus envíos que brindan protección adicional contra pérdidas, daños o robos durante el transporte. Es una opción recomendada para mercancías de valor o envíos críticos para tu negocio.",
    features: [
      "Cobertura contra daños",
      "Protección contra robos",
      "Indemnización por pérdidas",
      "Diferentes niveles de cobertura",
    ],
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200&q=80",
  },
}

// Componente para la sección Hero
const HeroSection: React.FC = () => {
  return (
    <section className="hero-services">
      <div className="container">
        <h1>Nuestros Servicios</h1>
        <p>Ofrecemos soluciones logísticas integrales adaptadas a las necesidades específicas de cada cliente.</p>
      </div>
    </section>
  )
}

// Componente para una tarjeta de servicio individual
interface ServiceCardProps {
  id: string
  title: string
  icon: string
  description: string
  image?: string
  onServiceClick: (serviceId: string) => void
}

const ServiceCard: React.FC<ServiceCardProps> = ({ id, title, icon, description, image, onServiceClick }) => {
  return (
    <div className="service-card" onClick={() => onServiceClick(id)}>
      <div className="service-image">
        <img
          src={
            image ||
            `https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200&q=80`
          }
          alt={title}
        />
        <div className="service-overlay">
          <i className={`fas ${icon}`}></i>
        </div>
      </div>
      <div className="service-content">
        <h3>{title}</h3>
        <p>{description.substring(0, 100) + "..."}</p>
        <div className="service-link">Más información</div>
      </div>
    </div>
  )
}

// Componente para la sección de servicios
interface ServicesOverviewProps {
  onServiceClick: (serviceId: string) => void
}

const ServicesOverview: React.FC<ServicesOverviewProps> = ({ onServiceClick }) => {
  return (
    <section className="services-overview">
      <div className="container">
        <div className="services-grid">
          {Object.entries(serviceDetails).map(([id, service]) => (
            <ServiceCard
              key={id}
              id={id}
              title={service.title}
              icon={service.icon}
              description={service.description}
              image={service.image}
              onServiceClick={onServiceClick}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

// Componente CTA
const CTASection: React.FC = () => {
  return (
    <section className="cta-section">
      <div className="container">
        <h2>¿Listo para enviar?</h2>
        <p>
          Contáctanos hoy mismo para obtener una cotización personalizada o para resolver cualquier duda sobre nuestros
          servicios.
        </p>
        <div className="cta-buttons">
          <a href="/cotizador" className="cta-button primary">
            Solicitar cotización
          </a>
        </div>
      </div>
    </section>
  )
}

// Componente para el Modal
interface ServiceModalProps {
  isOpen: boolean
  service: ServiceDetail | null
  onClose: () => void
}

const ServiceModal: React.FC<ServiceModalProps> = ({ isOpen, service, onClose }) => {
  if (!service) return null

  // Controlador para cerrar el modal cuando se hace clic fuera
  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <div id="serviceModal" className={`modal ${isOpen ? "show" : ""}`} onClick={handleOutsideClick}>
      <div className="modal-content">
        <span className="close-modal" onClick={onClose}>
          &times;
        </span>
        <div className="modal-header">
          {service.image && (
            <div className="modal-image">
              <img src={service.image || "/placeholder.svg"} alt={service.title} />
            </div>
          )}
          <div className="modal-title-container">
            <div className="modal-icon">
              <i className={`fas ${service.icon}`}></i>
            </div>
            <h2 className="modal-title">{service.title}</h2>
          </div>
        </div>
        <div className="modal-body">
          <p>{service.description}</p>
          {service.features && (
            <div className="features-container">
              <h3>Características del servicio:</h3>
              <ul className="features-list">
                {service.features.map((feature, index) => (
                  <li key={index}>
                    <i className="fas fa-check"></i>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className="modal-footer">
          <a href="/cotizador" className="modal-button">
            Solicitar cotización
          </a>
        </div>
      </div>
    </div>
  )
}

// Componente principal de la página
const ServiciosPage: React.FC = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null)
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  // Gestiona la apertura del modal
  const handleServiceClick = (serviceId: string) => {
    setSelectedService(serviceId)
    setIsModalOpen(true)
    document.body.style.overflow = "hidden" // Prevenir desplazamiento
  }

  // Cierra el modal
  const handleCloseModal = () => {
    setIsModalOpen(false)
    document.body.style.overflow = "" // Habilitar desplazamiento
  }

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
          integrity="sha512-xX2Wjj6AA0IVpUJ6zGZUg19U7tOLqXb0nEomGpD6zvZq7gS8K5TLNwKRMuvFkBPLyU4VnnttLGe1qc9WZixI1A=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <NavbarComponent />
      <main>
        <HeroSection />
        <ServicesOverview onServiceClick={handleServiceClick} />
        <CTASection />
        <ServiceModal
          isOpen={isModalOpen}
          service={selectedService ? serviceDetails[selectedService] : null}
          onClose={handleCloseModal}
        />
      </main>
      <FooterComponent />
    </>
  )
}

export default ServiciosPage
