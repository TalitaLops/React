import './App.css'

var base = parseInt(prompt("Digite a base do retângulo"));
var altura = parseInt(prompt("Digite a altura do retângulo"));

function area() {
    return(base*altura);
}

function App07() {
    return(
        <div className="App07">
            <p>A área do retângulo é: {area()+"cm"}</p>
        </div>
    )
}

export default App07;