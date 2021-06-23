import {
  ApolloClient,
  InMemoryCache,
  createHttpLink
} from "@apollo/client";
import { setContext } from '@apollo/client/link/context';

const githubHttpLink = createHttpLink({
  uri: 'https://api.github.com/graphql'
});

const githubAuthLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN}`,
    }
  }
});

const shopifyHttpLink = createHttpLink({
  uri: 'https://quikly-inc-dev-store.myshopify.com/api/2021-04/graphql.json'
});

const shopifyAuthLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      'Content-Type': 'application/graphql',
      'X-Shopify-Storefront-Access-Token': process.env.REACT_APP_SHOPIFY_ACCESS_TOKEN
    }
  }
});

export const shopifyClient = new ApolloClient({
  link: shopifyAuthLink.concat(shopifyHttpLink),
  cache: new InMemoryCache(),
});

export const githubClient = new ApolloClient({
  link: githubAuthLink.concat(githubHttpLink),
  cache: new InMemoryCache(),
});
