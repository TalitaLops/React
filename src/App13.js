import './App.css'

var salario = parseInt(prompt("Digite o salário mensal do funcionário"));
var reajuste = parseInt(prompt("Digite o percentual de reajuste do salário"));

function final() {
    return((salario*reajuste)/100);
}

function App13() {
    return(
        <div className="App13">
            <p>O novo salário corresponde a: R${final()}</p>
        </div>
    )
}

export default App13;