const mongoose = require("mongoose");
require('dotenv').config()
mongoose.connect(process.env.DB_CONNECTION_STRING)



const AddTodoSchema = new mongoose.Schema({
    title: mongoose.Schema.Types.String,
    description: mongoose.Schema.Types.String,
    isCompleted: {
        type: mongoose.Schema.Types.Boolean,
        default: false,
    },

})


const AddTodo = mongoose.model('AddTodo', AddTodoSchema);

module.exports = {
    AddTodo,
}