import React from 'react';
import "./style/todo-item.css";
// import PropTypes from 'prop-types';

class TodoItem extends React.Component {
    markComplete = (e) => {
        console.log("COMPLETE");
        console.log(this.props);
        console.log(e);
    }

    editTodo = (e) => {
        console.log("EDIT");
        console.log(e);
    }

    delTodo = (e) => {
        console.log("DELETE");
        console.log(e);
    }

    render() {
        const { title } = this.props.todo;
        return (
            <div className="item">
                <div>
                    <input type="checkbox" onChange={ this.markComplete } />
                    <p>{ title }</p>
                </div>
                <div>
                    <button className="btn btn--tosca" onClick={ this.editTodo }>e</button>
                    <button className="btn btn--red" onClick={ this.delTodo }>x</button>
                </div>
            </div>
        )
    }
}

export default TodoItem;