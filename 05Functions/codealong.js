// Interactive Sound in p5.js for Midterm Prep 
// GO TO https://editor.p5js.org/
// all code for this tutorial and your midterm must be run in the editor there!
// SIGN IN!!! use your githubhub username!

// Microphone Input 

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

// Loading and Playing a Sound File

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