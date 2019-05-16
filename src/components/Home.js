import React from 'react';
import { BASE_URL } from '../config';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  someFunc() {
    const authToken = localStorage.getItem('authToken');

    fetch(`${BASE_URL}/main/`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${authToken}`
      }
    })
      .then(res => res.json())
      .then(res => console.log(res))
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div className="homeCon">
        <h1>Kellma Home</h1>

        <button onClick={() => this.props.history.push('/')}>Back to Login</button>

        <button onClick={() => this.someFunc()}>fetch</button>
      </div>
    );
  }
}

export default Home;
