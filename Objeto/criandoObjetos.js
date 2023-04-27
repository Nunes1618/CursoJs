// Usando a notação literal
const obj1 = {};
console.log(obj1);

// Object em Js
console.log(typeof Object, typeof new Object());
const obj2 = new Object();
console.log(obj2);

// Funções construtoras
function Produto(nome, preco, desc) {
  this.nome = nome;
  this.getPrecoComDesconto = () => {
    return preco * (1 - desc);
  };
}

const p1 = new Produto("Caneta", 5, 99, 0.15);
const p2 = new Produto("Tv", 1599, 99, 0.25);
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto);

// Terminar a aula Estratégia criação de objetos 8:16
