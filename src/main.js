import data from './data/pokemon/pokemon.js';

let list = data.pokemon
    //nodos
let container = document.querySelector('#container');

function drawPokemons(list) {
    // dibujar
    list.forEach(poke => {
        let div = document.createElement('div')
        div.innerHTML = `
        <img src="${poke.img}" />
        <p>${poke.name}</p>
    `
        container.appendChild(div)
    })
}
let electricType = list.filter(p => p.type.includes("Electric"))
console.log(electricType);
let fireType = list.filter(p => p.type.includes("Fire"))
console.log(fireType);

drawPokemons(electricType);
drawPokemons(fireType);

list.map(p => console.log(p.name));
list.map(p => console.log(p.type));