import './App.css';

var a= parseInt(prompt("Digite um número"));
var b= parseInt(prompt("Digite outro número"));

function multiplicação() {
    return(a*b);
}

function App03() {
    return(
        <div className="App03">
            <p>A multiplicação dos dois valores é de: {multiplicação()}</p>
        </div>       
    )
}

export default App03;