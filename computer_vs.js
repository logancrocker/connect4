var colors = require('colors/safe');

var board = [[0,0,0,0,0,0,0],
			 [0,0,0,0,0,0,0],
			 [0,0,0,0,0,0,0],
			 [0,0,0,0,0,0,0],
			 [0,0,0,0,0,0,0],
			 [0,0,0,0,0,0,0]];

function chkLine(a,b,c,d) 
{
    // Check first cell non-zero and all cells match
    return ((a != 0) && (a ==b) && (a == c) && (a == d));
}

var checkWinner = function(bd)
{
	// Check down
    for (r = 0; r < 3; r++)
        for (c = 0; c < 7; c++)
            if (chkLine(bd[r][c], bd[r+1][c], bd[r+2][c], bd[r+3][c]))
                return bd[r][c];

    // Check right
    for (r = 0; r < 6; r++)
        for (c = 0; c < 4; c++)
            if (chkLine(bd[r][c], bd[r][c+1], bd[r][c+2], bd[r][c+3]))
                return bd[r][c];

    // Check down-right
    for (r = 0; r < 3; r++)
        for (c = 0; c < 4; c++)
            if (chkLine(bd[r][c], bd[r+1][c+1], bd[r+2][c+2], bd[r+3][c+3]))
                return bd[r][c];

    // Check down-left
    for (r = 3; r < 6; r++)
        for (c = 0; c < 4; c++)
            if (chkLine(bd[r][c], bd[r-1][c+1], bd[r-2][c+2], bd[r-3][c+3]))
                return bd[r][c];

    return 0;
}

var printBoard = function(bd)
{
	for (var i = 0; i < 6; ++i)
	{
		for (var j = 0; j < 7; ++j)
		{
			if (board[i][j] === 1)
			{
				process.stdout.write(colors.red(board[i][j]).toString());
			}
			if (board[i][j] === 2)
			{
				process.stdout.write(colors.yellow(board[i][j]).toString());
			}
			if (board[i][j] === 0)
			{
				process.stdout.write(board[i][j].toString());
			}
		}
		process.stdout.write('\n');
	}
	console.log('-------');
}

var makeMove = function(board, column, move)
{	
	if (board[0][column - 1] != 0)
	{
		console.log('invalid move');
		return;
	}
	for (var i = 5; i >= 0; --i)
	{
		if (board[i][column - 1] == 0)
		{
			board[i][column - 1] = move;
			break;
		}
	}
	return;
}

var getColumns = function(board)
{
	var columns = []
	for (var i = 0; i < 7; ++i)
	{
		if (board[0][i] === 0)
		{
			columns.push(i + 1);
		}
	}
	return columns;
}

var randCol = function(columns) 
{
	return columns[Math.floor(Math.random() * columns.length)];
}

printBoard(board);

// do
// {
// 	makeMove(board, Math.floor(Math.random() * 7) + 1, 1)
// 	printBoard(board);
// 	console.log('Winner: ' + checkWinner(board));
// 	makeMove(board, Math.floor(Math.random() * 7) + 1, 2)
// 	printBoard(board);
// 	console.log('Winner: ' + checkWinner(board));
// } while(checkWinner(board) === 0)

var columns = [];

do
{
	columns = getColumns(board);
	makeMove(board, randCol(columns), 1);
	printBoard(board);
	if (checkWinner(board) !== 0)
	{
		break;
	}
	columns = getColumns(board);
	makeMove(board, randCol(columns), 2);
	printBoard(board);
	if (checkWinner(board) !== 0)
	{
		break;
	}
} while(true);

console.log('Winner: ' + checkWinner(board));

