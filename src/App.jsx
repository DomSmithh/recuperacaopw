import "./App.css"
import Plano from "./Plano";

function App() {
    const planos = [
        {
            title: "Start",
            preco: "Free",
            users: "1 user",
            qtd: "1 project"
        },
        {
            title: "Basic",
            preco: "$19.99",
            users: "5 user",
            qtd: "20 project"
        },
        {
            title: "Expert",
            preco: "$129.99",
            users: "Unlimited Users",
            qtd: "Unlimited Projects"
        },
    ]

    return (
        <div>
            {planos.map( (planos) => {
                return <Plano
                    titulo={planos.title}
                    valor={planos.preco}
                    usuarios={planos.users}
                    quantidade={planos.qtd}
                />

            }) }

        </div>

    );
}

export default App
