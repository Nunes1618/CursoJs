function soma () {
    var soma = 0 
    for (i in arguments) {
        soma += arguments[i]
    }
    return soma
}

console.log (soma())
console.log (soma(1))
console.log (soma(1.1, 2.2, 3.3))

console.log (soma (1.1, 2.2, " Teste"))
console.log (soma ('a', 'b', 'c'))

// A finalidade deste código é somar todos os argumentos passados para a função, independentemente de sua quantidade ou tipo.