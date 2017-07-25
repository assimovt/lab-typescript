// Add the reference to the interface
import { TodoItemInterface, TodoInterface } from './interfaces';

// Create class TodoItem that implements the corresponding interface
class TodoItem implements TodoItemInterface {

  constructor(public title: string, public isDone = false, 
              public updatedAt = new Date) {}

  toggleDone():void {
    this.isDone = !this.isDone;
    this.updatedAt = new Date();
  }
}

// Create class TodoList that implements the corresponding interface

class TodoList implements TodoInterface {
  tasks: TodoItemInterface[] = [];

  addTask(task) {
    this.tasks.push(task);
    console.log('=========== NEW TASK ===========');
    console.log(`Task "${task.title}" inserted in the list`);
    return this.tasks.length;
  }

  listAllTasks(): void {
    this.tasks.forEach((task, index) => {
      console.log(`${index + 1}: ${task.title}`);
    });
  }

  deleteTask(taskToDelete): number {
    this.tasks = this.tasks.filter((task) => { return task !== taskToDelete});
    return this.tasks.length;
  }

  listUncomplete() {
    this.tasks.forEach((task, index) => {
      if (!task.isDone) console.log(`${index + 1}: ${task.title}`);
    });
  }
}

// Execution
let task1 = new TodoItem('This is our first task');
let task2 = new TodoItem('Eat pizza 🍕 yummy!!!');
let task3 = new TodoItem('Finish this iteration 1!! 🤓');
let task4 = new TodoItem('Finish this iteration 2!! 🤓');
let task5 = new TodoItem('Finish this iteration 3!! 🤓');

let myTodos = new TodoList();

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
