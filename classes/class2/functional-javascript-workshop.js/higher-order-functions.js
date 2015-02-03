function repeat (operation, num) {
	// SOLUTION GOES HERE
	if (num <= 0) {
		return;
	}
	operation();
	repeat(operation, num-1);
}

module.exports = repeat;