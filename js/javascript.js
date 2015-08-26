var board = [[1,2,3,4,5,6,7,8,9],
		 	[2,3,4,5,6,7,8,9,1],
		 	[3,4,5,6,7,8,9,1,2],
		 	[4,5,6,7,8,9,1,2,3],
		 	[5,6,7,8,9,1,2,3,4],
		 	[6,7,8,9,1,2,3,4,5],
		 	[7,8,9,1,2,3,4,5,6],
		 	[8,9,1,2,3,4,5,6,7],
		 	[9,1,2,3,4,5,6,7,8]]



var curEl;

$('input').click(function() {
	curEl = $(this);
   var curRow = $(this).attr("data-row");
   var curCol = $(this).attr("data-col");

   console.log("got indices: row " + curRow);
  console.log("got indices: col " + curCol);

   board[curRow][curCol] = parseInt($(this).val());
 //   for (var i = 1; i < 10; i ++){
	// 	console.log("got indices: row " + curRow);
	// 	console.log("got indices: col " + curCol);
	// 	board[curRow][curCol] = parseInt($('#box' + i).val());
	// }
})

//Enter Handler


//function that sets the sum of each box in a row to 45
// 	function sumRow1(){
// 		for (var i = 1; i < 10; i += 1){
// 			(parseInt($('#box'+ i).value)) }}


// //function that will alert player that number has been used already in same row
// 	function alertRow(){
// 		for (var i =1 ; i <10; i += 1){
// 			(parseInt($('#box' + i).value) == parseInt($('#box' + i + 1).value));
// 			alert("That number has already been used");
// 	}

	$('input').hover(function() {
		$(this).css("background-color", "#C8EDF8");
		}, function() {
		$(this).css("background-color", "white");
		});



