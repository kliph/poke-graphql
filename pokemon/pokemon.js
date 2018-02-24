const graphql = require('graphql');
const client = require('./pokemon.client');

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
    return client.getPokemon(args.id);
  }
};
