import {ApolloClient, InMemoryCache} from "@apollo/client";

const client = new ApolloClient({
  uri: "http://coding-challenge-a8s934ksd.eu-central-1.elasticbeanstalk.com/graphql",
  cache: new InMemoryCache(),
  connectToDevTools: true,
});

export default client;