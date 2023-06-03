const { response } = require('express');
const Tasks = require('../models/Tasks');

module.exports = {
  getAllTasks,
  createTask,
  editTask,
  deleteTask,
}