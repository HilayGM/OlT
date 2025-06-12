"use client"
import type React from "react"
import { useState } from "react"
import "./conocenos.css"
import "@fortawesome/fontawesome-free/css/all.min.css"
import Head from "next/head"
import FooterComponent from "../../../components/footer/footer"
import NavbarComponent from "../../../components/navbar/navbar"

// Datos de cobertura por estado
const coberturaData = [
  {
    state: "AGUASCALIENTES",
    cities: [
      {
        name: "Aguascalientes",
        entrega_ocurre_oficina: true,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Centro de arriba el Taray",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Calvillo",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Ciudad Industrial",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Cosío",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Jesús María",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Parque Industrial San Francisco de los Romos",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Parque Industrial del Valle de Aguascalientes",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Pabellón de Arteaga",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Rincón de Romos",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
    ],
  },
  {
    state: "BAJA CALIFORNIA",
    cities: [
      {
        name: "Ensenada",
        entrega_ocurre_oficina: true,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Mexicali",
        entrega_ocurre_oficina: true,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Rosarito",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "San Quintín",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Tecate",
        entrega_ocurre_oficina: true,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Tijuana",
        entrega_ocurre_oficina: true,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
    ],
  },
  {
    state: "BAJA CALIFORNIA SUR",
    cities: [
      {
        name: "Cabo San Lucas",
        entrega_ocurre_oficina: true,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Ciudad Constitución",
        entrega_ocurre_oficina: true,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "La Paz",
        entrega_ocurre_oficina: true,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Loreto",
        entrega_ocurre_oficina: true,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "San José del Cabo",
        entrega_ocurre_oficina: true,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Santa Rosalía",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Todos Santos",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
    ],
  },
  {
    state: "CAMPECHE",
    cities: [
      {
        name: "Campeche",
        entrega_ocurre_oficina: true,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Ciudad del Carmen",
        entrega_ocurre_oficina: true,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Champotón",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
    ],
  },
  {
    state: "CHIAPAS",
    cities: [
      {
        name: "Amatenango",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Arriaga",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Berriozábal",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Chiapa de Corzo",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Comitán de Domínguez",
        entrega_ocurre_oficina: true,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Cintalapa",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Las Margaritas",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Ocozocoautla de Espinosa",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "San Cristóbal de las Casas",
        entrega_ocurre_oficina: true,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Teopisca",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Tuxtla Gutiérrez",
        entrega_ocurre_oficina: true,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Tapachula",
        entrega_ocurre_oficina: true,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Tonalá",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
    ],
  },
  {
    state: "CHIHUAHUA",
    cities: [
      {
        name: "Camargo",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Chihuahua",
        entrega_ocurre_oficina: true,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Cuauhtémoc",
        entrega_ocurre_oficina: true,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Delicias",
        entrega_ocurre_oficina: true,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Hidalgo del Parral",
        entrega_ocurre_oficina: true,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Jiménez",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Juárez",
        entrega_ocurre_oficina: true,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Meoqui",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Nuevo Casas Grandes",
        entrega_ocurre_oficina: true,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Saucillo",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
    ],
  },
  {
    state: "CIUDAD DE MEXICO",
    cities: [
      {
        name: "Álvaro Obregón",
        entrega_ocurre_oficina: true,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Azcapotzalco",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Benito Juárez",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Coyoacán",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Cuajimalpa",
        entrega_ocurre_oficina: true,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Cuauhtémoc",
        entrega_ocurre_oficina: true,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Gustavo A. Madero",
        entrega_ocurre_oficina: true,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Iztacalco",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Iztapalapa",
        entrega_ocurre_oficina: true,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Magdalena Contreras",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Miguel Hidalgo",
        entrega_ocurre_oficina: true,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Milpa Alta",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Tláhuac",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Tlalpan",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Venustiano Carranza",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Xochimilco",
        entrega_ocurre_oficina: true,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
    ],
  },
  {
    state: "COAHUILA",
    cities: [
      {
        name: "Acuña",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Arteaga",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Bella Unión",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Derramadero",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Frontera",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Francisco I. Madero",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "La Angostura",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "La Aurora",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Matamoros",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Monclova",
        entrega_ocurre_oficina: true,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Piedras Negras",
        entrega_ocurre_oficina: true,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Ramos Arizpe",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Saltillo",
        entrega_ocurre_oficina: true,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "San Pedro de las Colonias",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Torreón",
        entrega_ocurre_oficina: true,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
    ],
  },
  {
    state: "COLIMA",
    cities: [
      {
        name: "Campos",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Colima",
        entrega_ocurre_oficina: true,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Cuauhtémoc",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "El Colomo",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Manzanillo",
        entrega_ocurre_oficina: true,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Salagua",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Santiago",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Tecomán",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Villa de Álvarez",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
    ],
  },
  {
    state: "DURANGO",
    cities: [
      {
        name: "Canatlán",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Ciudad Lerdo",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Durango",
        entrega_ocurre_oficina: true,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "El Salto",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Francisco I. Madero",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Gómez Palacio",
        entrega_ocurre_oficina: true,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Guadalupe Victoria",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Nombre de Dios",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Nuevo Ideal",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Santiago Papasquiaro",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Villa Unión",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Vicente Guerrero",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
    ],
  },
  {
    state: "ESTADO DE MEXICO",
    cities: [
      {
        name: "Acolman",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Almoloya del Río",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Atizapán de Zaragoza",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Atlacomulco",
        entrega_ocurre_oficina: true,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Calimaya",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Capulhuac",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Chalco",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Chicoloapan",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Chimalhuacán",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Chiconcuac",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Coacalco",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Cuautitlán",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Cuautitlán Izcalli",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Ecatepec de Morelos",
        entrega_ocurre_oficina: true,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Huexotla",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Ixtapaluca",
        entrega_ocurre_oficina: true,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Ixtapan de La Sal",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Ixtlahuaca",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Jocotitlán",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Lerma de Villada",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Los Reyes Acaquilpan",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Los Reyes La Paz",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Melchor Ocampo",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Metepec",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Naucalpan de Juárez",
        entrega_ocurre_oficina: true,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Nezahualcóyotl",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Nicolas Romero",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Ocoyoacac",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Pastaje",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "San Antonio La Isla",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "San Martín de Las Pirámides",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "San Mateo Atenco",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "San Mateo Mexicaltzingo",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "San Miguel Zinacantepec",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "San Pedro Totoltepec",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "San Salvador Atenco",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Santiago Tianguistenco",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Santiago Yancuitlalpan",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Tecámac",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Tejupilco",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Tenancingo",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Tenango Del Valle",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Tepexpan",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Tepotzotlán",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Texcoco",
        entrega_ocurre_oficina: true,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Tezoyuca",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Tlalnepantla De Baz",
        entrega_ocurre_oficina: true,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Toluca",
        entrega_ocurre_oficina: true,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Tultepec",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Tultitlán",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Valle De Bravo",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Valle de Chalco Solidaridad",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Villa Guerrero",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Xalatlaco",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Xonacatlán",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Zinacantepec",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
    ],
  },
  {
    state: "GUANAJUATO",
    cities: [
      {
        name: "Abasolo",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Acámbaro",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Aldama",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Apaseo el Alto",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Apaseo el Grande",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Caleras de Amexhe",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Cañada de Caracho",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Celaya",
        entrega_ocurre_oficina: true,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Comonfort",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Cortázar",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Cuerámaro",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Doctor Mora",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Dolores Hidalgo",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "El Nacimiento",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Empalme Escobedo",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Guanajuato",
        entrega_ocurre_oficina: true,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Huanímaro",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Irapuato",
        entrega_ocurre_oficina: true,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Juvetino Rosas",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "La Moncada",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "León",
        entrega_ocurre_oficina: true,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Mexicanos",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Moroleón",
        entrega_ocurre_oficina: true,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Pénjamo",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Pueblo Nuevo",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Purísima del Rincón / Bustos",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Roque",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Salamanca",
        entrega_ocurre_oficina: true,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Salvatierra",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Santa Ana Pacueco",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "San Francisco del Rincón",
        entrega_ocurre_oficina: true,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "San José Agua Azul",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "San José Iturbide",
        entrega_ocurre_oficina: true,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "San Juan de la Vega",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "San Luis de la Paz",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Santiago Maravatío",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "San Miguel de Allende",
        entrega_ocurre_oficina: true,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "San Miguel Actopan",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Sarabia",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Silao",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Tarimoro",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Tenería del Santuario",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Uriangato",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Valle de Santiago",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Villagrán",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Yuriria",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
    ],
  },
  {
    state: "GUERRERO",
    cities: [
      {
        name: "Acapulco",
        entrega_ocurre_oficina: true,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Arcelia",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Buenavista de Cuellar",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Chilpancingo",
        entrega_ocurre_oficina: true,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Ciudad Altamirano",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Iguala",
        entrega_ocurre_oficina: true,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Taxco",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Teloloapan",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Tlapehuala",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Zihuatanejo",
        entrega_ocurre_oficina: true,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
    ],
  },
  {
    state: "HIDALGO",
    cities: [
      {
        name: "Apan",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Atotonilco de Tula",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Ciudad Sahagún",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Cuautepec de Hinojosa",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "El Arenal",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Emiliano Zapata",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Huasca de Ocampo",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Huichapan",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Ixmiquilpan",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Matías Rodríguez",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Mineral de La Reforma",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Mixquiahuala",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Omitlán de Juárez",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Pachuca",
        entrega_ocurre_oficina: true,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Progreso de Obregón",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Real del Monte",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "San José Tepepan",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "San Pedro Huaquilpan",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Santiago Tulantepec",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Tepeapulco",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Tepeji del Río",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Tezontepec de Aldama",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Tizayuca",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Tlanalapa",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Tolcayuca",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Tula de Allende",
        entrega_ocurre_oficina: true,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Tulancingo",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Xochihuehuetlán",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Zapotlán de Juárez",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Zempoala Centro",
        entrega_ocurre_oficina: false,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
    ],
  },
  {
    state: "JALISCO",
    cities: [
      {
        name: "Guadalajara",
        entrega_ocurre_oficina: true,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Atotonilco el Alto",
        entrega_ocurre_oficina: true,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Chapala",
        entrega_ocurre_oficina: true,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Cihuatlán",
        entrega_ocurre_oficina: true,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Ciudad Guzmán",
        entrega_ocurre_oficina: true,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "El Grullo",
        entrega_ocurre_oficina: true,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Jalostotitlán",
        entrega_ocurre_oficina: true,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Jocotepec",
        entrega_ocurre_oficina: true,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "La Barca",
        entrega_ocurre_oficina: true,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Lagos de Moreno",
        entrega_ocurre_oficina: true,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Puerto Vallarta",
        entrega_ocurre_oficina: true,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "San Juan de los Lagos",
        entrega_ocurre_oficina: true,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Tepatitlán de Morelos",
        entrega_ocurre_oficina: true,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Tlaquepaque",
        entrega_ocurre_oficina: true,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Tonalá",
        entrega_ocurre_oficina: true,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
      {
        name: "Zapopan",
        entrega_ocurre_oficina: true,
        entrega_a_domicilio: true,
        recoleccion_a_domicilio: true,
      },
      {
        name: "Zapotlanejo",
        entrega_ocurre_oficina: true,
        recoleccion_a_domicilio: true,
        entrega_a_domicilio: true,
      },
    ],
  },
  // Aquí continuarían todos los demás estados...
]

interface StateDetail {
  state: string
  cities: Array<{
    name: string
    entrega_ocurre_oficina: boolean
    recoleccion_a_domicilio: boolean
    entrega_a_domicilio: boolean
  }>
}

// Componente para una tarjeta de estado individual
interface StateCardProps {
  state: StateDetail
  onStateClick: (state: StateDetail) => void
}

const StateCard: React.FC<StateCardProps> = ({ state, onStateClick }) => {
  const oficinasCount = state.cities.filter((city) => city.entrega_ocurre_oficina).length
  const totalCities = state.cities.length

  return (
    <div className="state-card" onClick={() => onStateClick(state)}>
      <div className="state-card-header">
        <div className="state-icon">
          <i className="fas fa-map-marker-alt"></i>
        </div>
        <h3>{state.state}</h3>
      </div>
      <div className="state-card-content">
        <div className="state-stat">
          <span className="stat-number">{totalCities}</span>
          <span className="stat-label">Ciudades</span>
        </div>
        <div className="state-stat">
          <span className="stat-number">{oficinasCount}</span>
          <span className="stat-label">Oficinas</span>
        </div>
      </div>
      <div className="state-card-footer">
        <span className="view-details">Mas informacion</span>
      </div>
    </div>
  )
}

// Componente para el Modal de estado
interface StateModalProps {
  isOpen: boolean
  state: StateDetail | null
  onClose: () => void
}

const StateModal: React.FC<StateModalProps> = ({ isOpen, state, onClose }) => {
  if (!state) return null

  // Controlador para cerrar el modal cuando se hace clic fuera
  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  const oficinasCount = state.cities.filter((city) => city.entrega_ocurre_oficina).length
  const domicilioCount = state.cities.filter((city) => city.entrega_a_domicilio).length
  const recoleccionCount = state.cities.filter((city) => city.recoleccion_a_domicilio).length

  return (
    <div className={`modal ${isOpen ? "show" : ""}`} onClick={handleOutsideClick}>
      <div className="modal-content">
        <span className="close-modal" onClick={onClose}>
          &times;
        </span>
        <div className="modal-header">
          <div className="modal-icon">
            <i className="fas fa-map-marker-alt"></i>
          </div>
          <h2 className="modal-title">Cobertura en {state.state}</h2>
        </div>
        <div className="modal-body">
          <div className="coverage-summary">
            <div className="summary-item">
              <i className="fas fa-building"></i>
              <span>{oficinasCount} oficinas disponibles</span>
            </div>
            <div className="summary-item">
              <i className="fas fa-home"></i>
              <span>{domicilioCount} ciudades con entrega a domicilio</span>
            </div>
            <div className="summary-item">
              <i className="fas fa-truck"></i>
              <span>{recoleccionCount} ciudades con recolección</span>
            </div>
          </div>

          <h3>Ciudades con cobertura:</h3>
          <div className="cities-grid">
            {state.cities.map((city, index) => (
              <div key={index} className="city-item">
                <div className="city-name">{city.name}</div>
                <div className="city-services">
                  {city.entrega_ocurre_oficina && (
                    <span className="service-badge office">
                      <i className="fas fa-building"></i> Oficina
                    </span>
                  )}
                  {city.entrega_a_domicilio && (
                    <span className="service-badge delivery">
                      <i className="fas fa-home"></i> Entrega
                    </span>
                  )}
                  {city.recoleccion_a_domicilio && (
                    <span className="service-badge pickup">
                      <i className="fas fa-truck"></i> Recolección
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="modal-footer">
          <a href="/cotizador" className="modal-button">
            Solicitar cotización
          </a>
        </div>
      </div>
    </div>
  )
}

function ConocenosPage() {
  const [selectedState, setSelectedState] = useState<StateDetail | null>(null)
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  // Gestiona la apertura del modal
  const handleStateClick = (state: StateDetail) => {
    setSelectedState(state)
    setIsModalOpen(true)
    document.body.style.overflow = "hidden" // Prevenir desplazamiento
  }

  // Cierra el modal
  const handleCloseModal = () => {
    setIsModalOpen(false)
    document.body.style.overflow = "" // Habilitar desplazamiento
  }

  return (
    <>
      <NavbarComponent />
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
          integrity="sha512-xX2Wjj6AA0IVpUJ6zGZUg19U7tOLqXb0nEomGpD6zvZq7gS8K5TLNwKRMuvFkBPLyU4VnnttLGe1qc9WZixI1A=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>

      <section className="hero1">
        <div className="container1">
          <h1>Cobertura</h1>
          <p>
            Somos un operador logístico con más de 10 años de experiencia brindando soluciones de transporte y
            distribución en todo México.
          </p>
        </div>
      </section>

      <section className="about-section">
        <div className="container1">
          <div className="about-grid">
            <div className="about-content">
              <h2>OPERADOR LOGÍSTICO TEHUACÁN</h2>
              <p>
                OLT nace en Tehuacán de la mano de un grupo de profesionales del transporte, con una larga trayectoria
                en el sector y con una clara vocación de servicio al cliente.
              </p>
              <p>
                Este proyecto está fundamentado en la confianza y fidelidad de nuestros clientes, teniendo un
                crecimiento sostenido al desarrollar servicios y alternativas personalizadas que dan soluciones
                eficientes a industrias, comercios y particulares para hacer llegar, recoger y entregar.
              </p>
              <p>
                Nuestro compromiso es brindar un servicio de calidad, seguro y confiable, con tiempos de entrega óptimos
                y tarifas competitivas.
              </p>
            </div>
            <div className="about-image">
              <img
                src="https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80"
                alt="Operador Logístico Tehuacán"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="coverage-section">
        <div className="container1">
          <div className="section-title">
            <h2>Cobertura Nacional OLT</h2>
            <p>
              Empleando alianzas estratégicas con transportes de carga de gran prestigio, ofrecemos a nuestros clientes
              más opciones de envío y mayor cobertura a nivel Nacional.
            </p>
          </div>

          <div className="coverage-grid">
            <div className="coverage-map">
              <img
                src="https://images.unsplash.com/photo-1527525443983-6e60c75fff46?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=500&q=80"
                alt="Mapa de cobertura"
              />
            </div>

            <div className="coverage-info">
              <div className="coverage-stat">
                <div className="stat-icon">
                  <i className="fas fa-truck"></i>
                </div>
                <div className="stat-content">
                  <h3>624 Destinos</h3>
                  <p>Se realiza la recolección y entrega a domicilio de tus paquetes</p>
                </div>
              </div>

              <div className="coverage-stat">
                <div className="stat-icon">
                  <i className="fas fa-building"></i>
                </div>
                <div className="stat-content">
                  <h3>124 Destinos</h3>
                  <p>Puede recoger en las oficinas de paquetería ubicadas en todo el país.</p>
                </div>
              </div>

              <div className="coverage-stat">
                <div className="stat-icon">
                  <i className="fas fa-clock"></i>
                </div>
                <div className="stat-content">
                  <h3>Tiempos de entrega</h3>
                  <p>Optimizados para cada ruta y tipo de servicio.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="states-grid">
            {coberturaData.map((stateData, index) => (
              <StateCard key={index} state={stateData} onStateClick={handleStateClick} />
            ))}
          </div>
        </div>
      </section>

      <section className="mission-section">
        <div className="container1">
          <div className="mission-grid">
            <div className="mission-content">
              <h2>Nuestra Misión y Compromisos</h2>

              <div className="mission-item">
                <h3>
                  <i className="fas fa-bullseye"></i> Nuestra Misión
                </h3>
                <p>
                  Asegurar la calidad del servicio con el manejo adecuado de las mercancías y cumplir con los tiempos de
                  entrega establecidos.
                </p>
              </div>

              <div className="mission-item">
                <h3>
                  <i className="fas fa-handshake"></i> Compromisos con Nuestros Clientes
                </h3>
                <p>
                  En OLT contamos con procedimientos y estándares de calidad muy rigurosos, para asegurar a nuestros
                  clientes la trazabilidad y seguridad total de sus mercancías. Nuestro equipo trabaja de manera activa
                  para solucionar cualquier incidencia que obstaculice la entrega de sus envíos, manteniendo
                  comunicación constante para lograr que llegue la comunicación entre sus distintos puntos de
                  distribución, mejorando día a día la calidad de los procesos y aumentando la rapidez en el servicio.
                </p>
              </div>
            </div>

            <div className="mission-image">
              <img
                src="https://images.unsplash.com/photo-1521791055366-0d553872125f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80"
                alt="Equipo OLT"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container1">
          <h2>¿Necesitas una cotización?</h2>
          <p>
            Si deseas saber el tiempo de entrega de un origen y un punto de entrega distinto, ve a contacto y elige a un
            asesor logístico para recibir toda la información que necesitas.
          </p>
          <a href="/cotizador" className="cta-button">
            Cotiza ahora
          </a>
        </div>
      </section>

      <StateModal isOpen={isModalOpen} state={selectedState} onClose={handleCloseModal} />

      <FooterComponent />
    </>
  )
}

export default ConocenosPage
