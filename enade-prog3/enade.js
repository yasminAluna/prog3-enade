class Node {
    constructor(value, color) {
      this.value = value;
      this.color = color;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
    }
  
    insertByPriority(value, color) {
      const newNode = new Node(value, color);
      
      if (!this.head || this.head.color === 'green') {
        newNode.next = this.head;
        this.head = newNode;
      } else {
        let current = this.head;
        while (current.next && current.next.color === 'yellow') {
          current = current.next;
        }
        newNode.next = current.next;
        current.next = newNode;
      }
    }
  
    printList() {
      let current = this.head;
      while (current) {
        console.log(`${current.value} (${current.color})`);
        current = current.next;
      }
    }
  }
  
  //Exemplos
  const list = new LinkedList();
  list.insertByPriority('item1', 'green');
  list.insertByPriority('item2', 'yellow');
  list.insertByPriority('item3', 'green');
  list.insertByPriority('item4', 'yellow');
  list.insertByPriority('item5', 'yellow');
  list.printList();
  