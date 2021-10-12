const SinglyLinkedListNode = require("./SinglyLinkedListNode");

var MyLinkedList = function () {
    this.head = null;
    this.length = 0;
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
    if (index < 0 || index >= this.length) {
        return -1;
    }
    let current = this.head, i = 0;
    while (i < index && current.next) {
        current = current.next;
        i++;
    }

    return current.value;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
    const newNode = new SinglyLinkedListNode(val);
    if (!this.head) {
        this.head = newNode;
    } else {
        newNode.next = this.head;
        this.head = newNode;
    }
    this.length++;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
    if (!this.head) {
        return this.addAtHead(val);
    }
    const newNode = new SinglyLinkedListNode(val);
    let current = this.head;
    while (current && current.next) {
        current = current.next;
    }
    current.next = newNode;
    this.length++;
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
    if (index < 0 || index > this.length) {
        return;
    }
    if (index === 0) {
        return this.addAtHead(val);
    } else if (index === this.length) {
        return this.addAtTail(val);
    } else if (index > 0 && index < this.length) {
        let current = this.head, i = 0;
        while (i + 1 < index && current.next) {
            current = current.next;
            i++;
        }
        const newNode = new SinglyLinkedListNode(val);
        newNode.next = current.next;
        current.next = newNode;
        this.length++;
    }
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
    if (index < 0 || index >= this.length) {
        return;
    }
    if (index === 0) {
        this.head = this.head.next;
        this.length--;
    } else if (index > 0 && index < this.length) {
        let current = this.head, i = 0;
        while (i + 1 < index && current.next) {
            current = current.next;
            i++;
        }
        current.next = current.next.next;
        this.length--;
    }
};

var myLinkedList = new MyLinkedList();
myLinkedList.addAtHead(1);
myLinkedList.addAtTail(3);
myLinkedList.addAtIndex(1, 2);
console.log(myLinkedList.get(1));
myLinkedList.deleteAtIndex(1);
console.log(myLinkedList.get(1));
