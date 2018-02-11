import React, { PureComponent } from "react";
import Post from "./Post";

class Posts extends PureComponent {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <div>
        {this.props.posts.map(post => {
          return <Post key={post.id} url={post.url} title={post.title} />;
        })}
      </div>
    );
  }
}

export default Posts;
