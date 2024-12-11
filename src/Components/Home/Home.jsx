import { useState } from "react";
import copinhoLaranja from "../../imagens/laranjaPequeno.png";
import copinhoVermelho from "../../imagens/vermelhoPequeno.png";
import copinhoAmarelo from "../../imagens/amareloPequeno.png";
import copoLaranja from "../../imagens/laranjaGrande.png";
import copoVermelho from "../../imagens/vermelhoGrande.png";
import copoAmarelo from "../../imagens/amareloGrande.png";
import './Home.scss';

export default function Home(){
    const [imagem, setImagem] = useState(copoLaranja);
    const [corFundo, setCorFundo] = useState("fundoVerde");

    function laranja() {
        setImagem(copoLaranja); 
        setCorFundo("fundoVerde"); 
    }

    function vermelho() {
        setImagem(copoVermelho); 
        setCorFundo("fundoVermelho");
    }

    function amarelo() {
        setImagem(copoAmarelo);
        setCorFundo("fundoAmarelo"); 
    }
    return (
        <section className="home">
            <div class="textosHome">
                <h2>Mais que Café</h2>
                <h2>Isso é <span>Starbucks</span></h2>
                <p>A Starbucks oferece uma variedade de cafés de alta qualidade. Alguns dos cafés mais populares incluem o Caffè Americano, o Cappuccino, o Latte Macchiato e o Espresso. Além disso, a Starbucks oferece bebidas quentes e frias, doces diferenciados e sanduíches.</p>

                <a href="https://athome.starbucks.com/">
                    <button>SAIBA MAIS</button>
                </a>

                <div className="botoesCopinhos">
                    <img src={copinhoLaranja} onClick={laranja} alt="Copo pequeno de frappuccino de laranja"></img>
                    <img src={copinhoVermelho} onClick={vermelho} alt="Copo pequeno de frappuccino de frutas vermelhas"></img>
                    <img src={copinhoAmarelo} onClick={amarelo} alt="Copo pequeno de frappuccino de abacaxi"></img>
                </div>
            </div >
        
            <div className={corFundo} id="ciculoCores">
                <img src={imagem} alt="Copo grande com frappuccino do Starbucks" />
            </div>
        </section>
    )
}