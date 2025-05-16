'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import './navbar.css';

export default function NavbarComponent() {
  const [isMobile, setIsMobile] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => {
    if (isMobile) {
      setSidebarOpen((prev) => !prev);
    }
  };

  return (
    <>
      <header className="navbar">
        <div className="navbar-container">
          <div className="logo" onClick={toggleSidebar}>
            <img src="/logo.png" alt="Logo" />
          </div>

          {!isMobile && (
            <nav className="nav-links">
              <ul>
                <li><Link href="/">Inicio</Link></li>
                <li><Link href="/nosotros">Conócenos</Link></li>
                <li><Link href="/servicios">Servicios</Link></li>
                <li><Link href="/cotizador">Cotizador</Link></li>
              </ul>
            </nav>
          )}
        </div>
      </header>

      {isMobile && sidebarOpen && (
        <>
          <aside className="sidebar">
            <ul>
              <li><Link href="/" onClick={toggleSidebar}>Inicio</Link></li>
              <li><Link href="/nosotros" onClick={toggleSidebar}>Conócenos</Link></li>
              <li><Link href="/servicios" onClick={toggleSidebar}>Servicios</Link></li>
              <li><Link href="/cotizador" onClick={toggleSidebar}>Cotizador</Link></li>
            </ul>
          </aside>
          <div className="overlay" onClick={toggleSidebar}></div>
        </>
      )}
    </>
  );
}
