import express from 'express';
import { ApolloServer } from 'apollo-server-express';

export default async function startApolloServer(typeDefs: any, resolvers: any) {
  const server = new ApolloServer({ typeDefs, resolvers });

  await server.start();

  const app = express();
  server.applyMiddleware({ app });

  const PORT = process.env.PORT;

  app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
  });
}
