import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import { PasswordForgetForm } from '../password/PasswordForget';
import PasswordChangeForm from '../password/PasswordChange';
import withAuthorization from './withAuthorization';

const AccountPage = ({ authUser }) =>
  <div>
    <h1>Account: {authUser.email}</h1>
    <PasswordForgetForm />
    <PasswordChangeForm />
  </div>

const mapStateToProps = (state) => ({
  authUser: state.sessionState.authUser,
});

const authCondition = (authUser) => !!authUser;

export default compose(
  withAuthorization(authCondition),
  connect(mapStateToProps)
)(AccountPage);