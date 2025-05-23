"use client"

import type React from "react"
import { useState } from "react"
import "@fortawesome/fontawesome-free/css/all.min.css"
import FooterComponent from "../../../components/footer/footer"
import NavbarComponent from "../../../components/navbar/navbar"
import styles from "./ShippingQuotePage.module.css"

interface Agent {
  name: string
  role: string
  imageUrl: string
  phone: string
  email: string
  whatsapp: string
}

const agents: Agent[] = [
  {
    name: "Felipe Reyes",
    role: "Asesor logístico",
    imageUrl: "/lic.webp",
    phone: "+522381652135",
    email: "freyes@oltenvios.com",
    whatsapp: "2381652135",
  },
  {
    name: "Raúl Maceda",
    role: "Atención al cliente",
    imageUrl: "/images/maria.jpg",
    phone: "+522381524866",
    email: "clientes@oltenvios.com",
    whatsapp: "522381524866",
  },
  {
    name: "Ivan Reyes",
    role: "Atención a Clientes",
    imageUrl: "/images/carlos.jpg",
    phone: "+522382219925",
    email: "asesor04@oltenvios.com",
    whatsapp: "522382219925",
  },
  {
    name: "Beatriz Dominguez",
    role: " Administración",
    imageUrl: "/images/ana.jpg",
    phone: "+52238 170 0889",
    email: "ana@logistica.com",
    whatsapp: "52238 170 0889",
  },
]

interface PackageItem {
  cantidad: string
  peso: string
  largo: string
  ancho: string
  alto: string
}

interface FormData {
  nombre: string
  telefono: string
  mercancia: string
  // Origen
  origenCiudad: string
  origenEstado: string
  origenCP: string
  origenColonia: string
  // Destino
  destinoCiudad: string
  destinoEstado: string
  destinoCP: string
  destinoColonia: string
  // Paquetes
  paquetes: PackageItem[]
  agente: string
}

const ShippingQuotePage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    nombre: "",
    telefono: "",
    mercancia: "",
    // Origen
    origenCiudad: "",
    origenEstado: "",
    origenCP: "",
    origenColonia: "",
    // Destino
    destinoCiudad: "",
    destinoEstado: "",
    destinoCP: "",
    destinoColonia: "",
    // Paquetes
    paquetes: [{ cantidad: "", peso: "", largo: "", ancho: "", alto: "" }],
    agente: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handlePackageChange = (index: number, field: keyof PackageItem, value: string) => {
    setFormData((prev) => {
      const newPaquetes = [...prev.paquetes]
      newPaquetes[index] = {
        ...newPaquetes[index],
        [field]: value,
      }
      return {
        ...prev,
        paquetes: newPaquetes,
      }
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const {
      nombre,
      telefono,
      mercancia,
      origenCiudad,
      origenEstado,
      origenCP,
      origenColonia,
      destinoCiudad,
      destinoEstado,
      destinoCP,
      destinoColonia,
      paquetes,
      agente,
    } = formData

    let mensaje = `Hola, solicito una cotización para envío de mercancía:%0A%0A`
    mensaje += `*Nombre:* ${nombre}%0A`
    mensaje += `*Mercancía:* ${mercancia}%0A`

    // Origen
    mensaje += `*Origen:* ${origenCiudad}, ${origenEstado}%0A`
    mensaje += `*CP Origen:* ${origenCP}%0A`
    mensaje += `*Colonia Origen:* ${origenColonia}%0A`

    // Destino
    mensaje += `*Destino:* ${destinoCiudad}, ${destinoEstado}%0A`
    mensaje += `*CP Destino:* ${destinoCP}%0A`
    mensaje += `*Colonia Destino:* ${destinoColonia}%0A`

    // Paquetes
    mensaje += `*Paquetes:*%0A`
    paquetes.forEach((paquete, index) => {
      if (paquete.cantidad !== "Piezas" && paquete.peso !== "Kilos") {
        mensaje += `Paquete ${index + 1}: ${paquete.cantidad} piezas, ${paquete.peso} kg, ${paquete.largo}x${paquete.ancho}x${paquete.alto} cm%0A`
      }
    })

    let whatsappNumber = "522381652135"

    if (agente) {
      const selectedAgent = agents.find((agent) => agent.name === agente)
      if (selectedAgent) {
        whatsappNumber = selectedAgent.whatsapp
      }
      mensaje += `*Agente solicitado:* ${agente}%0A`
    }

    window.open(`https://wa.me/${whatsappNumber}?text=${mensaje}`, "_blank")
  }

  return (
    <div>
      <NavbarComponent />

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <h1>Cotiza tu envío en minutos</h1>
          <p>
            Obtén una cotización rápida y personalizada para tus envíos de mercancía. Nuestro equipo de expertos te
            atenderá directamente por WhatsApp.
          </p>
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
                <img src={agent.imageUrl || "/placeholder.svg"} alt={agent.name} />
              </div>
              <div className={styles.agentInfo}>
                <h3>{agent.name}</h3>
                <p>{agent.role}</p>
                <div className={styles.agentContact}>
                  <a href={`tel:${agent.phone}`} className={styles.phone} title="Llamar">
                    <i className="fas fa-phone"></i>
                  </a>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault()
                      const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
                      const mailtoLink = `mailto:${agent.email}`
                      const gmailLink = `https://mail.google.com/mail/?view=cm&to=${agent.email}`

                      window.open(isMobile ? mailtoLink : gmailLink, "_blank")
                    }}
                    className={styles.email}
                    title="Correo"
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
                <select id="agente" name="agente" value={formData.agente} onChange={handleInputChange}>
                  <option value="">Seleccionar agente (opcional)</option>
                  {agents.map((agent) => (
                    <option key={agent.name} value={agent.name}>
                      {agent.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* ORIGEN Section */}
              <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                <h3 className={styles.sectionSubtitle}>ORIGEN</h3>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="origenCiudad">Ciudad *</label>
                <input
                  type="text"
                  id="origenCiudad"
                  name="origenCiudad"
                  value={formData.origenCiudad}
                  onChange={handleInputChange}
                  required
                  placeholder="Ej. TEHUACAN"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="origenEstado">Estado *</label>
                <input
                  type="text"
                  id="origenEstado"
                  name="origenEstado"
                  value={formData.origenEstado}
                  onChange={handleInputChange}
                  required
                  placeholder="Ej. PUEBLA"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="origenCP">Código postal *</label>
                <input
                  type="text"
                  id="origenCP"
                  name="origenCP"
                  value={formData.origenCP}
                  onChange={handleInputChange}
                  required
                  placeholder="75700"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="origenColonia">Colonia *</label>
                <input
                  type="text"
                  id="origenColonia"
                  name="origenColonia"
                  value={formData.origenColonia}
                  onChange={handleInputChange}
                  required
                  placeholder="CENTRO"
                />
              </div>

              {/* DESTINO Section */}
              <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                <h3 className={styles.sectionSubtitle}>DESTINO</h3>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="destinoCiudad">Ciudad *</label>
                <input
                  type="text"
                  id="destinoCiudad"
                  name="destinoCiudad"
                  value={formData.destinoCiudad}
                  onChange={handleInputChange}
                  required
                  placeholder="Ej. MONTERREY"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="destinoEstado">Estado *</label>
                <input
                  type="text"
                  id="destinoEstado"
                  name="destinoEstado"
                  value={formData.destinoEstado}
                  onChange={handleInputChange}
                  required
                  placeholder="Ej. NUEVO LEON"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="destinoCP">Código postal *</label>
                <input
                  type="text"
                  id="destinoCP"
                  name="destinoCP"
                  value={formData.destinoCP}
                  onChange={handleInputChange}
                  required
                  placeholder="64000"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="destinoColonia">Colonia *</label>
                <input
                  type="text"
                  id="destinoColonia"
                  name="destinoColonia"
                  value={formData.destinoColonia}
                  onChange={handleInputChange}
                  required
                  placeholder="CENTRO"
                />
              </div>

              {/* Packages Section */}
              <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                <h3 className={styles.sectionSubtitle}>Captura la siguiente información de tus paquetes y tarimas</h3>
                <div className={styles.packageGrid}>
                  <div className={styles.packageHeader}>
                    <div>Cantidad</div>
                    <div>Peso</div>
                    <div>Largo</div>
                    <div>Ancho</div>
                    <div>Alto</div>
                    <div>Acciones</div>
                  </div>

                  {formData.paquetes.map((paquete, index) => (
                    <div key={index} className={styles.packageRow}>
                      <input
                        type="text"
                        value={paquete.cantidad}
                        onChange={(e) => handlePackageChange(index, "cantidad", e.target.value)}
                        placeholder="Número de piezas"
                      />
                      <input
                        type="text"
                        value={paquete.peso}
                        onChange={(e) => handlePackageChange(index, "peso", e.target.value)}
                        placeholder="Peso en kilos"
                      />
                      <input
                        type="text"
                        value={paquete.largo}
                        onChange={(e) => handlePackageChange(index, "largo", e.target.value)}
                        placeholder="Largo en cm"
                      />
                      <input
                        type="text"
                        value={paquete.ancho}
                        onChange={(e) => handlePackageChange(index, "ancho", e.target.value)}
                        placeholder="Ancho en cm"
                      />
                      <input
                        type="text"
                        value={paquete.alto}
                        onChange={(e) => handlePackageChange(index, "alto", e.target.value)}
                        placeholder="Alto en cm"
                      />
                      <div className={styles.packageActions}>
                        <button
                          type="button"
                          className={styles.addPackageButton}
                          onClick={() => {
                            setFormData((prev) => ({
                              ...prev,
                              paquetes: [...prev.paquetes, { cantidad: "", peso: "", largo: "", ancho: "", alto: "" }],
                            }))
                          }}
                          title="Agregar paquete"
                        >
                          <i className="fas fa-plus"></i>
                        </button>
                        {formData.paquetes.length > 1 && (
                          <button
                            type="button"
                            className={styles.removePackageButton}
                            onClick={() => {
                              setFormData((prev) => ({
                                ...prev,
                                paquetes: prev.paquetes.filter((_, i) => i !== index),
                              }))
                            }}
                            title="Eliminar paquete"
                          >
                            <i className="fas fa-trash"></i>
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className={styles.dimensionsDiagram}>
                  <img
                    src="medidas.png?height=150&width=300"
                    alt="Dimensiones del paquete"
                    className={styles.diagramImage}
                  />
                </div>
              </div>

              <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                <label htmlFor="mercancia">¿Qué desea transportar? *</label>
                <textarea
                  id="mercancia"
                  name="mercancia"
                  value={formData.mercancia}
                  onChange={handleInputChange}
                  required
                  placeholder="Describe detalladamente el tipo de mercancía que deseas enviar"
                  className={styles.textarea}
                />
              </div>

              <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                <p className={styles.noteText}>
                  Si deseas cotizar un Flete Local o Foráneo, escríbenos para saber más del volumen y peso de las
                  mercancías que deseas transportar, para así elegir el tipo de unidad.
                </p>
              </div>

              <div
                className={`${styles.formGroup} ${styles.fullWidth}`}
                style={{ textAlign: "center", marginTop: "20px" }}
              >
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
  )
}

export default ShippingQuotePage
