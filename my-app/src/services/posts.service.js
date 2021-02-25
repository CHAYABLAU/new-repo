
import axios from "axios";
const getPost = () => {
    return axios.get("https://jsonplaceholder.typicode.com/posts") 
  };

  export default {
    getPost
  };