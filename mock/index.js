import { mockServer, MockList } from 'graphql-tools';
import casual from 'casual';
import schema from '../schema';

export default mockServer(schema, {
  RootQuery: () => ({
    user: (o, { id }) => ({ id }),
    repository: (o, { id }) => ({ id }),
  }),
  Repository: () => ({
    title: casual.title,
    description: casual.sentences(5),
    favorites: () => new MockList([3, 7], (repository) => ({ repositoryId: repository.id }))
  }),
  User: () => ({
    email: casual.email,
    firstName: casual.first_name,
    lastName: casual.last_name,
    userName: casual.user_name,
    companyName: casual.company_name,
    favorites: () => new MockList([3, 7], (user) => ({ userId: user.id }))
  }),
});
