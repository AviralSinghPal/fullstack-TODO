// LOGIC, BL
const Todo = require("../models/todoModel");

exports.home = (req, res) => {
  res.send("Hello  Alpha ");
};

// exports.createTodo = async (req, res) => {
//   try {
//     const { name, email } = req.body;
//     // To check all the details
//     if (!name || !email) {
//       throw new Error("Name and Email are Required");
//     }
//     const userExist = await User.findOne({ email });
//     if (userExist) {
//       throw new Error("Email Already Exists");
//     }
//     // Inserting into the Database

//     const user = await User.create({ name, email });
//     res.status(201).json({
//       success: true,
//       message: "User Created Successfully",
//       user,
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

// exports.getUsers = async (req, res) => {
//   try {
//     const users = await User.find();
//     res.status(200).json({
//       success: true,
//       users,
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(401).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

// exports.editUser = async (req, res) => {
//   try {
//     const user = await User.findByIdAndUpdate(req.params.id, req.body);
//     res.status(200).json({
//       success: true,
//       message: "User updated Successfully",
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(401).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

// exports.deleteUser = async (req, res) => {
//   try{
//     const userId = req.params.id;
//     const user = await User.findByIdAndDelete(userId);
//     res.status(200).json({
//       success:"true",
//       message: "user deleted successfully"
//     });
//   }
//   catch(error){
//     console.log(error);
//     res.status(401).json({
//       success: false,
//       message: error.message
//     })
//   }
// };


exports.createTodoController = async(req,res)=>{
  
  try {
      const { title } = req.body;
      // To check all the details
      if (!title) {
        throw new Error("title is Required");
      }
      
      // Inserting into the Database
  
      const todo = await Todo.create({ title });
      res.status(201).json({
        success: true,
        message: "Todo Created Successfully",
        todo,
      });
    } catch (error) {
      console.log(error);
    }
}
exports.deleteTodoController = async(req,res)=>{

  const todoID = req.params.id
  const deleteTodo = await Todo.findByIdAndDelete(todoID)
  
  res.status(200).json(deleteTodo)
}
exports.getTodoController= async(req,res)=>{
  const todoid =  req.params.id

  const alltodos=await Todo.findById(todoid)

  res.json(alltodos)
}
exports.getTodosController= async(req,res)=>{

  const todos = await Todo.find()
  
  res.status(200).json({
    success:true,
    todos
  })
  // console.log(todos)
}
exports.editTodo = async (req, res) => {
try {
  const user = await Todo.findByIdAndUpdate(req.params.id, req.body);
  res.status(200).json({
    success: true,
    message: "ToDo updated Successfully",
  });
} catch (error) {
  console.log(error);
  res.status(401).json({
    success: false,
    message: error.message,
  });
}
};
exports.createTaskTodoController=async(req,res)=>{

  const todoObj = req.params.id
  
  const task = req.body.tasks;
  console.log(req.body)
  const todo = await Todo.findById(todoObj);
  // console.log(task)
  todo.tasks.push(task);
  // const todoUpdated = await Todo.findByIdAndUpdate(todoObj, todo)
  await todo.save()
  res.json({
    success:true,
    todo
  });
 
}
exports.getTaskController= async(req,res)=>{
  const todoid =  req.params.id

  const alltodos=await Todo.findById(todoid)

  res.json(alltodos.tasks)
}