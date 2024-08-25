import React from "react";
import "../../Models/geral.css";
import "./layout5.css";

const Layout5 = () => {
  return (
    <div className="layout" id="layout5">
      <div className="header_layout5">
        <h1>Camisa Manchester United Home 23/24 s/n° Torcedor Adidas Masculina - Vermelho Escuro</h1>
      </div>
      <div className="body_layout5">
        <div className="image_layout5">
          <div className="main_image_layout5">
            <div className="biggest_image_layou5"></div>
          </div>
          <div className="smallest_image_layout5">
            <div className="box_layout5"></div>
            <div className="box_layout5"></div>
            <div className="box_layout5"></div>
            <div className="box_layout5"></div>
          </div>
        </div>
        <div className="information_layout5">
          <h3>Mostre seu amor e orgulho pelo Red Devils com a Camisa Manchester United Home</h3>
          <h1>R$ 199,99</h1>
          <h2>até 4x de R$ 50,00 sem juros</h2>
          <h4>Cor: Vermelho Escuro</h4>
          <h3>Escolha seu tamanho:</h3>
          <div className="size_layout5">
            <div className="size_options">P</div>
            <div className="size_options">M</div>
            <div className="size_options">G</div>
            <div className="size_options">GG</div>
          </div>
          <div className="buy">
            <div className="buy_layout5">COMPRAR</div>
            <div className="shopping_cart">+CARRINHO</div>
          </div>
          <h3>Frete: 10,99 - Chega dia 4 de setembro ao escolher a opção de 
            entrega Expressa para o CEP 00000-000.</h3>
        </div>
      </div>
    </div>
  );
};
  
export default Layout5;