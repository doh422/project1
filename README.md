# project1

creating sudoku game using HTML, CSS, and Javascript

first I wanted to create the board using HTML and CSS. 
i gave each box an input tag and its own id and column/row class.
each 3x3 block of boxes was grouped under a fieldset tag.

first task in JS was to link each box with a corresponding value in an array of the board using a click handler.  
next a change() handler was used to identify values entered in the box.
functions to transpose the numbers of a row/column/3x3 block into arrays were then run through another function to sort those numbers.  The sorted numbers were then compared to identify any duplicate values, leading to a message.

unsolved problems:
i'd like to work on generating a number of preloaded puzzles based on difficulty level.  There is currently only one puzzle hardcoded into the game.


trell url: https://trello.com/b/v8yEll5I/project-1
