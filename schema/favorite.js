import {
  GraphQLObjectType,
  GraphQLID
} from 'graphql';

export default new GraphQLObjectType({
  name: 'Favorite',
  fields: {
    id: { type: GraphQLID },
    userId: { type: GraphQLID },
    repositoryId: { type: GraphQLID }
  }
})
