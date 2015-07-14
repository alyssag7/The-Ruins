/*
 * Assignment: Reorder
 * Name: Aaron Aquino
 * Date: July 14, 2015
 *
 * Write a function that takes a queue of integers that are already sorted by absolute value,
 * and modifies it so that the integers are sorted normally. You are not allowed to declare any
 * data structures other than a single Stack of integers.
 */


// Do not modify this code. Use only the isEmpty, push, pop, and/or peek functions.
function Stack() {
	this.arr = [];

	this.isEmpty = function() {
		return this.arr.length == 0;
	}
	this.push = function(x) {
		this.arr.push(x);
	};
	this.pop = function() {
		return this.arr.pop();
	};
	this.peek = function() {
		return this.arr[this.arr.length - 1];
	}
}


// Do not modify this code. Use only the size, enqueue, and/or dequeue functions.
function Queue(array) {
	this.arr = [];

	// initializes the queue with given values
	for (var i = 0; i < array.length; i++) {
		this.arr.push(array[i]);
	}

	this.size = function() {
		return this.arr.length;
	}
	this.enqueue = function(x) {
		this.arr.push(x);
	};
	this.dequeue = function() {
		return this.arr.shift();
	};
}


function reorder(numbers) {
	var stack = new Stack();
	var i;

	// put negative numbers in the stack
	var size = numbers.size();
	for (i = 0; i < size; i++) {
		var num = numbers.dequeue();
		if (num < 0) {
			stack.push(num);
		} else {
			numbers.enqueue(num);
		}
	}

	// add negative numbers back to queue
	var numPositives = numbers.size();
	while(!stack.isEmpty()) {
		numbers.enqueue(stack.pop());
	}

	// move positive numbers to end of queue
	for (i = 0; i < numPositives; i++) {
		numbers.enqueue(numbers.dequeue());
	}
}



// Testing code to ensure reorder works!

var nums = [0, -1, 1, 3, -5, 7, -7, 7, 13, 22, 22, 33, -50];
var queue = new Queue(nums);

reorder(queue);

var queueSize = queue.size();
for (var j = 0; j < queueSize; j++) {
	// console.log(queue.dequeue());
	debug(queue.dequeue());
}