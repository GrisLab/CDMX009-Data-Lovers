import data from './data/pokemon/pokemon.js';

let list = data.pokemon

list.map(p => console.log(p.name));
list.map(p => console.log(p.type));


var pokeSearch = document.querySelector(#pokeSearch);

function myFunction() {
    fetch(̣'pokemon.json')
        .then(data => pokemon.json())
        .then(data => {
            console.log(data)
            contenido.innerHTML = `$(data)`
        })
}



let electricType = list.filter(p => p.type.includes("Electric"))
console.log(electricType);

let bugType = list.filter(p => p.type.includes("Bug"))
console.log(bugType);

let grassType = list.filter(p => p.type.includes("Grass"))
console.log(grassType)

let fireType = list.filter(p => p.type.includes("Fire"))
console.log(fireType);

let poisonType = list.filter(p => p.type.includes("Poison"))
console.log(poisonType);

let waterType = list.filter(p => p.type.includes("Water"))
console.log(waterType);

let flyingType = list.filter(p => p.type.includes("Flying"))
console.log(flyingType);

let rockType = list.filter(p => p.type.includes("Rock"))
console.log(rockType);

let normalType = list.filter(p => p.type.includes("Normal"))
console.log(normalType);

let dragonType = list.filter(p => p.type.includes("Dragon"))
console.log(dragonType);

let iceType = list.filter(p => p.type.includes("Ice"))
console.log(iceType);

let psychicType = list.filter(p => p.type.includes("Psychic"))
console.log(psychicType);

let groundType = list.filter(p => p.type.includes("Ground"))
console.log(groundType);

let fightingType = list.filter(p => p.type.includes("Fighting"))
console.log(fightingType);

let ghostType = list.filter(p => p.type.includes("Ghost"))
console.log(ghostType);

let pokemonTags = [];
for (let i = 0; i < list.length; i++) {
    if (list[i].num === "015") {
        pokemonTags.push(list[i].name)
    }
}

console.log(pokemonTags);

let pokemonNum = [];
for (let i = 0; i < list.length; i++) {
    if (list[i].name === "Pikachu") {
        pokemonNum.push(list[i].id);
    }
};

console.log(pokemonNum);

//export { pokemonTags }
//from './data.js';

//console.log(pokemonTags);