import CreateTodo from "./components/CreateTodo";
import SingleTodo from "./components/SingleTodo";
import Title from "./components/Title";
import { todos } from "./fakeTodos";

function App() {
  return (
    <div className="w-2/3 px-4 mx-auto md:w-1/2 sm:px-8 lg:px-16">
      <Title title="todos" />
      <CreateTodo />
      <div className="my-10">
        {todos.map(todo => <SingleTodo key={todo.id} {...todo} />)}
      </div>
    </div>
  );
}

export default App;
