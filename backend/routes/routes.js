import express from 'express';
import {getAllBlogs, getBlogById, createBlog, updateBlog, deleteBlog} from '../controllers/blogController.js';
const router = express.Router();
// Definimos las rutas para el CRUD de usuarios


router.get('/', getAllBlogs )
router.get('/:id', getBlogById)
router.post('/', createBlog)
router.put('/:id', updateBlog)
router.delete('/:id', deleteBlog)


export default router;
