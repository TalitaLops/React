import './App.css'

var custo = parseInt(prompt("Digite o valor do custo de fábrica do carro"));

function preço() {
    return(custo*0.28+custo*0.45+custo)
}

function App14() {
    return(
        <div className="App14">
            <p>O valor do carro para o consumidor final é: R${preço()}</p>
        </div>
    )
}

export default App14;