import React, { Component } from "react";
import { connect } from "react-redux";

class Users extends Component {
  render() {
    return (
      <div>
        <ul>
          Users!
          {this.props.users.map((user) => (
            <li>
              {user.username} - {user.hometown}
            </li>
          ))}
          <p>Numer of users: {this.props.users.length}</p>
        </ul>
      </div>
    );
  }
}

export default connect((state) => ({
  users: state.users,
}))(Users);
