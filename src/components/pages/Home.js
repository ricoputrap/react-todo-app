import Todos from '../todos/Todos';
import "./styles/home.css";

function Home(props) {
    return (
        <main>
            <Todos 
                todos={ props.todos }
                markComplete={ props.markComplete }
                delTodo={ props.deleteTodo } />
        </main>
        
    )
}

export default Home;