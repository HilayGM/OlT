import React from 'react';
import "./Navbar.css"; // Importamos estilos puros
import { FaBars, FaSearch, FaHeart, FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom'; // Importamos Link de react-router-dom para navegación
import Cotizador from '../../src/app/cotizador/page';

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
                        <li><a href="/" >Inicio</a></li>
                        <li><a href="nosotros.html" >Conócenos</a></li>
                        <li><a href="servicios.html">Servicios</a></li>
                        <li><a href="/cotizador">Cotizador</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
        </div>
    )

}


export default NavbarComponent;