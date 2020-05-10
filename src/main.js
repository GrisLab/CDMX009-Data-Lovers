import data from './data/pokemon/pokemon.js';
// import { typeFilter } from './data.js';

const container = document.querySelector('#container');

const list = data.pokemon;

function drawPokemons(list) {
    container.innerHTML = "" // borrar! antes al principio, no dentro del ciclo
        // dibujar
    list.forEach((poke) => {
        const div = document.createElement('div');
        div.innerHTML = `
        <img src="${poke.img}" />
        <h3>${poke.name}</h3>
        <p>${poke.id}</p>
    `;
        container.appendChild(div);


    });
}

// 1.- nodo
let typeFilterButtons = document.querySelectorAll('.boton_personalizado');
// 2.- listener
typeFilterButtons.forEach((btn) => btn.addEventListener('click', filterBichos));
// 3.- callback
function filterBichos(event) {
    let id = event.target.id;
    let filteredList = filterByType(id);
    console.log(filteredList);
    drawPokemons(filteredList) // [{},{}]
        // aqui 
}
// 4.- func aux
function filterByType(type) {
    return data.pokemon.filter(pokemon => pokemon.type.includes(type))
}




// 1.- ya que tenemos la lista ahora que? (recorrerla y dibujarla)
// 2.- y si eso que fala (punto 1) lo hacemos una funcion para que se repita cada que clickean un tipo diferente

// let pokeNameSearch = document.querySelector("#mySearch");
// pokeNameSearch.

const formulario = document.querySelector("#mySearch");
const boton = document.querySelector("#search");
const resultado = document.querySelector("#container");
const filtrar = () => {
    //console.log(formulario.value);
    resultado.innerHTML = "";
    const texto = formulario.value.toLowerCase();
    for (let poke of list) {
        let names = poke.name.toLowerCase()
        if (names.indexOf(texto) !== -1)


            drawPokemons(resultado);


        if (resultado.innerHTML === "")
            resultado.innerHTML += `< p > Poke no encontrado... </p>`;



        boton.addEventListener("click", filtrar)
    };
}


//console.log('typeFilterButton', typeFilterButton);

// function myFunction() {
//     document.getElementById("typeFilterButton").innerHTML = type.filter();
// }




// const typeFilter = list.filter(p => p.type.includes(""));
// console.log(typeFilter);


//typeFilterButton.addEventListener('click', typeFilter);

// // nodos
// const container = document.querySelector('#container');

// function drawPokemons(list) {
//     // dibujar
//     list.forEach((poke) => {
//         const div = document.createElement('div');
//         div.innerHTML = `
//         <img src="${poke.img}" />
//         <h3>${poke.name}</h3>
//         <p>${poke.id}</p>

//     `;
//         container.appendChild(div);


//     });
// }

// //const electricType = list.filter((p) => p.type.includes('Electric'));
// //console.log(electricType);
// const fireType = list.filter((p) => p.type.includes('Fire'));
// console.log(fireType);
// const pokeNameSearch = list.filter((p) => p.name.includes(["Pikachu"]));
// console.log(pokeNameSearch);

// list.map((p) => console.log(p.name));
// list.map((p) => console.log(p.type));




// //drawPokemons(electricType);
// drawPokemons(fireType);
// drawPokemons(pokeNameSearch);
// //document.getElementById("search").addEventListener("onclick", drawPokemons(pokemonTags));

// let pokemonTags = [];
// for (let i = 0; i < list.length; i++) {
//     if (list[i].num === "015") {
//         pokemonTags.push(list[i].name);
//     }
// }
// (pokemonTags);


// function segundapantalla() {
//     let pantallas = document.getElementsByClassName("typeButton")
//     pantallas.style = "display:none";
//     document.getElementById("container").style.display = "block";
// }


// document.getElementById('hidePage').addEventListener('click', segundapantalla);