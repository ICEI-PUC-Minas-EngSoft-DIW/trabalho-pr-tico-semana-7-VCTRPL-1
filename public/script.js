let nome = prompt("Digite seu nome:");
let rendaMensal = parseFloat(prompt("Digite sua renda mensal:"));
let despesasMensais = parseFloat(prompt("Digite suas despesas mensais:"));
const clamp = (value, min = 1, max = 5) => Math.max(min, Math.min(max, value));
while (isNaN(rendaMensal) || isNaN(despesasMensais)) {
    alert("Por favor, insira valores numéricos para renda e despesas.");
    rendaMensal = parseFloat(prompt("Digite sua renda mensal:"));
    despesasMensais = parseFloat(prompt("Digite suas despesas mensais:"));
}
for (let despesa1 = prompt("Digite o nome da primeira despesa:"); despesa1; despesa1 = prompt("Digite o nome da próxima despesa (ou pressione Cancelar para terminar):")) {
    let valorDespesa1 = parseFloat(prompt(`Digite o valor da despesa "${despesa1}":`));
    if (!isNaN(valorDespesa1)) {
        console.log(`${nome}, sua despesa "${despesa1}" é de R$${valorDespesa1.toFixed(2)}.`);
    } else {
        alert("Por favor, insira um valor numérico para a despesa.");
    }
    let despesa2 = prompt("Digite o nome da próxima despesa (ou pressione Cancelar para terminar):");
    if (!despesa2) break;
    let valorDespesa2 = parseFloat(prompt(`Digite o valor da despesa "${despesa2}":`));
    if (!isNaN(valorDespesa2)) {
        console.log(`${nome}, sua despesa "${despesa2}" é de R$${valorDespesa2.toFixed(2)}.`);
    } else {
        alert("Por favor, insira um valor numérico para a despesa.");
    }

}

if (despesasMensais>rendaMensal) {
    alert(`${nome}, Atenção: você gastou mais do que ganhou.`);
} else {
    if (rendaMensal - despesasMensais >= 0.3 * rendaMensal) {
        alert(`${nome}, Ótimo! Boa margem de sobra.`);
    } else {
        alert(`${nome}, Ok, dá para melhorar a sobra.`);
    }
}

console.log(`${nome}, sua renda mensal é de R$${(rendaMensal).toFixed(2)}, seu total de despesas é de R$${despesasMensais.toFixed(2)} a sobra é de R$${(rendaMensal - despesasMensais).toFixed(2)}.`);