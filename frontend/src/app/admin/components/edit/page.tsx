"use client"

import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import Link from "next/link"
import { useBlogs } from "../../hooks/useBlog"
import "./edit-blog.css"

interface Blog {
  id: number
  title: string
  description: string
  image?: string
}

export default function EditBlogPage() {
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null)
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [image, setImage] = useState<File | null>(null)
  const [loading, setLoading] = useState(false)
  const [loadingBlog, setLoadingBlog] = useState(true)

  const router = useRouter()
  const searchParams = useSearchParams()
  const blogId = searchParams.get("id")
  const { blogs, getBlogById, updateBlog } = useBlogs()

  useEffect(() => {
    const loadBlogData = async () => {
      if (!blogId) {
        setLoadingBlog(false)
        return
      }

      try {
        const blog = await getBlogById(Number(blogId))
        setSelectedBlog(blog)
        setTitle(blog.title)
        setDescription(blog.description)
      } catch (error) {
        console.error("Error al cargar el blog:", error)
        alert("Error al cargar el blog")
        router.push("/admin/blogs")
      } finally {
        setLoadingBlog(false)
      }
    }

    loadBlogData()
  }, [blogId, getBlogById, router])

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) setImage(file)
  }

  const handleUpdateBlog = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!selectedBlog) return

    setLoading(true)

    const formData = new FormData()
    formData.append("title", title)
    formData.append("description", description)
    if (image) formData.append("image", image)

    try {
      await updateBlog(selectedBlog.id, {
        title,
        description,
        image: image ?? undefined,
      })
      alert("✅ Blog actualizado exitosamente")
      router.push("/admin")
    } catch (error) {
      console.error("❌ Error al actualizar el blog:", error)
      alert("❌ Error al actualizar el blog")
    } finally {
      setLoading(false)
    }
  }

  if (loadingBlog) {
    return (
      <div className="blog-container">
        <div className="blog-content">
          <p>Cargando blog...</p>
        </div>
      </div>
    )
  }

  if (!selectedBlog && !blogId) {
    return (
      <div className="blog-container">
        <div className="blog-content">
          <h3 className="blog-title">Seleccionar Blog para Editar</h3>
          {blogs.length === 0 ? (
            <div className="empty-state">
              <p>No hay blogs disponibles.</p>
              <Link href="/admin/blogs/create" className="btn btn-primary">
                📝 Crear nuevo blog
              </Link>
            </div>
          ) : (
            <div className="blogs-grid">
              {blogs.map((blog) => (
                <div key={blog.id} className="blog-card">
                  <h4>{blog.title}</h4>
                  <p>{blog.description.slice(0, 100)}...</p>
                  {blog.image && <img src={blog.image} alt={blog.title} />}
                  <button onClick={() => router.push(`/admin/blogs/edit?id=${blog.id}`)}>
                    ✏️ Editar
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    )
  }

  return (
    <div className="blog-container">
      <div className="blog-content">
        <div className="breadcrumb">
          <span className="breadcrumb-current">Editar: {selectedBlog?.title}</span>
        </div>

        <h3 className="blog-title">Editar Blog</h3>

        <form onSubmit={handleUpdateBlog} className="blog-form" encType="multipart/form-data">
          <div className="form-group">
            <label className="form-label">Título</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="form-input"
              disabled={loading}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Descripción</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="form-textarea"
              rows={5}
              disabled={loading}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Imagen nueva (opcional)</label>
            <input type="file" accept="image/*" onChange={handleImageChange} className="form-file" disabled={loading} />
            {image && <small className="file-info">Archivo seleccionado: {image.name}</small>}
          </div>

          <div className="form-actions">
            <button type="submit" className="btn btn-primary" disabled={loading}>
              {loading ? "Actualizando..." : "💾 Actualizar Blog"}
            </button>
            <Link href="/admin" className="btn btn-secondary">✕ Cancelar</Link>
          </div>
        </form>
      </div>
    </div>
  )
}
