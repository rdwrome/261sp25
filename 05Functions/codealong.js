// 🎵 Interactive Sound in p5.js Midterm Prep 🎵

// GO TO https://editor.p5js.org/
// all code for this tutorial and your midterm must be run in the editor here!
// SIGN IN!!! use your githubhub username!

// 🚀 Step 1: Setting Up the Microphone Input 

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

// Step 2: Add Text to Speech Function
let mic;

function setup() {
  createCanvas(400, 400);
  mic = new p5.AudioIn();
  mic.start();
}

function speakMessage(text) {
  let message = new SpeechSynthesisUtterance(text);
  window.speechSynthesis.speak(message);
}

function draw() {
  background(0);

  let volume = mic.getLevel(); 
  let circleSize = map(volume, 0, 1, 20, 400); 
  ellipse(width / 2, height / 2, circleSize, circleSize);
}
 
// 🚀 Step 3: Loading and Playing a Sound File

let myFirstSound;

function preload() {
  myFirstSound = loadSound('YOUR PATH TO FILE HERE');
}

function setup() {
  createCanvas(400, 200);
  myFirstSound.play();
}

// adding playback rate changes

function draw(){
  background(0);
  let mouseXNormalized = map (mouseX, 0, width, 0.5, 2.0);
  myFirstSound.rate(mouseXNormalized);
  
  fill(255);
  text('rate: ' + mouseXNormalized.toFixed(2), 20,20);
}