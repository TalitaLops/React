import './App.css'

var raio = parseInt(prompt("Digite o valor do raio do círculo: "));

function area() {
    return(3.14*(raio*raio));
}

function App08() {
    return(
        <div className="App08">
            <p>A área do círculo é: {area()+"cm"}</p>
        </div>
    )
}

export default App08;