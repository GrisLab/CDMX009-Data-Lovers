import data from './data/pokemon/pokemon.js';



let list = data.pokemon;



// nodos
const container = document.querySelector('#item1');

function drawPokemons(list) {
    // dibujar
    list.forEach((poke) => {
        let div = document.createElement('div');
        div.innerHTML = `
        <img src="${poke.img}" />
        <h3>${poke.name}</h3>
        <p>${poke.id}</p>
        
    `;
        container.appendChild(div);


    });
}
const electricType = list.filter((p) => p.type.includes('Electric'));
console.log(electricType);
const fireType = list.filter((p) => p.type.includes('Fire'));
console.log(fireType);
const pokeNameSearch = list.filter((p) => p.name.includes(["Pikachu"]));
console.log(pokeNameSearch);

list.map((p) => console.log(p.name));
list.map((p) => console.log(p.type));




drawPokemons(electricType);
drawPokemons(fireType);
drawPokemons(pokeNameSearch)
    //document.getElementById("search").addEventListener("onclick", drawPokemons(pokemonTags));

let pokemonTags = [];
for (let i = 0; i < list.length; i++) {
    if (list[i].num === "015") {
        pokemonTags.push(list[i].name);
    }
}
(pokemonTags);