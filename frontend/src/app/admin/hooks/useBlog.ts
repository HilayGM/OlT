
import { useState, useEffect, useCallback } from "react"
import axios from "axios"

const URI = "http://localhost:8000/blogs/"

interface Blog {
  id: number
  title: string
  description: string
  image?: string // En base64
  createdAt?: string
  updatedAt?: string
}

// 🔄 Convierte archivo a base64
const fileToBase64 = (file: unknown): Promise<string> => {
  return new Promise((resolve, reject) => {
    if (!(file instanceof Blob)) {
      reject(new Error("El archivo no es un Blob o File válido."))
      return
    }

    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result as string)
    reader.onerror = (error) => reject(error)
  })
}

export function useBlogs() {
  const [blogs, setBlogs] = useState<Blog[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  const getBlogs = useCallback(async () => {
    try {
      setLoading(true)
      setError(null)

      const res = await axios.get<Blog[]>(URI)
      setBlogs(res.data)
    } catch (error) {
      console.error("❌ Error al obtener blogs:", error)
      setError("Error al cargar los blogs")
    } finally {
      setLoading(false)
    }
  }, [])

const createBlog = useCallback(
  async (form: { title: string; description: string; image: File }) => {
    try {
      console.log("📝 Subiendo blog...")

      // Validar campos básicos
      if (!form.title || !form.description || !form.image) {
        throw new Error("Todos los campos son obligatorios.")
      }

      // Convertir la imagen a base64
      const base64Image = await fileToBase64(form.image)
      const imageBase64 = base64Image.split(",")[1] // Remueve el prefijo "data:image/jpeg;base64,"

      // Enviar solicitud al backend
      const response = await axios.post(URI, {
        title: form.title,
        description: form.description,
        image: imageBase64,
      })

      console.log("✅ Blog creado:", response.data)

      // Actualiza la lista de blogs
      await getBlogs()

      return response.data
    } catch (error: any) {
      // Mostrar mensaje de error detallado
      const serverMessage = error?.response?.data?.message || error.message
      console.error("❌ Error al crear blog:", serverMessage)
      throw new Error(serverMessage)
    }
  },
  [getBlogs]
)


  const updateBlog = useCallback(
    async (
      id: number,
      form: { title: string; description: string; image?: File }
    ) => {
      try {
        let imageBase64: string | undefined

        if (form.image) {
          const base64Image = await fileToBase64(form.image)
          imageBase64 = base64Image.split(",")[1]
        }

        const response = await axios.put(`${URI}${id}`, {
          title: form.title,
          description: form.description,
          image: imageBase64,
        })

        console.log("✅ Blog actualizado:", response.data)
        await getBlogs()
        return response.data
      } catch (error) {
        console.error("❌ Error al actualizar blog:", error)
        throw error
      }
    },
    [getBlogs]
  )

  const deleteBlog = useCallback(async (id: number) => {
    try {
      await axios.delete(`${URI}${id}`)
      setBlogs((prev) => prev.filter((blog) => blog.id !== id))
    } catch (error) {
      console.error("❌ Error al eliminar blog:", error)
      throw error
    }
  }, [])

  const getBlogById = useCallback(async (id: number) => {
    try {
      const response = await axios.get(`${URI}${id}`)
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
