import "./App.css";

var a = parseInt(prompt("Digite um valor qualquer: "));

function App18() {
  if (a > 10) {
    return (
      <div className="App18">
        <p>O número {a} é maior que 10</p>
      </div>
    );
  } else {
    return (
      <div className="App18">
        <p>O número {a} é menor que 10</p>
      </div>
    );
  }
}

export default App18;