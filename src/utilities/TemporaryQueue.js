class SimpleQueue {
    constructor(limit = 5) {
        this.data = [];
        this.resultLimit = limit;
    }

    enqueue(item) {
        if (this.data.length >= this.resultLimit) {
            // Remove the oldest item if we reach the limit
            this.data.shift();
        }
        this.data.push(item);
    }

    dequeue() {
        return this.data.shift(); // Remove the first item
    }

    size() {
        return this.data.length;
    }

    getAll() {
        return this.data;
    }
}

// const resultQueue = new SimpleQueue();

module.exports = {
    SimpleQueue
}