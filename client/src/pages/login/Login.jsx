import { FaCss3Alt } from "react-icons/fa";
import Topbar from "../../components/topbar/Topbar";
import "./login.css";
import { appendErrors, useForm } from "react-hook-form"
import { BsInstagram, BsWhatsapp } from 'react-icons/bs';
import { GoMail } from 'react-icons/go';

const Login = () => {

    const { register, formState: { errors }, watch, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }
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
    <h2>Log-in</h2>
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

        <input type="submit" value="Ingresar" />

        <div>
            <label>Aun no tienes una cuenta?</label>
            <a href="">Registrate aqui</a>
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

 export default Login



