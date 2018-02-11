import React, { Component } from "react";
import Post from "./Post";

const URL = "https://hacker-news.firebaseio.com/v0/topstories.json";

const processItems = items => items.slice(0, 5);

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }
  componentDidMount() {
    fetch(URL, {
      "Content-type": "application/json"
    })
      .then(response => response.json())
      .then(json => this.setState({ items: processItems(json) }));
  }

  render() {
    return (
      <div>
        {this.state.items.map(post => {
          return <Post key={post} id={post} />;
        })}
      </div>
    );
  }
}

export default Posts;
