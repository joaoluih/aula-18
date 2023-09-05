
// Qual seria o resultado impresso no console, se o usu�rio digitasse o n�mero "4"?   seria impresso 4 linhas com * acresentando mais 1 a cada linha, ou seja  * / ** / *** / ****

let quantidadeAtual = 0
const quantidadeTotal = Number(prompt("Digite a quantidade de linhas"))


while (quantidadeAtual < quantidadeTotal) {
	let linha = ""

	for (let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++) {
		linha += "*"
	}

	console.log(linha)

	quantidadeAtual++
}