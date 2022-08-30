import { FaCss3Alt } from "react-icons/fa";
import "./product.css";

export default function home() {
  return (
<div>
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

        <div class="producto">
            <div class="producto_nombre">
                <h2>Producto</h2>
            </div>
            <img src="" alt="" />
            <div class ="Informacion producto">
                <h1>Descripcion</h1>
                <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit. A hic quod, rerum voluptatem libero, temporibus dolorum ratione illo ex nisi quo. Aspernatur recusandae nesciunt, culpa laborum in est fugit molestias.</h3>
                <h2>Precio</h2>
                <a href="#">Añadir al carrito</a>
                <a href="#">Adquirir ahora</a>
            </div>
        </div>
        <div class="resenas">
            <h2>Usuario XXYY</h2>
            <h2>Calificacion del producto</h2>
            <h3>Comentario del producto Usuario XXYY</h3>
            <input type="text" placeholder="Deja aca tu comentario"/>
        </div>

        <div class="productos-relacionados">
            <div>
                <img src="" alt="" />
                <h2>Nombre producto</h2>
                <h3>Precio del producto</h3>
            </div>
            <div>
                <img src="" alt="" />
                <h2>Nombre producto</h2>
                <h3>Precio del producto</h3>
            </div>
            <div>
                <img src="" alt="" />
                <h2>Nombre producto</h2>
                <h3>Precio del producto</h3>
            </div>
            <div>
                <img src="" alt="" />
                <h2>Nombre producto</h2>
                <h3>Precio del producto</h3>
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
                    <a href="contacto.html" class="navegacion__enlace">contacto</a>
                </nav>
            </div>
        </div>
    </footer>
  </div>
  );
}
