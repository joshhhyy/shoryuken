// Create a new Javascript file and link to it with a script tag at the bottom.
// Create a variable to store a reference to the img.
// Change the style of the img to have a "left" of "0px", so that it starts at the left hand of the screens.
// Create a function called catWalk() that moves the cat 10 pixels to the right of where it started, by changing the "left" style property.
// Call that function every 50 milliseconds. Your cat should now be moving across the screen from left to right. Hurrah!

// Bonus #1: When the cat reaches the right-hand of the screen, restart them at the left hand side ("0px"). So they should keep walking from left to right across the screen, forever and ever.

// Bonus #2: When the cat reaches the right-hand of the screen, make them move backwards instead. They should keep walking back and forth forever and ever.

// Bonus #3: When the cat reaches the middle of the screen, replace the img with an image of a cat dancing, keep it dancing for 10 seconds, and then replace the img with the original image and have it continue the walk.


var sfBackground = document.getElementsByTagName('body')[0]
var ryu = document.getElementsByTagName('img')[0];         //made variables out of both gifs and the background
var ryuWin = document.getElementsByTagName('img')[1];
var bison = document.getElementsByTagName('img')[2];

sfBackground.style.backgroundImage = "url('streetfighterbackground.jpg')";  //setting the background image and dimensions
sfBackground.style.backgroundSize = "1450px 780px"
ryu.style.position = 'absolute';
ryu.style.left = '-150px'           //negative dimensions mean the gif is hidden
ryu.style.bottom = '50px'
ryuWin.style.left = '-350px'
ryuWin.style.bottom = '50px'
bison.style.left = '1100px'
bison.style.top = '-1000px'

var shoryuken = function() {
	var ryuLeft = parseInt(ryu.style.left)
	var ryuWalk = ryuLeft + 8;
	ryu.style.left = ryuWalk + 'px';

	if (ryuWalk === 626) {							//when ryu hits this mark (halfway-ish):
		ryu.style.left = '-3050px'					//shoryukening-ryu gets teleported way back (STILL shoryukening)
		ryuWin.style.left = '626px'					//while celebrating-ryu gets dropped to the halfway point 
		setInterval(ryuWinner, 10)					//and the second function (ryuWinner) starts
	} else if (ryuWalk > 1400) {					
		ryu.style.left = '-150px'					//sends shoryukening-ryu to the start again once he gets to the end.
	}
}

var ryuWinner = function() {						//-546px
	if (ryu.style.left === '-2226px') {             //if shoryukening-ryu reaches this point:
		ryu.style.left = '627px'					//make ryu continue shoryukening from the middle of the screen
		ryuWin.style.left = '-350px'				//meanwhile celebrating-ryu becomes hidden again
		clearInterval(ryuDance)
	}
}

var bisonDrop = function() {
	var bisonPosition = parseInt(bison.style.top)
	var bisonDescend = bisonPosition + 5;
	bison.style.top = bisonDescend + 'px';
	if (bisonDescend > 500) {
		clearInterval(bisonGo);
		setInterval(bisonRise, 30);
	}
}

var bisonRise = function() {
	var bisonPosition = parseInt(bison.style.top)
	var bisonAscend = bisonPosition - 5;
	if (bisonAscend < -100) {
		setInterval(bisonDrop, 30);
	} 
}



var ryuGo = setInterval(shoryuken, 30)
var ryuDance = setInterval(ryuWinner, 10)
var bisonGo = setInterval(bisonDrop, 30)


