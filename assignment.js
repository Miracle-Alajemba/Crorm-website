class CyclicalQueue {
  constructor(size) {
    this.size = size;
    this.queue = new Array(size).fill(null);
    this.front = 0;
    this.rear = 0;
    this.count = 0;
  }

  // Check if the queue is full
  isFull() {
    return this.count === this.size;
  }

  // Check if the queue is empty
  isEmpty() {
    return this.count === 0;
  }

  // Add an item to the queue
  enqueue(item) {
    if (this.isFull()) {
      console.log("Queue is full. Cannot insert new item.");
      return;
    }
    this.queue[this.rear] = item;
    this.rear = (this.rear + 1) % this.size;
    this.count++;
    console.log(`Enqueued: ${item}`);
  }

  // Remove an item from the front of the queue
  dequeue() {
    if (this.isEmpty()) {
      console.log("Queue is empty. Cannot remove item.");
      return null;
    }
    const item = this.queue[this.front];
    this.queue[this.front] = null;
    this.front = (this.front + 1) % this.size;
    this.count--;
    console.log(`Dequeued: ${item}`);
    return item;
  }

  // Display the current state of the queue
  display() {
    console.log(`Queue: [${this.queue.join(", ")}]`);
  }
}

// Create the queue
const queue = new CyclicalQueue(10);

// Insert initial letters A, B, C
const initialLetters = ['A', 'B', 'C'];
for (let letter of initialLetters) {
  queue.enqueue(letter);
}

// Continuously insert or remove based on the random number generator
while (!queue.isFull()) {
  const randomNumber = Math.floor(Math.random() * 10);
  console.log(`Random number: ${randomNumber}`);

  if (randomNumber > 1) {
    const nextLetter = String.fromCharCode(65 + (Math.random() * 26 | 0)); // Generate a random letter
    if (!queue.isFull()) {
      queue.enqueue(nextLetter);
    } else {
      console.log("Queue is full. Stop inserting.");
      break;
    }
  } else {
    queue.dequeue();
  }

  // Display the queue after each operation
  queue.display();
}

// Stop condition: User signals to stop the loop
console.log("Operation finished. Queue is now at its limit or deletion has been signaled.");
