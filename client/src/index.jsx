// A future update, we will store localstorage data.

import {
  ApolloClient,
  NormalizedCacheObject,
  ApolloProvider,
  gql,
} from "@apollo/client";

export const typeDefs = gql`
  extend type Query {
    isLoggedIn: Boolean!
    cartItems: [ID!]!
  }
`;
