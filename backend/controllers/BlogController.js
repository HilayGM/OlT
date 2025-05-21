//importar el modelo de blog
import BlogModel from "../models/BlogModel.js";

//metodos para crear el crud 

// controlador para obtener todos los blogs
import Blog from '../models/BlogModel.js';

export const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.findAll();

    const blogsWithImage = blogs.map(blog => {
      const imageBase64 = blog.image
        ? `data:image/jpeg;base64,${blog.image.toString('base64')}`
        : null;

      return {
        id: blog.id,
        title: blog.title,
        description: blog.description,
        image: imageBase64,
      };
    });

    res.json(blogsWithImage);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener blogs' });
  }
};

export const getBlogById = async (req, res) => {
    try {
        const blog = await BlogModel.findAll({
            where: {
                id: req.params.id
            }
        });
        res.json(blog[0]);
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const createBlog = async (req, res) => {
    try {
        await BlogModel.create(req.body);
        res.json({ message: "Blog Created" });
    } catch (error) {
        res.json({ message: error.message });
    }
}
export const updateBlog = async (req, res) => {
    try {
        await BlogModel.update(req.body, {
            where: {
                id: req.params.id
            }
        });
    } catch (error) {
        res.json({ message: error.message });
    }
}
export const deleteBlog = async (req, res) => {
    try {
        await BlogModel.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({ message: "Blog Deleted" });
    } catch (error) {
        res.json({ message: error.message });
    }
}