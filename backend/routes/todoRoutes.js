// URL PATH
const express = require("express");
const { createTodoController, createTaskTodoController , getTodoController, getTodosController, deleteTodoController, editTodo, getTaskController } = require("../controllers/alltodoControllers");
const router = express.Router();

router.post("/createTodo", createTodoController);
router.get("/getTodo/:id",getTodoController);
router.get("/getTodos",getTodosController);
router.delete("/deleteTodo/:id", deleteTodoController);
router.put("/editTodo/:id",editTodo);
router.put("/createTaskTodo/:id", createTaskTodoController);
router.get("/getTask/:id",getTaskController);

module.exports = router;
