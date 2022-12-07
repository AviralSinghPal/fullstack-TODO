import React, { useEffect, useState } from "react"
import axios from "axios"

export const TodoList = () => {
    const [todoData, setTodoData] = useState(null);
    // const [todoTaskData, setTodoTaskData] = useState(null);
    
    const fetchTodoData = async() =>{
      const resp = await axios.get("/getTodos");
      console.log(resp);
//if no title is there don't set values
      // if(resp.data.title.length > 0){
        setTodoData(resp.data.todos);
      // }
    };

    
// const fetchTask = async()=>{ 
//   const resp = axios.get("/getTask/:id");
//   console.log(resp);
// }
// it is a good practice to keep async await out of useEffect.(that's why we have explicitly written fetchUserData )


    useEffect(()=>{
      fetchTodoData();
    }, [todoData])

    // useEffect(()=>{
    //   fetchTask();
    // }, [todoTaskData])

    // handling edit ops
    const handleEdit = async (todo) =>{
      const title = prompt("Enter your new Todo");
      // const userEmail = prompt("Enter your new Mail ")
      
      if(!todo)
      {
        alert("Please enter todo")
      }
      else {
        const resp = await axios.put(`/editTodo/${todo._id}`,{
          title: title
        });
        console.log(resp);
      }
        
    
    };

    // // Delete

    const handleDelete = async(todoId)=>{
      const resp = await axios.delete(`/deleteTodo/${todoId}`);
      console.log(resp);
    }
    // const items ={{todo.tasks}.map((n) =>'<li>'+ n +'</li>')}

    return <div> 
       {/* <section className="text-gray-600 body-font">
    <div className="container px-5 py-24 mx-auto"> */}
      <div className="flex flex-col text-center w-full mb-8">
        <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-100">
          All Todos
        </h1>
      </div>
      {/* <div className="lg:w-2/3 w-full mx-auto overflow-auto">
        <table className="table-auto w-full text-left whitespace-no-wrap">
          <thead>
            <tr>
              <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                Todo
              </th>
              <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                Tasks
              </th>
              <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                Edit
              </th>
              <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                Delete
              </th>
            </tr>
          </thead>
          <tbody>
            {
            todoData && todoData.map((todo)=>(
            <tr>
              <td className="px-4 py-3">{todo.title}</td>
              <td className="px-4 py-3">tasks</td>
              <td className="px-4 py-3">
                <button className="hover:text-green-500"
                onClick={()=>handleEdit(todo)}
                >Edit</button>
              </td>
              <td className="px-4 py-3 text-lg text-gray-900">
                <button className="hover:text-red-500"
                onClick={()=>handleDelete(todo._id)}
                >Delete</button>
              </td>
            </tr>
            ))
            }
            
          </tbody>
        </table>
      
      </div> */}
      

      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-row flex-wrap -m-4">
      
    {
todoData && todoData.map((todo)=>( 
     <div className="p-4 lg:w-1/3">
        <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
         
          <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">{todo.title}</h1>
          <p className="leading-relaxed mb-3 text-xl font-medium">Tasks 
          <i className="fa-solid fa-pen-to-square text-xl px-5"></i>
          <i className="fa-sharp fa-solid fa-trash"></i>
          </p>
          {/* {
          todo.map((task)=>
          {
            <ul>{task.tasks}</ul>
          }
          )
          } */}
          {/* {var t = {todo.tasks}} */}
          <h1>{todo.tasks}</h1>
          
          <div className="flex justify-around	">
          <button className="hover:text-green-500 bg-yellow-300 border border-slate-500 border-solid px-8 py-2 rounded"
                onClick={()=>handleEdit(todo)}
                >Edit Title</button>
          <button className="hover:text-red-500 bg-red-300 border border-slate-500 border-solid px-8 py-2 rounded"
                onClick={()=>handleDelete(todo._id)}
                >Delete Todo</button>
          </div>
          <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
           
          </div>
        </div>
      </div>
      
      ))}
    </div>
    
  
  </div>
</section>


    </div>
  // </section> 
  //  </div>
}