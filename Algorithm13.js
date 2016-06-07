function print1to255(){
	for ( var i = 1; i<256; i ++) {
		console.log(i);
	}
}

function printOdds1to255(){
	for (var i =1; i<256; i += 2) {
		console.log(i);
	}
}

function printIntsAndSum0to255() {
	var sum = 0;
	for (var i =0; i<256; i ++) {
		sum += i;
		console.log(i);
	}
	console.log(sum);
}

function printArrayVals(arr) {
	for ( var i = 0; i< arr.length; i ++) {
		console.log(arr[i]);
	}
}

function printMaxOfArray(arr) {
	var max = 0;
	for ( var i=0; i<arr.length; i++) {
		if ( max < arr[i]) {
			max = arr[i];
		}
	}
	console.log(max);
}

function printAverageOfArray(arr) {
	var sum = 0;
	for ( var i=0; i<arr.length; i++) {
		sum += arr[i]
	}
	var avg = sum/arr.length;
	console.log(avg);
}

function returnOddsArrays1to255() {
	var arr =[];
	for (var i = 1; i<256; i += 2 ) {
		arr.push(i);
	}
	console.log(arr);
}

function squareArrayVals(arr) {
	for (var i = 0; i<arr.length; i++ ) {
		arr[i] = arr[i] * arr[i]
	}
	console.log(arr);
}

function returnArrayCountGreaterThanY (arr,y) {
	var count = 0;
	for (var i =0; i<arr.length; i++) {
		if( arr[i]>y) {
			count ++; 
		}
	}
	console.log(count)
}

function zeroOutNegativeArrayVals(arr) {
	for (var i =0; i<arr.length; i++) {
		if( arr[i]<0) {
			arr[i] = 0; 
		}
	}
	console.log(arr)
}

function PrintMaxMinandAverageOfArray(arr) {
	var max =arr[0];
	var min =arr[0];
	var sum =0;
	for ( var i=0; i<arr.length; i++) {
		sum += arr[i];

		if ( max < arr[i]) {
			max = arr[i];
		}

		if ( min > arr[i]) {
			min = arr[i];
		}
	}
	var avg = sum/arr.length;
	console.log(max,min,avg);
}

function shiftArrayValsLeft(arr) {
	for ( var i = 0; i < arr.length-1; i++) {
		var temp = arr[i];
		arr[i] = arr[i+1];
		arr[i+1] = temp;
	}
	console.log(arr);
}

function swapStringofNegativevalues(arr,string) {
	for ( var i = 0; i < arr.length; i++) {
		if ( arr[i] < 0) {
			arr[i] = string;
		}
	}
	console.log(arr);
}


