import * as postsAPI from 'api';

import { Action, Dispatch } from 'redux';

// 포스트 여러개
const GET_POSTS = 'GET_POSTS';
const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
const GET_POSTS_ERROR = 'GET_POSTS_ERROR';

// 포스트 한개
const GET_POST = 'GET_POST';
const GET_POST_SUCCESS = 'GET_POST_SUCCESS';
const GET_POST_ERROR = 'GET_POST_ERROR';

export const getPosts = () => async (dispatch: Dispatch<Action>) => {
  dispatch({ type: GET_POSTS });
  try {
    const posts = await postsAPI.getPosts();
    dispatch({ type: GET_POSTS_SUCCESS, posts });
  } catch (error) {
    dispatch({ type: GET_POSTS_ERROR, error });
  }
};

export const getPost = (id: number) => async (dispatch: Dispatch<Action>) => {
  dispatch({ type: GET_POST });
  try {
    const posts = await postsAPI.getPosts(id);
    dispatch({ type: GET_POST_SUCCESS, posts });
  } catch (error) {
    dispatch({ type: GET_POST_ERROR, error });
  }
};

type postData = {
  id: number;
  title: string;
  body: string;
};

interface postState {
  posts: {
    loading: boolean;
    data: postData[] | null;
    error: string | null;
  };
  post: {
    loading: boolean;
    data: postData | null;
    error: string | null;
  };
}

const initialState: postState = {
  posts: {
    loading: false,
    data: null,
    error: null,
  },
  post: {
    loading: false,
    data: null,
    error: null,
  },
};

type postAction =
  | 'GET_POSTS'
  | 'GET_POSTS_ERROR'
  | 'GET_POSTS_SUCCESS'
  | 'GET_POST'
  | 'GET_POST_SUCCESS'
  | 'GET_POST_ERROR;';

export default function posts(state: postState = initialState, action: postAction) {
  switch (action.type) {
    case GET_POSTS: {
      return {
        ...state,
        posts: {
          loading: true,
          data: null,
          error: null,
        },
      };
    }
    case GET_POSTS_SUCCESS: {
      return {
        ...state,
        posts: {
          loading: true,
          data: action.posts,
          error: null,
        },
      };
    }
    case GET_POSTS_ERROR:
      return {
        ...state,
        posts: {
          loading: true,
          data: null,
          error: action.error,
        },
      };
    case GET_POST:
      return {
        ...state,
        post: {
          loading: true,
          data: null,
          error: null,
        },
      };
    case GET_POST_SUCCESS:
      return {
        ...state,
        post: {
          loading: true,
          data: action.post,
          error: null,
        },
      };
    case GET_POST_ERROR:
      return {
        ...state,
        post: {
          loading: true,
          data: null,
          error: action.error,
        },
      };
    default:
      return state;
  }
}
