"use client"

import type React from "react"
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
  const [title, setTitle] = useState<string>("")
  const [description, setDescription] = useState<string>("")
  const [image, setImage] = useState<File | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [loadingBlog, setLoadingBlog] = useState<boolean>(false)

  const router = useRouter()
  const searchParams = useSearchParams()
  const blogId = searchParams.get("id")
  const { blogs, getBlogById, updateBlog } = useBlogs()

  useEffect(() => {
    if (blogId) {
      loadBlogData(Number.parseInt(blogId))
    }
  }, [blogId])

  const loadBlogData = async (id: number) => {
    try {
      setLoadingBlog(true)
      const blog = await getBlogById(id)
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

  const selectBlogForEdit = (blog: Blog) => {
    router.push(`/admin/blogs/edit?id=${blog.id}`)
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setImage(e.target.files[0])
    }
  }

  const handleUpdateBlog = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!selectedBlog) return

    setLoading(true)

    const formData = new FormData()
    formData.append("title", title)
    formData.append("description", description)
    if (image) {
      formData.append("image", image)
    }

    try {
      await updateBlog(selectedBlog.id, formData)
      alert("Blog actualizado exitosamente")
      router.push("/admin/blogs")
    } catch (err) {
      console.error("Error al actualizar el blog:", err)
      alert("Error al actualizar el blog")
    } finally {
      setLoading(false)
    }
  }

  if (loadingBlog) {
    return (
      <div className="blog-container">
        <div className="blog-content">
          <div className="loading-state">
            <span className="spinner"></span>
            <p>Cargando blog...</p>
          </div>
        </div>
      </div>
    )
  }

  if (!selectedBlog && !blogId) {
    return (
      <div className="blog-container">
        <div className="blog-content">
          <div className="breadcrumb">
            <Link href="/admin" className="breadcrumb-link">
              Admin
            </Link>
            <span className="breadcrumb-separator">›</span>
            <Link href="/admin/blogs" className="breadcrumb-link">
              Blogs
            </Link>
            <span className="breadcrumb-separator">›</span>
            <span className="breadcrumb-current">Editar</span>
          </div>

          <h3 className="blog-title">Seleccionar Blog para Editar</h3>

          {blogs.length === 0 ? (
            <div className="empty-state">
              <p>No hay blogs disponibles para editar.</p>
              <Link href="/admin/blogs/create" className="btn btn-primary">
                📝 Crear primer blog
              </Link>
            </div>
          ) : (
            <div className="blogs-grid">
              {blogs.map((blog) => (
                <div key={blog.id} className="blog-card">
                  <div className="blog-card-content">
                    <h4 className="blog-card-title">{blog.title}</h4>
                    <p className="blog-card-description">
                      {blog.description.length > 100 ? `${blog.description.substring(0, 100)}...` : blog.description}
                    </p>
                    {blog.image && (
                      <div className="blog-card-image">
                        <img src={blog.image || "/placeholder.svg"} alt={blog.title} />
                      </div>
                    )}
                  </div>
                  <div className="blog-card-actions">
                    <button onClick={() => selectBlogForEdit(blog)} className="btn btn-primary">
                      ✏️ Editar este blog
                    </button>
                  </div>
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
          <Link href="/admin" className="breadcrumb-link">
            Admin
          </Link>
          <span className="breadcrumb-separator">›</span>
          <Link href="/admin/blogs" className="breadcrumb-link">
            Blogs
          </Link>
          <span className="breadcrumb-separator">›</span>
          <span className="breadcrumb-current">Editar: {selectedBlog?.title}</span>
        </div>

        <h3 className="blog-title">Editar Blog</h3>

        <form onSubmit={handleUpdateBlog} className="blog-form" encType="multipart/form-data">
          <div className="form-group">
            <label className="form-label">Título</label>
            <input
              type="text"
              className="form-input"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              disabled={loading}
              placeholder="Ingresa el título del blog"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Descripción</label>
            <textarea
              className="form-textarea"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={5}
              required
              disabled={loading}
              placeholder="Describe el contenido del blog"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Imagen nueva (opcional)</label>
            <input type="file" accept="image/*" className="form-file" onChange={handleImageChange} disabled={loading} />
            {image && <small className="file-info">Archivo seleccionado: {image.name}</small>}
          </div>

          <div className="form-actions">
            <button type="submit" className="btn btn-primary" disabled={loading}>
              {loading ? (
                <>
                  <span className="spinner"></span>
                  Actualizando...
                </>
              ) : (
                "💾 Actualizar Blog"
              )}
            </button>

            <Link href="/admin/blogs" className="btn btn-secondary">
              ✕ Cancelar
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}
