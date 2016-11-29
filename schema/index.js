import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLID,
  GraphQLNonNull
} from 'graphql';
import User from './user';
import Repository from './repository';

export default new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootType',
    fields: {
      user: {
        type: User,
        args: {
          id: {
            type: new GraphQLNonNull(GraphQLID)
          }
        },
        resolve(parent, { id }) {
          return { id, title: `User ${id}` };
        }
      },
      repository: {
        type: Repository,
        args: {
          id: {
            type: new GraphQLNonNull(GraphQLID)
          }
        },
        resolve(parent, { id }) {
          return { id, title: `Repository ${id}` };
        }
      }
    }
  })
});
