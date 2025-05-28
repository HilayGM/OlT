"use client"

import { useEffect, useState } from "react"
import axios from "axios"
import FooterComponent from "../../../components/footer/footer"
import NavbarComponent from "../../../components/navbar/navbar"
import "./blog.css"

interface Blog {
  id: number
  title: string
  description: string
  image: string
}

export default function PublicBlogList() {
  const [blogs, setBlogs] = useState<Blog[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null)

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get("http://localhost:8000/blogs")
        setBlogs(res.data)
      } catch (error) {
        console.error("Error al cargar blogs:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchBlogs()
  }, [])

  const openModal = (blog: Blog) => {
    setSelectedBlog(blog)
    document.body.style.overflow = "hidden"
  }

  const closeModal = () => {
    setSelectedBlog(null)
    document.body.style.overflow = "unset"
  }

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal()
      }
    }

    if (selectedBlog) {
      document.addEventListener("keydown", handleEscape)
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
    }
  }, [selectedBlog])

  if (loading) {
    return (
      <div>
        <NavbarComponent />
        <div className="blog-container">
          <div className="loading-spinner">
            <div className="spinner"></div>
            <p>Cargando publicaciones...</p>
          </div>
        </div>
        <FooterComponent />
      </div>
    )
  }

  return (
    <div className="page-wrapper">
      <NavbarComponent />

      <main className="blog-container">
        <header className="blog-header1">
          <h1 className="blog-title1">Blog Logístico de México</h1>
          <p className="blog-subtitle">Soluciones y Casos de Éxito OLT</p>
          <p className="blog-subtitle">Descubre las últimas publicaciones y mantente al día con nuestro contenido</p>
        </header>

        {blogs.length === 0 ? (
          <div className="empty-state">
            <h3>No hay publicaciones disponibles</h3>
            <p>Vuelve pronto para ver nuevo contenido</p>
          </div>
        ) : (
          <div className="blog-grid">
            {blogs.map((blog) => (
              <article key={blog.id} className="blog-card">
                {blog.image && (
                  <div className="blog-card-image">
                    <img
                      src={blog.image.startsWith("data:") ? blog.image : `http://localhost:8000/${blog.image}`}
                      alt={blog.title}
                      loading="lazy"
                    />
                  </div>
                )}

                <div className="blog-card-content">
                  <h2 className="blog-card-title">{blog.title}</h2>
                  <p className="blog-card-description">{blog.description}</p>

                  <div className="blog-card-footer">
                    <button className="read-more-btn" onClick={() => openModal(blog)}>
                      Leer más
                      <svg className="arrow-icon" viewBox="0 0 20 20" fill="currentColor">
                        <path
                          fillRule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </main>

      <FooterComponent />

      {/* Netflix-style Modal */}
      {selectedBlog && (
        <div className="netflix-modal-overlay" onClick={closeModal}>
          <div className="netflix-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={closeModal}>
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
              </svg>
            </button>

            <div className="modal-hero">
              {selectedBlog.image && (
                <div className="modal-hero-image">
                  <img
                    src={
                      selectedBlog.image.startsWith("data:")
                        ? selectedBlog.image
                        : `http://localhost:8000/${selectedBlog.image}`
                    }
                    alt={selectedBlog.title}
                  />
                  <div className="modal-hero-gradient"></div>
                </div>
              )}

              <div className="modal-hero-content">
                <h1 className="modal-title">{selectedBlog.title}</h1>
                <div className="modal-meta">
                  <span className="modal-badge">Artículo</span>
                  <span className="modal-date">Publicado recientemente</span>
                </div>
                <p className="modal-description">{selectedBlog.description}</p>


              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
