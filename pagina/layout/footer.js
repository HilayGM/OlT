function Footer() {
  return `
    <footer class="site-footer">
      <div class="footer-left">
        <img src="ruta/a/tu/logo.png" alt="Logo de Operador Logístico Tehuacán">
        <p>Operador Logístico Tehuacán es una empresa dedicada al transporte y distribución de mercancías a nivel nacional, con más de 10 años de experiencia en el sector.</p>
        <div class="social-icons">
          <a href="#"><img src="ruta/a/icono-facebook.png" alt="Facebook"></a>
          <a href="#"><img src="ruta/a/icono-twitter.png" alt="Twitter"></a>
          <a href="#"><img src="ruta/a/icono-instagram.png" alt="Instagram"></a>
          <a href="#"><img src="ruta/a/icono-linkedin.png" alt="LinkedIn"></a>
          <a href="#"><img src="ruta/a/icono-whatsapp.png" alt="WhatsApp"></a>
        </div>
      </div>
      <div class="footer-middle">
        <div class="quick-links">
          <h3>Enlaces Rápidos</h3>
          <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Conócenos</a></li>
            <li><a href="#">Servicios</a></li>
            <li><a href="#">Actualizaciones</a></li>
            <li><a href="#">Cotizador</a></li>
            <li><a href="#">Preguntas Frecuentes</a></li>
            <li><a href="#">Términos y Condiciones</a></li>
          </ul>
        </div>
        <div class="our-services">
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
      </div>
      <div class="footer-right">
        <h3>Contacto</h3>
        <div class="contact-info">
          <p><img src="ruta/a/icono-ubicacion.png" alt="Ubicación"> Calle Cuauhtémoc #123, Centro, Tehuacán, Puebla, México</p>
          <p><img src="ruta/a/icono-telefono.png" alt="Teléfono"> (238) 383 0123</p>
          <p><img src="ruta/a/icono-email.png" alt="Email"> contacto@olt.com.mx</p>
          <p><img src="ruta/a/icono-horario.png" alt="Horario"> Lun-Vie: 9am-6pm</p>
        </div>
        <div class="newsletter">
          <p>Suscríbete a nuestro boletín</p>
          <form>
            <input type="email" placeholder="Tu correo electrónico">
            <button type="submit"><img src="ruta/a/icono-enviar.png" alt="Enviar"></button>
          </form>
        </div>
      </div>
      <div class="footer-bottom">
        <p>© 2025 Operador Logístico Tehuacán. Todos los derechos reservados.</p>
      </div>
    </footer>
  `;
}

// Puedes agregar esta función para inyectar el footer en tu HTML
function renderFooter() {
  const footerContainer = document.createElement('div');
  footerContainer.innerHTML = Footer();
  document.body.appendChild(footerContainer);
}

// Llama a la función para renderizar el footer cuando tu script se ejecute
// renderFooter();