import React, { Component } from 'react';
import DragonAvatar from './DragonAvatar';

class AccountDragonRow extends Component {
  render() {
    return (
      <div>
        <div>{this.props.dragon.nickname}</div>
        <br />
        <DragonAvatar dragon={this.props.dragon} />
      </div>
    )
  }
}

export default AccountDragonRow;