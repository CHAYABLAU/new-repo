
import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from "redux"
import * as PostAction from '../actions/post'

class CreatePost extends Component {
constructor(props){
super(props);
this.handleSubmit = this.handleSubmit.bind(this);
    this.state={
        idpost:this.props.posts.length
    }
}

    handleSubmit = (e) => {
        e.preventDefault();
        const title = this.getTitle.value;       
        const body = this.getBody.value;
        const post = {    
            // id: this.setState({idpost:idpost+1}),     
            title,          
            body
        }
        this.props.CreateNewPost(post);
        // console.log("idpost"+idpost);

        this.getTitle.value = '';
        this.getBody.value = '';
       console.log(this.props.posts.length) 
    }
    render() {
        
        return (
            <div>
                <h1>Create Post</h1>
                <form onSubmit={this.handleSubmit}>
                    <input required type="text" ref={(input) => this.getTitle = input}
                        placeholder="Enter Post Title" />
                    <br />

                    <textarea required rows="5" ref={(input) => this.getBody = input} cols="28"
                        placeholder="Enter Post Massege" />
                    <br />
                    <button>Post</button>
                </form>
            </div>
        );
    }
}
function mapDispatchToProps(dispatch) {
    return {
     CreateNewPost: bindActionCreators(PostAction.CreateNewPost, dispatch),
      
    }
  
  }
  function mapStateToProps(state) {
    return {
        posts: state.post
    
    };
  }

export default connect(mapStateToProps,mapDispatchToProps)(CreatePost);
// export default CreatePost;