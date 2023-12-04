import { useParams } from "react-router-dom";
// import useFetch from "../hooks/useFetch";
import useFetch from "../hooks/useFetch";
import { useState } from "react";
import { apiUrl } from "../utils/apiUrl";
import TodoDataDisplay from "./TodoDataDisplay";

const TodoDetails = () => {
  const { id } = useParams();
  const [buttonText, setButtonText] = useState("Update Task");
  const [dateTimeValue, setDateTimeValue] = useState("");
  console.log(id);

  // console.log(apiUrl + "todos/" + id);
  const { data: todo, isPending, error } = useFetch(apiUrl + "todos/" + id);
  console.log("test", todo);

  // return false;
  // setDateTimeValue(todo.startDateTime);
  // console.log("date type", typeof todo.startDateTime);
  // const dateString = new String(todo.startDateTime);
  // const dateValue = new Date(dateString);
  // console.log(dateValue);

  // console.log(startDate.toISOString());
  return (
    <div className="create">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {todo && (
        // <article>
        //   <h2>{todo.title}</h2>

        //   <p>{todo.description}</p>

        //   <br />

        //   <p>
        //     <span style={{ color: "green" }}>Start Date</span>:{" "}
        //     {todo.startdateTime}
        //     <span style={{ float: "right" }}>
        //       {" "}
        //       <span style={{ color: "red" }}>End Date</span>: {todo.enddateTime}
        //     </span>
        //   </p>
        //   <button>Deactivate</button>
        // </article>

        // {!isPending && <button type="submit">{buttonText}</button>}
        // {isPending && <button type="submit">{buttonText}</button>}
        <TodoDataDisplay details={todo} />
      )}
    </div>
  );
};

export default TodoDetails;
