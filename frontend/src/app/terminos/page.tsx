'use client';

import React from 'react';
import Head from "next/head";
import FooterComponent from '../../../components/footer/footer';
import NavbarComponent from '../../../components/navbar/navbar';
import styles from './TerminosPage.module.css';

const TerminosPage: React.FC = () => {
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

      <NavbarComponent />

      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1>Términos y Condiciones</h1>
          </div>
        </section>

        <section className={styles.content}>
          <div className={styles.container}>
            <div className={styles.section}>
              <h2>Disposiciones Generales</h2>
              
              <div className={styles.subsection}>
                <h3>A. Información y Obligaciones de OPERADOR LOGÍSTICO TEHUACÁN:</h3>
                <p>
                  OPERADOR LOGÍSTICO TEHUACÁN, con domicilio en 10 Poniente # 1205. Col. Constituyentes. 
                  C.P.75710. Tehuacán, Puebla. México, es quien le asesora de manera directa y sin 
                  intermediarios a través del sitio web https://www.oltenvios.com, sitio exclusivamente 
                  de carácter INFORMATIVO y en adelante denominado como "la página". Toda comunicación 
                  realizada a través de la Página, se sujetará a los términos y condiciones aquí expresados.
                </p>
              </div>

              <div className={styles.subsection}>
                <h3>B. Aceptación de los términos y condiciones.</h3>
                <p>
                  Cada vez que ingreses a este Sitio Web de internet https://www.oltenvios.com ("la página") 
                  proporcionada por OPERADOR LOGÍSTICO TEHUACÁN, y hagas uso de la misma como usuario, 
                  aceptas los términos y condiciones (los «Términos y Condiciones») aquí expresados, por lo 
                  que te pedimos los revises con detenimiento antes de enviar un formulario o ponerte en 
                  contacto con nosotros.
                </p>
              </div>

              {/* Continuar con las demás secciones... */}
            </div>

            <div className={styles.section}>
              <h2>Obligaciones del usuario</h2>
              <ul className={styles.list}>
                <li>Hacer uso de este Sitio Web de conformidad con los Términos y Condiciones aquí establecidos.</li>
                <li>Realizar consultas de información legítimas.</li>
                <li>Ser responsable de todas las solicitudes de información.</li>
                <li>Proporcionar información veraz y precisa.</li>
                <li>No acceder a información de terceros sin autorización.</li>
              </ul>
            </div>

            <div className={styles.section}>
              <h2>Protección de Datos Personales</h2>
              <p>
                Tu privacidad es muy importante para OPERADOR LOGÍSTICO TEHUACÁN. Los datos personales que 
                nos proporcionas a través de la Página, son utilizados para atender tus consultas, brindar 
                orientación, evaluar y mejorar continuamente los servicios que ofrecemos.
              </p>
            </div>

            <div className={styles.section}>
              <h2>Contáctanos</h2>
              <p>
                En caso de tener cualquier duda relacionada a la información ofrecida dentro de la Página, 
                de los servicios ofrecidos, puedes contactarnos a través de nuestro número (238) 38 254 89.
              </p>
            </div>

            <div className={styles.footer}>
              <p>Última Actualización: 13 de Febrero de 2019</p>
            </div>
          </div>
        </section>
      </main>

      <FooterComponent />
    </>
  );
};

export default TerminosPage;