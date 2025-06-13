"use client"

import type React from "react"
import { useState } from "react"
import "@fortawesome/fontawesome-free/css/all.min.css"
import FooterComponent from "../../../components/footer/footer"
import NavbarComponent from "../../../components/navbar/navbar"
import styles from "./ShippingQuotePage.module.css"

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
}

// Lista de servicios disponibles para el checklist
const serviceOptions = [
  { id: "cotizacion", label: "Cotización y ventas", icon: "fa-calculator" },
  { id: "recoleccion", label: "Programa tu recolección", icon: "fa-truck" },
  { id: "rastreo", label: "Rastreo de mercancía", icon: "fa-search" },
  { id: "facturacion", label: "Facturación electrónica", icon: "fa-file-invoice" },
  { id: "sucursal", label: "Ubica tu sucursal", icon: "fa-map-marker-alt" },
  { id: "informacion", label: "Información", icon: "fa-info-circle" },
  { id: "inconformidad", label: "Inconformidad con el servicio", icon: "fa-exclamation-triangle" },
  { id: "atencion", label: "Atención a clientes", icon: "fa-headset" },
]

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
  })

  // Estado para los servicios seleccionados
  const [selectedServices, setSelectedServices] = useState<string[]>([])

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

  // Manejar cambios en el checklist de servicios
  const handleServiceToggle = (serviceId: string) => {
    setSelectedServices((prev) => {
      if (prev.includes(serviceId)) {
        return prev.filter((id) => id !== serviceId)
      } else {
        return [...prev, serviceId]
      }
    })
  }

  // Enviar servicios seleccionados por WhatsApp
  const handleSendServices = () => {
    if (selectedServices.length === 0) {
      alert("Por favor selecciona al menos un servicio")
      return
    }

    const selectedServiceLabels = selectedServices
      .map((id) => serviceOptions.find((service) => service.id === id)?.label)
      .filter(Boolean)

    let mensaje = `Hola, necesito ayuda con los siguientes servicios:%0A%0A`
    selectedServiceLabels.forEach((label) => {
      mensaje += `- ${label}%0A`
    })

    const whatsappNumber = "522381652135" // Número por defecto
    window.open(`https://wa.me/${whatsappNumber}?text=${mensaje}`, "_blank")
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
    } = formData

    let mensaje = `Hola, solicito una cotización para envío de mercancía:%0A%0A`
    mensaje += `*Nombre:* ${nombre}%0A`
    if (telefono) mensaje += `*Teléfono:* ${telefono}%0A`
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
      if (paquete.cantidad && paquete.peso) {
        mensaje += `Paquete ${index + 1}: ${paquete.cantidad} piezas, ${paquete.peso} kg`
        if (paquete.largo && paquete.ancho && paquete.alto) {
          mensaje += `, ${paquete.largo}x${paquete.ancho}x${paquete.alto} cm`
        }
        mensaje += `%0A`
      }
    })

    const whatsappNumber = "522381652135"
    window.open(`https://wa.me/${whatsappNumber}?text=${mensaje}`, "_blank")
  }

  return (
    <div>
      <NavbarComponent />

      {/* Hero Section - Reducido */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <h1>Cotiza tu envío</h1>
          <p>Obtén una cotización rápida por WhatsApp</p>
          <div className={styles.whatsappBadge}>
            <i className="fab fa-whatsapp"></i> Cotización vía WhatsApp
          </div>
        </div>
      </section>

      {/* Main Content - Dos columnas */}
      <section className={styles.mainContent}>
        <div className={styles.contentContainer}>
          {/* Columna Izquierda - Servicios */}
          <div className={styles.servicesColumn}>
            <div className={styles.servicesChecklist}>
              <h3>¿En qué podemos ayudarte?</h3>
              <p>Selecciona los servicios que necesitas y envía tu consulta directamente a nuestro asesor:</p>

              <div className={styles.checklistContainer}>
                {serviceOptions.map((service) => (
                  <div key={service.id} className={styles.checklistItem}>
                    <label className={styles.checkboxLabel}>
                      <input
                        type="checkbox"
                        checked={selectedServices.includes(service.id)}
                        onChange={() => handleServiceToggle(service.id)}
                        className={styles.checkboxInput}
                      />
                      <span className={styles.checkmark}></span>
                      <i className={`fas ${service.icon} ${styles.serviceIcon}`}></i>
                      <span className={styles.serviceLabel}>{service.label}</span>
                    </label>
                  </div>
                ))}
              </div>

              <button className={styles.sendServicesButton} onClick={handleSendServices}>
                <i className="fab fa-whatsapp"></i> Enviar consulta
              </button>
            </div>

            {/* Información de contacto */}

          </div>

          {/* Columna Derecha - Formulario de Cotización */}
          <div className={styles.quoteColumn}>
            <div className={styles.formContainer}>
              <div className={styles.formTitle}>
                <h2>Solicita tu cotización</h2>
                <p>Completa el formulario y te enviaremos la cotización por WhatsApp</p>
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
                    <label htmlFor="telefono">Teléfono</label>
                    <input
                      type="tel"
                      id="telefono"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleInputChange}
                      placeholder="Número de teléfono"
                    />
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
                    <h3 className={styles.sectionSubtitle}>Información de paquetes</h3>
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
                            placeholder="Piezas"
                          />
                          <input
                            type="text"
                            value={paquete.peso}
                            onChange={(e) => handlePackageChange(index, "peso", e.target.value)}
                            placeholder="Kilos"
                          />
                          <input
                            type="text"
                            value={paquete.largo}
                            onChange={(e) => handlePackageChange(index, "largo", e.target.value)}
                            placeholder="cm"
                          />
                          <input
                            type="text"
                            value={paquete.ancho}
                            onChange={(e) => handlePackageChange(index, "ancho", e.target.value)}
                            placeholder="cm"
                          />
                          <input
                            type="text"
                            value={paquete.alto}
                            onChange={(e) => handlePackageChange(index, "alto", e.target.value)}
                            placeholder="cm"
                          />
                          <div className={styles.packageActions}>
                            <button
                              type="button"
                              className={styles.addPackageButton}
                              onClick={() => {
                                setFormData((prev) => ({
                                  ...prev,
                                  paquetes: [
                                    ...prev.paquetes,
                                    { cantidad: "", peso: "", largo: "", ancho: "", alto: "" },
                                  ],
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
                        src="medidas.png?height=120&width=240"
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
                      placeholder="Describe el tipo de mercancía que deseas enviar"
                      className={styles.textarea}
                    />
                  </div>

                  <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                    <p className={styles.noteText}>
                      Para fletes locales o foráneos, contáctanos para evaluar el volumen y peso de tus mercancías.
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
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <FooterComponent />
    </div>
  )
}

export default ShippingQuotePage
