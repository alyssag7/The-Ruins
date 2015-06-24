/*
 * Write a function that takes a string, reverses it, and then returns modified string.
 * You MUST utilize a stack in your solution.
 */


function reverse(str) {
	var stack = [];

	// push all of the characters in str onto the stack
	for (var i = 0; i < str.length; i++) {
		stack.push(str[i]);
	}

	// pop them back out in reverse order
	var result = "";
	while (stack.length != 0) {
		result += stack.pop();
	}

	return result;
}


// Testing code to ensure reverse works!
var secret = "Babyland";
// debug(reverse(secret));
console.log(reverse(secret));

var bestCounselorsEver = "Aaron, Nick, and Serenity";
// debug(reverse(bestCounselorsEver));
console.log(reverse(bestCounselorsEver));

var palindrome = "never odd or even";
// debug(reverse(palindrome));
console.log(reverse(palindrome));