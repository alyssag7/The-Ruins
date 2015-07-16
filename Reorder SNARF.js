/*
 * Assignment: Reorder
 * Name: TODO
 * Date: TODO
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
	for(var i = 0; i < numbers.length; i++) 
	{
		numbers.enqueue(nums[i]);
		console.log(stack.peek())
	}
	if ()
	// TODO: Complete your implementation of this function!
}



// Testing code to ensure reorder works!

var nums = [0, -1, 1, 3, -5, 7, -7, 7, 13, 22, 22, 33, -50];
var queue = new Queue(nums);

reorder(queue);

var queueSize = queue.size();
for (var j = 0; j < queueSize; j++) {
	console.log(queue.dequeue());
}