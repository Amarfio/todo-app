import { useState } from "react";
import { Link } from "react-router-dom";

const TodoDataDisplay = (props) => {
  const todo = props.details;
  const [isPending, setIsPending]= useState(false);
  const [buttonText, setButtonText] = useState("Update Status");
  //   const [startDateTimeValue, setStartDateTimeValue] = useState("");
  //   const [endDateTimeValue, setEndDateTimeValue] = useState("");
  //   const title = props.title;
  //   console.log(todo.startDateTime);
  const startDateTimeValue = new Date(todo.startDateTime);
  const endDateTimeValue = new Date(todo.endDateTime);

  //   console.log(newDate.toLocaleString());
  //   setStartDateTimeValue(newDate.toLocaleString());

  const handleSubmit=(e)=>{
    e.preventDefault();

    // const 
  }
  return (
    <form onSubmit={""}>
      <label>Title</label>
      <input
        type="text"
        required
        value={todo.title}
        // onChange={(e) => setTitle(e.target.value)}
      />

      <label>Description</label>
      <textarea
        required
        value={todo.description}
        // onChange={(e) => setDescription(e.target.value)}
      ></textarea>

      <label>Start date:</label>
      <input
        type="datetime-locale"
        value={startDateTimeValue.toLocaleString()}
        // onChange={(e) => setStartDate(e.target.value)}
      />

      <label>End date:</label>
      <input
        type="datetime-locale"
        value={endDateTimeValue.toLocaleString()}
        // onChange={(e) => setEndDate(e.target.value)}
      />

    <label>Status:</label>
      <select id="">
        <option value=""></option>
        <option value="1">in progress</option>
        <option value="2">completed</option>
        {/* <option value="3"></option> */}
      </select>

        {!isPending && <button type="submit">{buttonText}</button>}
        {isPending && <button type="submit">{buttonText}</button>}
    </form>
  );
};

export default TodoDataDisplay;
