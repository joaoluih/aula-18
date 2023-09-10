/**
 * 
 * Considere que voc� tenha acesso a um "array" que � composto somente de n�meros. Crie uma fun��o para cada um dos itens abaixo, realizando as opera��es pedidas:
 * 
 * 1) Escreva uma fun��o que imprime cada valor do "array" em uma linha.
 * 
 * 2) Escreva uma fun��o que imprime cada um dos valores do "array" divididos por 10.
 * 
 * 3) Escreva uma fun��o que cria um novo array contendo somente os n�meros pares do "array original" e, depois, imprima esse novo array.
 * 
 * 4) Escreva uma fun��o que cria um novo array contendo strings no seguinte formato: "O elemento do �ndice 'i' �: 'numero'". Depois, imprima esse novo array.
 * 
 * 5) Escreva uma fun��o que imprime no console o maior e o menor n�meros contidos no "array original".
 * 
**/


const arrayOriginal = [ 80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55 ]


function imprimirLista (itens) {
    console.log(arrayOriginal)
}
imprimirLista(arrayOriginal)


function imprimirValoresDivididos (itens) {
    for(divisao of arrayOriginal)
    console.log(divisao / 10)
}
imprimirValoresDivididos(arrayOriginal)

let pares = []

function filtrarNumerosPares (numeros) {
    pares.push(30, 40, 50, 60, 70, 80, 90, 110, 120)
    console.log(pares)

}
filtrarNumerosPares(pares)

let frases = []

function identificarElementos (itens) {
    let frases = [`O elemento do indice 0 é o ${arrayOriginal[0]}, o elemento do incide 1 é ${arrayOriginal[1]}, o elemento do incide 2 é ${arrayOriginal[2]}`]
}

function imprimirMaiorMenor (itens){
   
}