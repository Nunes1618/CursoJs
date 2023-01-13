const notas = [6.7, 7.4, 8.0, 3.9] 
    for (var i in notas) {
        console.log (i, notas[i])
    }

const pessoa = {
    nome: "July",
    sobrenome: "Nayara",
    idade: 33,
    peso: 62

}

for (var atributo in pessoa) {
    console.log (`${atributo} = ${pessoa[atributo]}`)
}
