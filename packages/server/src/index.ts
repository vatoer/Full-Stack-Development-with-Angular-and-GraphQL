import express, { Application } from "express";
import { ApolloServer, ApolloServerOptions } from "@apollo/server";
import { expressMiddleware } from '@apollo/server/express4';
import cors from 'cors';
import { json } from 'body-parser';
import { gql } from '@apollo/client/core';
import { IResolvers } from "@graphql-tools/utils";
import schema from "./graphql/schema";

async function startApolloServer() {
    const PORT = 8080;
    const app: Application = express();

    const server: ApolloServer = new ApolloServer({schema});

    await server.start()
    server.assertStarted('expressMiddleware()');
    app.use('/graphql', cors<cors.CorsRequest>(), json(), expressMiddleware(server));

    app.listen(PORT, () => {
        console.log(`Server is running at http://localhost:${PORT}`);
    })
}

startApolloServer();
