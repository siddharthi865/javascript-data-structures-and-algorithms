//Create a node class
class Node {
	constructor(element) {
		this.element = element;
		this.next = null
	}
}

//LinkedList class
class LinkedList {
	constructor() {
		this.head = null;
		this.size = 0;
	}

	// adds an element at the end of the list
	add(element) {
		//Create a new node
		var node = new Node(element);

		//Store the current node
		var current;

		//If the list is Empty add the element and make it head
		if (this.head == null){
      this.head = node;
    } else {
			current = this.head;

			//Iterate to the end of the linked list
			while (current.next) {
				current = current.next;
			}

			//Add the node
			current.next = node;
		}
		this.size++;
	}

	//Insert element at the specified position index of the list
	insertAt(element, index) {
		if (index < 0 || index > this.size){
      return console.log("Please enter a valid index.");
    } else {
			//Create a new node
			var node = new Node(element);
			var curr, prev;

			curr = this.head;

			// add the element to the first index
			if (index == 0) {
				node.next = this.head;
				this.head = node;
			} else {
				curr = this.head;
				var it = 0;

				//Iterate over the list to find the position to insert
				while (it < index) {
					it++;
					prev = curr;
					curr = curr.next;
				}

				//Add the element
				node.next = curr;
				prev.next = node;
			}
			this.size++;
		}
	}

	// removes an element from the specified location in the linked list
	removeFrom(index) {
		if (index < 0 || index >= this.size){
      return console.log("Please Enter a valid index");
    } else {
			var curr, prev, it = 0;
			curr = this.head;
			prev = curr;

			//Deleting the first element
			if (index === 0) {
				this.head = curr.next;
			} else {
				// iterate over the list to the position to remove the element
				while (it < index) {
					it++;
					prev = curr;
					curr = curr.next;
				}

				//Remove the element
				prev.next = curr.next;
			}
			this.size--;

			//Return the remove element
			return curr.element;
		}
	}

	//Removes a given element from the linked list
	removeElement(element) {
		var current = this.head;
		var prev = null;

		//Iterate over the list
		while (current != null) {
			// comparing element with current element if found then remove the element and return true
			if (current.element === element) {
				if (prev == null) {
					this.head = current.next;
				} else {
					prev.next = current.next;
				}
				this.size--;
				return current.element;
			}
			prev = current;
			current = current.next;
		}
		return -1;
	}


	//Finds the index of the given element
	indexOf(element) {
		var count = 0;
		var current = this.head;

		// iterate over the list
		while (current != null) {
			//compare each element of the list with the given element
			if (current.element === element)
				return count;
			count++;
			current = current.next;
		}

		//Element not found
		return -1;
	}

	//Check if the linked list is empty
	isEmpty() {
		return this.size == 0;
	}

	//Returns the size of the linked list
	size_of_list() {
		console.log(this.size);
	}


	//Prints the items of the linked list
	printList() {
		var curr = this.head;
		var str = "";
		while (curr) {
			str += curr.element + " ";
			curr = curr.next;
		}
		console.log(str);
	}

}

//Creating an object for the Linkedlist class
var ll = new LinkedList();

//Testing isEmpty on an empty list
console.log(ll.isEmpty());

// adding element to the list
ll.add(10);

// prints 10
ll.printList();

// returns 1
console.log(ll.size_of_list());

// adding more elements to the list
ll.add(20);
ll.add(30);
ll.add(40);
ll.add(50);

// returns 10 20 30 40 50
ll.printList();

// prints 50 from the list
console.log("is the gven element removed ?" + ll.removeElement(50));

// prints 10 20 30 40
ll.printList();

// returns 3
console.log("Index of 40:  " + ll.indexOf(40));

// insert 60 at second position
// ll contains 10 20 60 30 40
ll.insertAt(60, 2);

ll.printList();

// returns false
console.log("is List Empty ? " + ll.isEmpty());

// remove 3rd element from the list
console.log(ll.removeFrom(3));

// prints 10 20 60 40
ll.printList();
