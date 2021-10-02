import './App.css';

var a= parseInt(prompt("Digite um número"));
var b= parseInt(prompt("Digite outro número"));

function divisão() {
    return(a/b);
}

function App04() {
    return(
        <div className="App04">
            <p>A divisão dos dois valores é de: {divisão()}</p>
        </div>       
    )
}

export default App04;