import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import Generation from './Generation';
import Dragon from './Dragon';
import AccountInfo from './AccountInfo';
import { logout } from '../actions/account';

class Home extends Component {
  render() {
    return (
      <div>
        <Button onClick={this.props.logout} className='logout-button'>
          Log Out
        </Button>
        <h2>Dragon Stack</h2>
        <Generation />
        <Dragon />
        <hr />
        <AccountInfo />
        <hr />
        <Link to='/account-dragons'>Account Dragons</Link>
        <br />
        <Link to='/public-dragons'>Public Dragons</Link>
      </div>
    );
  }
}

export default connect(null, { logout })(Home);