// import { Link } from "react-router-dom";
import TodoList from './TodoList';
import useFetch from '../hooks/useFetch';
const Home = () => {
    const {data: todos, isPending, error } = useFetch('http://localhost:8081/todo-api/public/api/v1/todos');
    console.log(todos);
    return ( 
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {todos && <TodoList todos={todos} title="All Todos"/>}
        </div>
     );
}
 
export default Home;