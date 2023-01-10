// Função sem retorno
function ImprimirSoma (a, b) {
    console.log(a + b)
}

ImprimirSoma(2, 3)

// Função com retorno
function soma (a, b) {
    return a + b
}

console.log(soma(2, 3))

//=============================================================================

// Armazenando uma função em uma variável

const ImprimirSoma = function (a, b) {
    console.log(a + b);
}

ImprimirSoma(2, 3);

// Armazenando uma função arrow em uma variável

const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 3))

// retorno Implícito
const subtração = (a, b) => a - b
    console.log(subtração(2, 3))

//=============================================================================
