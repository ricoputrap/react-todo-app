import PropTypes from 'prop-types';

function Todos(props) {
    return props.todos.map(todo => (
        <p key={ todo.id }>{ todo.title }</p>
    ));
};

Todos.propTypes = {
    todos: PropTypes.array.isRequired,
}

export default Todos;