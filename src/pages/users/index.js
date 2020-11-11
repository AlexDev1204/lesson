import React, { useState, useEffect } from "react";

import Api from "../../helpers/api";
import Table from "../../components/table";

export const Users = () => {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    Api.getUsers().then((users) => setUsers(users));
  }, []);

  return (
    <div>
      <Table users={users} />
    </div>
  );
};
