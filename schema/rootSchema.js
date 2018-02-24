const graphql = require('graphql');
const pokemonType = require('../pokemon/pokemon');

const schema = new graphql.GraphQLSchema({
  query: new graphql.GraphQLObjectType({
    name: 'Query',
    fields: {
      pokemon: pokemonType
    }
  })
});

module.exports = schema;
