const { Schema, model } = require('mongoose');

const TaskSchema = Schema ({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
        unique: true
    },
    status: {
        type: String,
        required: true
    },
})

module.exports = model('Tasks', TaskSchema);
