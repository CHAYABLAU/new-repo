import { LOAD_POSTS, DELETE_POST,CREATE_POST, EDIT_POST,GET_ALL_POSTS_STORE } from './types'
import PostService from '../services/posts.service'

export const loadPost = () => (dispatch) => {
    return PostService.getPost().then(
        (data) => {
            dispatch({
                type: LOAD_POSTS,
                payload: data,
            });
        return Promise.resolve();
        }

    ).catch()

};

export const deletePost = (post) => (dispatch) => {
    dispatch({
        type: DELETE_POST,
        post,
    });
}
export const getAllPostsStore = () => (dispatch) => {
    dispatch({
        type: GET_ALL_POSTS_STORE,
      
    });
}

export const CreateNewPost =(post)=> (dispatch)=>{
    dispatch({
        type:CREATE_POST,
        payload:post
    })
}
export const EditPost =(post)=> (dispatch)=>{
    dispatch({
        type:EDIT_POST,
        post
    })
}

    