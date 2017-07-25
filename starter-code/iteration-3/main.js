"use strict";
exports.__esModule = true;
// Create class TodoItem that implements the corresponding interface
var TodoItem = (function () {
    function TodoItem(title, isDone, updatedAt) {
        if (isDone === void 0) { isDone = false; }
        if (updatedAt === void 0) { updatedAt = new Date; }
        this.title = title;
        this.isDone = isDone;
        this.updatedAt = updatedAt;
    }
    TodoItem.prototype.toggleDone = function () {
        this.isDone = !this.isDone;
        this.updatedAt = new Date();
    };
    return TodoItem;
}());
// Create class TodoList that implements the corresponding interface
var TodoList = (function () {
    function TodoList() {
        this.tasks = [];
    }
    TodoList.prototype.addTask = function (task) {
        this.tasks.push(task);
        console.log('=========== NEW TASK ===========');
        console.log("Task \"" + task.title + "\" inserted in the list");
        return this.tasks.length;
    };
    TodoList.prototype.listAllTasks = function () {
        this.tasks.forEach(function (task, index) {
            console.log(index + 1 + ": " + task.title);
        });
    };
    TodoList.prototype.deleteTask = function (taskToDelete) {
        this.tasks = this.tasks.filter(function (task) { return task !== taskToDelete; });
        return this.tasks.length;
    };
    TodoList.prototype.listUncomplete = function () {
        this.tasks.forEach(function (task, index) {
            if (!task.isDone)
                console.log(index + 1 + ": " + task.title);
        });
    };
    return TodoList;
}());
// Execution
var task1 = new TodoItem('This is our first task');
var task2 = new TodoItem('Eat pizza 🍕 yummy!!!');
var task3 = new TodoItem('Finish this iteration 1!! 🤓');
var task4 = new TodoItem('Finish this iteration 2!! 🤓');
var task5 = new TodoItem('Finish this iteration 3!! 🤓');
var myTodos = new TodoList();
console.log("Number of items:", myTodos.addTask(task1));
console.log("Number of items:", myTodos.addTask(task2));
console.log("Number of items:", myTodos.addTask(task3));
console.log("Number of items:", myTodos.addTask(task4));
console.log("Number of items:", myTodos.addTask(task5));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask(task3));
console.log("Number of items:", myTodos.deleteTask(task4));
console.log("Number of items:", myTodos.deleteTask(task5));
myTodos.listUncomplete();
