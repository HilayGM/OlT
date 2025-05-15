'use client';

import Head from "next/head";
import React from 'react';
import "./footer.css";
import "@fortawesome/fontawesome-free/css/all.min.css";


function FooterComponent() {
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
</Head>

      <footer className="footer">
        <div className="container">
          <div className="footer-top">
            <div className="footer-column">
              <div className="footer-logo">
                <img src="/logo.jpg" alt="Logo" />
              </div>
              <p>
                Operador Logístico Tehuacán es una empresa dedicada al
                transporte y distribución de mercancías a nivel nacional, con
                más de 10 años de experiencia en el sector.
              </p>
              <div className="social-links">
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-linkedin-in"></i></a>
                <a href="#"><i className="fab fa-whatsapp"></i></a>
              </div>
            </div>

            <div className="footer-column">
              <h3>Enlaces Rápidos</h3>
              <ul>
                <li><a href="index.html">Inicio</a></li>
                <li><a href="nosotros.html">Conócenos</a></li>
                <li><a href="servicios.html">Servicios</a></li>
                <li><a href="actualizaciones.html">Actualizaciones</a></li>
                <li><a href="cotizar.html">Cotizador</a></li>
                <li><a href="#">Términos y Condiciones</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h3>Nuestros Servicios</h3>
              <ul>
                <li><a href="#">Paquetería</a></li>
                <li><a href="#">Carga Consolidada</a></li>
                <li><a href="#">Recolección a Domicilio</a></li>
                <li><a href="#">Embalaje</a></li>
                <li><a href="#">Fletes y Mudanzas</a></li>
                <li><a href="#">Acuses de Recibo</a></li>
                <li><a href="#">Seguro de Mercancías</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h3>Contacto</h3>
              <ul className="footer-contact">
                <li><i className="fas fa-map-marker-alt"></i><span>Calle Cuauhtémoc #123, Centro, Tehuacán, Puebla, México</span></li>
                <li><i className="fas fa-phone"></i><span>(238) 383 0123</span></li>
                <li><i className="fas fa-envelope"></i><span>contacto@olt.com.mx</span></li>
                <li><i className="fas fa-clock"></i><span>Lun-Vie: 9am-6pm</span></li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p>
              © 2025 <a href="#">Operador Logístico Tehuacán</a>. Todos los
              derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default FooterComponent;
