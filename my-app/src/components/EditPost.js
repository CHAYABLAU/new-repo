import { bindActionCreators } from "redux"
import React, { Component } from 'react';
import * as PostAction from '../actions/post'
import { connect } from 'react-redux';
import queryString from 'query-string';

class EditPost extends Component {
  constructor(props){
    super(props);
        this.state={
            
        }
    }

  componentDidMount() {
    this.props.getAllPost()
  }
  // let params = queryString.parse(this.props.location.search)
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.props.id)

    const title = this.getTitle.value;
    const body = this.getBody.value;
    const post = {
      id: queryString.parse(this.props.location.id),
      title,
      body
    }

    this.props.EditPost(post)
    // this.props.dispatch({
    //   type: 'EDIT_POST',
    //   post
    // });
  }
  render() {
    return (

      <div>

        <h1>Edit Post</h1>
        <form onSubmit={this.handleSubmit}>
          <input required type="text" ref={(input) => this.getTitle = input}
            placeholder="Enter Post Title"  />
            {/* value={this.props.posts.filter(post => post.title == this.props.match.params.id)} */}
          <br />

          <textarea required rows="5" ref={(input) => this.getBody = input} cols="28"
            placeholder="Enter Post Massege" />

          <br /><br />
          <button>UpDate</button>
        </form>
      </div>
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
    EditPost: bindActionCreators(PostAction.EditPost, dispatch),
    getAllPost: bindActionCreators(PostAction.getAllPostsStore, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditPost);
