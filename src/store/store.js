import { createStore } from "redux";

const initialState = {
  users: [],
  posts: [],
  comments: [],
  todos: [],
  dataIsReady: false,
  message: "",
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "SET USERS":
      return { ...state, users: action.payload.users };
    case "SET POSTS":
      return { ...state, posts: action.payload.posts };
    case "SET COMMENTS":
      return { ...state, comments: action.payload.comments };
    case "SET TODOS":
      return { ...state, todos: action.payload.todos };
    case "DATA READY":
      return { ...state, dataIsReady: true };
    case "SET MESSAGE":
      return { ...state, message: action.payload.message };
    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;
