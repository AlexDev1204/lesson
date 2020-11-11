import React, { useEffect, useState } from "react";

import Api from "../../helpers/api";
import { List } from "../../components/list";

export const Todo = () => {
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    Api.getTodos().then((t) => {
      console.log(t);
      setTodo(t);
    });
  }, []);

  return (
    <div>
      <List data={todo} />
    </div>
  );
};
