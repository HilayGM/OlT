"use client"

import axios from "axios"
import { useState, useEffect } from "react"
import Link from "next/link"
import "./show-blogs.css"



const URI = "http://localhost:8000/blogs/"

interface Blog {
  id: number
  title: string
  description: string
  image?: string
}

export default function ShowBlogsPage() {
  const [blogs, setBlogs] = useState<Blog[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [deleting, setDeleting] = useState<number | null>(null)

  useEffect(() => {
    getBlogs()
  }, [])

  const getBlogs = async () => {
    try {
      setLoading(true)
      const res = await axios.get<Blog[]>(URI)
      setBlogs(res.data)
    } catch (error) {
      console.error("Error al obtener blogs:", error)
      alert("Error al cargar los blogs")
    } finally {
      setLoading(false)
    }
  }

  const deleteBlog = async (id: number, title: string) => {
    const confirmDelete = window.confirm(`¿Estás seguro de que quieres eliminar el blog "${title}"?`)

    if (!confirmDelete) return

    try {
      setDeleting(id)
      await axios.delete(`${URI}${id}`)
      await getBlogs()
      alert("Blog eliminado exitosamente")
    } catch (error) {
      console.error("Error al eliminar blog:", error)
      alert("Error al eliminar el blog")
    } finally {
      setDeleting(null)
    }
  }

  if (loading) {
    return (
      <div className="blogs-container">
        <div className="blogs-content">
          <div className="loading-state">
            <span className="spinner"></span>
            <p>Cargando blogs...</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="blogs-container">
      <div className="blogs-content">
        <div className="blogs-header">
          <h2 className="blogs-title">Gestión de Blogs</h2>
          <Link href="/admin/components/create" className="btn btn-primary">
             Crear Nuevo Blog
          </Link>
        </div>

        {blogs.length === 0 ? (
          <div className="empty-state">
            <div className="empty-icon">📝</div>
            <h3>No hay blogs disponibles</h3>
            <p>Comienza creando tu primer blog para compartir contenido increíble.</p>
            <Link href="" className="btn btn-primary">
              ✨ Crear primer blog
            </Link>
          </div>
        ) : (
          <div className="blogs-table-container">
            <div className="table-responsive">
              <table className="blogs-table">
                <thead>
                  <tr>
                    <th>Título</th>
                    <th>Descripción</th>
                    <th>Imagen</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {blogs.map((blog) => (
                    <tr key={blog.id}>
                      <td>
                        <div className="blog-title-cell">
                          <h4>{blog.title}</h4>
                        </div>
                      </td>
                      <td>
                        <div className="blog-description-cell">
                          <p>
                            {blog.description.length > 100
                              ? `${blog.description.substring(0, 100)}...`
                              : blog.description}
                          </p>
                        </div>
                      </td>
                      <td>
                        <div className="blog-image-cell">
                          {blog.image ? (
                            <img src={blog.image || "/placeholder.svg"} alt={blog.title} className="blog-thumbnail" />
                          ) : (
                            <div className="no-image">Sin imagen</div>
                          )}
                        </div>
                      </td>
                      <td>
                        <div className="blog-actions">
                          <Link href={`/admin/components/edit?id=${blog.id}`} className="btn btn-edit" title="Editar blog">
                            ✏️ Editar
                          </Link>
                          <button
                            onClick={() => deleteBlog(blog.id, blog.title)}
                            className="btn btn-delete"
                            disabled={deleting === blog.id}
                            title="Eliminar blog"
                          >
                            {deleting === blog.id ? (
                              <>
                                <span className="spinner-small"></span>
                                Eliminando...
                              </>
                            ) : (
                              <>🗑️ Eliminar</>
                            )}
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="blogs-summary">
              <p>
                <strong>Total de blogs:</strong> {blogs.length}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
