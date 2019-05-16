import React from 'react';
import './App.css';
import Login from './components/Login';
import Home from './components/Home';
import { Route } from 'react-router-dom';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return(
      <div>
        <Route path='/' exact component={Login} />
        <Route path='/home' exact component={Home} />
      </div>
    );
  }
}


export default App;
