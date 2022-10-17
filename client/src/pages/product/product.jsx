import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaCss3Alt } from "react-icons/fa";
import "./product.css";
import Topbar from "../../components/topbar/Topbar";

export default function Products() {
  return (
<div>
    <Topbar title="Martin" />

    <div className="Productoprincipal">
        <div className="Productoimagen">
            <img src="https://entrecaninos.co/sitio/wp-content/uploads/2022/04/ENTRECANINOS-2.png" alt="" />
        </div>
    
        <div className="ProductoInformacion">
            <div className="ProductoTittulo">
                <h4 >Entrecaninos</h4>
            </div>
            <div className="ProductoPrecio">
                <h4 >Precio: $ 100.000</h4>
            </div>
            <div className="ProductoComprar">
                <button className="boton boton--primario">Comprar</button>
            </div>
            <div className="ProductoCarrito">
                <button className="boton boton--primario">Agregar al carrito</button>   
            </div>
        </div>
    </div>
    <div className="Productosecundario">
        <div className="ProductoPublicacionesVendedor">

        </div>
        <div className="ProductoArticulosSimilares">

        </div>
    </div>
    <footer class="footer">
        <div class="contenedor">
            <div class="barra">
                <a class="logo" href="index.html">
                    <h1 class="logo__nombre no-margin centrar-texto">4<span class="logo__bold">Paws</span></h1>
                </a>
                <nav class="navegacion">
                    <a href="nosotros.html" class="navegacion__enlace">Nosotros</a>
                        <a  href="contacto.html" class="navegacion__enlace ">3105545256</a>
                        <a href="contacto.html" class="navegacion__enlace">4paws@contacto.com.co</a>
                        <a href="contacto.html" class="navegacion__enlace fa fa-instagram">4Paws</a>

                </nav>
            </div>
        </div>
    </footer>
  </div>
  );
  }
