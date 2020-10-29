import Todos from '../todos/Todos';
import "./styles/home.css";

function Home(props) {
    return (
        <main>
            <Todos todos={ props.todos } />
        </main>
        
    )
}

export default Home;