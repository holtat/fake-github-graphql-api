import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLInt
} from 'graphql';

export default new GraphQLObjectType({
  name: 'Favorite',
  fields: {
    id: { type: GraphQLID },
    userId: { type: GraphQLInt },
    repositoryId: { type: GraphQLInt }
  }
})
