import { FaCss3Alt } from "react-icons/fa";
import Topbar from "../../components/topbar/Topbar";
import "./register.css";
import { appendErrors, useForm } from "react-hook-form"

// const nombre = document.getElementById("nombres");
// const apellidos = document.getElementById("apellidos");
// const email = document.getElementById("correo");
// const contraseña = document.getElementById("contraseña");
// const registrar = document.getElementById("registrar");
// const listaInputs = document.querySelectorAll(".boton");
const Register = () => {

    const { register, formState: { errors }, watch, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }
return (
    <div>
        <Topbar title="Martin" />


    <form className="form-register" onSubmit={handleSubmit(onSubmit)}>
    <h2>Registro</h2>
        <div>
            <label>Nombre</label>
            <input  type="text" {...register('nombre', {
                required: true,
                maxLength: 10
            })} />
            {errors.nombre?.type === 'required' && <p>El campo nombre es requerido</p>}
            {errors.nombre?.type === 'maxLength' && <p>El campo nombre debe tener menos de 10 caracteres</p>}
        </div>

        <div>
            <label>Fecha de nacimiento</label>
            <input  type="date" {...register('fechaNacimiento', {
                required: true,
            })} />
            {errors.fechaNacimiento?.type === 'required' && <p>El campo fecha de nacimiento es requerido</p>}
        </div>

        <div>
            <label>Telefono</label>
            <input  type="number" {...register('telefono', {
                required: true,
                minLength: 10,
                maxLength: 10
            })} />
            {errors.telefono?.type === 'required' && <p>El campo telefono es requerido</p>}
            {errors.telefono?.type === 'maxLength' && <p>El campo telefono solo puede tener 10 caracteres</p>}
            {errors.telefono?.type === 'minLength' && <p>El campo telefono solo puede tener 10 caracteres</p>}

        </div>


        <div>
            <label>Email</label>
            <input  type="email" {...register('email', {
                required: true,
                pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i
            })}/>
            {errors.email?.type === 'required' && <p>El campo email es requerido</p>}
            {errors.email?.type === 'pattern' && <p>El formato de email es incorrecto</p>}
        </div>

        <div>
            <label>Contraseña</label>
            <input  type="password" {...register('password', {
               required: true 
            })}/>
            {errors.password?.type === 'required' && <p>El campo contraseña es requerido</p>}
        </div>

        <div>
            <label>Rol</label>
            <select  {...register('rol')}>
                <option value="es">Cliente</option>
                <option value="it">Dueño empresa</option>
                <option value="fr">Empleado</option>
            </select>
        </div>

        <div>
            <label>Status</label>
            <input  type="text" {...register('status', {
               required: true 
            })}/>
            {errors.status?.type === 'required' && <p>El campo status es requerido</p>}
        </div>

        <div>
            <label>Notas</label>
            <input  type="text" {...register('notas', {
               required: true 
            })}/>
            {errors.notas?.type === 'required' && <p>El campo notas es requerido</p>}
        </div>

        <div>
            <label>Direccion</label>
            <input  type="text" {...register('direccion', {
               required: true 
            })}/>
            {errors.direccion?.type === 'required' && <p>El campo direccion es requerido</p>}
        </div>

        <div>
           <label>Terminos y condiciones</label> 
           <input  type="checkbox" {...register('termsconditions', {
                required: true
            })}/>
            {errors.termsconditions?.type === 'required' && <p>Debes aceptar los terminos y condiciones</p>}
        </div>
        <input href="#" type="submit" value="Enviar" />

        <div>
            <label>Ya tienes una cuenta?</label>
            <a href="">Ingresa aqui</a>
        </div>
    </form>
    
    <footer class="footer">
        <div class="contenedor">
          <div class="barra">
            <a class="logo" href="index.html">
              <h1 class="logo__nombre no-margin centrar-texto">
                4<span class="logo__bold">Paws</span>
              </h1>
            </a>
            <nav class="navegacion">
              <a href="nosotros.html" class="navegacion__enlace">
                Nosotros
              </a>
                <a href="contacto.html" class="navegacion__enlace">3105545256</a>
                <a href="contacto.html" class="navegacion__enlace">4paws@contacto.com.co</a>
                <a href="contacto.html" class="navegacion__enlace">4Paws</a>

            </nav>
          </div>
        </div>
      </footer>

</div>

   );
 }

 export default Register



