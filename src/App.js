import CreateTodo from "./components/CreateTodo";
import SingleTodo from "./components/SingleTodo";
import Title from "./components/Title";
import { useSelector } from "react-redux";

function App() {
  const todos = useSelector(state => state.todos.value)
  
  return (
    <div className="w-2/3 px-4 mx-auto md:w-1/2 sm:px-8 lg:px-16">
      <Title title="todos" />
      <CreateTodo />
      <div className="my-10">
        {todos.length > 0 ? todos.map(todo => <SingleTodo key={todo.id} {...todo} />): <div>You are all caught up for now! 🏆</div>}
      </div>
    </div>
  );
}

export default App;
