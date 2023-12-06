// module.exports.taskController = require('./taskControllers');
// module.exports.readUserController = require('./readUserController');

const taskController = require('./taskControllers');
const readUserController = require('./readUserController');

module.exports = { taskController, readUserController }