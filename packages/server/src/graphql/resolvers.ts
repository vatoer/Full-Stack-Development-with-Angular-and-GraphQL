import { IResolvers } from '@graphql-tools/utils';
const resolvers: IResolvers = {
  Query: {
    message: () => 'it works euy'
  }
};

export default resolvers;
