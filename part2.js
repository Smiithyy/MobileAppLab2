var myTaskArray = [];
function addTask(task) {
    myTaskArray.push(task);
    console.log("Item " + task + " has been added to the Array");
    return myTaskArray.length;
}
function listAllItems() {
    console.log("List of Items in the array is ::");
    myTaskArray.forEach(function (item) {
        console.log(item);
    });
}
function deleteTask(task) {
    var index;
    index = myTaskArray.indexOf(task);
    myTaskArray.splice(index, 1);
    console.log("Item " + task + " has been deleted from the array");
    return myTaskArray.length;
}
addTask("Complete part A");
var itemInArray = addTask("Complete part B");
console.log("Numbers of items in the array is: " + itemInArray);
listAllItems();
var count = deleteTask("Complete part A");
console.log("Number of Items in the Array is " + count);
