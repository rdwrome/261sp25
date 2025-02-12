// 🎵 Interactive Sound in p5.js Midterm Prep 🎵

// GO TO https://editor.p5js.org/
// all code for this tutorial and your midterm must be run in the editor here!

// 🚀 Step 1: Setting Up the Microphone Input
// 1. Declare a binding for microphone input.
// 2. Create an instance of p5.AudioIn() in setup().
// 3. Start listening to the microphone input.

let mic;

function setup() {
  noCanvas();
  mic = new p5.AudioIn(); // Create mic input object
  mic.start(); // Start listening to microphone input
  speakMessage("Talk to me, please.");
}

// 🚀 Step 2: Detecting Sound Levels
// - Instead of writing getLevel() directly in draw(), we'll encapsulate with a new detectSound() function!
// ✅ Uses mic.getLevel() to analyze amplitude levels.
// ✅ Provides spoken feedback on amplitude.

function draw() {
  detectSound();
}


function detectSound() {
  let amp = mic.getLevel();
  if (amp > 0.1) {
    speakMessage("📢 Loud sound detected!");
  } else if (amp > 0.01) {
    speakMessage("🔈 Soft sound detected.");
  }
}

// 🚀 Step 3: Loading and Playing a Sound File
// - Load a sound file in preload() before setup().
// - Create a function to play the sound.

let myFirstSound;

function preload() {
  myFirstSound = loadSound('ADD A PATH TO A .WAV FILE HERE');
}

// 🎵 Function to play a sound
// - Plays the preloaded sound file when called.
// - Provides spoken feedback.
function playCustomSound() {
  myFirstSound.play();
  speakMessage("🎶 Playing first sound now.");
}

// 🚀 Step 4: Implementing Text-to-Speech
// - Converts text into speech using SpeechSynthesis in p5.js

// 🗣 Function to speak a message
function speakMessage(text) {
  let message = new SpeechSynthesisUtterance(text);
  message.rate = 1.1; // Slightly increase speech rate for clarity
  window.speechSynthesis.speak(message);
}

// 🚀 Step 5: Implementing Speech Recognition
// - Uses webkitSpeechRecognition() in p5.js to recognize speech input.

let speechRecognition, isListening = false, textToShow = "";

function setupSpeechRecognition() {
  speechRecognition = new webkitSpeechRecognition();
  speechRecognition.continuous = true;
  speechRecognition.lang = 'en-US';
  
  speechRecognition.onresult = function(event) {
    textToShow = event.results[0][0].transcript.toLowerCase();
    speakMessage("You said: " + textToShow);
    handleSpeechCommand(textToShow);
  };
}

// 🎙 Function to handle recognized speech commands
function handleSpeechCommand(command) {
  if (command.includes("hello")) {
    speakMessage("👋 Hello! How can I assist you?");
  } else if (command.includes("play sound")) {
    playCustomSound();
  } else {
    speakMessage("🤔 Command not recognized.");
  }
}

// 🎧 Function to start speech recognition
function startListening() {
  speechRecognition.start();
  isListening = true;
  speakMessage("🎤 Listening...");
}

// 🛑 Function to stop speech recognition
function stopListening() {
  speechRecognition.stop();
  isListening = false;
  speakMessage("🛑 Stopped listening.");
}

// 🚀 Step 6: Handling Keyboard Inputs
// - Press P to play sound.
// - Press A for advice :).
// - Press Space to toggle speech recognition.

function keyPressed() {
  if (key === 'P') {
    playCustomSound();
  } else if (key === 'a') {
    speakMessage("Silence is perfect, you need a good reason to f it up. - Roscoe Mitchell");
  } else if (keyCode === 32) {  // Spacebar
    isListening ? stopListening() : startListening();
  }
}
