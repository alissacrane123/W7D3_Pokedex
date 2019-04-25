import * as PokemonAPIUtil from '../util/api_util'

export const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON";

export const receiveAllPokemon = pokemon => ({
  type: RECEIVE_ALL_POKEMON,
  pokemon
});

export const fetchPokemon = () => dispatch => (
  PokemonAPIUtil.fetchAllPokemon().then(pokemon => dispatch(receiveAllPokemon(pokemon)))
);

export const requestAllPokemon = () => (dispatch) => (
  PokemonAPIUtil.fetchAllPokemon()
    .then(pokemon => dispatch(receiveAllPokemon(pokemon)))
)
