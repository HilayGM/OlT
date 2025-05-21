
// Importamos los componentes
import CompShowBlogs from "../admin/components/ShowBlog";
import CompCreateBlog from "../admin/components/CreateBlog";
import CompEditBlog from "../admin/components/EditBlog";
import Router from "next/router";


function admin() {
  return (
    <>
      <CompShowBlogs />;
      <CompEditBlog/>
    </>
  );
}
export default admin;
