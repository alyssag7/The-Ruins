/*
 * Write a function that takes a queue of integers that are already sorted by absolute value,
 * and modifies it so that the integers are sorted normally. You are not allowed to declare any
 * data structures other than a single Stack<int>.
 */

 var nums = [-1, 1, 3, -4, 7, -7, 7, 10];

 function reorder(numbers) {
 	var stack = [];
 	var i;

 	// put negative numbers in the stack
 	var size = numbers.length;
 	for (i = 0; i < size; i++) {
 		var num = numbers.shift();
 		if (num < 0) {
 			stack.push(num);
 		} else {
 			numbers.push(num);
 		}
 	}

 	// add negative numbers back to queue
 	var numPositives = numbers.length;
 	while(stack.length != 0) {
 		numbers.push(stack.pop());
 	}

 	// move positive numbers to end of queue
 	for (i = 0; i < numPositives; i++) {
 		numbers.push(numbers.shift());
 	}
 }


 reorder(nums);
 for (var j = 0; j < nums.length; j++) {
 	debug(nums[j]);
 }