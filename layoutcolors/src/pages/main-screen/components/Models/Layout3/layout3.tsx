import React from "react";
import "../../Models/geral.css";
import "./layout3.css";

const Layout3 = () => {
  return (
    <div className="layout" id="layout3">
      <header className="header_top_layout3"></header>
      <header className="header_center_layout3">
        <div className="logo_layout3"></div>
        <div className="search_bar_layout3"></div>
        <div className="box_layout3"></div>
        <div className="box_layout3"></div>
      </header>
      <header className="header_botton_layout3">
        <div className="option_layout3">Opção</div>
        <div className="option_layout3">Opção</div>
        <div className="option_layout3">Opção</div>
        <div className="option_layout3">Opção</div>
        <div className="option_layout3">Opção</div>
        <div className="option_layout3">Opção</div>
        <div className="option_layout3">Opção</div>
      </header>
      <div className="slide1_layout3">
        <div className="option2_layout3"></div>
        <div className="option2_layout3"></div>
        <div className="option2_layout3"></div>
        <div className="option2_layout3"></div>
        <div className="option2_layout3"></div>
      </div>
      <div className="slide2_layout3">
        <div className="product_layout3">
          <div className="product_offer_layout3"></div>
        </div>
        <div className="product_layout3">
          <div className="product_offer_layout3"></div>
        </div>
        <div className="product_layout3">
          <div className="product_offer_layout3"></div>
        </div>
        <div className="product_layout3">
          <div className="product_offer_layout3"></div>
        </div>
      </div>
      <div className="slide3_layout3"></div>
    </div>
  );
};
  
export default Layout3;