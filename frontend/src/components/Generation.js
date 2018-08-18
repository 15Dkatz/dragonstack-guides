import React, { Component } from 'react';

const DEFAULT_GENERATION = { generationId: '', expiration: '' }

class Generation extends Component {
  state = { generation: DEFAULT_GENERATION };

  componentDidMount() {
    this.fetchGeneration();
  }

  fetchGeneration = () => {
    fetch('http://localhost:3000/generation')
      .then(response => response.json())
      .then(json => { 
        console.log('json', json)

        this.setState({ generation: json.generation });
      })
      .catch(error => console.error('error', error));
  };

  render() {
    const { generation } = this.state;

    return (
      <div>
        <h3>Generation {generation.generationId}. Expires on:</h3>
        <h4>{new Date(generation.expiration).toString()}</h4>
      </div>
    )
  }
}

export default Generation;