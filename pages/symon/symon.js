$(document).ready(function() {

	var gameOn = false;
	var gameStarted = false;
	var count = 0;
	var strictMode = false;
	var playersTurn = false;
	var clickedButton;
	var playersPicks = [];
	var sequence = [];
	var playback = [];
	var playerClicks = 0;

	// only used to keep player from clicking buttons too closely together
	var allowClick = true;

	var greenSound = new Audio('audio/green.mp3');
	var redSound = new Audio('audio/red.mp3');
	var yellowSound = new Audio('audio/yellow.mp3');
	var blueSound = new Audio('audio/blue.mp3');
	var error = new Audio('audio/error.mp3');
	var victory = new Audio('audio/victory.mp3');

	var sounds = [greenSound, redSound, yellowSound, blueSound];

	// Reset game, leave out strict mode reset
	function resetGame() {
		window.clearTimeout();
		gameOn = false;
	 	gameStarted = false;
	 	count = 0;
	 	playersTurn = false;
	 	sequence = [];
	 	playback = [];
	 	playersPicks = [];
	 	playerClicks = 0;
	}

	// Adds random numbers to the sequence
	function createSequence() {
		for(var i = 0; i < 20; i++) {
			sequence.push(Math.floor(Math.random() * 4));
		}
	}

	// Removes light class
	function removeLight() {
		$('#' + clickedButton).removeClass('light');
		allowClick = true;
	}

	// Play game
	function playGame() {
		count++;
		displayCount();
		playback = sequence;
		playback = playback.slice(0, count);
		playSequence();
		// Won't allow player to press buttons until sequence plays
		setTimeout(function(){playersTurn = true;}, ((1100 * playback.length) + 1000));
	}

	// Plays the computer sequence, in 1.1 second intervals
	function playSequence() {
		for (var m=0;m < count;m++) {
   			(function(m) {
       			setTimeout(function(){playButton(playback[m]);}, 1100 + (1100 * m));
   			})(m);
		}
	}

	// Lights button and plays sound, then removes light
	function playButton(button) {
		sounds[button].play();
		$('#' + button).addClass('light');
		clickedButton = button;
		setTimeout(removeLight, 800);
	}

	// Displays count to player
	function displayCount() {
		$('.counter').html(count);
	}

	// Turn game on
	$('.OnButton').click(function() {
		gameOn = true;
		$(this).css('background-color', 'blue');
		$(this).removeClass('clickable');
		$('.OffButton').css('background-color', 'black');
		$('.OffButton').addClass('clickable');
		$('.counter').html('--');
		$('.strictButton').addClass('clickable');
		$('.startButton').addClass('clickable');
	});

	// Turn game off
	$('.OffButton').click(function() {
		
		$(this).css('background-color', 'blue');
		$(this).removeClass('clickable');
		$('.OnButton').css('background-color', 'black');
		$('.OnButton').addClass('clickable');
		$('.counter').html('');
		$('.strictButton').removeClass('clickable');
		$('.startButton').removeClass('clickable');
		$('.strictLED').css('background-color', 'black');
		strictMode = false;
		resetGame();
	});

	// Enable strict mode
	$('.strictButton').click(function() {
		if(gameOn && strictMode === false) {
			strictMode = true;
			$('.strictLED').css('background-color', 'red');
		} else if (gameOn && strictMode) {
			strictMode = false;
			$('.strictLED').css('background-color', 'black');
		}
	});

	// Start game
	$('.startButton').click(function() {
		if(gameOn && gameStarted === false) {
			createSequence();
			gameStarted = true;
			playGame();
			
		} else if(gameOn && gameStarted) {
			resetGame();
			gameOn = true;
			gameStarted = true;
			createSequence();
			playGame();	
		}
	});

	// Press buttons
	$('.green').click(function() {
		if(playersTurn && gameOn && allowClick) {
			// adds this button to the players picks
			playersPicks.push(this.id);
			// checks to see if the good sound or bad sound should play
			if(playersPicks[playerClicks] == playback[playerClicks]) {
				allowClick = false;
				playButton(0);
				playerClicks++;

				// checks to see if player won
				if(playerClicks === 15) {
					victory.play();
					resetGame();
					$('.counter').html('=)');
					gameOn = true;
					gameStarted = true;
					createSequence();
					setTimeout(playGame, 1500);
				}

				// checks to see if it's the computers turn
				else if(playerClicks === playback.length) {
				playerClicks = 0;
				playersPicks = [];
				setTimeout(playGame, 1500);
				playersTurn = false;
				}
			} 
			
			else if(strictMode) {

				error.play();
				resetGame();
				$('.counter').html('!!!');
				gameOn = true;
				gameStarted = true;
				createSequence();
				setTimeout(playGame, 1500);
					
			} else if(strictMode === false) {

				error.play();
				$('.counter').html('!!!');
				count--;
				playerClicks = 0;
				playersPicks = [];
				playersTurn = false;
				setTimeout(playGame, 1500);
			}
		}		
	});

	$('.red').click(function() {
		if(playersTurn && gameOn && allowClick) {
			// adds this button to the players picks
			playersPicks.push(this.id);
			// checks to see if the good sound or bad sound should play
			if(playersPicks[playerClicks] == playback[playerClicks]) {
				allowClick = false;
				playButton(1);
				playerClicks++;

				// checks to see if player won
				if(playerClicks === 15) {
					victory.play();
					resetGame();
					$('.counter').html('=)');
					gameOn = true;
					gameStarted = true;
					createSequence();
					setTimeout(playGame, 1500);
				}

				// checks to see if it's the computers turn
				else if(playerClicks === playback.length) {
				playerClicks = 0;
				playersPicks = [];
				setTimeout(playGame, 1500);
				playersTurn = false;
				}
			} 
			
			else if(strictMode) {

				error.play();
				resetGame();
				$('.counter').html('!!!');
				gameOn = true;
				gameStarted = true;
				createSequence();
				setTimeout(playGame, 1500);
					
			} else if(strictMode === false) {

				error.play();
				$('.counter').html('!!!');
				count--;
				playerClicks = 0;
				playersPicks = [];
				playersTurn = false;
				setTimeout(playGame, 1500);
			}
		}
	});

	$('.yellow').click(function() {
		if(playersTurn && gameOn && allowClick) {
			// adds this button to the players picks
			playersPicks.push(this.id);
			// checks to see if the good sound or bad sound should play
			if(playersPicks[playerClicks] == playback[playerClicks]) {
				allowClick = false;
				playButton(2);
				playerClicks++;

				// checks to see if player won
				if(playerClicks === 15) {
					victory.play();
					resetGame();
					$('.counter').html('=)');
					gameOn = true;
					gameStarted = true;
					createSequence();
					setTimeout(playGame, 1500);
				}

				// checks to see if it's the computers turn
				else if(playerClicks === playback.length) {
				playerClicks = 0;
				playersPicks = [];
				setTimeout(playGame, 1500);
				playersTurn = false;
				}
			} 
			
			else if(strictMode) {

				error.play();
				resetGame();
				$('.counter').html('!!!');
				gameOn = true;
				gameStarted = true;
				createSequence();
				setTimeout(playGame, 1500);
					
			} else if(strictMode === false) {

				error.play();
				$('.counter').html('!!!');
				count--;
				playerClicks = 0;
				playersPicks = [];
				playersTurn = false;
				setTimeout(playGame, 1500);
			}
		}
	});

	$('.blue').click(function() {
		if(playersTurn && gameOn && allowClick) {
			// adds this button to the players picks
			playersPicks.push(this.id);
			// checks to see if the good sound or bad sound should play
			if(playersPicks[playerClicks] == playback[playerClicks]) {
				allowClick = false;
				playButton(3);
				playerClicks++;

				// checks to see if player won
				if(playerClicks === 15) {
					victory.play();
					resetGame();
					$('.counter').html('=)');
					gameOn = true;
					gameStarted = true;
					createSequence();
					setTimeout(playGame, 1500);
				}

				// checks to see if it's the computers turn
				else if(playerClicks === playback.length) {
				playerClicks = 0;
				playersPicks = [];
				setTimeout(playGame, 1500);
				playersTurn = false;
				}
			} 
			
			else if(strictMode) {

				error.play();
				resetGame();
				$('.counter').html('!!!');
				gameOn = true;
				gameStarted = true;
				createSequence();
				setTimeout(playGame, 1500);
					
			} else if(strictMode === false) {

				error.play();
				$('.counter').html('!!!');
				count--;
				playerClicks = 0;
				playersPicks = [];
				playersTurn = false;
				setTimeout(playGame, 1500);
			}
		}
	});
}); // end document ready function