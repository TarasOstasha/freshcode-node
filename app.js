const express = require('express');
const { errorHandlers } = require('./middleware');
const { taskController, readUserController } = require('./controllers');





const app = express();

app.use(express.json());



app.get("/", readUserController.readUsers)
app.post('/tasks', taskController.createTask);
app.get('/tasks', taskController.getTasks);
app.get('/tasks/:id', taskController.getTaskById);
app.patch('/tasks/:id', taskController.updateTaskById);
app.delete('/tasks/:id', taskController.removeTaskById);

app.use(errorHandlers.errorHandler);

module.exports = app;
