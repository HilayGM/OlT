import React from 'react';
import "./Navbar.css"; // Importamos estilos puros
import { FaBars, FaSearch, FaHeart, FaUser } from "react-icons/fa";

function NavbarComponent(){
    return(
        <div>
    <header>
        <div className="container">
            <div className="nav-container">
                <a href="index.html" className="logo">
                    <img src="/logo.jpg" alt="Logo" />
                </a>
                <nav>
                    <ul>
                        <li><a href="index.html" className="active">Inicio</a></li>
                        <li><a href="nosotros.html" >Conócenos</a></li>
                        <li><a href="servicios.html">Servicios</a></li>
                        <li><a href="cotizar.html">Cotizador</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
        </div>
    )

}


export default NavbarComponent;