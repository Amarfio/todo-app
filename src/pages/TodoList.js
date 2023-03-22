import {Link} from "react-router-dom";

const TodoList = (props) => {

    const todos = props.todos;
    const title = props.title;

    return ( 
        <div className="blog-list">
            <h2>{ title }</h2>
            {todos.map((todo) => (
                <div className="blog-preview" key={todo.id}>
                    <Link to={`/todos/${todo.id}`}>
                        <h2>{todo.description}</h2>
                        <p>Title: {todo.title}</p>
                    </Link>
                </div>
            ))}
        </div>
     );
}
 
export default TodoList;