const SingleTodo = ({ name }) => {
    return ( 
        <div className="flex flex-col justify-between pb-2 mb-6 border-b border-gray-200 shadow-sm gap-y-2 sm:gap-y-0 sm:pb-3 sm: sm:flex-row">
            <div className="flex items-center gap-x-2 sm:gap-x-4">
              <input type="checkbox" />
              <h2>{ name }</h2>
            </div>
            <button className="self-start sm:self-auto">Delete</button>
        </div>
    );
}
 
export default SingleTodo;