import React from 'react';
import './style/add-todo.css';
// import PropTypes from 'prop-types';

class AddTodo extends React.Component {
    state = {
        title: ''
    }

    /**
     * Updating `title` value in `style` based on `input` value named `title` in the form.\
     * `[e.target.name]` - diambil dari value atribut `name` dalam tag `input`.
     * `e.target.value` - diambil dari `value` milik tag `input`.
     */
    updateTitle = (e) => this.setState({ [e.target.name]: e.target.value })

    onSubmit = (e) => {
        console.log("SUBMIT")
    }

    render() {
        return (
            <section className="add-todo container">
                <form onSubmit={ this.onSubmit } className="form-add-todo">
                    <input
                        type="text"
                        name="title"
                        placeholder="Add todo..."
                        className="form-add-todo__input"
                        value={ this.state.title }
                        onChange={ this.updateTitle } />
                    <button className="btn btn--ok form-add-todo__btn">ADD</button>
                </form>
            </section>
        )
    }
}

export default AddTodo;