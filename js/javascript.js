var board = [[null,null,null,null,null,null,null,null,null],
		 	[null,null,null,null,null,null,null,null,null],
		 	[null,null,null,null,null,null,null,null,null],
		 	[null,null,null,null,null,null,null,null,null],
		 	[null,null,null,null,null,null,null,null,null],
		 	[null,null,null,null,null,null,null,null,null],
		 	[null,null,null,null,null,null,null,null,null],
		 	[null,null,null,null,null,null,null,null,null],
		 	[null,null,null,null,null,null,null,null,null]]



var curEl;

//click links input to corresponding board location
$('input').click(function() {
	curEl = $(this);
    var curRow = $(this).attr("data-row");
    var curCol = $(this).attr("data-col");

    console.log("got indices: row " + curRow);
    console.log("got indices: col " + curCol);

 //   for (var i = 1; i < 10; i ++){
	// 	console.log("got indices: row " + curRow);
	// 	console.log("got indices: col " + curCol);
	// 	board[curRow][curCol] = parseInt($('#box' + i).val());
	// }
})

//Enter Handler
$('input').keypress(function(e) {
	if (e.which == 13) {
		board[curEl.attr("data-row")][curEl.attr("data-col")] = parseInt(curEl.value)
}})


//function that sets the sum of each box in a row to 45
// 	function sumRow1(){
// 		for (var i = 1; i < 10; i += 1){
// 			(parseInt($('#box'+ i).value)) }}




	$('input').hover(function() {
		$(this).css("background-color", "#C8EDF8");
		}, function() {
		$(this).css("background-color", "white");
		});



