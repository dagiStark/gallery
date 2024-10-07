import * as api from "../api";

// ACTIONS

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();

    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log({ Error: error.message });
  }
};


export const createPost = (newPost) => async (dispatch) => {
  try {
    const { data } = await api.createPost(newPost);

    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log({ Error: error.message });
  }
};

 