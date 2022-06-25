
/* let search_input = document.getElementById("search_button")*/

let pokemons = JSON.parse(poke_file)["result"];
/* ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ */

function search() {
  let searchInput = document.getElementById("search_input");
  let containerPokemon = document.getElementById("container-pokemon");
/* ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ */

  let pokemon = searchPokemon(searchInput.value);
  if ( pokemon ) {
    containerPokemon.innerHTML = `<div></div>`;
    containerPokemon.innerHTML = `
    <p style="color:white;">
        Nombre: ${pokemon.name}<br>
        No.: ${pokemon.number}<br>
        Tipo: ${pokemon.type}<br>
        Debilidades: ${pokemon.weakness}<br>
        <img src="${pokemon.ThumbnailImage}"/>
    </p>`;
  }
}
/* ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ */

function searchPokemon(name){
  for (let i = 0; i < pokemons.length; i++){
    console.log(pokemons[i]);
    if(pokemons[i].name == name) {
      return pokemons[i];
    }
  }
}

/* ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ */