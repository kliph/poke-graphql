const graphql = require('graphql');

const pokemon = require('../../pokemon/pokemon');
const client = require('../../pokemon/pokemon.client');

const pokemonType = pokemon.type;

describe('Pokemon', () =>{
  it('should have an id field of the type String', () =>{
    expect(pokemonType.getFields()).toHaveProperty('id');
    expect(pokemonType.getFields().id.type).toEqual(graphql.GraphQLString);
  });

  it('should have a name field of the type String', () =>{
    expect(pokemonType.getFields()).toHaveProperty('name');
    expect(pokemonType.getFields().name.type).toEqual(graphql.GraphQLString);
  });

  it('should have an order field of the type Integer', () =>{
    expect(pokemonType.getFields()).toHaveProperty('order');
    expect(pokemonType.getFields().order.type).toEqual(graphql.GraphQLInt);
  });

  it('should have an img field of the type String', () =>{
    expect(pokemonType.getFields()).toHaveProperty('img');
    expect(pokemonType.getFields().img.type).toEqual(graphql.GraphQLString);
  });

  it('should resolve the img field', () => {
    expect(pokemonType.getFields().img.resolve({
      sprites: {
	front_default: 'foo.png'
      }
    })).toEqual('foo.png');
  });
});

describe('resolver', () => {
  let getPokemonSpy;
  let getPokemonsSpy;

  beforeEach(() => {
    getPokemonSpy = jest.spyOn(client, 'getPokemon');
    getPokemonsSpy = jest.spyOn(client, 'getPokemons');
  });

  afterEach(() => {
    getPokemonSpy.mockReset();
    getPokemonSpy.mockRestore();
    getPokemonsSpy.mockReset();
    getPokemonsSpy.mockRestore();
  });

  it('should call getPokemons when no id provided', () => {
    pokemon.resolve();
    expect(client.getPokemon).not.toHaveBeenCalled()
    expect(client.getPokemons).toHaveBeenCalled()
  });

  it('should call getPokemons when no id provided', () => {
    pokemon.resolve(null, {id: 'id'});
    expect(client.getPokemon).toHaveBeenCalledWith('id')
    expect(client.getPokemons).not.toHaveBeenCalled()
  });
});
