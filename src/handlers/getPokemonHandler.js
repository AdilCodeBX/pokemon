import dom from '../dom.js';
import getPokemon from '../../apis/getPokemon.js';
import createPokemon from '../components/createPokemon.js';
import updatePokemonDom from '../components/updatePokemonDom.js';

const getPokemonHandler = async () => {
    // get the value of the input

    const value = Number(dom.input.value);

    // Check if the value is a valid id
    const isValidId = value > 0 && value < 1280;
    if (!isValidId) {
        dom.error.className = 'error';
        dom.error.innerText = 'Please enter a valid id';
        dom.root.append(dom.error);
        return;
    }

    // remove the error message if exist
    const errorExist = dom.root.querySelector('.error');
    if (errorExist) {
        dom.error.remove();
    }

    // get data
    const pokemonData = await getPokemon(value);

    // check if the pokemonDom exist
    const pokemonDomExist = dom.root.querySelector('#container');
    if (pokemonDomExist) {
        updatePokemonDom(pokemonDomExist, pokemonData);
    } else {
        const pokemonDom = createPokemon(pokemonData);
        dom.root.append(pokemonDom);
    }
};

export default getPokemonHandler;
