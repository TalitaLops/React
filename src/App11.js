import  './App11'

var anos= parseInt(prompt("Digite sua idade em anos:"));
var meses= parseInt(prompt("Digite sua idade em meses:"));
var dias= parseInt(prompt("Digite sua idade em dias:"));

function total_dias() {
    return ((anos*365)+(meses*30)+dias);
}

function App11() {
    return(
        <div className="App11">
            <p>A sua idade expressa em dias é: {total_dias()}</p>
        </div>
    )
}

export default App11;