import Todos from '../todos/Todos';

function Home(props) {
    return (
        <main>
            <Todos todos={ props.todos } />
        </main>
        
    )
}

export default Home;