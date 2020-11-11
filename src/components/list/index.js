import React, { useState, useEffect } from "react";

import "../table/table.css";

export const List = ({ name }) => {
  const [todos, setTodos] = useState([]);
  const [load, setLoad] = useState(true);
  const [filter, setFilter] = useState("all");

  const getInfo = async () => {
    const info = await fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((json) => {
        setLoad(false);
        json.length = 10;
        setTodos(json);
      });

    if (info) setTodos(info);
  };

  useEffect(() => {
    getInfo();
  }, []);

  const onChangeStatus = (id) => () => {
    const _todos = [...todos];
    const index = _todos.findIndex((t) => t.id === id);
    _todos[index].completed = !_todos[index].completed;
    setTodos(_todos);
  };

  const renderList = () => {
    return todos
      .filter((e) => {
        if (filter === "all") return e;
        else if (filter === "done") return e.completed;
        else return !e.completed;
      })
      .map(({ userId, title, id, completed }) => (
        <div key={id} className={completed ? "row-done" : "row-light"}>
          <div className="ceil">{id}</div>
          <div className="ceil">{userId}</div>
          <div className="ceil">{title}</div>
          <div className="ceil">{String(completed)}</div>
          <div className="ceil">
            <button onClick={onChangeStatus(id)} className={`status ${completed ? "done" : "undone"}`}>
              Set {completed ? "undone" : "done"}
            </button>
          </div>
        </div>
      ));
  };

  const onSetFilter = (filter) => () => {
    setFilter(filter);
    window.scrollTo({ left: 0, top: 10000000, behavior: "smooth" });
  };

  if (load) return <div>...wait</div>;
  else {
    return (
      <div className="users">
        <h4>{name}</h4>
        <button onClick={onSetFilter("all")} className={`sort ${filter === "all" ? "active" : ""}`}>
          All
        </button>
        <button onClick={onSetFilter("done")} className={`sort ${filter === "done" ? "active" : ""}`}>
          Done
        </button>
        <button onClick={onSetFilter("undone")} className={`sort ${filter === "undone" ? "active" : ""}`}>
          Undone
        </button>
        {todos.length ? renderList() : <div>no todos</div>}
      </div>
    );
  }
};
