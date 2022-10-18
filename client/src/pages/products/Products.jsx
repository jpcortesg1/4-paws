import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaCss3Alt } from "react-icons/fa";
import "./products.css";
import Topbar from "../../components/topbar/Topbar";
import { BsInstagram, BsWhatsapp } from 'react-icons/bs';
import { GoMail } from 'react-icons/go';

export default function Product() {
  return (
<div>
    <Topbar title="Martin" />
    <div className="resultados">
        <h5>Resultados "(20)"</h5>
        <h5>Ordenar por: Destacados</h5>
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
                <img src="https://iconopet.com/sitio/wp-content/uploads/2015/10/035585111315-scaled.jpg" alt="" />
                <div>
                    <h3>Kong</h3>
                    <p>Indispensable para que tu mascota pueda estar tranquila en
                  casa y pueda estimular su gusto y olfato</p>
                </div>
                <div className="precio-producto">
                    <h5>$25.000</h5>
                </div>
            </div>
            <div className="linea"></div>
            <div className="producto">
                <img src="https://i0.wp.com/monamipetshop.com/wp-content/uploads/2021/05/Tazones-RUFO-min.png?fit=800%2C800&ssl=1" alt="" />
                <div>
                    <h3>Comederos elevados</h3>
                    <p>Comederos para mascotas. Sirve para todo tipo de mascotas y le
                  un toque mas elegante a tu casa y a tu mascota. Tenemos
                  diferentes precios y tamaños. Que estas esperando. Consigue el
                  tuyo ahora</p>
                </div>
                <div className="precio-producto">
                    <h5>$56.000</h5>
                </div>
            </div>
            <div className="linea"></div>

            <div className="producto">
                <img src="https://i0.wp.com/monamipetshop.com/wp-content/uploads/2021/05/Tazones-RUFO-min.png?fit=800%2C800&ssl=1" alt="" />
                <div>
                    <h3>Comederos elevados</h3>
                    <p>Comederos para mascotas. Sirve para todo tipo de mascotas y le
                  un toque mas elegante a tu casa y a tu mascota. Tenemos
                  diferentes precios y tamaños. Que estas esperando. Consigue el
                  tuyo ahora</p>
                </div>
                <div className="precio-producto">
                    <h5>$40.000</h5>
                </div>
            </div>
            <div className="linea"></div>
            <div className="producto">
                <img src="https://iconopet.com/sitio/wp-content/uploads/2015/10/035585111315-scaled.jpg" alt="" />
                <div>
                    <h3>Kong</h3>
                    <p>Indispensable para que tu mascota pueda estar tranquila en
                  casa y pueda estimular su gusto y olfato</p>
                </div>
                <div className="precio-producto">
                    <h5>$25.000</h5>
                </div>
            </div>
            <div className="linea"></div>
            <div className="producto">
                <img src="https://i0.wp.com/monamipetshop.com/wp-content/uploads/2021/05/Tazones-RUFO-min.png?fit=800%2C800&ssl=1" alt="" />
                <div>
                    <h3>Comederos elevados</h3>
                    <p>Comederos para mascotas. Sirve para todo tipo de mascotas y le
                  un toque mas elegante a tu casa y a tu mascota. Tenemos
                  diferentes precios y tamaños. Que estas esperando. Consigue el
                  tuyo ahora</p>
                </div>
                <div className="precio-producto">
                    <h5>$56.000</h5>
                </div>
            </div>
            <div className="linea"></div>

            <div className="producto">
                <img src="https://i0.wp.com/monamipetshop.com/wp-content/uploads/2021/05/Tazones-RUFO-min.png?fit=800%2C800&ssl=1" alt="" />
                <div>
                    <h3>Comederos elevados</h3>
                    <p>Comederos para mascotas. Sirve para todo tipo de mascotas y le
                  un toque mas elegante a tu casa y a tu mascota. Tenemos
                  diferentes precios y tamaños. Que estas esperando. Consigue el
                  tuyo ahora</p>
                </div>
                <div className="precio-producto">
                    <h5>$40.000</h5>
                </div>
            </div>
            <div className="linea"></div>
            <div className="producto">
                <img src="https://iconopet.com/sitio/wp-content/uploads/2015/10/035585111315-scaled.jpg" alt="" />
                <div>
                    <h3>Kong</h3>
                    <p>Indispensable para que tu mascota pueda estar tranquila en
                  casa y pueda estimular su gusto y olfato</p>
                </div>
                <div className="precio-producto">
                    <h5>$25.000</h5>
                </div>
            </div>
            <div className="linea"></div>
            <div className="producto">
                <img src="https://i0.wp.com/monamipetshop.com/wp-content/uploads/2021/05/Tazones-RUFO-min.png?fit=800%2C800&ssl=1" alt="" />
                <div>
                    <h3>Comederos elevados</h3>
                    <p>Comederos para mascotas. Sirve para todo tipo de mascotas y le
                  un toque mas elegante a tu casa y a tu mascota. Tenemos
                  diferentes precios y tamaños. Que estas esperando. Consigue el
                  tuyo ahora</p>
                </div>
                <div className="precio-producto">
                    <h5>$56.000</h5>
                </div>
            </div>
            <div className="linea"></div>

            <div className="producto">
                <img src="https://i0.wp.com/monamipetshop.com/wp-content/uploads/2021/05/Tazones-RUFO-min.png?fit=800%2C800&ssl=1" alt="" />
                <div>
                    <h3>Comederos elevados</h3>
                    <p>Comederos para mascotas. Sirve para todo tipo de mascotas y le
                  un toque mas elegante a tu casa y a tu mascota. Tenemos
                  diferentes precios y tamaños. Que estas esperando. Consigue el
                  tuyo ahora</p>
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
