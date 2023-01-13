function PrimeiraFuncao () {}
    // Criando uma função

const ArmazenarFuncao = function () {}
const array = [function (a, b) {return a + b}, PrimeiraFuncao, ArmazenarFuncao]
console.log (array[0] (2, 3))
// Armazenar uma função em uma variável

const objeto = {}
objeto.falar = function () {return 'Opa'}
console.log(objeto.falar())
    // Armazenar em um atributo de objeto

function soma (a, b) {
return function (c) {
    console.log (a + b + c)
    // Uma função pode retornar/conter uma função
    }
}
soma (2, 4) (4)