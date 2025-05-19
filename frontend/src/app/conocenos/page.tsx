'use client';
import React from 'react';
import "./conocenos.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Head from "next/head";
import FooterComponent from '../../../components/footer/footer';
import NavbarComponent from '../../../components/navbar/navbar';

function ConocenosPage() {
    return(
        <>
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
    
        
    <section className="hero1">
        <div className="container1">
            <h1>Conócenos</h1>
            <p>Somos un operador logístico con más de 10 años de experiencia brindando soluciones de transporte y distribución en todo México.</p>
        </div>
    </section>

    <section className="about-section">
        <div className="container1">
            <div className="about-grid">
                <div className="about-content">
                    <h2>OPERADOR LOGÍSTICO TEHUACÁN</h2>
                    <p>OLT nace en Tehuacán de la mano de un grupo de profesionales del transporte, con una larga trayectoria en el sector y con una clara vocación de servicio al cliente.</p>
                    <p>Este proyecto está fundamentado en la confianza y fidelidad de nuestros clientes, teniendo un crecimiento sostenido al desarrollar servicios y alternativas personalizadas que dan soluciones eficientes a industrias, comercios y particulares para hacer llegar, recoger y entregar.</p>
                    <p>Nuestro compromiso es brindar un servicio de calidad, seguro y confiable, con tiempos de entrega óptimos y tarifas competitivas.</p>
                </div>
                <div className="about-image">
                    <img src="https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" alt="Operador Logístico Tehuacán"/>
                </div>
            </div>
        </div>
    </section>

    <section className="coverage-section">
        <div className="container1">
            <div className="section-title">
                <h2>Cobertura Nacional OLT</h2>
                <p>Contamos con una amplia red de distribución que nos permite llegar a todo el territorio nacional.</p>
            </div>
            
            <div className="coverage-grid">
                <div className="coverage-map">
                    <img src="https://images.unsplash.com/photo-1527525443983-6e60c75fff46?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=500&q=80" alt="Mapa de cobertura"/>
                </div>
                
                <div className="coverage-info">
                    <div className="coverage-stat">
                        <div className="stat-icon">
                            <i className="fas fa-truck"></i>
                        </div>
                        <div className="stat-content">
                            <h3>560 Destinos</h3>
                            <p>Con recolección y entrega a domicilio en todo México.</p>
                        </div>
                    </div>
                    
                    <div className="coverage-stat">
                        <div className="stat-icon">
                            <i className="fas fa-building"></i>
                        </div>
                        <div className="stat-content">
                            <h3>89 Destinos</h3>
                            <p>Con entrega ocurre oficina para mayor comodidad.</p>
                        </div>
                    </div>
                    
                    <div className="coverage-stat">
                        <div className="stat-icon">
                            <i className="fas fa-clock"></i>
                        </div>
                        <div className="stat-content">
                            <h3>Tiempos de entrega</h3>
                            <p>Optimizados para cada ruta y tipo de servicio.</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="states-grid">
                <div className="state-item">Aguascalientes</div>
                <div className="state-item">Baja California</div>
                <div className="state-item">Baja California Sur</div>
                <div className="state-item">Campeche</div>
                <div className="state-item">Chiapas</div>
                <div className="state-item">Chihuahua</div>
                <div className="state-item">Ciudad de México</div>
                <div className="state-item">Coahuila</div>
                <div className="state-item">Colima</div>
                <div className="state-item">Durango</div>
                <div className="state-item">Estado de México</div>
                <div className="state-item">Guanajuato</div>
                <div className="state-item">Guerrero</div>
                <div className="state-item">Hidalgo</div>
                <div className="state-item">Jalisco</div>
                <div className="state-item">Michoacán</div>
                <div className="state-item">Morelos</div>
                <div className="state-item">Nayarit</div>
                <div className="state-item">Nuevo León</div>
                <div className="state-item">Oaxaca</div>
                <div className="state-item">Puebla</div>
                <div className="state-item">Querétaro</div>
                <div className="state-item">Quintana Roo</div>
                <div className="state-item">San Luis Potosí</div>
                <div className="state-item">Sinaloa</div>
                <div className="state-item">Sonora</div>
                <div className="state-item">Tabasco</div>
                <div className="state-item">Tamaulipas</div>
                <div className="state-item">Tlaxcala</div>
                <div className="state-item">Veracruz</div>
                <div className="state-item">Yucatán</div>
                <div className="state-item">Zacatecas</div>
            </div>
        </div>
    </section>


    <section className="mission-section">
        <div className="container1">
            <div className="mission-grid">
                <div className="mission-content">
                    <h2>Nuestra Misión y Compromisos</h2>
                    
                    <div className="mission-item">
                        <h3><i className="fas fa-bullseye"></i> Nuestra Misión</h3>
                        <p>Asegurar la satisfacción de nuestros clientes, ofreciendo servicios y cobertura con los tiempos adecuados de entrega, siendo así el enlace estratégico entre nuestros clientes al brindar un servicio Confiable, Seguro y Flexible.</p>
                    </div>
                    
                    <div className="mission-item">
                        <h3><i className="fas fa-handshake"></i> Compromisos con Nuestros Clientes</h3>
                        <p>En OLT contamos con procedimientos y estándares de calidad muy rigurosos, para asegurar a nuestros clientes la trazabilidad y seguridad total de sus mercancías. Nuestro equipo trabaja de manera activa para solucionar cualquier incidencia que obstaculice la entrega de sus envíos, manteniendo comunicación constante para lograr que llegue la comunicación entre sus distintos puntos de distribución, mejorando día a día la calidad de los procesos y aumentando la rapidez en el servicio.</p>
                    </div>
                </div>
                
                <div className="mission-image">
                    <img src="https://images.unsplash.com/photo-1521791055366-0d553872125f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" alt="Equipo OLT"/>
                </div>
            </div>
        </div>
    </section>

    <section className="cta-section">
        <div className="container1">
            <h2>¿Necesitas una cotización?</h2>
            <p>Si deseas saber el tiempo de entrega de un origen y un punto de entrega distinto, ve a contacto y elige a un asesor logístico para recibir toda la información que necesitas.</p>
            <a href="cotizar.html" className="cta-button">Cotiza ahora</a>
        </div>
    </section>
        
    <FooterComponent/>
        
        </>
        
    )
}

export default ConocenosPage;