"use client"

import { useState, useEffect, useCallback } from "react"
import axios from "axios"

const URI = "http://localhost:8000/blogs/"

interface Blog {
  id: number
  title: string
  description: string
  image?: string
  createdAt?: string
  updatedAt?: string
}

export function useBlogs() {
  const [blogs, setBlogs] = useState<Blog[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  const getBlogs = useCallback(async () => {
    try {
      setLoading(true)
      setError(null)
      console.log("🔍 Fetching blogs from API...")

      const res = await axios.get<Blog[]>(URI)
      setBlogs(res.data)
      console.log("✅ Blogs loaded successfully:", res.data.length, "items")
    } catch (error) {
      console.error("❌ Error al obtener blogs:", error)
      setError("Error al cargar los blogs")
    } finally {
      setLoading(false)
    }
  }, [])

  const createBlog = useCallback(
    async (formData: FormData) => {
      try {
        console.log("📝 Creating new blog...")
        const response = await axios.post(URI, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        console.log("✅ Blog created successfully:", response.data)

        // Actualizar la lista local sin hacer otra petición
        await getBlogs()
        return response.data
      } catch (error) {
        console.error("❌ Error al crear blog:", error)
        throw error
      }
    },
    [getBlogs],
  )

  const updateBlog = useCallback(
    async (id: number, formData: FormData) => {
      try {
        console.log(`📝 Updating blog ${id}...`)
        const response = await axios.put(`${URI}${id}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        console.log("✅ Blog updated successfully:", response.data)

        // Actualizar la lista local
        await getBlogs()
        return response.data
      } catch (error) {
        console.error("❌ Error al actualizar blog:", error)
        throw error
      }
    },
    [getBlogs],
  )

  const deleteBlog = useCallback(async (id: number) => {
    try {
      console.log(`🗑️ Deleting blog ${id}...`)
      await axios.delete(`${URI}${id}`)
      console.log("✅ Blog deleted successfully")

      // Actualizar la lista local sin hacer petición
      setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog.id !== id))
    } catch (error) {
      console.error("❌ Error al eliminar blog:", error)
      throw error
    }
  }, [])

  const getBlogById = useCallback(async (id: number) => {
    try {
      console.log(`🔍 Fetching blog ${id}...`)
      const response = await axios.get(`${URI}${id}`)
      console.log("✅ Blog loaded:", response.data)
      return response.data
    } catch (error) {
      console.error("❌ Error al obtener blog:", error)
      throw error
    }
  }, [])

  useEffect(() => {
    getBlogs()
  }, [getBlogs])

  return {
    blogs,
    loading,
    error,
    getBlogs,
    createBlog,
    updateBlog,
    deleteBlog,
    getBlogById,
  }
}
