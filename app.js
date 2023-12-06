const express = require('express');
// const fs = require('fs');
// const { logUsers } = require('./controllers/readFiles.js');
// const userApiPath = './api/users.json';
const { errorHandlers } = require('./middleware');
const { taskController, readUserController } = require('./controllers');
//const { readUserController } = require('./controllers');


// const {
//   createTask,
//   getTasks,
//   getTaskById,
//   updateTaskById,
//   removeTaskById,
// } = require('./controllers/taskControllers');

const app = express();

app.use(express.json());

// app.get('/', (req, res) => {
//   try {
//       const users = fs.readFileSync(userApiPath, { encoding: 'utf-8' });
//       const usersObj = JSON.parse(users);
//       res.status(200).send(usersObj);
//   } catch (error) {
//       res.status(500).json({status: error, msg: 'Internal Server Error'})
//   }
//   // async method
//   logUsers(userApiPath)
// });




app.get("/", readUserController.readUsers)
app.post('/tasks', taskController.createTask);
app.get('/tasks', taskController.getTasks);
app.get('/tasks/:id', taskController.getTaskById);
app.patch('/tasks/:id', taskController.updateTaskById);
app.delete('/tasks/:id', taskController.removeTaskById);

app.use(errorHandlers.errorHandler);

module.exports = app;
