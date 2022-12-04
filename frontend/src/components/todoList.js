import React, { useEffect, useState } from "react"
import axios from "axios"

export const TodoList = () => {
    const [todoData, setTodoData] = useState(null);

    const fetchTodoData = async() =>{
      const resp = await axios.get("/getTodos");
      console.log(resp);
//if no title is there don't set values
      // if(resp.data.title.length > 0){
        setTodoData(resp.data.todos);
      // }
    };

// it is a good practice to keep async await out of useEffect.(that's why we have explicitly written fetchUserData )


    useEffect(()=>{
      fetchTodoData();
    }, [todoData])

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


    return <div> 
       <section className="text-gray-600 body-font">
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-col text-center w-full mb-8">
        <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
          All Todos
        </h1>
      </div>
      <div className="lg:w-2/3 w-full mx-auto overflow-auto">
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
      </div>
    </div>
  </section> 
   </div>
}