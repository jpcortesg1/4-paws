import { FaCss3Alt } from "react-icons/fa";
import Topbar from "../../components/topbar/Topbar";
import "./login.css";
import { appendErrors, useForm } from "react-hook-form"
import { BsInstagram, BsWhatsapp } from 'react-icons/bs';
import { GoMail } from 'react-icons/go';

// const nombre = document.getElementById("nombres");
// const apellidos = document.getElementById("apellidos");
// const email = document.getElementById("correo");
// const contraseña = document.getElementById("contraseña");
// const registrar = document.getElementById("registrar");
// const listaInputs = document.querySelectorAll(".boton");
const Login = () => {

    const { register, formState: { errors }, watch, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }
return (
    <div>
        <Topbar title="Martin" />


        <div class="loginCenter">
    <h1>Login</h1>
    <form method="post">
      <div class="loginTxt_field">
        <input class="loginInput" type="text" required/>
        <span></span>
        <label>Username</label>
      </div>
      <div class="loginTxt_field">
        <input class="loginInput" type="password" required/>
        <span></span>
        <label>Password</label>
      </div>
      <div class="loginPass">Forgot Password?</div>
      <input class="loginInput" type="submit" value="Login"/>
      <div class="loginSignup_link">
        No estas registrado <a href="#">Signup</a>
      </div>
    </form>
  </div>
    
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

                <a href="whatsapp.com" class="navegacion__enlace"> <BsWhatsapp/> 3105545256</a>
                <a href="gmail.com" class="navegacion__enlace"><GoMail/> 4paws@contacto.com.co</a>
                <a href="instagram.com" class="navegacion__enlace"><BsInstagram /> 4Paws</a>

            </nav>
          </div>
        </div>
      </footer>

</div>

   );
 }

 export default Login



