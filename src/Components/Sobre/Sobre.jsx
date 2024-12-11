import loja from "../../imagens/lojaAntiga.png"; 
import './Sobre.scss';

export default function Sobre() {
  return (
    <section className="sobre">
      <img className="imagemLoja" src={loja} alt="Loja antiga da Starbucks" />
        
      <div class="textosSobre">
        <h3>PREPARAÇÃO</h3>
        <h2>Níveis de torra</h2>
        <p>Qual a torra que prefere? Starbucks® Torra Clara, Torra Média ou Torra Escura? Estas sãos as torras que fazem parte dos níveis de torra Starbucks®</p>

        <a href="https://athome.starbucks.com/premium-instant21/three-roasts-starbucks-premium-instant">
          <button>SAIBA MAIS</button>
        </a>
      </div>
    </section>
  );
}