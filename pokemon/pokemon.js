const graphql = require ('graphql');

const pokemonType = new graphql.GraphQLObjectType({
  name: 'PokemonType',
  fields: {
    id: {
      type: graphql.GraphQLString
    },
    name: {
      type: graphql.GraphQLString
    },
    order: {
      type: graphql.GraphQLString
    },
    img: {
      type: graphql.GraphQLString,
      resolve: (pokemon) => pokemon.sprites.front_default
    }
  }
});

module.exports = {
  type: pokemonType,
  args: {
    id: {
      type: graphql.GraphQLInt
    }
  },
  resolve: (root, args) => {
    return {
      id: '1',
      name: 'bulbasaur',
      order: 1,
      sprites: {
	front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
      }
    };
  }
};
