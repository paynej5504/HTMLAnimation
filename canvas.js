
var canvas = document.querySelector('canvas');
var can = canvas.getContext('2d'); // creates canvas
// adjusts canvas width to the width of the window
canvas.width = window.innerWidth;
// adjusts canvas height to the height of the window
canvas.height = window.innerHeight;

// Color array that will be used to make the circles different colors.
var difColors = [
  'skyBlue',
  'pink',
  'purple',
  'orange'
]



function  drawCircle(x,y,xx,yy,rad) {
	// declares variables
    this.x = x;
    this.y = y;
    this.xx = xx;
    this.yy = yy;
    this.rad = Math.random() * 14 + 3; // gets random sizes for circles
	// makes circles different colors based on the array above
	this.color = difColors[Math.floor(Math.random() * difColors.length)];
	

    this.draw = function(){
        can.beginPath(); // begins drawing path
        //  creates circles
        can.arc(this.x, this.y, this.rad, 0, Math.PI * 2, true );
        can.fill(); // fills the canvas
        can.fillStyle = this.color // fills the circles with random color
		
    }
	
	
	// if the circles run into the edge it bounces back in the opposite direction
    this.update = function() {
        if (this.x + this.rad > innerWidth || this.x - this.rad < 0) {
            this.xx = -this.xx;
        }
        if (this.y + this.rad > innerHeight || this.y - this.rad < 0) {
            this.yy = -this.yy;
        }
        this.x += this.xx;
        this.y += this.yy;
        this.draw (); // calls draw() function
    }
}




var cirArray = [];
// this function generates a max of 40 snowflakes
for (var i = 0; i < 40; i++){
    var rad = Math.random() * 10 + 1;
    var x = Math.random() * (innerWidth - rad * 2) + rad;
    var y = Math.random() * (innerHeight - rad * 2) + rad;
    var xx = (Math.random() - 0.5);
    var yy = (Math.random() - 0.5);
	
    
    cirArray.push(new drawCircle(x,y,xx,yy,rad));
    
}


// animates the canvas 
function animate() {
    requestAnimationFrame(animate);
    can.clearRect(0,0,innerWidth, innerHeight); // clears canvas 
    for (var i = 0; i < cirArray.length; i++) {
        cirArray[i].update();
    } 
}
// calls animate() function
animate(); 


