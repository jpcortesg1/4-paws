import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaCss3Alt } from "react-icons/fa";
import "./product.css";
import Topbar from "../../components/topbar/Topbar";
import { BsInstagram, BsWhatsapp } from 'react-icons/bs';
import { GoMail } from 'react-icons/go';
import {AiFillStar, AiOutlineStar} from 'react-icons/ai';



export default function Product() {

  const navigate = useNavigate();

    const navigation = (url) => {
        navigate(url);
      };
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
      <br />
      <div className="ProductoCalificaiones">
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiOutlineStar />
        <h6>Calificacion</h6>
      </div>
      <br />
      <div className="ProductoPrecio">
        <h4 >Precio: $ 100.000</h4>
      </div>
      <br />
      <div className="ProductoComprar">
        <button className="boton boton--primario">Comprar Ahora</button>
      </div>
      <div className="ProductoCarrito">
        <button className="boton boton--primario">Agregar al carrito</button>   
      </div>
    </div>

    {/* <div className="ProductoPublicacionesVendedor">
      <h4>Otras Publicaciones del vendedor</h4>
      <div className="ContenedorPublicacionesVendedor">
        <img src ="https://iconopImagenPublet.com/sitio/wp-content/uploads/2015/10/035585111315-scaled.jpg" alt="" />
        <h6>Kong</h6>
        <p>Precio: 56.000</p>
      </div>
    </div> */}
  </div>

  <br />
  <div className="ProductoComentarios">

  <div className="ProductoDejarComentario">
      <h4>Dejar Un Comentario</h4>
      <div className="ProductoDejarComentarioFormulario">
        <input type="text" placeholder="Comentario" />
        <button className="BotonComentario boton boton--primario">Enviar</button>
    </div>
    </div>


    <h4>Comentarios</h4>
    <div className="comentario">
      <a><h5>Marco Fernandez</h5></a>
      <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiOutlineStar />
      <p>Es de la calidad que esperaba, la descripcion es precisa. Lo unico es que a mi perro no le gusta morder nada, entonces ni lo voltea a ver :( seguro a un perro normal si le sirve.</p>
    </div>
    <div className="linea"></div>
    <div className="comentario">
      <h5>Carlos Longas</h5>
      <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
      <p>Muy buen experiencia con esta empresa muy comprometidos y responsables. El producto es excelente y me llego super rapido.</p>
    </div>
    <div className="linea"></div>
    <div className="comentario">
      <h5>Mariana Rojas</h5>
      <AiFillStar />
        <AiFillStar />
        <AiOutlineStar />
        <AiOutlineStar />
        <AiOutlineStar />
      <p>Le duró dos días! mi perra es una husky y lo destruyo completamente! pensé que era más resistente, sólo se lo dejaba 10 minutos al día y al primer día ya lo había agrietado.</p>
    </div>
    <div className="linea"></div>
    
</div>

  <div className="ProductoSecundario">
    <div className="ProductoOtros">
      <img onClick={() => navigation("/product2")} src="https://files.rcnradio.com/2021-04/Paseador%20de%20perros.jpg" alt="" />
      <h4 onClick={() => navigation("/product2")} >Jorge Granados</h4>
      <p>Precio: $ 15.000</p>
    </div>
    <div className="ProductoOtros">
      <img onClick={() => navigation("/product3")}  src="https://img.lalr.co/cms/2015/09/08165418/spacanino.jpg" alt="" />
      <h4 onClick={() => navigation("/product3")} >Peluqueria Mascotas Felices</h4>
      <p>Precio: $ 55.000</p>
    </div>
    <div className="ProductoOtros">
      <img onClick={() => navigation("/product4")}  src="https://iconopet.com/sitio/wp-content/uploads/2015/10/035585111315-scaled.jpg" alt="" />
      <h4 onClick={() => navigation("/product4")} >Kong</h4>
      <p>Precio: $ 56.000</p>
    </div>
    <div className="ProductoOtros">
      <img onClick={() => navigation("/product5")}  src="https://i0.wp.com/monamipetshop.com/wp-content/uploads/2021/05/Tazones-RUFO-min.png?fit=800%2C800&ssl=1" alt="" />
      <h4 onClick={() => navigation("/product5")} >Comederos elevados</h4>
      <p>Precio: $ 40.000</p>
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
