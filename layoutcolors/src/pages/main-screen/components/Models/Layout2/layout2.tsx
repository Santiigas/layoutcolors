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
    </div>
  );
};
  
export default Layout2;