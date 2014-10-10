// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 17-1: Simple displaying text

function setup() {
  createCanvas(800, 480);
} 

function draw() {
  background(175);
  stroke(100);
  line(width/2, 0, width/2, height);
  fill(0);

  // You can use any available web font
  textFont('Helvetica');
  textSize(32);

  // textAlign() sets the alignment for displaying text. It takes one argument: CENTER, LEFT, or RIGHT.
  textAlign(CENTER);
  fill(0);
  stroke(0);
  text("This text is centered.", width/2, 100);
  textAlign (LEFT) ;
  text("This text is left aligned.", width/2, 200);
  textAlign(RIGHT);
  text("This text is right aligned.", width/2, 300);
}



