import TodoItem from './TodoItem';
import PropTypes from 'prop-types';
import "./style/todos.css";

function Todos(props) {
    return (
        <section className="container">
            {
                props.todos.map(todo => (
                    <TodoItem key={ todo.id } todo={ todo } />
                ))
            }
        </section>
    );
};

Todos.propTypes = {
    todos: PropTypes.array.isRequired,
}

export default Todos;