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
  category?: string
  date?: string
}

export default function PublicBlogList() {
  const [blogs, setBlogs] = useState<Blog[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null)
  const [categories, setCategories] = useState<string[]>([])
  const [activeCategory, setActiveCategory] = useState<string>("Todos")
  const [searchTerm, setSearchTerm] = useState<string>("")

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get("http://localhost:8000/blogs")
        setBlogs(res.data)

        // Extraer categorías únicas de los blogs
        const uniqueCategories = [
          "Todos",
          ...Array.from(
            new Set(
              res.data
                .map((blog: Blog) => blog.category)
                .filter((cat: string | undefined): cat is string => typeof cat === "string" && Boolean(cat))
            )
          ) as string[],
        ]
        setCategories(uniqueCategories)
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

  // Filtrar blogs por categoría y término de búsqueda
  const filteredBlogs = blogs.filter((blog) => {
    const matchesCategory = activeCategory === "Todos" || blog.category === activeCategory
    const matchesSearch =
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  if (loading) {
    return (
      <div className="page-wrapper">
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
        <header className="blog-header">
          <h1 className="blog-title">Blog Logístico de México</h1>
          <p className="blog-subtitle">Soluciones y Casos de Éxito OLT</p>
          <p className="blog-subtitle">Descubre las últimas publicaciones y mantente al día con nuestro contenido</p>
        </header>

        <div className="blog-filters">
          <div className="category-filters">
            {categories.map((category) => (
              <button
                key={category}
                className={`category-filter ${activeCategory === category ? "active" : ""}`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="search-container">
            <input
              type="text"
              placeholder="Buscar artículos..."
              className="search-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="search-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>
          </div>
        </div>

        {filteredBlogs.length === 0 ? (
          <div className="empty-state">
            <h3>No hay publicaciones disponibles</h3>
            <p>No se encontraron artículos que coincidan con tu búsqueda</p>
            <button
              className="reset-button"
              onClick={() => {
                setActiveCategory("Todos")
                setSearchTerm("")
              }}
            >
              Restablecer filtros
            </button>
          </div>
        ) : (
          <div className="blog-grid">
            {filteredBlogs.map((blog) => (
              <article key={blog.id} className="blog-card" onClick={() => openModal(blog)}>
                {blog.image && (
                  <div className="blog-card-image">
                    <img
                      src={blog.image.startsWith("data:") ? blog.image : `http://localhost:8000/${blog.image}`}
                      alt={blog.title}
                      loading="lazy"
                    />
                    {blog.category && <span className="blog-category-badge">{blog.category}</span>}
                  </div>
                )}

                <div className="blog-card-content">
                  <h2 className="blog-card-title">{blog.title}</h2>
                  <p className="blog-card-description">{blog.description}</p>

                  <div className="blog-card-footer">
                    <div className="blog-card-meta">
                      <span className="blog-date">{blog.date || "Publicado recientemente"}</span>
                    </div>
                    <button className="read-more-btn">
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

        <div className="pagination">
          <button className="pagination-btn" disabled>
            Anterior
          </button>
          <div className="pagination-numbers">
            <button className="pagination-number active">1</button>
            <button className="pagination-number">2</button>
            <button className="pagination-number">3</button>
          </div>
          <button className="pagination-btn">Siguiente</button>
        </div>
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
                  {selectedBlog.category && <span className="modal-badge">{selectedBlog.category}</span>}
                  <span className="modal-date">{selectedBlog.date || "Publicado recientemente"}</span>
                </div>
                <p className="modal-description">{selectedBlog.description}</p>

                <div className="modal-actions">
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
