'use client';


import Image from "next/image";
import styles from "./page.module.css";
import NavbarComponent from "../../components/navbar/navbar";
import FooterComponent from "../../components/footer/footer";
import PrincipalPage from "./Home/page";

export default function Home() {
  return(
  <div>
    <NavbarComponent/>
    <PrincipalPage/>
    <FooterComponent/>
  </div>)
}
