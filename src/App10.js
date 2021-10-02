import './App.css'

var base = parseInt(prompt("Digite o valor da base do triângulo"));
var altura = parseInt(prompt("Digite o valor da altura do triângulo"));

function area() {
    return((base*altura)/2);
}

function App10() {
    return(
        <div className="App10">
            <p>A área do triângulo é: {area()+"cm"}</p>
        </div>
    )
}

export default App10;