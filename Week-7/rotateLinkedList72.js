// Javascript program to rotate
class Node {
	constructor() {
		this.data = 0;
		this.next = null;
	}
}
	var head = null;


	function rotate(k) {
		if (k == 0)
			return;

		var current = head;

		// Traverse till the end.
		while (current.next != null)
			current = current.next;

		current.next = head;
		current = head;


		for (i = 0; i < k - 1; i++)
			current = current.next;


		head = current.next;
		current.next = null;
	}

	function push(new_data) {

	
		var new_node = new Node();

		new_node.data = new_data;
		new_node.next = head;
		head = new_node;
	}


	function printList( node) {
		while (node != null) {
			console.log(node.data + " ");
			node = node.next;
		}
	}

		// create a list 10.20.30.40.50.60
		for (i = 60; i > 0; i -= 10)
			push(i);

		console.log("Given linked list :");
		printList(head);
		rotate(4);

		console.log("Rotated Linked list :");
		printList(head);


