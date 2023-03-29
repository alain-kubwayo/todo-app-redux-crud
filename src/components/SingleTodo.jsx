import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, completeTodo, updateTodo } from "../features/todo/todoSlice";

const SingleTodo = ({ name, id, completed }) => {
    const dispatch = useDispatch();
    const [newName, setNewName] = useState("");

    const updateTodoHandler = e => {
        e.preventDefault();
        dispatch(updateTodo({id, name: newName}));
        setNewName("");
    }
    return ( 
        <div className="pb-2 mb-6 border-b border-gray-200 shadow-sm gap-y-2 sm:gap-y-0 sm:pb-3">
            <div className="flex flex-col justify-between sm:flex-row">
                <div className={`flex items-center gap-x-2 sm:gap-x-4 mb-4 ${completed ? 'line-through': ''}`}>
                <input type="checkbox" onChange={() => dispatch(completeTodo({id}))} />
                <h2>{ name }</h2>
                </div>
                <button 
                    className="self-start px-2 py-1 mb-2 bg-red-500 sm:self-auto"
                    onClick={() => dispatch(deleteTodo({id}))}
                >Delete</button>
            </div>
            <form className="flex justify-between" onSubmit={updateTodoHandler}>
                <input 
                    type="text"
                    placeholder="Update todo..."
                    className="border-b-2 outline-none border-sky-700"
                    onChange={e => setNewName(e.target.value)}
                    value={newName}
                />
                <button className="px-2 py-1 bg-sky-500">Update</button>
            </form>
        </div>
    );
}
 
export default SingleTodo;