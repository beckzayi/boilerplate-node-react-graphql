import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ApolloClient from "apollo-boost";
import { ApolloProvider, Query } from "react-apollo";
import gql from "graphql-tag";

const GRAPHQL_API = 'https://api-apeast.graphcms.com/v1/cjsl9264j12mt01ckp2soo2rt/master';

const client = new ApolloClient({
  uri: GRAPHQL_API // the single endpoint for our GraphQL server
});

const POSTS_QUERY = gql`
  {
    posts {
      id
      title
      body
      createdAt
    }
  }
`;

// Run the query outside of React for test purpose
client.query({
  query: POSTS_QUERY
}).then(res => console.log(res));

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <Query query={POSTS_QUERY}>
          {({ data, loading }) => {
            if (loading) return <div>loading</div>
            const { posts } = data;
            return posts.map(post => <h4 key={post.id}>{post.title}</h4>)
          }}
        </Query>
      </div>
      </ApolloProvider>
    );
  }
}

export default App;
