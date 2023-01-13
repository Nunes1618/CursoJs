const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    // O X no código signfica o índice do array
for (x in nums) {
    if (x == 5) {
        break
    }
    console.log (`x = ${nums[x]}`)
    // No código é possível perceber que enquando o x (indice), ñ for igual a 5 ele continua executando...
    //... o código, e assim que ele for igual a 5, o break é acionado parando o código.
}

for (y in nums) {
    if (y == 5) {
        continue
    }
    console.log (`y = ${nums[y]}`)
    // Nesse outro exemplo eu utilizei a letra y e coloquei no código a palavra...
    //... reservada continue, para que o código execute os demais indices do array
}

