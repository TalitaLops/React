import './App.css';

var a= parseInt(prompt("Digite um número"));
var b= parseInt(prompt("Digite outro número"));

function subtração() {
    return(a-b);
}

function App02() {
    return(
        <div className="App02">
            <p>A subtração dos dois valores é de: {subtração()}</p>
        </div>       
    )
}

export default App02;