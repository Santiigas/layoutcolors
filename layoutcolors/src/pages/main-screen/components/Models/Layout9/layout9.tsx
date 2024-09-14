import React from "react";
import "../../Models/geral.css";
import "./layout9.css";

const Layout7 = () => {
  return (
    <div className="layout" id="layout9">
      <main>
        <div className="info_layout9">
          <div className="text_info_layout9">
            <h1>Descubra coisas incríveis em nosso site!</h1>
          </div>
          <div className="button_entrar">Entrar</div>
        </div>
        <div className="form_layout9">
          <h1>Crie sua conta</h1>
          <div className="dados1">
            <label htmlFor="">Nome</label>
            <input className="dados_entry" type="text"/>
          </div>
          <div className="dados1">
            <label htmlFor="">Email</label>
            <input className="dados_entry" type="text"/>
          </div>
          <div className="dados1">
            <label htmlFor="">Senha</label>
            <input className="dados_entry" type="text"/>
          </div>
          <div className="dados2">
            <p>Login com o Google</p>
          </div>
          <div className="button_login">Criar conta</div>
        </div>
      </main>
    </div>
  );
};
  
export default Layout7;