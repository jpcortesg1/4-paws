import React from "react";

export default function Topbar(props) {
  const title = props.title;

  return (
    <div>
      <header class="header">
        <div class="contenedor">
          <div class="barra">
            <a class="logo" href="#">
              <h1 class="logo__nombre no-margin centrar-texto">
                4<span class="logo__bold">{title}</span>
              </h1>
            </a>
            <div className="search">
              <input type="text" placeholder="Search..." />
            </div>
            <nav class="navegacion">
              <a href="#" class="navegacion__enlace">
                Inicio
              </a>
              <a href="#" class="navegacion__enlace">
                Productos
              </a>
              <a href="#" class="navegacion__enlace">
                Servicios
              </a>
              <a
                class="navegacion__enlace"
                onClick={() => navigation("/register")}
              >
                Register
              </a>
            </nav>
          </div>
        </div>

        <div class="header__texto">
          <h2 class="no-margin">4Paws es tu mejor herramienta</h2>
          <p class="no-margin">
            Aca podras adquirir productos, servicios y muchas cosas mas para tu
            mascota
          </p>
        </div>
      </header>
    </div>
  );
}
