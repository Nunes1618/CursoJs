Number.prototype.entre = function (início, fim) {
    return this >= início && this <= fim
}

const ImprimirResultado = function (nota) {
    if (nota.entre(9, 10)) {
        console.log ("Quadro de Honra")
    } else if (nota.entre(7, 8)) {
        console.log ("Aluno Aprovado")
    } else if (nota.entre(5, 6.99)) {
        console.log ("Aluno de recuperação")
    } else if (nota.entre(0, 4.99)) {
        console.log ("Aluno Reprovado")
    } else {
        console.log ("Nota inválida")
    }

    console.log ("Fim")
}

ImprimirResultado (10)
ImprimirResultado (7)
ImprimirResultado (6)
ImprimirResultado (3)
ImprimirResultado (-3)
ImprimirResultado (12)