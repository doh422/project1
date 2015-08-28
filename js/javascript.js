var board = [[null,null,null,null,null,null,null,null,2],
		 	[null,5,null,8,null,3,null,7,null],
		 	[null,null,2,5,6,null,null,1,null],
		 	[3,null,5,1,null,null,7,null,null],
		 	[null,null,null,null,7,null,null,null,null],
		 	[null,null,4,null,null,5,2,null,9],
		 	[null,4,null,null,5,2,1,null,null],
		 	[null,9,null,6,null,8,null,3,null],
		 	[5,null,null,null,null,null,null,null,null]]



//var curEl;

//click saves input's row & column
$('input').click(function() {
	//curEl = $(this);
    var curRow = $(this).attr("data-row");
    var curCol = $(this).attr("data-col");

    // console.log("got indices: row " + curRow);
    // console.log("got indices: col " + curCol);
})


//change Handler saves input's number to corresponding board location
$('input').change(function() {
	var curEl = $(this);
	console.log(curEl.attr("data-row"), curEl.attr("data-col"));
	console.log(parseInt(curEl.val()));
	board[curEl.attr("data-row")][curEl.attr("data-col")] = parseInt(curEl.val());
	$(this).css("color","blue");
	}
)


//function that sets the sum of each box in a row
var sumArray = function(array) {
	var sum = 0;
	for (var i = 0; i < array.length; i ++){
		sum += array[i];
	} return sum;
}

//function makes sure sum of boxes is 45
var isComplete = function(array) {
	var sum = sumArray(array);
	if (sum !== 45) {
		alert("Incomplete");
	} return sum === 45;
}
	

//following function runs array thru, sorting numbers and comparing for any matches
var checkForDupes = function(array){
	var local = array.slice(0, array.length - 1);
	var sortedArray = local.sort();
	for (var i = 0; i < sortedArray.length - 1; i ++){
		if (sortedArray[i] == sortedArray[i + 1] && Number.isInteger(sortedArray[i])){
			alert("Number is already being used");
			return true;
		} 			
	} return false;
}

//following function grabs numbers in each column and pushes to an array
var getColumns = function(){
	var cols = [];
	var columnCount = 0;
	while (columnCount < 9){
		var col = [];
		var row = 0;
		while (row < 9) {
			col.push(board[row][columnCount]);
			row ++;
		} cols.push(col);
			columnCount ++;
	} return cols;
}


//following code grabs children elements within 3x3 block and places in array
var identifyBlock = function(elm){
	var fieldsetArray = [];
	$(elm).children().each(
		function( index, elm ) {
			var num = parseInt($(elm).val());
			fieldsetArray.push(num)
		})
		return fieldsetArray;
}

//following code jumps between each 3x3 block while calling above function 
//creating an array of arrays 
var getBlocks = function(){
	var blocks = [];
	$('.block').each(function(index,elm) {
		var block = identifyBlock(elm);
		blocks.push(block);
	}); return blocks;
}


$('input').hover(function() {
	$(this).css("background-color", "#C8EDF8");
	}, function() {
	$(this).css("background-color", "white");
	}
);


$('#check').click(function() {
	for (var i = 1; i <= 81; i ++){
	 	if (parseInt($('#box' + i).val()) > 9){
			alert("There is an invalid number")
		}
	}

	// Checking for duplicates across rows
	for (var i = 0; i < board.length; i ++){
	    console.log('row: ' + board[i]);
	    checkForDupes(board[i]);
	    console.log(isComplete(board[i]));
	} 
	var columns = getColumns();
	console.log(columns)
		for (var i = 0; i < columns.length; i ++){
	    console.log('row: ' + columns[i]);
	    checkForDupes(columns[i]);
	    // isComplete(columns[i]);
	}
	var blocks = getBlocks();
		for (var i = 0; i < blocks.length; i ++){
	    console.log('row: ' + blocks[i]);
	    checkForDupes(blocks[i]);
	    // isComplete(columns[i]);
	}

});		


//timer code
var timer = 120;

var interval = setInterval(function(){
	timer--;	
	$('#timer').text(timer);
	if (timer === 0) clearInterval(interval);
}, 1000);

// function startTime(timerID, time) {
// 	timerID = document.getElementById('txt');
// 	totalSeconds = time;
// }

// function updateTimer(){
// 	window.setTimeout("tick()", 1000);
// }

// function tick() {
// 	totalSeconds -= 1;
// 	updateTimer()
// 	window.setTimeout("tick()", 1000);
// }

// function updateTimer() {
// 	timerID.innerHTML = totalSeconds;
// }
