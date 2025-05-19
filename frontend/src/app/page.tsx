'use client';


import Image from "next/image";
import styles from "./page.module.css";
import NavbarComponent from "../../components/navbar/navbar";
import FooterComponent from "../../components/footer/footer";
import PrincipalPage from "./Home/page";
import Head from "next/head";

export default function Home() {
  return(
  <div>
    <Head>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
    integrity="sha512-xX2Wjj6AA0IVpUJ6zGZUg19U7tOLqXb0nEomGpD6zvZq7gS8K5TLNwKRMuvFkBPLyU4VnnttLGe1qc9WZixI1A=="
    crossOrigin="anonymous"
    referrerPolicy="no-referrer"
/>
</Head>

    <PrincipalPage/>
  </div>)
}
