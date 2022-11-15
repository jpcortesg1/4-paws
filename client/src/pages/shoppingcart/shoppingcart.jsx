import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaCss3Alt } from "react-icons/fa";
import "./shoppingcart.css";
import { BsInstagram, BsWhatsapp } from 'react-icons/bs';
import { GoMail } from 'react-icons/go';
import Topbar from "../../components/topbar/Topbar";

export default function ShoppingCart() {
    const navigate = useNavigate();

  const navigation = (url) => {
      navigate(url);
    };
  return (
<div>
    <Topbar title="Martin" />
    
    <div className="CarritoProductos">
        <div className="CarritoProductos__producto">
            <div className="CarritoProductos_producto_imagen">
                <img onClick={() => navigation('/product4')} src="https://iconopet.com/sitio/wp-content/uploads/2015/10/035585111315-scaled.jpg" alt="" />
                <h3 onClick={() => navigation('/product4')}>Kong</h3>
            </div>
            <div className="CarritoProductos_producto_cantidad">
                <h4>Cantidad:  1</h4>
            </div>
            <div className="CarritoProductos_producto_precio">
                <h3>56.000</h3>
            </div>
        </div>
        <div className="linea"></div>
        <div className="CarritoProductos__producto">
            <div className="CarritoProductos_producto_imagen">
                <img onClick={() => navigation('/product4')} src="https://i0.wp.com/monamipetshop.com/wp-content/uploads/2021/05/Tazones-RUFO-min.png?fit=800%2C800&ssl=1" alt="" />
                <h3 onClick={() => navigation('/product4')}>Comederos elevados</h3>
            </div>
            <div className="CarritoProductos_producto_cantidad">
                <h4>Cantidad:  2</h4>
            </div>
            <div className="CarritoProductos_producto_precio">
                <h3>80.000</h3>
            </div>
        </div>
        <div className="linea"></div>
        <div className="PrecioTotal">
            <h3>Total: 136.000</h3>
        </div>
        <div className="ComprarAhora">
            <button className="boton boton--primario">Comprar ahora</button>
        </div>
    </div>



    <footer className="footer">
        <div className="contenedor">
          <div className="barra">
            <a className="logo" href="index.html">
              <h1 className="logo__nombre no-margin centrar-texto">
                4<span className="logo__bold">Paws</span>
              </h1>
            </a>
            <nav className="navegacion">
              <a href="nosotros.html" className="navegacion__enlace">
                Nosotros
              </a>

                <a href="whatsapp.com" className="navegacion__enlace"> <BsWhatsapp/> 3105545256</a>
                <a href="gmail.com" className="navegacion__enlace"><GoMail/> 4paws@contacto.com.co</a>
                <a href="instagram.com" className="navegacion__enlace"><BsInstagram /> 4Paws</a>

            </nav>
          </div>
        </div>
      </footer>
  </div>
  );
  }