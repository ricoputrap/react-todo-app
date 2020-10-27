import React from 'react';
import Header from './components/layout/Header';
import Todos from './components/Todos';
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
        <React.Fragment>
          <Todos todos={ this.state.todos } />
        </React.Fragment>
      </div>
    )
  }
}

export default App;
