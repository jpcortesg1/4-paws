import React from "react";
import "./SProducts.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";


const Sproducts = () => {
  return (
    <div className="Sproducts">
      <Sidebar />
      <div className="SproductsContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src="https://www.mercadoslpineda.co/4558-thickbox_default/cuido-dog-chow-x-475-g-adultos-razas-medianas.jpg"
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">Cuido DogChow</h1>
                <div className="detailItem">
                  <span className="itemKey">Tipo:</span>
                  <span className="itemValue">Alimento</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Precio:</span>
                  <span className="itemValue">10.000</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Razas:</span>
                  <span className="itemValue">
                    Perros Grandes
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">ID:</span>
                  <span className="itemValue">4312</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 3} title="Product feedback ( Last 6 Months)" />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Sproducts;