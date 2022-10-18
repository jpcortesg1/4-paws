import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaCss3Alt } from "react-icons/fa";
import "./product.css";
import Topbar from "../../components/topbar/Topbar";
import { BsInstagram, BsWhatsapp } from 'react-icons/bs';
import { GoMail } from 'react-icons/go';


export default function Products() {
  return (
<div>
  <Topbar title="Martin" />

  <div className="Productoprincipal">
    <div className="Productoimagen">
        <img src="https://i0.wp.com/monamipetshop.com/wp-content/uploads/2021/05/Tazones-RUFO-min.png?fit=800%2C800&ssl=1" alt="" />
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
        
  <footer className="footer">
    <div className="contenedor">
      <div className="barra">
        <a className="logo" href="index.html">
          <h1 className="logo__nombre no-margin centrar-texto">
            4<span className="logo__bold">Paws</span>
          </h1>
        </a>
          <nav className="navegacion">
            <a href="nosotros.html" className="navegacion__enlace">Nosotros</a>
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
