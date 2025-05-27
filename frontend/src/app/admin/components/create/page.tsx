"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { useBlogs } from "../../hooks/useBlog"
import "./create-blog.css"

export default function CreateBlogPage() {
  const [title, setTitle] = useState<string>("")
  const [description, setDescription] = useState<string>("")
  const [image, setImage] = useState<File | null>(null)
  const [loading, setLoading] = useState<boolean>(false)

  const router = useRouter()
  const { createBlog } = useBlogs()

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setImage(e.target.files[0])
    }
  }

  const store = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!image) {
      alert("Por favor selecciona una imagen.")
      return
    }

    setLoading(true)

    const formData = new FormData()
    formData.append("title", title)
    formData.append("description", description)
    formData.append("image", image)

    try {
      await createBlog(formData)
      alert("Blog creado exitosamente")
      router.push("/admin")
    } catch (error) {
      console.error("Error al crear el blog:", error)
      alert("Error al crear el blog")
    } finally {
      setLoading(false)
    }
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
          <span className="breadcrumb-current">Crear</span>
        </div>

        <h3 className="blog-title">Crear Nuevo Blog</h3>

        <form onSubmit={store} className="blog-form" encType="multipart/form-data">
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
            <label className="form-label">Imagen</label>
            <input
              type="file"
              accept="image/*"
              className="form-file"
              onChange={handleImageChange}
              required
              disabled={loading}
            />
            {image && <small className="file-info">Archivo seleccionado: {image.name}</small>}
          </div>

          <div className="form-actions">
            <button type="submit" className="btn btn-primary" disabled={loading}>
              {loading ? (
                <>
                  <span className="spinner"></span>
                  Creando...
                </>
              ) : (
                "💾 Crear Blog"
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
