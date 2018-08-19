import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import DragonAvatar from './DragonAvatar';

const DEFAULT_DRAGON = {
  dragonId: '',
  generationId: '',
  nickname: '',
  birthdate: '',
  traits: []
};

class Dragon extends Component {
  state = { dragon: DEFAULT_DRAGON };

  componentDidMount() {
    this.fetchDragon();
  }

  fetchDragon = () => {
    fetch('http://localhost:3000/dragon/new')
      .then(response => response.json())
      .then(json => this.setState({ dragon: json.dragon }))
      .catch(error => console.error('error', error));
  }

  render() {
    return (
      <div>
        <Button onClick={this.fetchDragon}>New Dragon</Button>
        <DragonAvatar dragon={this.state.dragon} />
      </div>
    );
  }
}

export default Dragon;