// importar el modelo
import BlogModel from "../models/BlogModel.js";

// ✅ Obtener todos los blogs con imagen en base64
export const getAllBlogs = async (req, res) => {
  try {
    const blogs = await BlogModel.findAll();

    const blogsWithImage = blogs.map(blog => {
      const imageBase64 = blog.image
        ? `data:image/jpeg;base64,${blog.image.toString('base64')}`
        : null;

      return {
        id: blog.id,
        title: blog.title,
        description: blog.description,
        image: imageBase64,
        createdAt: blog.createdAt,
        updatedAt: blog.updatedAt,
      };
    });

    res.json(blogsWithImage);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener blogs' });
  }
};

// ✅ Obtener un solo blog (con imagen)
export const getBlogById = async (req, res) => {
  try {
    const blog = await BlogModel.findByPk(req.params.id);

    if (!blog) return res.status(404).json({ message: "Blog no encontrado" });

    const imageBase64 = blog.image
      ? `data:image/jpeg;base64,${blog.image.toString("base64")}`
      : null;

    res.json({
      id: blog.id,
      title: blog.title,
      description: blog.description,
      image: imageBase64,
      createdAt: blog.createdAt,
      updatedAt: blog.updatedAt,
    });
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener blog' });
  }
};

// ✅ Crear nuevo blog (con imagen base64 desde frontend)
export const createBlog = async (req, res) => {
  try {
    const { title, description, image } = req.body;

    if (!title || !description || !image) {
      return res.status(400).json({ message: "Faltan datos requeridos" });
    }

    // Convertir imagen base64 a buffer
    const base64Data = image.split(";base64,").pop(); // quitar metadata
    const imageBuffer = Buffer.from(base64Data, "base64");

    await BlogModel.create({
      title,
      description,
      image: imageBuffer,
    });

    res.status(201).json({ message: "Blog creado exitosamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al crear el blog" });
  }
};

// ✅ Actualizar blog
export const updateBlog = async (req, res) => {
  try {
    const { title, description, image } = req.body;

    const blog = await BlogModel.findByPk(req.params.id);
    if (!blog) return res.status(404).json({ message: "Blog no encontrado" });

    const updatedData = { title, description };

    if (image) {
      const base64Data = image.split(";base64,").pop();
      updatedData.image = Buffer.from(base64Data, "base64");
    }

    await blog.update(updatedData);
    res.json({ message: "Blog actualizado correctamente" });
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar el blog" });
  }
};

// ✅ Eliminar blog
export const deleteBlog = async (req, res) => {
  try {
    await BlogModel.destroy({
      where: { id: req.params.id },
    });
    res.json({ message: "Blog eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar el blog" });
  }
};
