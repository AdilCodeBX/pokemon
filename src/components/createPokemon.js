import createAbilities from './createAbilities.js';

const createPokemon = (pokemonData) => {
    // container
    const container = document.createElement('div');
    container.className = 'pokemon-container';
    container.id = 'container';

    // name
    const name = document.createElement('h2');
    name.id = 'name';
    name.innerText = pokemonData.name;

    // image
    const img = document.createElement('img');
    img.id = 'image';
    img.src = pokemonData.sprites.front_default;
    img.alt = pokemonData.name;

    // abilities name
    const abilities = document.createElement('h3');
    abilities.innerText = 'abilities';

    // abilities list
    const abilitiesList = createAbilities(pokemonData.abilities);

    // append
    container.append(name, img, abilities, abilitiesList);
    return container;
};

export default createPokemon;
