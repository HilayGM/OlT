"use client"

import { useState } from "react"
import { useBlogs } from "@/app/admin/hooks/useBlog"
import Link from "next/link"
import "./create-blog.css"

export default function CreateBlogPage() {
  const { createBlog } = useBlogs()

  const [form, setForm] = useState({
    title: "",
    description: "",
    image: null as File | null,
    imagePreview: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      if (file.size > 15 * 1024 * 1024) {
        alert("La imagen no puede superar los 15MB.")
        return
      }

      const reader = new FileReader()
      reader.onloadend = () => {
        setForm((prev) => ({
          ...prev,
          image: file,
          imagePreview: reader.result as string,
        }))
      }
      reader.readAsDataURL(file)
    }
  }

  const store = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.image) {
      alert("Por favor selecciona una imagen.")
      return
    }

    try {
      await createBlog({
        title: form.title,
        description: form.description,
        image: form.image,
      })

      alert("✅ Blog creado con éxito")
    } catch (error) {
      console.error("❌ Error al crear el blog:", error)
      alert("❌ Error al crear el blog")
    }
  }

  return (
    <div className="create-blog-container">
      <h1>📝 Crear Nuevo Blog</h1>

      <form onSubmit={store} className="create-blog-form">
        <div className="form-group">
          <label>Título</label>
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Descripción</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            required
            rows={4}
          />
        </div>

        <div className="form-group">
          <label>Imagen</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleChangeImage}
            required
          />
          {form.imagePreview && (
            <img
              src={form.imagePreview}
              alt="Vista previa"
              className="image-preview"
            />
          )}
        </div>

        <button type="submit" className="submit-button">Crear Blog</button>
      </form>

      <div className="back-link">
        <Link href="/admin">← Volver a la lista</Link>
      </div>
    </div>
  )
}
