function highAndLow(numbers){
	var arr = [];
	var high = 0;
	var low = 0;
	arr = numbers.split(' ').map(Number);

	low = Math.min(...arr);
	high = Math.max(...arr);

	return "" + high + " " + low;
}

