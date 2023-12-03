import { useState } from "react";
import { Link } from "react-router-dom";

const TodoDataDisplay = (props) => {
  const todo = props.details;
  //   const [startDateTimeValue, setStartDateTimeValue] = useState("");
  //   const [endDateTimeValue, setEndDateTimeValue] = useState("");
  //   const title = props.title;
  //   console.log(todo.startDateTime);
  const startDateTimeValue = new Date(todo.startDateTime);
  const endDateTimeValue = new Date(todo.endDateTime);
  //   console.log(newDate.toLocaleString());
  //   setStartDateTimeValue(newDate.toLocaleString());
  return (
    <>
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
    </>
  );
};

export default TodoDataDisplay;
