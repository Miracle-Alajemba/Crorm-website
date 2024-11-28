import random

class CyclicalQueue:
    def __init__(self, size):
        self.size = size
        self.queue = [None] * size
        self.front = 0
        self.rear = 0
        self.count = 0

    def is_full(self):
        return self.count == self.size

    def is_empty(self):
        return self.count == 0

    def enqueue(self, item):
        if self.is_full():
            print("Queue is full. Cannot insert new item.")
            return
        self.queue[self.rear] = item
        self.rear = (self.rear + 1) % self.size
        self.count += 1
        print(f"Enqueued: {item}")

    def dequeue(self):
        if self.is_empty():
            print("Queue is empty. Cannot remove item.")
            return None
        item = self.queue[self.front]
        self.queue[self.front] = None  # Clear the spot
        self.front = (self.front + 1) % self.size
        self.count -= 1
        print(f"Dequeued: {item}")
        return item

    def display(self):
        print(f"Queue: {self.queue}")

# Create the queue
queue = CyclicalQueue(10)

# Insert initial letters A, B, C
initial_letters = ['A', 'B', 'C']
for letter in initial_letters:
    queue.enqueue(letter)

# Continuously insert or remove based on the random number generator
while not queue.is_full():
    random_number = random.randint(0, 9)  # Generate a number between 0 and 9
    print(f"Random number: {random_number}")

    if random_number > 1:
        # Generate the next letter (wrap around from 'A' to 'Z')
        next_letter = chr(65 + (random.randint(0, 25)))  # Random letter from 'A' to 'Z'
        if not queue.is_full():
            queue.enqueue(next_letter)
        else:
            print("Queue is full. Stopping insertion.")
            break
    else:
        queue.dequeue()

    # Display the queue after each operation
    queue.display()

print("Operation finished. Queue is now at its limit or deletion has been signaled.")
