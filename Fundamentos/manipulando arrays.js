const personagens = [
    { nome: 'Goku', vida:'100', força:'125'},
    { nome: 'Vegeta', vida:'120', força: '100'},
    { nome: 'Buu', vida:'389', força:'267'}
];

for (const personagem of personagens) {
    personagem.força +=10;

    console.log([personagens])
}