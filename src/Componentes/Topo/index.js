import React from "react"
import { Link } from "react-router-dom";
import './style.css'

export default function Topo(){
    return(
        <header>
            <div className="limitar-largura">
                <img src="imagens/logo.png" alt="logo" />
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/sabores">Sabores</Link>
                    <Link to="/sobre">Sobre</Link>
                </nav>
            </div>
        </header>
    );
}