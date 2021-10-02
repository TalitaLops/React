import './App.css'

var lado = parseInt(prompt("Digite o valor do lado do quadrado"));

function area() {
    return (lado*lado)
}

function App09() {
    return(
        <div className="App09">
            <p>A área do quadrado é: {area()+"cm"}</p>
        </div>
    )
}