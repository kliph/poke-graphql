const request = require('request-promise');
const path = require('path');
const Promise = require('bluebird');

const BASE_PATH = 'http://pokeapi.co/api/v2/';

const getPokemon = (id) => {
  return request({
    uri: BASE_PATH + path.join(
      'pokemon-form',
      id.toString()
    ),
    json: true
  });
};

module.exports = {
  getPokemon
};
