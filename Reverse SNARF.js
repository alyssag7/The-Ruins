/*
 * Assignment: Reverse
 * Name: TODO
 * Date: TODO
 *
 * Write a function that takes a string, reverses it, and then returns modified string.
 * You MUST utilize a Stack object (whose code is provided below) in your solution.
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


function reverse(str) {
	var stack = new Stack();

	// TODO: Complete your implementation of this function!
}



// Testing code to ensure reverse works!

var secret = "Babyland";
console.log(reverse(secret));

var bestCounselorsEver = "Aaron, Nick, and Serenity";
console.log(reverse(bestCounselorsEver));

var dangerous = "Uncle Rico";
console.log(reverse(dangerous));