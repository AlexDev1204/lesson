import { createStore } from "redux";

const fav = localStorage.getItem("favorites");
const buy = localStorage.getItem("basket");

const initialState = {
  users: [],
  posts: [],
  comments: [],
  todos: [],
  dataIsReady: false,
  message: "",
  favorites: fav ? JSON.parse(fav) : [],
  basket: buy ? JSON.parse(buy) : [],
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
    case "ADD TO FAVORITE":
      return { ...state, favorites: action.payload.favorites };
    case "ADD TO BASKET":
      return { ...state, basket: action.payload.basket };
    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;
