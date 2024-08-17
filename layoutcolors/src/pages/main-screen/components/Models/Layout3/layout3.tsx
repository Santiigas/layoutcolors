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
    </div>
  );
};
  
export default Layout3;