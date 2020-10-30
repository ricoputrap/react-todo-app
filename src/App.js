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

  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;
      })
    });
  }

  deleteTodo = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res => this.setState({ todos: this.state.todos.filter(todo => todo.id !== id) }));
  }

  addTodo = (title) => {
    axios.post(`https://jsonplaceholder.typicode.com/todos`, {
      title,
      completed: false
    })
      .then(res => this.setState({ todos: [...this.state.todos, res.data]}));
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Home 
          todos={ this.state.todos } 
          markComplete={ this.markComplete }
          deleteTodo={ this.deleteTodo }
          addTodo={ this.addTodo } />
      </div>
    )
  }
}

export default App;
