import React, { Component } from "react";

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: {
        url: undefined,
        title: undefined,
      }
    };
  }
  componentDidMount() {
    const URL = `https://hacker-news.firebaseio.com/v0/item/${this.props
      .id}.json`;
    fetch(URL, {
      "Content-type": "application/json"
    })
      .then(response => response.json())
      .then(json => this.setState({ item: json }));
  }

  render() {
    return (
      <div>
        <a href={this.state.item.url}>{this.state.item.title}</a>
      </div>
    );
  }
}

export default Post;
