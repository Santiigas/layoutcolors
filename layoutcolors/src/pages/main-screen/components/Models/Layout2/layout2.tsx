import React from "react";
import "../../Models/geral.css";
import "./layout2.css";

const Layout2 = () => {
  return (
    <div className="layout" id="layout2">
      <header className="header_layout2">
        <div className="bar_layout2">
          <div className="searchbar_layout2"></div>
          <div className="box_layout2"></div>
          <div className="box_layout2"></div>
          <div className="box_layout2"></div>
          <div className="box_layout2"></div>
        </div>
        <div className="navbar_layout2">
          <div className="item_layout2">Opção</div>
          <div className="item_layout2">Opção</div>
          <div className="item_layout2">Opção</div>
          <div className="item_layout2">Opção</div>
          <div className="item_layout2">Opção</div>
          <div className="item_layout2">Opção</div>
        </div>
      </header>
      <div className="banner_layout2"></div>
      <div className="slide_layout2">
        <div className="group_product_layout2">
          <div className="product_layout2"></div>
          <div className="product_layout2"></div>
          <div className="product_layout2"></div>
          <div className="product_layout2"></div>
          <div className="product_layout2"></div>
        </div>
      </div>
      <div className="announcement_layout2"></div>
    </div>
  );
};
  
export default Layout2;