let ing, ingScalar, ingSize, ingmon, monMove; //image 

function preload()
{
    //ingmon = loadImage("ofmonekys.png");
    ing = loadImage("moneky.png");
    ingmon =loadImage("https://i.natgeofe.com/n/6ef19f2a-1cf9-4c0a-9760-cbac719036d2/AdamKuehl_33-7037152c-84-399185.jpg")
    monMove = loadImage("https://media.tenor.com/E_6bB3MgpVsAAAAM/monkey-sleep-cute-monkey.gif")
}
function setup() {
  createCanvas(600, 500);
    background(100);

    image(ing, 0, 0, 660, 560);
    image(ingmon, 0, 0, 450,100);
  }

function draw() {
    //Create an collage using found images and text that changes everytime it is viewed (or the broswer is refreshed). Think about how you are altering the original meaning behind the images 
    //and text you use through juxtapositon and composition.
    image(monMove, 0, 0,100,100);
}
function mousePressed() {
  // Set the frame back to 0 (restart it)
  monMove.setFrame(0);
  // Play it again
  monMove.play();
}