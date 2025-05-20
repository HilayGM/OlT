'use client';


import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
const URI = "http://localhost:8000/blogs/";

interface Blog {
  id: number;
  title: string;
  description: string;
  image?: string; // base64 string o URL si se expone desde backend
}

const CompShowBlogs: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    getBlogs();
  }, []);

  const getBlogs = async () => {
    try {
      const res = await axios.get<Blog[]>(URI);
      setBlogs(res.data);
    } catch (error) {
      console.error("Error al obtener blogs:", error);
    }
  };

  const deleteBlog = async (id: number) => {
    try {
      await axios.delete(`${URI}${id}`);
      getBlogs();
    } catch (error) {
      console.error("Error al eliminar blog:", error);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Link href="/create" className="btn btn-primary mt-2 mb-2">
            <i className="fas fa-plus"></i> Crear
          </Link>
          <table className="table">
            <thead className="table-primary">
              <tr>
                <th>Título</th>
                <th>Descripción</th>
                <th>Imagen</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {blogs.map((blog) => (
                <tr key={blog.id}>
                  <td>{blog.title}</td>
                  <td>{blog.description}</td>
                  <td>
                    {blog.image ? (
                      <img
                        src={blog.image}
                        alt="Blog"
                        style={{ width: "100px", height: "auto" }}
                      />
                    ) : (
                      "Sin imagen"
                    )}
                  </td>
                  <td>
                    <Link href={`/edit/${blog.id}`} className="btn btn-info me-2">
                      <i className="fas fa-edit"></i>
                    </Link>
                    <button
                      onClick={() => deleteBlog(blog.id)}
                      className="btn btn-danger"
                    >
                      <i className="fas fa-trash-alt"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CompShowBlogs;
