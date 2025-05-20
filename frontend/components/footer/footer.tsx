'use client';

import Head from "next/head";
import React from 'react';
import "./footer.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Link from 'next/link';


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
                <img src="/logo.png" alt="Logo" />
              </div>
              <p>
                Operador Logístico Tehuacán es una empresa dedicada al
                transporte y distribución de mercancías a nivel nacional, con
                más de 10 años de experiencia en el sector.
              </p>
              <div className="social-links">
                <a href="https://www.facebook.com/share/1ATePcDafC/"><i className="fab fa-facebook-f"></i></a>
                <a href="https://www.instagram.com/oltenvios?igsh=YTdvdmF4OXJ2eWx5"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-whatsapp"></i></a>
              </div>
            </div>

            <div className="footer-column">
              <h3>Enlaces Rápidos</h3>
              <ul>
                <li><Link href="/Home">Inicio</Link></li>
                <li><Link href="/conocenos">Conócenos</Link></li>
                <li><Link href="/servicios">Servicios</Link></li>
                <li><Link href="/actualizaciones">Actualizaciones</Link></li>
                <li><Link href="/cotizador">Cotizador</Link></li>
                <li><Link href="/terminos">Términos y Condiciones</Link></li>
              </ul>
            </div>

            <div className="footer-column">
              <h3>Nuestros Servicios</h3>
              <ul>
                <li><Link href="/servicios?servicio=paqueteria">Paquetería</Link></li>
                <li><Link href="/servicios?servicio=carga-consolidada">Carga Consolidada</Link></li>
                <li><Link href="/servicios?servicio=recoleccion">Recolección a Domicilio</Link></li>
                <li><Link href="/servicios?servicio=embalaje">Embalaje</Link></li>
                <li><Link href="/servicios?servicio=fletes">Fletes y Mudanzas</Link></li>
                <li><Link href="/servicios?servicio=acuses">Acuses de Recibo</Link></li>
                <li><Link href="/servicios?servicio=seguro">Seguro de Mercancías</Link></li>
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
              © 2025 <Link href="/">Operador Logístico Tehuacán</Link>. Todos los
              derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default FooterComponent;
