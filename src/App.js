import React from 'react';
import Header from './components/layout/Header';
import Home from './components/pages/Home';
import axios from 'axios';
import './App.css';

class App extends React.Component {
  state = {
    todos: []
  };

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then(res => this.setState({ todos: res.data }))
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Home todos={ this.state.todos } />
      </div>
    )
  }
}

export default App;
