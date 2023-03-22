import { useParams } from "react-router-dom";
// import useFetch from "../hooks/useFetch";
import useFetch from '../hooks/useFetch';

const TodoDetails = () => {

    const { id } = useParams();

    const { data:todo, isPending, error } = useFetch('http://localhost:8081/todo-api/public/api/v1/todos/'+id);
    console.log(todo);
    return ( 
        <div className="blog-details">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {todo && (
                <article>
                    <h2>{todo[0].title}</h2>
                    
                    <p>{todo[0].description}</p>
                    
                    <br/>

                    <p><span style={{color:"green"}}>Start Date</span>: {todo[0].startdateTime}
                    <span style={{float: "right"}}> <span style={{color: "red"}}>End Date</span>: {todo[0].enddateTime}</span>
                    </p>
                    {/* <p ></p> */}
                    <button>Deactivate</button>
                </article>
            )}
        </div>
     );
}
 
export default TodoDetails;