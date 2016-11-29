import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLList
} from 'graphql';
import Favorite from './favorite';

export default new GraphQLObjectType({
  name: 'User',
  fields: {
    id: { type: GraphQLID },
    email: { type: GraphQLString },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    userName: { type: GraphQLString },
    companyName: { type: GraphQLString },
    favorites: {
      type: new GraphQLList(Favorite),
      resolve() {
        return [{ id: 1, userId: 1, repositoryId: 1}];
      }
    }
  }
})
