import {ApolloClient, InMemoryCache} from "@apollo/client";
import {offsetLimitPagination} from "@apollo/client/utilities";

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
  uri: "http://coding-challenge-a8s934ksd.eu-central-1.elasticbeanstalk.com/graphql",
  cache,
  connectToDevTools: true,
});

export default client;