import { TodoInterface } from './interface';

class Todo implements TodoInterface {

    myTaskArray: Array<string> = [];

    addTask(task: string): number {
        this.myTaskArray.push(task);
        console.log("Item " + task + " has been added to the Array");
        return this.myTaskArray.length;
    }

    listAllItems(): void {
        console.log("List of Items in the array is ::")
        this.myTaskArray.forEach(function (item) {
            console.log(item);
        });
    }

    deleteTask(task: string): number {
        let index: number;
        index = this.myTaskArray.indexOf(task);
    
        this.myTaskArray.splice(index, 1);
        console.log("Item " + task + " has been deleted from the array")
        return this.myTaskArray.length;
    }
}

let todo1 = new Todo();
todo1.addTask("part a");
todo1.listAllItems();
todo1.deleteTask("part a");