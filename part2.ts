let myTaskArray: Array<String> = [];

function addTask(task: String): number {
    myTaskArray.push(task);
    console.log("Item " + task + " has been added to the Array");
    return myTaskArray.length;
}

function listAllItems(): void {
    console.log("List of Items in the array is ::")
    myTaskArray.forEach(function (item) {
        console.log(item);
    });
}

function deleteTask(task: string): number {
    let index: number;
    index = myTaskArray.indexOf(task);

    myTaskArray.splice(index, 1);
    console.log("Item " + task + " has been deleted from the array")
    return myTaskArray.length;
}

addTask("Complete part A");

let itemInArray: number = addTask("Complete part B");
console.log("Numbers of items in the array is: " + itemInArray);
listAllItems();

let count: number = deleteTask("Complete part A");
console.log("Number of Items in the Array is " + count);