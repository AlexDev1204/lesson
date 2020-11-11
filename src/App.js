import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";
//components
import { Header } from "./components/header";
import { Footer } from "./components/footer";

import { Users } from "./pages/users";
import { Posts } from "./pages/posts";
import { Todo } from "./pages/todo";
import { Comments } from "./pages/comments";
import { Comment } from "./pages/singleComment";

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="wrapper">
          <Switch>
            <Route exact path="/" component={() => <div>no route</div>} />
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
