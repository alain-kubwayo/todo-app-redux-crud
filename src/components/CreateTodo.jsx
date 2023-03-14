import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

const CreateTodo = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState("");

    const createTodoHandler = e => {
        e.preventDefault();
        dispatch(addTodo({name, completed: false}));
        setName("");
    }
    
    return ( 
        <form className="relative bg-red-500" onSubmit={createTodoHandler}>
            <input 
                type="text"
                placeholder="Add todo..."
                className="w-full px-1 py-2 border-b outline-none border-sky-700"
                onChange={e => setName(e.target.value)}
                value={name}
            />
            <button 
                className="absolute flex items-center justify-center w-6 h-6 text-lg text-white rounded-xl top-1/4 right-2 text-gray-700/50 bg-sky-700"
            >+</button>
        </form>
    );
}
 
export default CreateTodo;