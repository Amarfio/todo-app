// import { Link } from "react-router-dom";
import TodoList from "./TodoList";
import useFetch from "../hooks/useFetch";
import { apiUrl } from "../utils/apiUrl";
const Home = () => {
  const { data: todos, isPending, error } = useFetch(apiUrl + "todos");
  console.log(todos);
  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {todos && <TodoList todos={todos} title="All Todos" />}
    </div>
  );
};

export default Home;
