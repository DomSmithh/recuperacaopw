import "./Plano.css"
import "./App.css"

function Plano( {titulo, valor, usuarios, quantidade} ){
    return(
            <div className="plano-container">
                <h3 className="plano-titulo">{titulo}</h3>
                <h4 className="plano-preco">{valor}</h4>
                <p className="plano-user">{usuarios}</p>
                <p className="plano-project">{quantidade}</p>
                <button>AQUI</button>
            </div>
    );
}

export default Plano;