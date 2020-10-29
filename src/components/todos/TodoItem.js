import React from 'react';

import "./style/todo-item.css";
import pencilIcon from '../../img/pencil-icon.svg';
import trashIcon from '../../img/trash-icon.svg';
// import PropTypes from 'prop-types';

class TodoItem extends React.Component {
    completedStyle = () => {
        return {
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
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
        const { id, title } = this.props.todo;
        return (
            <div className="item">
                <div className="item__content">
                    <input type="checkbox" onChange={ this.props.markComplete.bind(this, id) } />
                    <p style={ this.completedStyle() }>{ title }</p>
                </div>
                <div>
                    <button className="btn-icon btn--tosca" >
                        <img src={ pencilIcon } alt="edit-icon" onClick={ this.editTodo }/>
                    </button>
                    <button className="btn-icon btn--red">
                        <img src={ trashIcon } alt="del-icon" onClick={ this.delTodo }/>
                    </button>
                </div>
            </div>
        )
    }
}

export default TodoItem;