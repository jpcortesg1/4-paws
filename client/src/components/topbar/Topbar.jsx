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
          <h1 className="topbarTitle" onClick={() => navigation("/")}>
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
                pathname.includes("login") && "active"
              }`}
              onClick={() => navigation("/login")}
            >
              <span className="topbarIconItem">
                <FaRegUser />
              </span>
              Login
            </div>
            <div
              className={`topbarItem ${
                pathname.includes("shoppingcart") && "active"
              }`}
              onClick={() => navigation("/shoppingcart")}
            >
              <span className="topbarIconItem">
                <HiShoppingCart />
              </span>
              Cart
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}