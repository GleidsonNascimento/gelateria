import Rodape from "../../Componentes/Rodape";
import Topo from "../../Componentes/Topo";
import './style.css';




export default function Home(){
    return(
        <div>
            <Topo/>
            <main>
                <section className="box-1">
                    <h1>SORVETE ARTESANAL</h1>
                </section>

                <section className="box-sabores">
                    <img src="imagens/banner-sabores.jpg" alt="sabores" />
                    <div className="txt-sabores">
                        <h2>Nossos sabores</h2>
                        <span>Novos e deliciosos</span>
                        <p>
                            Sorvete bom é aquele feito com os melhores ingredientes! Aqui na
                            gelateria todos os nossos produtos são naturais, à base de
                            frutas e sem nenhum conservante! Também temos opções sem lactose
                            e sem açúcar. Venha conhecer e perceber que tem como o sorvete
                            ser delicioso e saudável ao mesmo tempo!
                        </p>
                    </div>
                </section>

                <section className="box-eventos">
                    <div className="txt-eventos">
                        <h2>Nossos eventos</h2>
                        <span>Delicias de sorvete</span>
                        <p>
                            Mais do que uma sorveteria, uma extensão da sua casa! Estamos aqui
                            prontinhos para te atender e oferecer os melhores eventos com os melhores
                            sorvete da sua vida! Venha nos conhecer e passar um tempo aqui com a gente.
                        </p>
                    </div>
                    <img src="imagens/eventos-image.jpg" alt="eventos" />
                </section>

                <section className="box-sobre">
                    <img src="imagens/sobre-image.jpg" alt="sobre" />
                    <div className="txt-sobre">
                        <h2>SOBRE NOS</h2>
                        <span>Alegria em cada casquinha</span>
                        <p>Venha tomar o melhor sorvete da região aqui com a gente! nos estamos há anos
                            no mercado produzindo o que tem de melhor para a nossa cliente e você não pode
                            ficar de fora dessa. venha nos fazer uma visita e aproveitar o melhor
                            atendimento e a melhor sorveteria da cidade
                        </p>
                    </div>
                </section>
            </main>
           <Rodape />
        </div>
    )
}