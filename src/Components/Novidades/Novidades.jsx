import cafe from "../../imagens/cafe.png"; 
import './Novidades.scss';

export default function Novidades(){
    return (
        <section className="novidades">
            <div class="textosNovidades">
                <h3>PREPARAÇÃO</h3>
                <h2>Níveis de torra</h2>
                <p>Qual a torra que prefere? Starbucks® Torra Clara, Torra Média ou Torra Escura? Estas sãos as torras que fazem parte dos níveis de torra Starbucks®</p>

                <a href="https://athome.starbucks.com/premium-instant21/three-roasts-starbucks-premium-instant">
                    <button>SAIBA MAIS</button>
                </a>
            </div>

            <img className="imagemCafe" src={cafe} alt="grão de café" />
        </section>
    );
}