import { FaSearch, FaRegUser } from "react-icons/fa";
import { AiOutlineHome, AiOutlineShopping } from "react-icons/ai";
import { BiBone } from "react-icons/bi";
import "./topbar.css";
import { useLocation, useNavigate } from "react-router-dom";
import { HiShoppingCart } from "react-icons/hi";


export default function Topbar() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  console.log("🚀 ~ file: Topbar.jsx ~ line 10 ~ Topbar ~ pathname", pathname);

  const navigation = (url) => {
    navigate(url);
  };

  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topbarLeft">
          <h1 className="topbarTitle">
            4<span>PAWS</span>
          </h1>
        </div>
        <div className="topbarCenter">
          <div className="topbarSearch">
            <input type="text" placeholder="search..." />
            <span className="topbarIconSearch">
              <FaSearch />
            </span>
          </div>
        </div>
        <div className="topbarRight">
          <div className="topbarItems">
            <div
              className={`topbarItem ${pathname === "/" && "active"}`}
              onClick={() => navigation("/")}
            >
              <span className="topbarIconItem">
                <AiOutlineHome />
              </span>
              Home
            </div>
            <div
              className={`topbarItem ${
                pathname.includes("product") && "active"
              }`}
              onClick={() => navigation("/products")}
            >
              <span className="topbarIconItem">
                <BiBone />
              </span>
              Products
            </div>
            <div
              className={`topbarItem ${
                pathname.includes("services") && "active"
              }`}
              onClick={() => navigation("/services")}
            >
              <span className="topbarIconItem">
                <AiOutlineShopping />
              </span>
              Services
            </div>
            <div
              className={`topbarItem ${
                pathname.includes("register") && "active"
              }`}
              onClick={() => navigation("/register")}
            >
              <span className="topbarIconItem">
                <FaRegUser />
              </span>
              Register
            </div>
            <div
              className={`topbarItem ${
                pathname.includes("carrito") && "active"
              }`}
              onClick={() => navigation("/carrito")}
            >
              <span className="topbarIconItem">
                <HiShoppingCart />
              </span>
              Cart
            </div>
          </div>
        </div>
      </div>
      {/* <header class="header">
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
      </header> */}
    </div>
  );
}
