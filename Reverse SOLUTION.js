/*
 * Assignment: Reverse
 * Name: Aaron Aquino
 * Date: July 14, 2015
 *
 * Write a function that takes a string, reverses it, and then returns modified string.
 * You MUST utilize a Stack object (whose code is provided below) in your solution.
 */


// Do not modify this code. Use the isEmpty, push, pop, and/or peek functions.
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


function reverse(str) {
	var stack = new Stack();

	// push all of the characters in str onto the stack
	for (var i = 0; i < str.length; i++) {
		stack.push(str[i]);
	}

	// pop them back out in reverse order
	var result = "";
	while (!stack.isEmpty()) {
		result += stack.pop();
	}

	return result;
}



// Testing code to ensure reverse works!

var secret = "Babyland";
debug(reverse(secret));
// console.log(reverse(secret));

var bestCounselorsEver = "Aaron, Nick, and Serenity";
debug(reverse(bestCounselorsEver));
// console.log(reverse(bestCounselorsEver));

var dangerous = "Uncle Rico";
debug(reverse(dangerous));
// console.log(reverse(dangerous));