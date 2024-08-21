import React from "react";
import "../../Models/geral.css";
import "./layout4.css";
import estrela_preenchida from "./estrela_preenchida.png"
import foto from "./foto.png"


const Layout4 = () => {
  return (
    <div className="layout" id="layout4">
      <div className="header_layout4">
        <h1>Ofertas em destaque</h1>
        <div></div>
      </div>
      <div className="body_layout4">
        <div className="buy_products_layout4">
          <div className="product_layout4">
            <div className="config_image_layout4">
              <img className="image_pub_foto" src={foto} alt="" />
              <div className="image_layout4"></div>
            </div>
            <div className="information_layout4">
              <div className="bar_layout4"></div>
              <h1 className="h1_layout4">Console PlayStation®5 + Marvel's Spider-Man 2</h1>
              <h2 className="h2_layout4">R$3.950,00</h2>
              <h3 className="h3_layout4">À vista no PIX com até 10% OFF <br/> 12x de R$ 329,16 sem juros</h3>
              <div className="stars_layout4">
                <img className="image2_layout4" src={estrela_preenchida} alt="" />
                <img className="image2_layout4" src={estrela_preenchida} alt="" />
                <img className="image2_layout4" src={estrela_preenchida} alt="" />
                <img className="image2_layout4" src={estrela_preenchida} alt="" />
                <img className="image2_layout4" src={estrela_preenchida} alt="" />
              </div>
            </div>
            <div className="buy_bar_layout4">ADICIONAR AO CARRINHO</div>
          </div>
        </div>
        <div className="buy_products_layout4">
          <div className="product_layout4">
            <div className="config_image_layout4">
              <img className="image_pub_foto" src={foto} alt="" />
              <div className="image_layout4"></div>
            </div>
            <div className="information_layout4">
              <div className="bar_layout4"></div>
              <h1 className="h1_layout4">Apple iPhone 15 (128 GB) — Preto</h1>
              <h2 className="h2_layout4">R$4.699,00</h2>
              <h3 className="h3_layout4">À vista no PIX com até 5% OFF <br/> 12x de R$ 439,74 sem juros</h3>
              <div className="stars_layout4">
                <img className="image2_layout4" src={estrela_preenchida} alt="" />
                <img className="image2_layout4" src={estrela_preenchida} alt="" />
                <img className="image2_layout4" src={estrela_preenchida} alt="" />
                <img className="image2_layout4" src={estrela_preenchida} alt="" />
                <img className="image2_layout4" src={estrela_preenchida} alt="" />
              </div>
            </div>
            <div className="buy_bar_layout4">ADICIONAR AO CARRINHO</div>
          </div>
        </div>
        <div className="buy_products_layout4">
          <div className="product_layout4">
            <div className="config_image_layout4">
              <img className="image_pub_foto" src={foto} alt="" />
              <div className="image_layout4"></div>
            </div>
            <div className="information_layout4">
              <div className="bar_layout4"></div>
              <h1 className="h1_layout4">Smartphone Samsung Galaxy A25 5G 256GB - Azul</h1>
              <h2 className="h2_layout4">R$1.554,81</h2>
              <h3 className="h3_layout4">À vista no PIX com até 15% OFF <br/> 10x R$ 155,49 sem juros</h3>
              <div className="stars_layout4">
                <img className="image2_layout4" src={estrela_preenchida} alt="" />
                <img className="image2_layout4" src={estrela_preenchida} alt="" />
                <img className="image2_layout4" src={estrela_preenchida} alt="" />
                <img className="image2_layout4" src={estrela_preenchida} alt="" />
                <img className="image2_layout4" src={estrela_preenchida} alt="" />
              </div>
            </div>
            <div className="buy_bar_layout4">ADICIONAR AO CARRINHO</div>
          </div>
        </div>

      </div>
    </div>
  );
};
  
export default Layout4;