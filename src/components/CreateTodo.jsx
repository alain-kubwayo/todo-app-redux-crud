const CreateTodo = () => {
    return ( 
        <div className="relative bg-red-500">
          <input 
            type="text"
            placeholder="Add todo..."
            className="w-full px-1 py-2 border-b outline-none border-sky-700"
          />
          <button className="absolute flex items-center justify-center w-6 h-6 text-lg text-white rounded-xl top-1/4 right-2 text-gray-700/50 bg-sky-700">+</button>
        </div>
    );
}
 
export default CreateTodo;