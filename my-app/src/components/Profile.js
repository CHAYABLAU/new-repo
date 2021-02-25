import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import { connect } from "react-redux";

class Profile extends Component {

  render() {
    const { user: currentUser } = this.props;
    console.log(currentUser)
    console.log("from profil")
    if (!currentUser) {
      console.log("from not current profile")
      return <Redirect to="/login" />;
    }

    return (
      <div className="container">
        <header className="jumbotron">
          <h3>
            <strong>{currentUser.user.username}</strong> Profile 
          </h3>
        </header>
        
        <p>
          <strong>Id:</strong> {currentUser.user._id}
        </p>
        <p>
          <strong>Email:</strong> {currentUser.user.email}

        </p>

        {/* <strong>My Posts:</strong>
        <ul>
          {currentUser.posts &&
            currentUser.posts.map((post, index) => <li key={index}>{post}</li>)}
        </ul> */}
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { user } = state.auth;
  return {
    user,
  };
}

export default connect(mapStateToProps)(Profile);