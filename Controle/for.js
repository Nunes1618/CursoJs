var contador = 1
while (contador <= 10) {
    console.log(`contador = ${contador}`)
    contador++
}
// o FOR assim como nas outras linguagens ele continua executando aquela estrutura do código até atender 

for (var i = 1; i <= 10; i++) {
    console.log (`i = ${i}`)
}

// Utilizando um array
const notas = [6.7, 8.0, 9,3, 7,2, 6,9]
for (var i = 0; i < notas.length; i++) {
    console.log(`nota = ${notas[i]}`)
}