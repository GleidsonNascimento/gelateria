import React from "react";
import Rodape from "../../Componentes/Rodape";
import Topo from "../../Componentes/Topo";
import './style.css'

export default function Sabores(){
    return(
        <div>
            <Topo/>
            <main>
            
            <div className="banner-sabores">
                <h1>NOSSOS SABORES</h1>
            </div>

        <div className="container-sabor">
            <div className="sabores">
                <h3>sabores de sorvete</h3>
                <div className="con-sabores">
                    <div className="sabor-1">
                        <img src="imagens/sabor-oreo.png" alt="oreo" />
                        <h3>Sorvete oreo</h3>
                        <p>delicioso sabor de explosão</p>
                    </div>
                    <div className="sabor-1">
                        <img src="imagens/sabor-pistache.png" alt="sabor 2" />
                        <h3>Sorvete de pistache</h3>
                        <p>Delicioso sabor de pistache</p>
                    </div>
                    <div className="sabor-1">
                        <img src="imagens/sorbet-kiwi.png" alt="sabor3" />
                        <h3>Sobert de kiwi</h3>
                        <p>Delicioso sobert de kiwi</p>
                    </div>
                    <div className="sabor-1">
                        <img src="imagens/sabor-cookies-avela.png" alt="avela" />
                        <h3>Sorvete de cookies e avela</h3>
                        <p>Delicioso sorvete de avela</p>
                    </div>
                    <div className="sabor-1">
                        <img src="imagens/sorbet-limao.png" alt="sabor4" />
                        <h3>Sorvete de limão</h3>
                        <p>Delicioso sorvete de limão</p>
                    </div>
                    <div className="sabor-1">
                        <img src="imagens/sorbet-morango.png" alt="" />
                        <h3>Sorvete de morango</h3>
                        <p>Delicioso sorvete de morango</p>
                    </div>
                </div>
            </div>
        </div>
        </main>
        <Rodape/>
        </div>
    );
}