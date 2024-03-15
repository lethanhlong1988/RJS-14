import { Component } from "react";

import classes from "./Users.module.css";

// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };

class User extends Component {
  render() {
    return <li className={classes.user}>{this.props.name}</li>;
  }
}

export default User;
