const express = require('express');
const fs = require('fs');
const { logUsers } = require('./controllers/readFiles.js');



const {
  createTask,
  getTasks,
  getTaskById,
  updateTaskById,
  removeTaskById,
} = require('./controllers/taskControllers');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  try {
      const users = fs.readFileSync('./api/users.json', { encoding: 'utf-8' });
      const usersObj = JSON.parse(users);
      res.status(200).send(usersObj);
  } catch (error) {
      res.status(500).json({status: error, msg: 'Internal Server Error'})
  }
  // async method
  logUsers(usersFolder)
});





app.post('/tasks', createTask);
app.get('/tasks', getTasks);
app.get('/tasks/:id', getTaskById);
app.patch('/tasks/:id', updateTaskById);
app.delete('/tasks/:id', removeTaskById);

module.exports = app;
