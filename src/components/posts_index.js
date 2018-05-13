import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts, deletePost } from '../actions';
import { Link } from 'react-router-dom';
import _ from 'lodash';

class PostsIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

onDeleteClick() {
  const id = this.props.posts.find(function(post) {
    return post.id;
  });
  this.props.deletePost(id, () => {
    this.props.history.push('/'); // this is being passed as the second argument to deletePost (action creator)
  });
}

renderPosts() {
  return _.map(this.props.posts, post => {
    return (
      <li className="list-group-item" key={post.id}>
        <Link to={`/posts/${post.id}`}>
          {post.title}
        </Link>
        <button
          className="btn btn-danger pull-xs-right"
          onClick={this.onDeleteClick.bind(this)}
        >
        Delete Post
        </button>
      </li>
      );
  });
}

  render() {
    return (
      <div>
        <div className="text-xs-right">
          <Link className="btn btn-primary" to="/posts/new">
            Add a post!
          </Link>
        </div>
        <h3>Posts</h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts};
}

export default connect(mapStateToProps, { fetchPosts, deletePost })(PostsIndex);
