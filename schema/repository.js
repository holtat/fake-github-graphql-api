import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLList
} from 'graphql';
import Favorite from './favorite';

export default new GraphQLObjectType({
  name: 'Repository',
  fields: {
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    favorites: {
      type: new GraphQLList(Favorite),
      resolve() {
        return [{ id: 1, userId: 1, repositoryId: 1}];
      }
    }
  }
})
