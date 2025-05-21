'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import FooterComponent from '../../../components/footer/footer';
import NavbarComponent from '../../../components/navbar/navbar';

interface Blog {
  id: number;
  title: string;
  description: string;
  image: string; // Puede ser una URL o base64
}

export default function PublicBlogList() {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get('http://localhost:8000/blogs');
        setBlogs(res.data);
      } catch (error) {
        console.error('Error al cargar blogs:', error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div>
      <NavbarComponent />
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
      <h2 style={{ textAlign: 'center' }}>Publicaciones</h2>
      {blogs.map((blog) => (
        <div
          key={blog.id}
          style={{
            border: '1px solid #ccc',
            borderRadius: '10px',
            padding: '1rem',
            marginBottom: '1.5rem',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}
        >
          <h3>{blog.title}</h3>
          <p>{blog.description}</p>
          {blog.image && (
            <img
              src={blog.image.startsWith('data:') ? blog.image : `http://localhost:8000/${blog.image}`}
              alt={blog.title}
              style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px', marginTop: '1rem' }}
            />
          )}
        </div>
      ))}
    </div>
      <FooterComponent />
    </div>

  );
}
