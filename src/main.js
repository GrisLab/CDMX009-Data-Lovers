import data from './data/pokemon/pokemon.js';



const list = data.pokemon;



// nodos
const container = document.querySelector('#container');

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

//const electricType = list.filter((p) => p.type.includes('Electric'));
//console.log(electricType);
const fireType = list.filter((p) => p.type.includes('Fire'));
console.log(fireType);
const pokeNameSearch = list.filter((p) => p.name.includes(["Pikachu"]));
console.log(pokeNameSearch);

list.map((p) => console.log(p.name));
list.map((p) => console.log(p.type));




//drawPokemons(electricType);
drawPokemons(fireType);
drawPokemons(pokeNameSearch);
//document.getElementById("search").addEventListener("onclick", drawPokemons(pokemonTags));

let pokemonTags = [];
for (let i = 0; i < list.length; i++) {
    if (list[i].num === "015") {
        pokemonTags.push(list[i].name);
    }
}
(pokemonTags);


const formulario = document.querySelector("#mySearch");
const boton = document.querySelector("#search");
const resultado = document.querySelector("#container");
const filtrar = () => {
    //console.log(formulario.value);
    resultado.innerHTML = "";
    const texto = formulario.value.toLowerCase();
    for (let poke of list) {
        let names = poke.name.toLowerCase();
        if (names.indexOf(texto) !== -1) {
            resultado.innerHTML += `<img src="${poke.img}" />
            <h3>${poke.name}</h3>
            <p>${poke.id}</p>`;
        }
    }
    if (resultado.innerHTML === "") {
        resultado.innerHTML += `< p > Poke no encontrado... </p>`;
    }
};
boton.addEventListener("click", filtrar);