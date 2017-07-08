window.onload = function () { 
	console.log("DOM is ready!"); 
	startGame();
	console.log(myGamePiece1, myGamePiece2);
};

//Declare variables for players
var myGamePiece1;
var myGamePiece2; 


//Render raceTrack and players
function startGame() {
    myGameArea.start();
    myGamePiece1 = new component(50, 50, "green", 10, 50);
    myGamePiece2 = new component(50, 50, "red", 10, 150);
}


//Creates raceTrack object
var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 480;
        this.canvas.height = 270;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 20); 
    },

    //Clears position trail 
    clear: function() {
    	this.context.clearRect(0,0,this.canvas.width, this.canvas.height);
    }
};


//Constructor for players
function component(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.update = function() {    
    	ctx = myGameArea.context;
    	ctx.fillStyle = color;
    	ctx.fillRect(this.x, this.y, this.width, this.height);
	};
}

function updateGameArea() {
	myGameArea.clear();
	myGamePiece1.x += 1;
	myGamePiece2.x += 2;
	myGamePiece1.update();
	myGamePiece2.update();
}

//update position of game pieces and clear past positions
