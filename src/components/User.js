import { Component } from "react";
import classes from "./User.module.css";

class User extends Component {
  //render method does not receive props instead we use the this keyword, and we also need to extends component from react
  render() {
    return <li className={classes.user}>{this.props.name}</li>;
  }
}

// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };

export default User;
