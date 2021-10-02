import './App.css'

var total_votos= parseInt(prompt("Digite o total de votos da eleição:"));
var total_validos= parseInt(prompt("Digite o total de votos válidos da eleição:"));
var total_brancos= parseInt(prompt("Digite o total de votos brancos da eleição:"));
var total_nulos= parseInt(prompt("Digite o total de votos nulos da eleição:"));

function validos() {
    return((total_validos*100)/total_votos);
}

function brancos() {
    return((total_brancos*100)/total_votos);
}

function nulos() {
    return((total_nulos*100)/total_votos);
}

function App12() {
    return(
        <div className="App12">
            <p>A porcentagem de votos válidos é: {validos()+"%"}</p>
            <p>A porcentagem de votos brancos é: {brancos()+"%"}</p>
            <p>A porcentagem de votos nulos é: {nulos()+"%"}</p>
        </div>
    )
}

export default App12;