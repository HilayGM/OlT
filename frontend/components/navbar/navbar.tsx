"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import "./navbar.css"

export default function NavbarComponent() {
  const [isMobile, setIsMobile] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const toggleSidebar = () => {
    if (isMobile) {
      setSidebarOpen((prev) => !prev)
    }
  }

  const closeSidebar = () => {
    setSidebarOpen(false)
  }

  return (
    <>
      <header className="navbar">
        <div className="navbar-container">
          <div className="logo">
            <img src="/logo.png" alt="Logo" />
          </div>

          {!isMobile && (
            <nav className="nav-links">
              <ul>
                <li>
                  <Link href="/">Inicio</Link>
                </li>
                <li>
                  <Link href="/cobertura">Cobertura</Link>
                </li>
                <li>
                  <Link href="/servicios">Servicios</Link>
                </li>
                <li>
                  <Link href="/actualizaciones">Actualizaciones</Link>
                </li>
                <li>
                  <Link href="/cotizador">Cotizador</Link>
                </li>
              </ul>
            </nav>
          )}

          {isMobile && (
            <div className="mobile-menu-container">
              <div className="menu-icon" onClick={toggleSidebar}>
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
              </div>
            </div>
          )}
        </div>
      </header>

      {isMobile && sidebarOpen && (
        <>
          <aside className="sidebar">
            <div className="sidebar-header">
              <button className="close-btn" onClick={closeSidebar}>
                <span className="close-line"></span>
                <span className="close-line"></span>
              </button>
            </div>
            <nav className="sidebar-nav">
              <ul>
                <li>
                  <Link href="/" onClick={closeSidebar}>
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link href="/cobertura" onClick={closeSidebar}>
                    Cobertura
                  </Link>
                </li>
                <li>
                  <Link href="/servicios" onClick={closeSidebar}>
                    Servicios
                  </Link>
                </li>
                <li>
                  <Link href="/actualizaciones" onClick={closeSidebar}>
                    Actualizaciones
                  </Link>
                </li>
                <li>
                  <Link href="/cotizador" onClick={closeSidebar}>
                    Cotizador
                  </Link>
                </li>
              </ul>
            </nav>
          </aside>
          <div className="overlay" onClick={closeSidebar}></div>
        </>
      )}
    </>
  )
}
