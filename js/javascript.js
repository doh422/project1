board = [[1],[2],[3],[4],[5],[6],[7],[8],[9],
		 [2],[3],[4],[5],[6],[7],[8],[9],[1],
		 [3],[4],[5],[6],[7],[8],[9],[1],[2],
		 [4],[5],[6],[7],[8],[9],[1],[2],[3],
		 [5],[6],[7],[8],[9],[1],[2],[3],[4],
		 [6],[7],[8],[9],[1],[2],[3],[4],[5],
		 [7],[8],[9],[1],[2],[3],[4],[5],[6],
		 [8],[9],[1],[2],[3],[4],[5],[6],[7],
		 [9],[1],[2],[3],[4],[5],[6],[7],[8]]

$(function(){

//function that sets the sum of each box in a row to 45
	function sumRow1(){
		for (var i = 1; i < 10; i += 1){
			(parseInt($('#box'+ i).value)) }}


//function that will alert player that number has been used already in same row
	function alertRow(){
		for (var i =1 ; i <10; i += 1){
			(parseInt($('#box' + i).value) == parseInt($('#box' + i + 1).value));
			alert("That number has already been used");
	}
}

//function that alerts when number has been used in same column



//function that alerts when number has been used in same block



	$('input').hover(function() {
		$(this).css("background-color", "#C8EDF8");
		}, function() {
		$(this).css("background-color", "white");
		});

})