var express = require('express');
var Todo = require('../models/todo'); // load the todo model

var router = express.Router();
router.route('/')
    .get(function(req, res) {
        // use mongoose to get all todos in the database
        Todo.find(function(err, todos) {

            // if there is an error retrieving, send the error. nothing after res.send(err) will execute
            if (err)
                res.send(err);

            res.json(todos); // return all todos in JSON format
        });
    })
    .post(function(req, res) {
        // create a todo, information comes from AJAX request from Angular
        console.log('POST - todo object (req.body):', req.body);
    
        Todo.create({
            text : req.body.text
        }, function(err, todo) {
            if (err)
                res.send(err);

            // get and return all the todos after you create another
            Todo.find(function(err, todos) {
                if (err)
                    res.send(err);
                
                res.json(todos);
            });
        });

    });

router.route('/:todoId')
    .delete(function(req, res) {
        console.log('DELETE - todo id (req.params.todoId):', req.params.todoId);
    
        Todo.remove({
            _id : req.params.todoId
        }, function(err, todo) {
            if (err)
                res.send(err);

            // get and return all the todos after you create another
            Todo.find(function(err, todos) {
                if (err)
                    res.send(err);
                
                res.json(todos);
            });
        });
    });

// expose the routes to our app with module.exports
module.exports = router; 
