import { connect } from "react-redux";
import Posts from "./Posts";
import { fetchPosts } from "../actions";

const mapStateToProps = (state) => {
  return {
    status: state.posts.status,
    posts: state.posts.items,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: () => dispatch(fetchPosts()),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
