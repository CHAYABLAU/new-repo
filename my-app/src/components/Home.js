import React, { useState, useEffect } from "react";

import UserService from "../services/user.service";

const Home = () => {
 
  return (
    <div className="container">
      <header className="jumbotron">
        {/* <h3>{content}</h3> */}
        <h3>Welcome To Our Posts Site</h3>
      </header>
    </div>
  );
};

export default Home;