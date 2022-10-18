import { FaCss3Alt } from "react-icons/fa";
import Topbar from "../../components/topbar/Topbar";
import "./register.css";
import { useNavigate } from "react-router-dom";
import { appendErrors, useForm } from "react-hook-form"
import { BsInstagram, BsWhatsapp } from 'react-icons/bs';
import { GoMail } from 'react-icons/go';

const Register = () => {

    const { register, formState: { errors }, watch, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }

    const navigate = useNavigate();

    const navigation = (url) => {
        navigate(url);
      };

return (
    <div>
        <Topbar title="Martin" />
        <div className="contenedor">
            <div className="barra">
                <a className="logo" href="#">
                    <h1 className="logo__nombre no-margin centrar-texto">4<span className="logo__bold">PAWS</span></h1>
                </a>
                <nav className="navegacion">
                    <a href="#" className="navegacion__enlace">Inicio</a>
                    <a href="#" className="navegacion__enlace">Productos</a>
                    <a href="#" className="navegacion__enlace">Servicios</a>
                    <a href="http://localhost:5173/register" className="navegacion__enlace">Perfil</a>
                    
                </nav>
            </div>
        </div>

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
        <input type="submit" value="Registrarme" />

        <div>
            <label>Ya tienes una cuenta?</label>
            <a onClick={() => navigation("/login")} className="IrLogin">Ingresa aqui</a>
        </div>
    </form>
    
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

 export default Register



