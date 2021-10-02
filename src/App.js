import './App.css';

var nome= "Talita"
var novoNome= nome.toUpperCase();
let idade = 18
var n1 = 8
var n2 = 2

function soma(a,b) {
    return a+b
}

function fa() {
    alert("Eu sou um alerta")
}

var a= parseInt(prompt("Digite um número"));
var b= parseInt(prompt("Digite outro número"));

function teste() {
    return(a+b);
 
}

function App() {
    return(
        <div className="App">

            <p>A soma desses número é de: {teste()}</p>
        
        </div>
    );
}

export default App;