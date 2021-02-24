//A factory function is a function that returns an object without using the "new" keyword.A


//Queue ---> FIFO
// function createQueue() {
//     const queue = []

//     return {
//         // add or enqueue
//         enqueue(item) {
            
//         }
//         // remove or dequeue
//         // peek
//         //length
//         //isEmpty
//     }

// }



// const queue = []
// //enqueue
// queue.push("fish")
// queue.push("lion")
// queue.push("tiger")

//dequeue
// queue.shift()

class Queue{
    constructor(){
        this.storage = {}
        this.head = 0
        this.tail = 0
    }

    enqueue(element){
        this.storage[this.tail] = element
        this.tail++
    }

    dequeue(){
        let removed = this.storage[this.head]
        delete this.storage[this.head]
        this.head++
        return removed
    }
}

const queue = new Queue()

queue.enqueue("hi")
queue.enqueue("hello")
queue.enqueue("how are you?")

queue.dequeue()
console.log(queue)

