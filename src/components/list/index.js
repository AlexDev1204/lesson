import React, { useState } from "react";

import "../table/table.css";

export const List = ({ data }) => {
  const [todos, setTodos] = useState([...data]);
  const [filter, setFilter] = useState("all");

  const onChangeStatus = (id) => () => {
    const _todos = [...todos];
    const index = _todos.findIndex((t) => t.id === id);
    _todos[index].completed = !_todos[index].completed;
    setTodos(_todos);
  };

  const renderList = () => {
    return data
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
  };

  // if (!todos.length) return <div>...wait</div>;
  // else {
  return (
    <div className="users">
      <button onClick={onSetFilter("all")} className={`sort ${filter === "all" ? "active" : ""}`}>
        All
      </button>
      <button onClick={onSetFilter("done")} className={`sort ${filter === "done" ? "active" : ""}`}>
        Done
      </button>
      <button onClick={onSetFilter("undone")} className={`sort ${filter === "undone" ? "active" : ""}`}>
        Undone
      </button>
      {renderList()}
    </div>
  );
  // }
};
