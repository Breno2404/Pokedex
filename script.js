const url = `https://pokeapi.co/api/v2/pokemon/$(id)`

async function buscaPokemon(url) {
    const requisicao = await fetch(url)
    const dadosPokemon = await requisicao.json()
    console.log(dadosPokemon)
    return dadosPokemon
}

const botao = document.getElementById(`buscar-Pokemon`)
botao.addEventListener(`click`, async function() {
    const pokemonID = document.getElementById("pokemon-id").value
    const pokemon = await buscaPokemon(pokemonID)
    escreverPokemonNoHtml(pokemon)
})

function escreverPokemonNoHtml(){
    const div = getElementById("pokemon-dados")
    div.innerHTML = `<h1>$(pokemon.name)</h1>`
}