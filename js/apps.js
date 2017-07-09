window.onload = function () { 
	console.log("DOM is ready!"); 
	startGame();
};

//Declare variables for players
var player1;
var player2; 


//Render raceTrack and players
function startGame() {
    gameArea.start();
    player1 = new component(30, 30, "green", 10, 100);
    player2 = new component(30, 30, "red", 10, 300);
}


//Creates raceTrack object. Sets size properties, places canvas on body
// set update interval of 20 ms, adds event listeners for movement
var gameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 900;
        this.canvas.height = 600;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 20);
        window.addEventListener('keydown', function (e) {
        	gameArea.keys = (gameArea.keys || []);
        	gameArea.keys[e.keyCode] = true;
        });
        window.addEventListener('keyup', function (e) {
        	gameArea.keys[e.keyCode] = false;
        });
    },

    //Clears gamePiece position trail 
    clear: function() {
    	this.context.clearRect(0,0,this.canvas.width, this.canvas.height);
    }
};


//Constructor for players gamePiece, sets functions for gamePiece moves
function component(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.speed = 0;
    this.update = function() {    
    	ctx = gameArea.context;
    	ctx.fillStyle = color;
    	ctx.fillRect(this.x, this.y, this.width, this.height);
	},
	this.newPos = function() {
		this.x += this.speed;
		//break;
	};
}


//update function for 
function updateGameArea() {
	gameArea.clear();
	player1.speed =  0;
	player2.speed =  0;
	if (gameArea.keys && gameArea.keys[39]) {
		player1.speed = 20;
	}
	if (gameArea.keys && gameArea.keys[81]) {
		player2.speed = 20;
	}
	player1.newPos();
	player2.newPos();
	player1.update();
	player2.update();
	if (player1.x === 870) {
		alert("Player 1 has won!");
	}
	if (player2.x === 870) {
		alert("Player 2 has won!");
	}
}

function movePiece() {
	this.speed += 1;
}

