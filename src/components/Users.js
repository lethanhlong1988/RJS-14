import { useState } from "react";
import User from "./User.js";

import classes from "./Users.module.css";

const DUMMY_USERS = [
  { id: "u1", name: "Max" },
  { id: "u2", name: "Manuel" },
  { id: "u3", name: " Julie" },
];

const Users = () => {
  const [showUsers, setShowUsers] = useState(true);

  const toggleUsersHandler = () => {
    console.log("show");
    setShowUsers((curState) => !curState);
  };

  const usersList = (
    <ul>
      {DUMMY_USERS.map((user) => (
        <li key={user.id}>
          <User />
        </li>
      ))}
    </ul>
  );
  return (
    <div classes={classes.users}>
      <button onClick={toggleUsersHandler}>
        {showUsers ? "Hide" : "Show"}
      </button>
      {showUsers && usersList}
    </div>
  );
};

export default Users;
