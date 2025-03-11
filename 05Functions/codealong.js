// Interactive Sound in p5.js for Midterm Prep 
// GO TO https://editor.p5js.org/ in GOOGLE CHROME
// all code for this tutorial and your midterm must be run in the editor there!
// grab a short .wav file sample easily accessible on your machine
// SIGN IN TO P5.js!!! use your github username!

// microphone input

let mic;

function setup() {
  createCanvas(400, 400);
  mic = new p5.AudioIn();
  mic.start();
}
function draw() {
  background(0);

  let volume = mic.getLevel(); 
  let circleSize = map(volume, 0, 1, 20, 400); 
  ellipse(width / 2, height / 2, circleSize, circleSize);
}

// loading and playing a file (you MUST BE SIGNED IN!)
// save your sketch name
// click on the carrot next to sketch.js
// click on the plus next to sketch files
// add a SHORT .wav file to your project!

let myFirstSound;

function preload() {
  myFirstSound = loadSound('YOUR PATH TO FILE HERE');
}

function setup() {
  createCanvas(400, 200);
  myFirstSound.play();
}

// ++ add playback rate changes

function draw(){
  background(0);
  let mouseXNormalized = map (mouseX, 0, width, 0.5, 2.0);
  myFirstSound.rate(mouseXNormalized);
  
  fill(255);
  text('rate: ' + mouseXNormalized.toFixed(2), 20,20);
}

// pressing keys to play sounds

let myFirstSound;

function preload() {
  soundFormats('wav', 'mp3');  
  myFirstSound = loadSound('00_ann.wav', soundLoaded);
}

function setup() {
  createCanvas(400, 200);
  textSize(20);
  textAlign(CENTER, CENTER);
  text("Move your cursor to the 'Preview' section\nPress 'P' to play sound", width / 2, height / 2);
}

function soundLoaded() {
  console.log("Sound successfully loaded!");
}

function keyPressed() {
  console.log("Key pressed:", key);
  if (key.toLowerCase() === 'p') {
    playCustomSound();
  }
}

function playCustomSound() {
  if (myFirstSound.isLoaded()) {
    myFirstSound.play();
    console.log("Sound played.");
  } else {
    console.log("Sound not loaded yet.");
  }
}