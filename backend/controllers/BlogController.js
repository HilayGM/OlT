//importar el modelo de blog
import BlogModel from "../models/BlogModel.js";

//metodos para crear el crud 

export const getAllBlogs = async (req, res) => {
    try {
        const blogs = await BlogModel.findAll();
        res.json(blogs);
    } catch (error) {
        res.json({ message: error.message });
    }
}

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