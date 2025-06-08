"use client";
import React from "react";
import "./principal.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Head from "next/head";
import FooterComponent from "../../../components/footer/footer";
import NavbarComponent from "../../../components/navbar/navbar";

function PrincipalPage() {
  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
          integrity="sha512-xX2Wjj6AA0IVpUJ6zGZUg19U7tOLqXb0nEomGpD6zvZq7gS8K5TLNwKRMuvFkBPLyU4VnnttLGe1qc9WZixI1A=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>

      <NavbarComponent />

      <section className="hero">
        <img
          src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=400&q=80"
          alt="Camión de reparto"
          className="hero-image"
        />
        <div className="hero-content">
          <h1>Paquetería sin guías prepagadas de tehuacán para todo el país</h1>
        </div>
      </section>

      <div className="quick-links">
        <div className="quick-links-container">
          <a href="#" className="quick-link">
            <i className="fas fa-box"></i> Cargas consolidadas
          </a>
          <a href="#" className="quick-link">
            <i className="fas fa-truck"></i> Flota Propia
          </a>
          <a href="#" className="quick-link">
            <i className="fas fa-warehouse"></i> Depósitos de valores
          </a>
          <a href="#" className="quick-link">
            <i className="fab fa-whatsapp"></i> Seguir mi mercancía
          </a>
        </div>
      </div>

      <section className="about" id="nosotros">
        <div className="about-content">
          <h2>SOMOS Operador Logístico Tehuacán</h2>
          <p>
            Somos una empresa especializada en logística y transporte terrestre
            de mercancías a nivel nacional. Con más de 10 años de experiencia en
            el sector, hemos desarrollado soluciones personalizadas para
            industrias, comercios y particulares.
          </p>
          <p>
            Nos distinguimos por nuestro compromiso con la seguridad en el
            transporte, el manejo adecuado de las mercancías y el cumplimiento
            de los tiempos de entrega. Más que un proveedor, somos un aliado
            estratégico para nuestros clientes, garantizando un servicio
            Confiable, Seguro y Eficiente.
          </p>

          <div className="contact-info">
            <p>+52 (238) 38 254 89</p>
            <p>contacto@oltenvios.com</p>
          </div>
        </div>
        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300&q=80"
            alt="Camión logístico"
          />
        </div>
      </section>

      <section className="stats1">
        <div className="stat-item1">
          <div className="stat-icon1">
            <i className="fas fa-box"></i>
          </div>
          <div className="stat-number1">1729</div>
          <div className="stat-text">ENVÍOS MENSUALES</div>
        </div>
        <div className="stat-item1">
          <div className="stat-icon1">
            <i className="fas fa-map-marker-alt"></i>
          </div>
          <div className="stat-number1">350</div>
          <div className="stat-text">DESTINOS EN TODO MÉXICO</div>
        </div>
        <div className="stat-item1">
          <div className="stat-icon1">
            <i className="fas fa-chart-line"></i>
          </div>
          <div className="stat-number1">89</div>
          <div className="stat-text">EMPRESAS CONFÍAN EN NOSOTROS</div>
        </div>
        <div className="stat-item1">
          <div className="stat-icon">
            <i className="fas fa-globe"></i>
          </div>
          <div className="stat-number1">24/7</div>
          <div className="stat-text">SERVICIO DISPONIBLE</div>
        </div>
      </section>

      <section className="services" id="servicios">
        <div className="services-container">
          <div className="service-cards">
            <div className="service-card">
              <div className="service-image">
                <img
                  src="https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=150&q=80"
                  alt="Paquetería de mercancías"
                />
              </div>
              <div className="service-content">
                <h3>Paquetería de mercancías</h3>
                <p>
                  Servicio de entrega de paquetes y mercancías a nivel nacional
                  con seguimiento en tiempo real.
                </p>
                <a href="/servicios" className="service-button">
                  Ver más
                </a>
              </div>
            </div>
            <div className="service-card">
              <div className="service-image">
                <img
                  src="https://images.unsplash.com/photo-1580674285054-bed31e145f59?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=150&q=80"
                  alt="Paquetería"
                />
              </div>
              <div className="service-content">
                <h3>Paquetería</h3>
                <p>
                  Envío de paquetes de cualquier tamaño con servicio puerta a
                  puerta en todo el país.
                </p>
                <a href="/servicios" className="service-button">
                  Ver más
                </a>
              </div>
            </div>
            <div className="service-card">
              <div className="service-image">
                <img
                  src="https://images.unsplash.com/photo-1615460549969-36fa19521a4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=150&q=80"
                  alt="Envío de mercancías"
                />
              </div>
              <div className="service-content">
                <h3>ENVÍO DE MERCANCÍAS</h3>
                <p>
                  Transporte seguro de mercancías con seguros incluidos y
                  garantía de entrega.
                </p>
                <a href="/servicios" className="service-button">
                  Ver más
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="locations">
        <h2>Nuestras Ubicaciones</h2>
        <div className="locations-content">
          <div className="locations-text">
            <div className="location-item">
              <h3>Tehuacán</h3>
              <p>
                Somos una empresa de logística en Tehuacán y empleando alianzas estratégicas con transportistas y paqueterías legalmente establecidos en el país, movemos envíos en toda la República Mexicana.
              </p>
            </div>
            <div className="location-item">
              <h3>Oficina Central</h3>
              <p>
                Calle 10 poniente No.1205 C.P.75710 Col. Constituyentes, Tehuacán, Puebla
              </p>
              <p>Teléfono oficinas: (238) 38 254 89, (238) 138 6376</p>
              <p>Email: contacto@oltenvios.com</p>
            </div>
          </div>
          <div className="locations-map">
            <div
              style={{
                position: "relative",
                paddingBottom: "56.25%",
                height: 0,
                overflow: "hidden",
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.251905737421!2d-97.40662392480954!3d18.47224538261197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85c5bd2d374421dd%3A0x1c8560acb3ec166d!2sOperador%20Log%C3%ADstico%20Tehuac%C3%A1n!5e0!3m2!1ses-419!2smx!4v1747160025814!5m2!1ses-419!2smx"
                style={{
                  border: 0,
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
      <FooterComponent />
    </div>
  );
}

export default PrincipalPage;
