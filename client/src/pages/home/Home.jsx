import { FaCss3Alt } from "react-icons/fa";
import "./home.css";

export default function home() {
  return (
<div>
    <header class="header">
        
        <div class="contenedor">
            <div class="barra">
                <a class="logo" href="#">
                    <h1 class="logo__nombre no-margin centrar-texto">4<span class="logo__bold">PAWS</span></h1>
                </a>
                <nav class="navegacion">
                    <a href="#" class="navegacion__enlace">Inicio</a>
                    <a href="#" class="navegacion__enlace">Productos</a>
                    <a href="#" class="navegacion__enlace">Servicios</a>
                    <a href="http://localhost:5173/register" class="navegacion__enlace">Perfil</a>
                    
                </nav>
            </div>
        </div>
        
        <div class="header__texto">
            <h2 class="no-margin">4Paws es tu mejor herramienta</h2>
            <p class="no-margin">Aca podras adquirir productos, servicios y muchas cosas mas para tu mascota</p>
        </div>
    </header>

    <div class="contenedor contenido-principal">
        <main class="blog">
            <h3>servicios mas usados</h3>

            <article class="entrada">
                <div class="entrada__imagen">
                  <img src="https://entrecaninos.co/sitio/wp-content/uploads/2022/04/ENTRECANINOS-2.png" alt="" />
                </div>

                <div class="entrada__contenido">
                    <h4 class="no-margin">Entrecaninos</h4>
                    <p>Guarderia canina ubicada en el aeropuerto internacional jose maria cordova con diferentes paquetes posibles para dejar a tu mascota en las mejores manos</p>
                    <a href="#" class="boton boton--primario">Ver mas</a>
                </div>
            </article>

            <article class="entrada">
                <div class="entrada__imagen">
                  <img src="https://files.rcnradio.com/2021-04/Paseador%20de%20perros.jpg" alt="" />
                </div>

                <div class="entrada__contenido">
                    <h4 class="no-margin">Jorge Granados</h4>
                    <p>Paseador canino con mas de 15 años de expereincia. Tu perro podra experimentar nuevas experiencias y tener una excelente actividad fisica con mis servicios. Tengo diferentes servicios y tarifas que se adaptan a todas las personas. Contactame para mas informacion</p>
                    <a href="entrada.html" class="boton boton--primario">Ver mas</a>
                </div>
            </article>

            <article class="entrada">
                <div class="entrada__imagen">
                  <img src="https://img.lalr.co/cms/2015/09/08165418/spacanino.jpg" alt="" />
                </div>

                <div class="entrada__contenido">
                    <h4 class="no-margin">Peluqueria Mascotas Felices</h4>
                    <p>Peluqueria especializada en mascotas de todos los tipos. Manejamos diferentes servicios desde baños simples hasta spa completo con el mayor cuidado para tu mascota. Que estas esperando.</p>
                    <a href="entrada.html" class="boton boton--primario">Ver mas</a>
                </div>
            </article>
        </main>
        <aside class="sidebar">
            <h3>Productos mas comprados</h3>

            <ul class="cursos nopadding">
                <li class="widget-curso">
                    <h4 class="no-margin">Kong</h4>
                    <img src="https://iconopet.com/sitio/wp-content/uploads/2015/10/035585111315-scaled.jpg" alt="" />
                    <p class="widget-curso__label">Precio: 56.000
                        <p class="widget-curso__info">Indispensable para que tu mascota pueda estar tranquila en casa y pueda estimular su gusto y olfato</p>
                    </p>
                    <a href="entrada.html" class="boton boton--secundario">Mas Informacion</a>
                </li>

                <li class="widget-curso">
                    <h4 class="no-margin">Comederos elevados</h4>
                    <img src="https://i0.wp.com/monamipetshop.com/wp-content/uploads/2021/05/Tazones-RUFO-min.png?fit=800%2C800&ssl=1" alt="" />
                    <p class="widget-curso__label">Precio: 40.000
                        <span class="widget-curso__info">Comederos para mascotas. Sirve para todo tipo de mascotas y le un toque mas elegante a tu casa y a tu mascota. Tenemos diferentes precios y tamaños. Que estas esperando. Consigue el tuyo ahora</span>
                    </p>
                    <a href="entrada.html" class="boton boton--secundario">Mas Informacion</a>
                </li>
            </ul>
        </aside>
    </div>

    <footer class="footer">
        <div class="contenedor">
            <div class="barra">
                <a class="logo" href="index.html">
                    <h1 class="logo__nombre no-margin centrar-texto">4<span class="logo__bold">Paws</span></h1>
                </a>
                <nav class="navegacion">
                    <a href="nosotros.html" class="navegacion__enlace">Nosotros</a>
                    <a href="contacto.html" class="navegacion__enlace">contacto</a>
                </nav>
            </div>
        </div>
    </footer>
  </div>
  );
}
