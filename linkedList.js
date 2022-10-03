class LinkedList {
  constructor(head=null) {
    this.head = head;
  }
  append(value) {
    if (this.head === null) {
      const newNode = new Node(value);
      this.head = newNode;
      return this;
    } else {
      let currentNode = this.head;
      while (currentNode.next != null) {
        currentNode = currentNode.next;
      }
      currentNode.next = new Node(value);
      return this;
    }
  }
  prepend(value) {
    const newNode = new Node(value, this.head);
    this.head = newNode;
    return this;
  }
  getSize() {
    let counter = 0;
    let currentNode = this.head;
    while (currentNode) {
      currentNode = currentNode.next;
      counter++
    }
    return counter;
  }
  getHead() { return this.head.Node }

  getTail() {
    let currentNode = this.head;
    while (currentNode.next != null) {
      currentNode = currentValue.next;
    }
    return currentNode;
  }
  at(index) {
    let currentIndex = 0;
    let currentNode = this.head;
    while (currentIndex < index) {
      currentIndex++;
      currentNode = currentNode.next;
    }
    return currentNode;
  }
  pop() {
    const newTailNodeIndex = this.getSize() - 2;
    const newTailNode = this.at(newTailNodeIndex);
    newTailNode.next = null;
    return this;
  }
  contains(value) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === value) {
        return true;
      } else {
        currentNode = currentNode.next;
      }
    }
    return false;
  }
  find(value) {
    let currentNode = this.head;
    let currentIndex = 0;
    while (currentNode) {
      if (currentNode.value === value) {
        return currentIndex;
      } else {
        currentIndex++;
        currentNode = currentNode.next;
      }
    }
    return null;
  }
  toString() {
    let string = '';
    let currentNode = this.head;
    while (currentNode) {
      string = string + ` ${currentNode.value} ->`;
      currentNode = currentNode.next;
    }
    string = string + ' null';
    return string;
  }
}

class Node {
  constructor(value=null, next=null) {
    this.value = value;
    this.next = next;
  }
}
let node1 = new Node(2);

let list = new LinkedList();
list.append(2);
list.append(7);
list.append(10);
console.log(list.toString());
