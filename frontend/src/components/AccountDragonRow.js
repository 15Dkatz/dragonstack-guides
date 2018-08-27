import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import DragonAvatar from './DragonAvatar';
import { BACKEND } from '../config';

class AccountDragonRow extends Component {
  state = {
    nickname: this.props.dragon.nickname,
    isPublic: this.props.dragon.isPublic,
    saleValue: this.props.dragon.saleValue,
    sireValue: this.props.dragon.sireValue,
    edit: false
  };

  updateNickname = event => {
    this.setState({ nickname: event.target.value });
  }

  updateSaleValue = event => {
    this.setState({ saleValue: event.target.value });
  }

  updateSireValue = event => {
    this.setState({ sireValue: event.target.value });
  }

  updateIsPublic = event => {
    this.setState({ isPublic: event.target.checked });
  }

  toggleEdit = () => {
    this.setState({ edit: !this.state.edit });
  }

  save = () => {
    fetch(`${BACKEND.ADDRESS}/dragon/update`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        dragonId: this.props.dragon.dragonId,
        nickname: this.state.nickname,
        isPublic: this.state.isPublic,
        saleValue: this.state.saleValue,
        sireValue: this.state.sireValue
      })
    }).then(response => response.json())
      .then(json => {
        if (json.type === 'error') {
          alert(json.message);
        } else {
          this.toggleEdit();
        }
      })
      .catch(error => alert(error.message));
  }

  get SaveButton() {
    return <Button onClick={this.save}>Save</Button>;
  }

  get EditButton() {
    return <Button onClick={this.toggleEdit}>Edit</Button>;
  }

  render() {
    return (
      <div>
        <input
          type='text'
          value={this.state.nickname}
          onChange={this.updateNickname}
          disabled={!this.state.edit}
        />
        <br />
        <DragonAvatar dragon={this.props.dragon} />
        <div>
          <span>
            Sale Value:{' '}
            <input
              type='number'
              disabled={!this.state.edit}
              value={this.state.saleValue}
              onChange={this.updateSaleValue}
              className='account-dragon-row-input'
            />
          </span>{' '}
          <span>
            Sire Value:{' '}
            <input
              type='number'
              disabled={!this.state.edit}
              value={this.state.sireValue}
              onChange={this.updateSireValue}
              className='account-dragon-row-input'
            />
          </span>{' '}
          <span>
            Public:{' '}
            <input
              type='checkbox'
              disabled={!this.state.edit}
              checked={this.state.isPublic}
              onChange={this.updateIsPublic}
            />
          </span>
          {
            this.state.edit ? this.SaveButton : this.EditButton
          }
        </div>
      </div>
    )
  }
}

export default AccountDragonRow;