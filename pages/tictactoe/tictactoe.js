$(document).ready(function() {

	$('.gameBoard').hide();
	$('.playAgain').hide();

	var playerSym;
	var compSym;

	var takenSpaces = [];
	var playerPicks = [];
	var compPicks = [];

	var compOptions = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
	var compSquare;
	var compMatchFound = false;

	var playersTurn = true;
	var gameOver = false;


	function resetBoard() {
		window.clearTimeout();
		$('.gameBoard').hide(500);
		$('#announce').fadeIn(500);
		$('#playAgain').html("Play again");
		$('.playAgain').fadeIn(500);
	}

	function computerTestWin(testPicks) {
		if(testPicks.includes('1') && testPicks.includes('2') && testPicks.includes('3') && playerPicks.includes('1') === false && playerPicks.includes('2') === false && playerPicks.includes('3') === false) {
			$('#announce').html("The computer won.");
			resetBoard();
			gameOver = true;
			compMatchFound = true;
		}
		else if(testPicks.includes('4') && testPicks.includes('5') && testPicks.includes('6') && playerPicks.includes('4') === false && playerPicks.includes('5') === false && playerPicks.includes('6') === false) {
			$('#announce').html("The computer won.");
			resetBoard();
			gameOver = true;
			compMatchFound = true;
		}
		else if(testPicks.includes('7') && testPicks.includes('8') && testPicks.includes('9') && playerPicks.includes('7') === false && playerPicks.includes('8') === false && playerPicks.includes('9') === false) {
			$('#announce').html("The computer won.");
			resetBoard();
			gameOver = true;
			compMatchFound = true;
		}
		else if(testPicks.includes('1') && testPicks.includes('5') && testPicks.includes('9') && playerPicks.includes('1') === false && playerPicks.includes('5') === false && playerPicks.includes('9') === false) {
			$('#announce').html("The computer won.");
			resetBoard();
			gameOver = true;
			compMatchFound = true;
		}
		else if(testPicks.includes('3') && testPicks.includes('5') && testPicks.includes('7') && playerPicks.includes('3') === false && playerPicks.includes('5') === false && playerPicks.includes('7') === false) {
			$('#announce').html("The computer won.");
			resetBoard();
			gameOver = true;
			compMatchFound = true;
		}
		else if(testPicks.includes('3') && testPicks.includes('6') && testPicks.includes('9') && playerPicks.includes('3') === false && playerPicks.includes('6') === false && playerPicks.includes('9') === false) {
			$('#announce').html("The computer won.");
			resetBoard();
			gameOver = true;
			compMatchFound = true;
		}
		else if(testPicks.includes('1') && testPicks.includes('4') && testPicks.includes('7') && playerPicks.includes('1') === false && playerPicks.includes('4') === false && playerPicks.includes('7') === false) {
			$('#announce').html("The computer won.");
			resetBoard();
			gameOver = true;
			compMatchFound = true;
		}
		else if(testPicks.includes('2') && testPicks.includes('5') && testPicks.includes('8') && playerPicks.includes('2') === false && playerPicks.includes('5') === false && playerPicks.includes('8') === false) {
			$('#announce').html("The computer won.");
			resetBoard();
			gameOver = true;
			compMatchFound = true;
		}
	}

	function computerTestBlock(testNums, num) {
		console.log(testNums);

		if(playerPicks.includes('1') && playerPicks.includes('2') && playerPicks.includes('3') && compPicks.includes('1') === false && compPicks.includes('2') === false && compPicks.includes('3') === false) {
			compPicks.push(num);
			takenSpaces.push(num);
			compMatchFound = true;
			var tempComp = '#' + num;
			$(tempComp).html(compSym);
			$(tempComp).css('color', 'black');

		}
		else if(playerPicks.includes('4') && playerPicks.includes('5') && playerPicks.includes('6') && compPicks.includes('4') === false && compPicks.includes('5') === false && compPicks.includes('6') === false) {
			compPicks.push(num);
			takenSpaces.push(num);
			compMatchFound = true;
			var tempComp = '#' + num;
			$(tempComp).html(compSym);
			$(tempComp).css('color', 'black');
		}
		else if(playerPicks.includes('7') && playerPicks.includes('8') && playerPicks.includes('9') && compPicks.includes('7') === false && compPicks.includes('8') === false && compPicks.includes('9') === false) {
			compPicks.push(num);
			takenSpaces.push(num);
			compMatchFound = true;
			var tempComp = '#' + num;
			$(tempComp).html(compSym);
			$(tempComp).css('color', 'black');
		}
		else if(playerPicks.includes('1') && playerPicks.includes('5') && playerPicks.includes('9') && compPicks.includes('1') === false && compPicks.includes('5') === false && compPicks.includes('9') === false) {
			compPicks.push(num);
			takenSpaces.push(num);
			compMatchFound = true;
			var tempComp = '#' + num;
			$(tempComp).html(compSym);
			$(tempComp).css('color', 'black');
		}
		else if(playerPicks.includes('3') && playerPicks.includes('5') && playerPicks.includes('7') && compPicks.includes('3') === false && compPicks.includes('5') === false && compPicks.includes('7') === false) {
			compPicks.push(num);
			takenSpaces.push(num);
			compMatchFound = true;
			var tempComp = '#' + num;
			$(tempComp).html(compSym);
			$(tempComp).css('color', 'black');
		}
		else if(playerPicks.includes('3') && playerPicks.includes('6') && playerPicks.includes('9') && compPicks.includes('3') === false && compPicks.includes('6') === false && compPicks.includes('9') === false) {
			compPicks.push(num);
			takenSpaces.push(num);
			compMatchFound = true;
			var tempComp = '#' + num;
			$(tempComp).html(compSym);
			$(tempComp).css('color', 'black');
		}
		else if(playerPicks.includes('1') && playerPicks.includes('4') && playerPicks.includes('7') && compPicks.includes('1') === false && compPicks.includes('4') === false && compPicks.includes('7') === false) {
			compPicks.push(num);
			takenSpaces.push(num);
			compMatchFound = true;
			var tempComp = '#' + num;
			$(tempComp).html(compSym);
			$(tempComp).css('color', 'black');
		}
		else if(playerPicks.includes('2') && playerPicks.includes('5') && playerPicks.includes('8') && compPicks.includes('2') === false && compPicks.includes('5') === false && compPicks.includes('8') === false) {
			compPicks.push(num);
			takenSpaces.push(num);
			compMatchFound = true;
			var tempComp = '#' + num;
			$(tempComp).html(compSym);
			$(tempComp).css('color', 'black');
		}
	}


	function computerPlay() {

		// If player picks a corner, computer must choose center square
		console.log(playerPicks.length);
		if(playerPicks.length === 1 && (playerPicks[0] != '5')) {
			compPicks.push('5');
			takenSpaces.push('5');
			$('#5').html(compSym);
			$('#5').css('color', 'black');
			compMatchFound = true;
			playersTurn = true;
		}
		// If player picks the center square, computer must pick a corner
		else if(playerPicks.length === 1 && playerPicks[0] === '5') {
			compPicks.push('3');
			takenSpaces.push('3');
			$('#3').html(compSym);
			$('#3').css('color', 'black');
			compMatchFound = true;
			playersTurn = true;
		}

		console.log(playerPicks.length);
		console.log(playerPicks);

		// If player picks surrounds a corner, computer must choose that corner
		if(playerPicks.length === 2 && (playerPicks.includes('8') && playerPicks.includes('6'))) {
			compPicks.push('9');
			takenSpaces.push('9');
			$('#9').html(compSym);
			$('#9').css('color', 'black');
			compMatchFound = true;
			playersTurn = true;
		}

		else if(playerPicks.length === 2 && (playerPicks.includes('2') && playerPicks.includes('6'))) {
			compPicks.push('3');
			takenSpaces.push('3');
			$('#3').html(compSym);
			$('#3').css('color', 'black');
			compMatchFound = true;
			playersTurn = true;
		}

		else if(playerPicks.length === 2 && (playerPicks.includes('2') && playerPicks.includes('4'))) {
			compPicks.push('1');
			takenSpaces.push('1');
			$('#1').html(compSym);
			$('#1').css('color', 'black');
			compMatchFound = true;
			playersTurn = true;
		}

		else if(playerPicks.length === 2 && (playerPicks.includes('4') && playerPicks.includes('8'))) {
			compPicks.push('7');
			takenSpaces.push('7');
			$('#7').html(compSym);
			$('#7').css('color', 'black');
			compMatchFound = true;
			playersTurn = true;
		}

		else if(playerPicks.length === 2 && (playerPicks.includes('5') && playerPicks.includes('7'))) {
			compPicks.push('9');
			takenSpaces.push('9');
			$('#9').html(compSym);
			$('#9').css('color', 'black');
			compMatchFound = true;
			playersTurn = true;
		}

		else {

			// Computers picks a square
			while(compMatchFound === false && takenSpaces.length < 9) {
				
				if(compPicks.length > 1) {
					// computer looks for win first
					var testPicks = compPicks;
					var len = compPicks.length;

					for(var i = 0; i < 9; i++) {
						testPicks[len] = compOptions[i];
						if(compMatchFound === false) {
							computerTestWin(testPicks);
						}
						
					}
					// removes the extra value that got added on by the for loop
					compPicks.pop();
				}


				// computer looks to block

				if(playerPicks.length >= 2) {
					var testNums = playerPicks;
					var lenTwo = playerPicks.length;

					for(var j = 0; j < 9; j++) {
						var num = compOptions[j];
						testNums[lenTwo] = compOptions[j];
						if(compMatchFound === false) {
							computerTestBlock(testNums, num);
						}
					}
					// removes the extra value that got added on by the for loop
					playerPicks.pop();
				}



				// computer chooses a random space

				compSquare = Math.floor((Math.random() * 8)+ 1);
				compSquare = compOptions[compSquare];
				if(takenSpaces.indexOf(compSquare) < 0 && compMatchFound === false) {
					takenSpaces.push(compSquare);
					compPicks.push(compSquare);
					compMatchFound = true;
					compSquare = '#' + compSquare;
					$(compSquare).html(compSym);
					$(compSquare).css('color', 'black');

				}

				// test for computer victory

				// 8 combinations of player wins
				if(compPicks.includes('1') && compPicks.includes('2') && compPicks.includes('3')) {
					$('#announce').html("The computer won.");
					resetBoard();
					gameOver = true;
				}
				else if(compPicks.includes('4') && compPicks.includes('5') && compPicks.includes('6')) {
					$('#announce').html("The computer won.");
					resetBoard();
					gameOver = true;
				}
				else if(compPicks.includes('7') && compPicks.includes('8') && compPicks.includes('9')) {
					$('#announce').html("The computer won.");
					resetBoard();
					gameOver = true;
				}
				else if(compPicks.includes('1') && compPicks.includes('5') && compPicks.includes('9')) {
					$('#announce').html("The computer won.");
					resetBoard();
					gameOver = true;
				}
				else if(compPicks.includes('3') && compPicks.includes('5') && compPicks.includes('7')) {
					$('#announce').html("The computer won.");
					resetBoard();
					gameOver = true;
				}
				else if(compPicks.includes('3') && compPicks.includes('6') && compPicks.includes('9')) {
					$('#announce').html("The computer won.");
					resetBoard();
					gameOver = true;
				}
				else if(compPicks.includes('1') && compPicks.includes('4') && compPicks.includes('7')) {
					$('#announce').html("The computer won.");
					resetBoard();
					gameOver = true;
				}
				else if(compPicks.includes('2') && compPicks.includes('5') && compPicks.includes('8')) {
					$('#announce').html("The computer won.");
					resetBoard();
					gameOver = true;
				}

				else if(takenSpaces.length === 9) {
					$('#announce').html("It's a draw.");
					resetBoard();
					gameOver = true;
				}

				playersTurn = true;
			}
		}
	}











	// If player chooses X
	$('#X').click(function() {
		playerSym = 'X';
		compSym = 'O';
		$('.playerChoose').hide();
		$('.gameBoard').fadeIn(1000);
		playersTurn = true;
		playerPicks = [];
		compPicks = [];
		takenSpaces = [];
		compMatchFound = false;
		gameOver = false;
		$('#1').css('color', '#EBEBF2');
		$('#2').css('color', '#EBEBF2');
		$('#3').css('color', '#EBEBF2');
		$('#4').css('color', '#EBEBF2');
		$('#5').css('color', '#EBEBF2');
		$('#6').css('color', '#EBEBF2');
		$('#7').css('color', '#EBEBF2');
		$('#8').css('color', '#EBEBF2');
		$('#9').css('color', '#EBEBF2');

	});

	// If player chooses O
	$('#O').click(function() {
		playerSym = 'O';
		compSym = 'X';
		$('.playerChoose').hide();
		$('.gameBoard').fadeIn(1000);
		playersTurn = true;
		playerPicks = [];
		compPicks = [];
		takenSpaces = [];
		compMatchFound = false;
		gameOver = false;
		$('#1').css('color', '#EBEBF2');
		$('#2').css('color', '#EBEBF2');
		$('#3').css('color', '#EBEBF2');
		$('#4').css('color', '#EBEBF2');
		$('#5').css('color', '#EBEBF2');
		$('#6').css('color', '#EBEBF2');
		$('#7').css('color', '#EBEBF2');
		$('#8').css('color', '#EBEBF2');
		$('#9').css('color', '#EBEBF2');

	});

	// If player chooses Play again
	$('#playAgain').click(function() {
		$('.playAgain').hide();
		$('#announce').hide();
		$('.playerChoose').fadeIn(500);

	});

	$('button').click(function() {
		// Checks if space is open
		if(playersTurn) {
			if(takenSpaces.indexOf($(this).attr("value")) < 0) {
				// Adds playerSym to board and to takenSpaces array & playerPicks array
				$(this).html(playerSym);
				$(this).css('color', 'black');
				takenSpaces.push($(this).attr("value"));
				playerPicks.push($(this).attr("value"));
		

				// 8 combinations of player wins
				if(playerPicks.includes('1') && playerPicks.includes('2') && playerPicks.includes('3')) {
					$('#announce').html("You won!");
					resetBoard();
					gameOver = true;
				}
				else if(playerPicks.includes('4') && playerPicks.includes('5') && playerPicks.includes('6')) {
					$('#announce').html("You won!");
					resetBoard();
					gameOver = true;
				}
				else if(playerPicks.includes('7') && playerPicks.includes('8') && playerPicks.includes('9')) {
					$('#announce').html("You won!");
					resetBoard();
					gameOver = true;
				}
				else if(playerPicks.includes('1') && playerPicks.includes('5') && playerPicks.includes('9')) {
					$('#announce').html("You won!");
					resetBoard();
					gameOver = true;
				}
				else if(playerPicks.includes('3') && playerPicks.includes('5') && playerPicks.includes('7')) {
					$('#announce').html("You won!");
					resetBoard();
					gameOver = true;
				}
				else if(playerPicks.includes('3') && playerPicks.includes('6') && playerPicks.includes('9')) {
					$('#announce').html("You won!");
					resetBoard();
					gameOver = true;
				}
				else if(playerPicks.includes('1') && playerPicks.includes('4') && playerPicks.includes('7')) {
					$('#announce').html("You won!");
					resetBoard();
					gameOver = true;
				}
				else if(playerPicks.includes('2') && playerPicks.includes('5') && playerPicks.includes('8')) {
					$('#announce').html("You won!");
					resetBoard();
					gameOver = true;
				}

				else if(takenSpaces.length === 9) {
					$('#announce').html("It's a draw.");
					resetBoard();
					gameOver = true;
				}

				if(gameOver === false) {
					playersTurn = false;
					compMatchFound = false;
					setTimeout(computerPlay, 1000);
				}
			}
		}
	});
}); // End document ready function




