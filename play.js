var readline = require('readline')
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var input = function()
{
	rl.question("Make a move: ", function(answer) {
    	if (answer != 1 && answer != 2 && answer != 3 && answer != 4 && answer != 5 && answer != 6 && answer != 7)
  		{
  			console.log("Invalid move");
  		}
  		else
  		{
  			console.log("You placed your piece in column", answer);
  		}
  		rl.close();
	});
}

input();
console.log("Welcome to connect4!", "\n")

var board = [[0, 0, 0, 0, 0, 0, 0],
			 [0, 0, 0, 0, 0, 0, 0],
			 [0, 0, 0, 0, 0, 0, 0],
			 [0, 0, 0, 0, 0, 0, 0],
			 [0, 0, 0, 0, 0, 0, 0],
			 [0, 0, 0, 0, 0, 0, 0]]

function displayBoard(board)
{
	for (var i = 0; i < 5; i++)
	{
		console.log(board[i][0], board[i][1], board[i][2], board[i][3], board[i][4], board[i][5], board[i][6])
	}
	console.log("-------------")
}

displayBoard(board)

//game loop
// do
// {
// 	//player 1 goes
// 	//player 2 goes (later change to AI move)
// 	//check if someone has won
// 	//if someone wins, break
// }
// while(true)