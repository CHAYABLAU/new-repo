import React, { Component } from 'react';
import { useHistory } from "react-router-dom"


const Post = (props) => {

  const history = useHistory()
  const onDeleteClick = (post) => {

    props.deletePost(post)
    
  }

  const editPost = (id) => {

    history.push(`/EditPost/${id}`)
  }


  return (
    <div><div className="card text-white bg-dark mb-3 display" style={{ maxWidth: "22rem" }}>
      <div className="card-header bg-secondary mb-3">{props.post.title}</div>
      <div className="card-body">
        
        <p className="card-text">post id :{props.post.id}</p>
        <p className="card-text">{props.post.body}</p>
        <button type="button" class="btn btn-outline-secondary" onClick={() => editPost(props.post.id)}> Edit</button>
        <button type="button" class="btn btn-outline-secondary" onClick={() => onDeleteClick(props.post)}>delete</button>
        <button type="button" class="btn btn-outline-secondary" onClick={() => onDeleteClick(props.post)}>delete</button>
      </div>
    </div>

    </div>
  );
}

export default Post;
