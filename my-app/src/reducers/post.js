import { LOAD_POSTS, DELETE_POST, CREATE_POST, EDIT_POST ,GET_ALL_POSTS_STORE} from "../actions/types";

const initialState = [];

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case LOAD_POSTS:
      return payload.data;
    case DELETE_POST:
      return state.filter(post => post.id != action.post.id)
    case GET_ALL_POSTS_STORE:
      return state;
    case CREATE_POST:
      console.log(state)
      let x = [...state, action.payload];
      console.log(x);
      // let state=state.concat(action.payload)
      // console.log(state)
      return x;
    // return [...state, {...action.post}];
    //       return state.concat([action.data]);
    case EDIT_POST:
      return state.map((post) => post.id === action.id ? action.post : post);

    default:
      return state;
  }
}





