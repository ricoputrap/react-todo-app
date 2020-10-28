import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

function Todos(props) {
    return props.todos.map(todo => (
        // <p key={ todo.id }>{ todo.title }</p>
        <TodoItem
            key={ todo.id }
            todo={ todo } />
    ));
};

Todos.propTypes = {
    todos: PropTypes.array.isRequired,
}

export default Todos;