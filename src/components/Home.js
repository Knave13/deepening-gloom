import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import withAuthorization from './auth/withAuthorization';
import { db } from './firebase';

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: null,
    };
  }

  componentDidMount() {
    const { onSetUsers } = this.props;

    // db.onceGetUsers().then(snapshot =>
    //   onSetUsers(snapshot.val())
    // );
    db.onceGetUsers().then(users => {
      //let existingUsers = [];
      let output = {}
      users.forEach(user => {
        let userData = user.data();
        output[user.id] = userData

      });
      onSetUsers(output);
    });
  }

  render() {
    const { users } = this.props;

    return (
      <div>
        <h1>Home</h1>
        <p>The Home Page is accessible by every signed in user.</p>
        { !!users && <UserList users={users} /> }
      </div>
    );
  }
}
const UserList = ({ users }) =>
  <div>
    <h2>List of Usernames of Users</h2>
    <p>(Saved on Sign Up in Firebase Database)</p>
    Users: {users.length}
    {Object.keys(users).map(key =>
      <div key={key}>Email: {users[key].email} Username: {users[key].username} Role: {users[key].role} Level: {users[key].data.level}</div>
    )}
  </div>

const mapStateToProps = (state) => ({
  users: state.userState.users,
});

const mapDispatchToProps = (dispatch) => ({
  onSetUsers: (users) => dispatch({ type: 'USERS_SET', users }),
});

const authCondition = (authUser) => !!authUser;

export default compose(
  withAuthorization(authCondition),
  connect(mapStateToProps, mapDispatchToProps)
)(HomePage);