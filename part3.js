"use strict";
exports.__esModule = true;
var Todo = /** @class */ (function () {
    function Todo() {
        this.myTaskArray = [];
    }
    Todo.prototype.addTask = function (task) {
        this.myTaskArray.push(task);
        console.log("Item " + task + " has been added to the Array");
        return this.myTaskArray.length;
    };
    Todo.prototype.listAllItems = function () {
        console.log("List of Items in the array is ::");
        this.myTaskArray.forEach(function (item) {
            console.log(item);
        });
    };
    Todo.prototype.deleteTask = function (task) {
        var index;
        index = this.myTaskArray.indexOf(task);
        this.myTaskArray.splice(index, 1);
        console.log("Item " + task + " has been deleted from the array");
        return this.myTaskArray.length;
    };
    return Todo;
}());
var todo1 = new Todo();
todo1.addTask("part a");
todo1.listAllItems();
todo1.deleteTask("part a");
