import React, { Component } from 'react';
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import * as PostAction from '../actions/post'
import { Redirect } from 'react-router'
import EditPost from './EditPost'
import Post from './post'

class AllPost extends Component {
  
  // constructor() {
  // }
  componentDidMount() {
    this.props.getAllPost()
  }

  render() {
    return (

      this.props.posts.map(post => {
        return (
            <div>
              <div key={post.id}>
             
                  <Post key={post.id}  post={post} deletePost={this.props.deletePost} />
          </div>             
          </div>        
        )
      })

    );
  }
}

function mapStateToProps(state) {
  return {

    posts: state.post

  };
}

function mapDispatchToProps(dispatch) {
  return {
    // getAllPost: bindActionCreators(PostAction.loadPost, dispatch),
    deletePost: bindActionCreators(PostAction.deletePost, dispatch),
    getAllPost: bindActionCreators(PostAction.getAllPostsStore, dispatch),

  }

}

export default connect(mapStateToProps, mapDispatchToProps)(AllPost);