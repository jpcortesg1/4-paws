import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaCss3Alt } from "react-icons/fa";
import "./services.css";
import { BsInstagram, BsWhatsapp } from 'react-icons/bs';
import { GoMail } from 'react-icons/go';
import Topbar from "../../components/topbar/Topbar";

export default function Services() {
    const navigate = useNavigate();

  const navigation = (url) => {
      navigate(url);
    };
  return (
<div>
    <Topbar title="Martin" />
    <div className="resultados">
        <h5>Resultados "(20)"</h5>
        <div className="Ordenar">
            <h5>Ordenar por: Destacados</h5>
        </div>
        
    </div>
    <div className="principal">
        <div className="filtros">
            <div className="precio">
                <h4>Precios</h4>
                <a href="">Menores a 20.000</a>
                <a href="">Entre 20.000 y 100.000</a>
                <a href="">Mayores a 100.000</a>
            </div>
            <div className="ubicacion">
                <h4>Ubicacion</h4>
                <a href="">Medellin</a>
                <a href="">Bogota</a>
                <a href="">Cali</a>
                <a href="">Bucaramanga</a>
            </div>
            <div className="">

            </div>
        </div>

        <div className="productos">
            <div className="producto">
                <img onClick={() => navigation("/product")} src="https://entrecaninos.co/sitio/wp-content/uploads/2022/04/ENTRECANINOS-2.png" alt="" />
                <div>
                    <h3 onClick={() => navigation("/product")}>Entrecaninos</h3>
                    <p>Guarderia canina ubicada en el aeropuerto internacional jose
                maria cordova con diferentes paquetes posibles para dejar a tu
                mascota en las mejores manos</p>
                </div>
                <div className="precio-producto">
                    <h5>40.000 dia</h5>
                </div>
            </div>
            <div className="linea"></div>
            <div className="producto">
                <img onClick={() => navigation("/product2")} src="https://files.rcnradio.com/2021-04/Paseador%20de%20perros.jpg" alt="" />
                <div>
                    <h3 onClick={() => navigation("/product2")}>Jorge Granados</h3>
                    <p> Paseador canino con mas de 15 a??os de expereincia. Tu perro
                podra experimentar nuevas experiencias y tener una excelente
                actividad fisica con mis servicios. Tengo diferentes servicios y
                tarifas que se adaptan a todas las personas. Contactame para mas
                informacion</p>
                </div>
                <div className="precio-producto">
                    <h5>$15.000 paseo</h5>
                </div>
            </div>
            <div className="linea"></div>

            <div className="producto">
                <img onClick={() => navigation("/product3")} src="https://img.lalr.co/cms/2015/09/08165418/spacanino.jpg" alt="" />
                <div>
                    <h3 onClick={() => navigation("/product3")}>Peluqueria Mascotas Felices</h3>
                    <p>Peluqueria especializada en mascotas de todos los tipos.
                Manejamos diferentes servicios desde ba??os simples hasta spa
                completo con el mayor cuidado para tu mascota. Que estas
                esperando.</p>
                </div>
                <div className="precio-producto">
                    <h5>$40.000</h5>
                </div>
            </div>
            <div className="linea"></div>
            <div className="producto">
                <img onClick={() => navigation("/product")} src="https://entrecaninos.co/sitio/wp-content/uploads/2022/04/ENTRECANINOS-2.png" alt="" />
                <div>
                    <h3 onClick={() => navigation("/product")}>Entrecaninos</h3>
                    <p>Guarderia canina ubicada en el aeropuerto internacional jose
                maria cordova con diferentes paquetes posibles para dejar a tu
                mascota en las mejores manos</p>
                </div>
                <div className="precio-producto">
                    <h5>40.000 dia</h5>
                </div>
            </div>
            <div className="linea"></div>
            <div className="producto">
                <img onClick={() => navigation("/product2")} src="https://files.rcnradio.com/2021-04/Paseador%20de%20perros.jpg" alt="" />
                <div>
                    <h3 onClick={() => navigation("/product2")}>Jorge Granados</h3>
                    <p> Paseador canino con mas de 15 a??os de expereincia. Tu perro
                podra experimentar nuevas experiencias y tener una excelente
                actividad fisica con mis servicios. Tengo diferentes servicios y
                tarifas que se adaptan a todas las personas. Contactame para mas
                informacion</p>
                </div>
                <div className="precio-producto">
                    <h5>$15.000 paseo</h5>
                </div>
            </div>
            <div className="linea"></div>

            <div className="producto">
                <img onClick={() => navigation("/product3")} src="https://img.lalr.co/cms/2015/09/08165418/spacanino.jpg" alt="" />
                <div>
                    <h3 onClick={() => navigation("/product3")}>Peluqueria Mascotas Felices</h3>
                    <p>Peluqueria especializada en mascotas de todos los tipos.
                Manejamos diferentes servicios desde ba??os simples hasta spa
                completo con el mayor cuidado para tu mascota. Que estas
                esperando.</p>
                </div>
                <div className="precio-producto">
                    <h5>$40.000</h5>
                </div>
            </div>
            <div className="linea"></div>
            <div className="producto">
                <img onClick={() => navigation("/product")} src="https://entrecaninos.co/sitio/wp-content/uploads/2022/04/ENTRECANINOS-2.png" alt="" />
                <div>
                    <h3 onClick={() => navigation("/product")}>Entrecaninos</h3>
                    <p>Guarderia canina ubicada en el aeropuerto internacional jose
                maria cordova con diferentes paquetes posibles para dejar a tu
                mascota en las mejores manos</p>
                </div>
                <div className="precio-producto">
                    <h5>40.000 dia</h5>
                </div>
            </div>
            <div className="linea"></div>
            <div className="producto">
                <img onClick={() => navigation("/product2")} src="https://files.rcnradio.com/2021-04/Paseador%20de%20perros.jpg" alt="" />
                <div>
                    <h3 onClick={() => navigation("/product2")}>Jorge Granados</h3>
                    <p> Paseador canino con mas de 15 a??os de expereincia. Tu perro
                podra experimentar nuevas experiencias y tener una excelente
                actividad fisica con mis servicios. Tengo diferentes servicios y
                tarifas que se adaptan a todas las personas. Contactame para mas
                informacion</p>
                </div>
                <div className="precio-producto">
                    <h5>$15.000 paseo</h5>
                </div>
            </div>
            <div className="linea"></div>

            <div className="producto">
                <img onClick={() => navigation("/product3")} src="https://img.lalr.co/cms/2015/09/08165418/spacanino.jpg" alt="" />
                <div>
                    <h3 onClick={() => navigation("/product3")}>Peluqueria Mascotas Felices</h3>
                    <p>Peluqueria especializada en mascotas de todos los tipos.
                Manejamos diferentes servicios desde ba??os simples hasta spa
                completo con el mayor cuidado para tu mascota. Que estas
                esperando.</p>
                </div>
                <div className="precio-producto">
                    <h5>$40.000</h5>
                </div>
            </div>
            <div className="linea"></div>
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