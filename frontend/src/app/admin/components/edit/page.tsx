'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import axios from 'axios';

const URI = 'http://137.184.40.168:8000/blogs/';

const CompEditBlog: React.FC = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState<File | null>(null);

  const router = useRouter();
  const params = useParams();
  const id = params?.id as string | undefined; // Param del URL (por ejemplo /edit/[id])

  useEffect(() => {
    const getBlogById = async () => {
      if (!id) return;

      try {
        const res = await axios.get(`${URI}${id}`);
        setTitle(res.data.title);
        setDescription(res.data.description);
      } catch (error) {
        console.error('Error al cargar los datos:', error);
      }
    };

    getBlogById();
  }, [id]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setImage(file);
  };

  const updateBlog = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!id) return;

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    if (image) {
      formData.append('image', image);
    }

    try {
      await axios.put(`${URI}${id}`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      router.push('/conocenos'); // Redirección con Next.js
    } catch (error) {
      console.error('Error al actualizar:', error);
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
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Imagen (opcional)</label>
          <input
            type="file"
            className="form-control"
            accept="image/*"
            onChange={handleImageChange}
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
