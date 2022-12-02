import {ApolloClient, InMemoryCache} from "@apollo/client";
import {offsetLimitPagination} from "@apollo/client/utilities";
import { API_URL } from "../constants/repo";

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        ships: offsetLimitPagination()
      }
    }
  }
});

const client = new ApolloClient({
  uri: API_URL,
  cache,
  connectToDevTools: true,
});

export default client;