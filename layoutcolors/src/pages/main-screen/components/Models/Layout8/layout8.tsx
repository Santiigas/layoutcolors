import React from "react";
import "../../Models/geral.css";
import "./layout8.css";

const Layout7 = () => {
  return (
    <div className="layout" id="layout8">
      <main>
        <div className="form">
          <h1>Login</h1>
          <div className="dados1">
            <label className="label_text" htmlFor="">Email</label>
            <input className="dados_entry" type="text"/>
          </div>
          <div className="dados1">
            <label className="label_text" htmlFor="">Senha</label>
            <input className="dados_entry" type="text"/>
          </div>
          <div className="dados2">
            <input type="checkbox" name="" id=""/>
            <p>Lembre de mim</p>
          </div>
          <div className="button_login">Entrar</div>
        </div>
      </main>
    </div>
  );
};
  
export default Layout7;