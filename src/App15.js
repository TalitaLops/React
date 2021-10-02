import './App.css'

var f = parseInt(prompt("Digite a temperatura em graus Fahrenheit"));

function celsius() {
    return(((f-32)/9)*5);
}

function App15() {
    return(
        <div className="App15">
            <p>A temperatura em graus Celsius é: {celsius()}</p>
        </div>
    )
}

export default App15;