'use client';


import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const URI = "http://localhost:8000/blogs/";

// Definimos tipo para los parámetros de la ruta
interface RouteParams {
  id: string;
}

const CompEditBlog: React.FC = () => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [image, setImage] = useState<File | null>(null);

  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const getBlogById = async () => {
      try {
        const res = await axios.get(`${URI}${id}`);
        setTitle(res.data.title);
        setDescription(res.data.description);
        // Nota: No mostramos la imagen existente (BLOB no se puede renderizar directamente sin procesar)
      } catch (err) {
        console.error("Error al obtener el blog:", err);
      }
    };

    if (id) getBlogById();
  }, [id]);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
    }
  };

  const updateBlog = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    if (image) formData.append("image", image);

    try {
      await axios.put(`${URI}${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      navigate("/conocenos");
    } catch (err) {
      console.error("Error al actualizar el blog:", err);
    }
  };

  return (
    <div className="container">
      <h3>Editar Blog</h3>
      <form onSubmit={updateBlog} encType="multipart/form-data">
        <div className="mb-3">
          <label className="form-label">Título</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Descripción</label>
          <textarea
            className="form-control"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>

        <div className="mb-3">
          <label className="form-label">Imagen nueva (opcional)</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="form-control"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Actualizar
        </button>
      </form>
    </div>
  );
};

export default CompEditBlog;
