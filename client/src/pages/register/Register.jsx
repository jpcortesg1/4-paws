import { FaCss3Alt } from "react-icons/fa";
import Topbar from "../../components/topbar/Topbar";
import "./register.css";

export default function Register() {
  return (
    <div>
      <Topbar title="Juan Pablo" />
      <section className="form-register">
        <h4>Registro</h4>
        <input
          className="boton"
          type="text"
          name="nombres"
          id="nombres"
          placeholder="Ingrese su nombre"
        />
        <input
          className="boton"
          type="text"
          name="apellidos"
          id="apellidos"
          placeholder="Ingrese su apellido"
        />
        <input
          className="boton"
          type="email"
          name="correo"
          id="correo"
          placeholder="Ingrese su correo"
        />
        <input
          className="boton"
          type="password"
          name="contraseña"
          id="contraseña"
          placeholder="Ingrese su contraseña"
        />
        <p>
          Estoy de acuerdo con <a href="#">Terminos y Condiciones</a>
        </p>
        <p> </p>
        <a href="http://localhost:5173/">
          <input className="boton" type="submit" value="Registrar" />
        </a>
        <p>
          <a href="#">Ya tienes una cuenta?</a>
        </p>
      </section>
    </div>
  );
}
