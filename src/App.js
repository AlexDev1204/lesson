import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import { connect } from "react-redux";

import "./App.css";
//components
import Header from "./components/header";
import { Footer } from "./components/footer";

import Users from "./pages/users";
import Posts from "./pages/posts";
import Todo from "./pages/todo";
import Comments from "./pages/comments";
import { Comment } from "./pages/singleComment";
import { Loader } from "./components/loader";

import Api from "./helpers/api";
//actions
import { onSetData, onReady } from "./store/actions";

class App extends React.Component {
  getInitialData = async () => {
    const { onSetData, onReady } = this.props;

    const users = await Api.getUsers();
    if (users) onSetData("SET USERS", { users });

    const comments = await Api.getComments();
    if (comments) onSetData("SET COMMENTS", { comments });

    const posts = await Api.getPosts();
    if (posts) onSetData("SET POSTS", { posts });

    const todos = await Api.getTodos();
    if (todos) onSetData("SET TODOS", { todos });

    onReady();
  };

  componentDidMount() {
    this.getInitialData();
  }

  render() {
    if (!this.props.dataIsReady) {
      return <Loader />;
    } else
      return (
        <div className="App">
          <Header />
          <div className="wrapper">
            <Switch>
              <Route
                exact
                path="/"
                component={(props) => {
                  setTimeout(() => {
                    props.history.push("/users");
                  }, 0);

                  return null;
                }}
              />
              <Route exact path="/users" component={Users} />
              <Route exact path="/comments" component={Comments} />
              <Route exact path="/comment/:id" component={Comment} />
              <Route exact path="/todos" component={Todo} />
              <Route exact path="/posts" component={Posts} />
              <Route component={() => <div>404</div>} />
            </Switch>
          </div>
          <Footer />
        </div>
      );
  }
}

const mapStateToProps = (state) => ({ dataIsReady: state.dataIsReady });

export default connect(mapStateToProps, { onSetData, onReady })(App);
