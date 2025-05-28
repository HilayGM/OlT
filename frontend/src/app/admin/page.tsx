
// Importamos los componentes./components/blogs/page";
import CompShowBlogs from "./components/blogs/page";

import EditBlogPage from "./components/edit/page";

import CompCreateBlog from "./components/create/page"
import FooterComponent from "../../../components/footer/footer";

import Router from "next/router";
import React from 'react';


function admin() {
  return (
    <>
      <CompShowBlogs />;
      
    </>
  );
}
export default admin;
