"use strict";
exports.__esModule = true;
// 1. Create a class Todo that implements the Interface created before.
var Todo = (function () {
    function Todo() {
        this.todos = [];
    }
    Todo.prototype.addTask = function (task) {
        this.todos.push(task);
        console.log('=========== NEW TASK ===========');
        console.log("Task \"" + task + "\" inserted in the list");
        return this.todos.length;
    };
    Todo.prototype.listAllTasks = function () {
        this.todos.forEach(function (task, index) {
            console.log(index + 1 + ": " + task);
        });
    };
    Todo.prototype.deleteTask = function (taskToDelete) {
        this.todos = this.todos.filter(function (task) { return task !== taskToDelete; });
        return this.todos.length;
    };
    return Todo;
}());
// Execution
var myTodos = new Todo();
console.log("Number of items:", myTodos.addTask('This is our first task'));
console.log("Number of items:", myTodos.addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 3!! 🤓'));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 2!! 🤓'));
myTodos.listAllTasks();
