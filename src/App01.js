import './App.css';

var a= parseInt(prompt("Digite um número"));
var b= parseInt(prompt("Digite outro número"));

function soma() {
    return(a+b);
}

function App01() {
    return(
        <div className="App01">
            <p>A soma dos dois valores é de: {soma()}</p>
        </div>       
    )
}

export default App01;