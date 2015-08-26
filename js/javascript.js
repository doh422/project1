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

//click saves input's row & column
$('input').click(function() {
	curEl = $(this);
    var curRow = $(this).attr("data-row");
    var curCol = $(this).attr("data-col");

    console.log("got indices: row " + curRow);
    console.log("got indices: col " + curCol);
})


//Enter Handler saves input's number to corresponding board location
$('input').keypress(function(e) {
	if (e.which == 13) {
		console.log("enter");
		board[curEl.attr("data-row")][curEl.attr("data-col")] = parseInt(curEl.val())
}})


//function that sets the sum of each box in a row to 45
// var total = 0;
// for (var i = 0; i < board[0].length; i ++) {
// 	total += board[0][i]}
// }




$('input').hover(function() {
	$(this).css("background-color", "#C8EDF8");
	}, function() {
	$(this).css("background-color", "white");
	}
);



