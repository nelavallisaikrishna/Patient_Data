// load mongoose since we need it to define a model
var mongoose = require('mongoose');

var todoSchema = mongoose.Schema(
    {
        text: { type: String, required: true },
        done: { type: Boolean, default: false }
    }, 
    { timestamps: true }
);

var Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;
