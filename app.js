express = require('express');
app = express();

app.set('view engine', 'ejs');
app.use('/js', express.static(__dirname + '/public/js'));

var wins = 0;
var losses = 0;
var ties = 0;

/*** Client side user interface ***/
app.get('/', function(req, res) { 
	res.render('index');
});

/*** Web Service API ***/
app.post('/play/:move?', function(req, res) {
	var usersMove = req.params.move;

	// Valid user's move
	if (usersMove === 'rock' || usersMove === 'paper' || usersMove === 'scissors' || usersMove === 'spock' || usersMove === 'lizard') {
	    // Possible moves enumerated
	    const rock = 0, paper = 1, scissors = 2, spock = 3, lizard = 4;
	    
	    // Random number between 0-4 representing the server's move
	    var hand = Math.floor(Math.random() * 5);

	    // Determining outcome of game
	    switch (usersMove) {
	        case 'rock':
	            if (hand === lizard || hand === scissors) {
	                wins++;
	                outcome = "win";
	            }
	            else if (hand === rock) {
	                ties++;
	                outcome = "tie";
	            }
	            else {
	                losses++;
	                outcome = "lose";
	            }
	            break;

	        case 'paper':
	            if (hand === rock || hand === spock) {
	                wins++;
	                outcome = "win";
	            }
	            else if (hand === paper) {
	                ties++;
	                outcome = "tie";
	            }
	            else {
	                losses++;
	                outcome = "lose";
	            }
	            break;

	        case 'scissors':
	            if (hand === paper || hand === lizard) {
	                wins++;
	                outcome = "win";
	            }
	            else if (hand === scissors) {
	                ties++;
	                outcome = "tie";
	            }
	            else {
	                losses++;
	                outcome = "lose";
	            }
	            break;

	        case 'lizard':
	            if (hand === lizard || hand === scissors) {
	                wins++;
	                outcome = "win";
	            }
	            else if (hand === lizard) {
	                ties++;
	                outcome = "tie";
	            }
	            else {
	                losses++;
	                outcome = "lose";
	            }
	            break;

	        case 'spock':
	            if (hand === rock || hand === scissors) {
	                wins++;
	                outcome = "win";
	            }
	            else if (hand === spock) {
	                ties++;
	                outcome = "tie";
	            }
	            else {
	                losses++;
	                outcome = "lose";
	            }
	            break;
	    }

	    res.json({"outcome": outcome, "wins": wins, "losses": losses, "ties": ties});
	}
});

var server = app.listen(3000, function() {
	console.log('Listening on port 3000');
});