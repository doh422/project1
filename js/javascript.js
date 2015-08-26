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
$('input').change(function() {
	board[curEl.attr("data-row")][curEl.attr("data-col")] = parseInt(curEl.val())
	}
)


//function that sets the sum of each box in a row
// 	var total = 0;
// 	for (var i = 0; i < board[0].length; i ++) {
// 		total += board[0][i]}
// 

// function that highlights rows red that do not sum to 45
// if (total !== 45) {
// 	$('.row1').css("background-color", "red")
// }		

// $('#note').click(function(){
// for (var y = 1; y <= 8; y ++){
// if (parseInt($('#box1').val()) == board[0][y]){
// alert("number already used")}}})


var checkForDupes = function(board){
	var sortedArray = board.sort();
	for (var i = 0; i < sortedArray.length - 1; i ++){
		if (sortedArray[i] == sortedArray[i + 1] && sortedArray[i] != null){
			return true
		}
	} return false	
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
	} for (var i = 0; i < board.length; i ++){
		console.log(checkForDupes(board[i]));
		checkForDupes(board[i])
	}
});



