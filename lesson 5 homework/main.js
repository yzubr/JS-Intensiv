class BaseStorage {
  storage = []
  maxSize
  constructor(maxSize = 10) {
    if (maxSize <= 0 || typeof maxSize !== 'number') {
      throw new Error('maxSize is invalid!')
    }
    this.maxSize = maxSize
  }

  isEmpty() {
    return this.storage.length === 0;
  }

  toArray() {
    return [...this.storage]
  }
}

class Stack extends BaseStorage {
  push(elem) {
    if (this.storage.length < this.maxSize) {
      this.storage.push(elem)
    } else
      throw new Error('the stack is full!')
  }
  pop() {
    if (!this.isEmpty()) {
      return this.storage.pop()
    } else {
      throw new Error('the stack is empty!')
    }
  }

  peek() {
    if (!this.isEmpty()) {
      return this.storage[this.storage.length - 1]
    } else {
      return null
    }
  }

  fromIterable(iterable) {
    if (iterable != null && typeof iterable[Symbol.iterator] === 'function') {
      throw new Error('is not iterable!');
    }

    const arrFromIterable = [...iterable]

    const newStack = new Stack(arrFromIterable.length)
    for (const el of arrFromIterable) {
      newStack.push(el)
    }
    return newStack
  }
}

class Queue extends BaseStorage {
  push(elem) {
    if (this.storage.length < this.maxSize) {
      this.storage.push(elem)
    } else
      throw new Error('the queue is full!')
  }
  shift() {
    if (!this.isEmpty()) {
      return this.storage.shift()
    } else {
      throw new Error('the queue is empty!')
    }
  }

  peek() {
    if (!this.isEmpty()) {
      return this.storage[0]
    } else {
      return null
    }
  }

  fromIterable(iterable) {
    if (iterable != null && typeof iterable[Symbol.iterator] === 'function') {
      throw new Error('is not iterable!');
    }

    const arrFromIterable = [...iterable]

    const newQueue = new Queue(arrFromIterable.length)
    for (const el of arrFromIterable) {
      newQueue.push(el)
    }
    return newQueue
  }
}

const stack1 = new Stack(4)
stack1.push(1)
stack1.push(2)
stack1.push(3)
stack1.push(15)
stack1.peek()
stack1.pop()


