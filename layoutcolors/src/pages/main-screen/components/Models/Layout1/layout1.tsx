import React from "react";
import "../../Models/geral.css";
import "./layout1.css";

const Layout1 = () => {
  return (
    <div className="layout" id="layout1">
        <header>
          <div className="logo"></div>
          <div className="navbar"></div>
          <div className="box"></div>
          <div className="box"></div>
        </header>
        <div className="menus">
          <div className="option">Opção</div>
          <div className="option">Opção</div>
          <div className="option">Opção</div>
          <div className="option">Opção</div>
          <div className="option">Opção</div>
          <div className="option">Opção</div>
        </div>
        <div className="slide">

        </div>
        <div className="products">
          <div className="product"></div>
          <div className="product"></div>
          <div className="product"></div>
          <div className="product"></div>
          <div className="product"></div>
        </div>
    </div>
  );
};

export default Layout1;