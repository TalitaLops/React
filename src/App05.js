import './App.css';

var a= parseInt(prompt("Digite um número"));

function antecessor() {
    return(a-1);
}

function App05() {
    return(
        <div className="App05">
            <p>O antecessor do número é: {antecessor()}</p>
        </div>       
    )
}

export default App05;