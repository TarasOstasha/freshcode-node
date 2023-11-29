const { v4: uuidv4 } = require('uuid');
const RS = require("random-words-and-sentences");

const randomSentence = RS.getRandomSentence();

const tasks = [
  {
    id: '1',
    taskHead: randomSentence,
    taskDescription: randomSentence,
    taskStatus: false
  },
];

console.log(tasks)

module.exports.createTask = (req, res) => {
  const { body } = req;
  const createdTask = { ...body, id: uuidv4() };
  tasks.push(createdTask);
  res.status(201).send(createdTask);
};

module.exports.getTasks = (req, res) => {
  res.status(200).send(tasks);
};

module.exports.getTaskById = (req, res) => {
  const { id } = req.params;
  const foundTask = tasks.find(t => t.id === id);
  if (!foundTask) {
    return res.status(404).send('Task Not Found');
  }

  res.status(200).send(foundTask);
};

module.exports.updateTaskById = (req, res) => {
  const {
    params: { id },
    body,
  } = req;
  const foundTaskIndex = tasks.findIndex(t => t.id === id);
  if (foundTaskIndex === -1) {
    return res.status(404).send('Task Not Found');
  }
  tasks[foundTaskIndex] = { ...tasks[foundTaskIndex], ...body };
  res.status(200).send(tasks[foundTaskIndex]);
};

module.exports.removeTaskById = (req, res) => {
  const { id } = req.params;
  const foundTaskIndex = tasks.findIndex(t => t.id === id);
  if (foundTaskIndex === -1) {
    return res.status(404).send('Task Not Found');
  }
  tasks.splice(foundTaskIndex, 1);
  res.status(204).end();
};