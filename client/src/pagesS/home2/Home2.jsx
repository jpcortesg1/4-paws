import React from "react";
import "./Home2.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";


const Home2 = () => {
    return (
        <div className="home2">
            <Sidebar />
            <section className="home2Container">
                <Navbar />
                <div className="top">
                    <a href="#home"><img id="profilepic" src="https://cartonlab.com/wp-content/uploads/2017/07/expositores-west-paw.jpg"  width="170" height="170" alt="profilepic"/></a>
                </div>
                <div className="midle">
                    <h1> 4Paws Store</h1>
                </div>
                <div className="last">
                    <p id="paragarph1"> Everything you need 4 your dog<br/></p>
                </div>
             </section>
        </div>
    )
};

export default Home2;