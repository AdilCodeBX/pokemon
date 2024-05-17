import createAbilities from './createAbilities.js';

const updatePokemonDom = (pokemonDom, pokemonData) => {
    // update name
    pokemonDom.querySelector('#name').innerText = pokemonData.name;

    // update image
    pokemonDom.querySelector('#image').src = pokemonData.sprites.front_default;
    pokemonDom.querySelector('#image').alt = pokemonData.name;

    const oldList = pokemonDom.querySelector('#ability-list');
    const newList = createAbilities(pokemonData.abilities);
    oldList.replaceWith(newList);
};

export default updatePokemonDom;
