// coleção dinâmica de pares chave/valor
const produto = new Object();
produto.nome = "Cadeira";
produto["marca do produto"] = "Genérica";
produto.preco = 220;

console.log(produto);

const carro = {
  modelo: "A4",
  valor: 75000,
  proprietario: {
    nome: "Wesley",
    idade: 26,
    endereco: {
      logradouro: "Rio Amazonas",
      numero: 51,
    },
  },
  condutores: [
    {
      nome: "Wesley",
      idade: 26,
    },
    {
      nome: "Rafaela",
      idade: 26,
    },
  ],
};

carro.proprietario.condutores.numero = 1000;
console.log(carro);

// Criando um exemplo de como funciona essa parte de herança.
