import { BrowserRouter, Routes, Route } from "react-router-dom";
import './style.css'

import Home from "../Paginas/home";
import Sabores from "../Paginas/sabores";
import Sobre from "../Paginas/sobre";

export default function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/sabores" element={<Sabores/>} />
                <Route path="/sobre" element={<Sobre/>} />
            </Routes>
        </BrowserRouter>
    );
}