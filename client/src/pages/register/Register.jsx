import { FaCss3Alt } from "react-icons/fa";
import Topbar from "../../components/topbar/Topbar";
import "./register.css";

const nombre = document.getElementById("nombres");
const apellidos = document.getElementById("apellidos");
const email = document.getElementById("correo");
const contraseña = document.getElementById("contraseña");
const registrar = document.getElementById("registrar");
const listaInputs = document.querySelectorAll(".boton");



export default function Register() {
  return (
    <div>
      <Topbar title="Juan Pablo" />
      {/* <section className="form-register">
        <h4>Registro</h4>
        <input
          className="boton nombres"
          type="text"
          name="nombres"
          id="nombres"
          placeholder="Ingrese su nombre"
          required
        /> <p className="MensajeError"></p>
        <input
          className="boton apellidos"
          type="text"
          name="apellidos"
          id="apellidos"
          placeholder="Ingrese su apellido"
          required
        /> <p className="MensajeError"></p>
        <input
          className="boton correo"
          type="email"
          name="correo"
          id="correo"
          placeholder="Ingrese su correo"
          required
        /> <p className="MensajeError"></p>
        <input
          className="boton contraseña"
          type="password"
          name="contraseña"
          id="contraseña"
          placeholder="Ingrese su contraseña"
          required
        /> <p className="MensajeError"></p>

        <div className="checkBox" >
          <input type="checkbox" name="terminosCondiciones" required
        />
          <p>Estoy de acuerdo con <a href="#">Terminos y Condiciones</a>
          </p>

          <p className="MensajeError" ></p>
        </div>

        <a href="http://localhost:5173/">
          <input className="boton" type="submit" name="registrar" value="registrar" />
        </a> <p className="MensajeCorrecto"></p>
        <p>
          <a href="#">Ya tienes una cuenta?</a>
        </p>
  </section> */}
      <form action="" class="form-register" id="formulario">
			
			<div class="formulario__grupo" id="grupo__usuario">
				<label for="nombre" class="formulario__label">Nombre completo</label>
				<div class="formulario__grupo-input">
					<input type="text" class="formulario__input" name="nombre" id="nombre" placeholder="Alberto"/>
					<i class="formulario__validacion-estado fas fa-times-circle"></i>
				</div>
				<p class="formulario__input-error">Nombre solo tiene letras.</p>
			</div>

      <div class="formulario__grupo" id="grupo__usuario">
				<label for="cumpleanos" class="formulario__label">Fecha de nacimiento</label>
				<div class="formulario__grupo-input">
					<input type="date" class="formulario__input" name="cumpleanos" id="cumpleanos" placeholder="01/06/1998"/>
					<i class="formulario__validacion-estado fas fa-times-circle"></i>
				</div>
				<p class="formulario__input-error">Fecha debe ser valida</p>
			</div>

      <div class="formulario__grupo" id="grupo__usuario">
				<label for="telefono" class="formulario__label">telefono</label>
				<div class="formulario__grupo-input">
					<input type="number" class="formulario__input" name="telefono" id="telefono" placeholder="3045685987"/>
					<i class="formulario__validacion-estado fas fa-times-circle"></i>
				</div>
				<p class="formulario__input-error">Telefono solo tiene numeros.</p>
			</div>

      <div class="formulario__grupo" id="grupo__correo">
				<label for="correo" class="formulario__label">Correo Electrónico</label>
				<div class="formulario__grupo-input">
					<input type="email" class="formulario__input" name="correo" id="correo" placeholder="correo@correo.com"/>
					<i class="formulario__validacion-estado fas fa-times-circle"></i>
				</div>
				<p class="formulario__input-error">El correo solo puede contener letras, numeros, puntos, guiones y guion bajo.</p>
			</div>

			
			<div class="formulario__grupo" id="grupo__password">
				<label for="password" class="formulario__label">Contraseña</label>
				<div class="formulario__grupo-input">
					<input type="password" class="formulario__input" name="password" id="password"/>
					<i class="formulario__validacion-estado fas fa-times-circle"></i>
				</div>
				<p class="formulario__input-error">La contraseña tiene que ser de 4 a 12 dígitos.</p>
			</div>

			
			<div class="formulario__grupo" id="grupo__password2">
				<label for="password2" class="formulario__label">Repetir Contraseña</label>
				<div class="formulario__grupo-input">
					<input type="password" class="formulario__input" name="password2" id="password2"/>
					<i class="formulario__validacion-estado fas fa-times-circle"></i>
				</div>
				<p class="formulario__input-error">Ambas contraseñas deben ser iguales.</p>
			</div>

			
			<div class="formulario__grupo" id="grupo__password2">
				<label for="rol" class="formulario__label">Describa su rol</label>
				<div class="formulario__grupo-input">
					<input type="text" class="formulario__input" name="rol" id="rol"/>
					<i class="formulario__validacion-estado fas fa-times-circle"></i>
				</div>
				<p class="formulario__input-error">Solo texto</p>
			</div>


      <div class="formulario__grupo" id="grupo__usuario">
				<label for="status" class="formulario__label">status</label>
				<div class="formulario__grupo-input">
					<input type="text" class="formulario__input" name="status" id="status" placeholder="status"/>
					<i class="formulario__validacion-estado fas fa-times-circle"></i>
				</div>
				<p class="formulario__input-error">status solo tiene letras.</p>
			</div>

      <div class="formulario__grupo" id="grupo__usuario">
				<label for="notas" class="formulario__label">notas</label>
				<div class="formulario__grupo-input">
					<input type="text" class="formulario__input" name="notas" id="notas" placeholder="ejemplo"/>
					<i class="formulario__validacion-estado fas fa-times-circle"></i>
				</div>
				<p class="formulario__input-error">notas solo tiene letras.</p>
			</div>

      <div class="formulario__grupo" id="grupo__usuario">
				<label for="Direccion" class="formulario__label">Direccion</label>
				<div class="formulario__grupo-input">
					<input type="address" class="formulario__input" name="Direccion" id="Direccion" placeholder="cra 76 #32"/>
					<i class="formulario__validacion-estado fas fa-times-circle"></i>
				</div>
				<p class="formulario__input-error">Direccion completa.</p>
			</div>



			<div class="formulario__grupo" id="grupo__terminos">
				<label class="formulario__label">
					<input class="formulario__checkbox" type="checkbox" name="terminos" id="terminos"/>
					Acepto los Terminos y Condiciones
				</label>
			</div>

			<div class="formulario__mensaje" id="formulario__mensaje">
				<p><i class="fas fa-exclamation-triangle"></i> <b>Error:</b> Por favor rellena el formulario correctamente. </p>
			</div>

			<div class="formulario__grupo formulario__grupo-btn-enviar">
				<button type="submit" class="formulario__btn">Enviar</button>
				<p class="formulario__mensaje-exito" id="formulario__mensaje-exito">Formulario enviado exitosamente!</p>
			</div>
		</form>
    </div>
  );

}
