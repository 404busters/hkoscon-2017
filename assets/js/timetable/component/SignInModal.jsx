// @flow

import React from 'react';
import $ from 'jquery';
import classNames from 'classnames';
import type { User } from '../../reducers/user';
import {
  signOut,
} from '../../auth';

type Props = {
  user: ?User,
  position: 'navbar' | 'sidebar',
}

export default class SigninModal extends React.Component {
  componentDidMount() {
    $('#signin-modal').modal();
  }

  props: Props;

  handleButtonClick(auth: boolean) {
    return auth ? signOut : () => { $('#signin-modal').modal('open'); };
  }

  render() {
    const auth = this.props.user !== null;
    const button = `Sign ${auth ? 'Out' : 'In'}`;
    const className = classNames('waves-effect', 'waves-teal');
    return (
      <a data-role="auth" className={className} onClick={this.handleButtonClick(auth)}>{button}</a>
    );
  }
}
