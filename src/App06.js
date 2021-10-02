import './App.css';

var a= parseInt(prompt("Digite um número"));

function sucessor() {
    return(a+1);
}

function App06() {
    return(
        <div className="App06">
            <p>O sucessor do número é: {sucessor()}</p>
        </div>       
    )
}

export default App06;