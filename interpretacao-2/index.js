
// Leia o c�digo abaixo

const lista = [ 10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30 ]

for (let numero of lista) {
	if (numero < 18) {
		console.log(numero)
	}
}

// a) O que vai ser impresso no console? vai ser impresso todos numeros maiores que 18 (19, 21, 23, 25, 27, 30)

// b) Se eu quisesse acessar o �ndice de cada elemento dessa lista, a sintaxe "for...of..." � suficiente? Se sim, o que poderia ser usado para fazer isso?
// Poderia ser usado console.log para chamar os numeros e indices, console.log("numero" numero) e console.log("indice" [1]...)