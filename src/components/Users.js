import { Component } from "react";

import { useState } from "react";
import User from "./User.js";

import classes from "./Users.module.css";

// const Users = () => {
//   const [showUsers, setShowUsers] = useState(true);

//   const toggleUsersHandler = () => {
//     console.log("show");
//     setShowUsers((curState) => !curState);
//   };

//   const usersList = (
//     <ul>
//       {DUMMY_USERS.map((user) => (
//         <User key={user.id} name={user.name} />
//       ))}
//     </ul>
//   );
//   return (
//     <div className={classes.users}>
//       <button onClick={toggleUsersHandler}>
//         {showUsers ? "Hide" : "Show"}
//       </button>
//       {showUsers && usersList}
//     </div>
//   );
// };

class Users extends Component {
  constructor() {
    super();
    this.state = {
      showUsers: true,
      more: "Test",
    };
  }

  toggleUsersHandler() {
    this.setState((curState) => {
      return { showUsers: !curState.showUsers };
    });
  }
  render() {
    const usersList = (
      <ul>
        {this.props.users.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );
    return (
      <div className={classes.users}>
        <button onClick={this.toggleUsersHandler.bind(this)}>
          {this.state.showUsers ? "Hide" : "Show"}
        </button>
        {this.state.showUsers && usersList}
      </div>
    );
  }
}

export default Users;
