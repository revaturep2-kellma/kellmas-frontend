import React from 'react';
import './App.css';
import Login from './components/Login';
import Home from './components/Home';
import SignUp from './components/SignUp';
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
        <Route path='/signup' exact component={SignUp} />
      </div>
    );
  }
}


export default App;
