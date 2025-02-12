// 🎵 Interactive Sound in p5.js Midterm 🎵


// 🚀 Step 1: Setting Up the Microphone Input
// 1. Declare a binding for microphone input.
// 2. Create an instance of p5.AudioIn() in setup().
// 3. Start listening to the microphone input.

let mic;

function setup() {
  noCanvas();
  mic = new p5.AudioIn(); // Create mic input object
  mic.start(); // Start listening to microphone input
  speakMessage("🎙 Say something, and I will analyze its loudness.");
}

// 🚀 Step 2: Detecting Sound Levels
// - Instead of writing getLevel() directly in draw(), we encapsulate into our own new detectSound().
// ✅ Uses mic.getLevel() to analyze volume levels.
// ✅ Provides spoken feedback on loudness.
function draw() {
  detectSound();
}


function detectSound() {
  let volume = mic.getLevel();
  if (volume > 0.1) {
    speakMessage("📢 Loud sound detected!");
  } else if (volume > 0.01) {
    speakMessage("🔈 Soft sound detected.");
  }
}

// 🚀 Step 3: Loading and Playing a Sound File
// - Load a sound file in preload() before setup().
// - Create a function to play the sound.

let mySound;

function preload() {
  mySound = loadSound('sound.wav'); // Ensure 'sound.wav' is uploaded
}

// 🎵 Function to play a sound
// - Plays the preloaded sound file when called.
// - Provides spoken feedback.
function playCustomSound() {
  mySound.play();
  speakMessage("🎶 Playing sound now.");
}

// 🚀 Step 4: Implementing Text-to-Speech
// - Converts text into speech using SpeechSynthesis API.

// 🗣 Function to speak a message
function speakMessage(text) {
  let message = new SpeechSynthesisUtterance(text);
  window.speechSynthesis.speak(message);
}

// 🚀 Step 5: Implementing Speech Recognition
// - Uses webkitSpeechRecognition() to recognize speech input.

let speechRecognition, isListening = false, textToShow = "";

function setupSpeechRecognition() {
  speechRecognition = new webkitSpeechRecognition();
  speechRecognition.continuous = true;
  speechRecognition.lang = 'en-US';
  
  speechRecognition.onresult = function(event) {
    textToShow = event.results[0][0].transcript;
    speakMessage("You said: " + textToShow);
  };
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
// - Press 1 for a greeting.
// - Press 2 for a fun fact.
// - Press Space to toggle speech recognition.

function keyPressed() {
  if (key === 'P') {
    playCustomSound();
  } else if (key === '1') {
    speakMessage("👋 Hello! Welcome to the sound tutorial.");
  } else if (key === '2') {
    speakMessage("🌍 Did you know? The world's loudest sound was the Krakatoa volcanic eruption in 1883.");
  } else if (keyCode === 32) {  // Spacebar
    isListening ? stopListening() : startListening();
  }
}

// 📚 Graded Assignment: Interactive Sound Experiment
// ✅ Task 1: Modify detectSound() to categorize sound into three levels: quiet, medium, and loud.
// ✅ Task 2: Add three new keys (e.g., 'L') to load and play three different sound files.
// ✅ Task 3: Enhance speech recognition to respond to a specific phrase.
// ✅ Task 4: Improve text-to-speech output with different voices or rates.

// 🎵 Interactive Sound in p5.js Midterm 🎵

// *Why Use Functions?*
// - Instead of repeating code, we can encapsulate logic into functions for:
// ✅ Reusability – Call the same function multiple times.
// ✅ Readability – Makes the code easier to understand.
// ✅ Modularity – Each function has a clear purpose.
// So far we've only been using functions built-in to the language, now we're going to write our own functions!

// 🚀 Step 1: Setting Up the Microphone Input
// 1. Declare a binding for microphone input.
// 2. Create an instance of p5.AudioIn() in setup().
// 3. Start listening to the microphone input.

let mic;

function setup() {
  noCanvas();
  mic = new p5.AudioIn(); // Create mic input object
  mic.start(); // Start listening to microphone input
  speakMessage("🎙 Say something, and I will analyze its loudness.");
}

// 🚀 Step 2: Detecting Sound Levels
// - Instead of writing getLevel() directly in draw(), we encapsulate into our own new detectSound().
// ✅ Uses mic.getLevel() to analyze volume levels.
// ✅ Provides spoken feedback on loudness.
function draw() {
  detectSound();
}

// 🎤 Function to detect sound level
// - Categorizes sound into three levels: quiet, medium, and loud.
function detectSound() {
  let volume = mic.getLevel();
  if (volume > 0.2) {
    speakMessage("📢 Very loud sound detected!");
  } else if (volume > 0.05) {
    speakMessage("🔊 Medium sound detected.");
  } else {
    speakMessage("🔈 Quiet sound detected.");
  }
}

// 🚀 Step 3: Loading and Playing a Sound File
// - Load a sound file in preload() before setup().
// - Create a function to play the sound.

let mySound;

function preload() {
  mySound = loadSound('sound.wav'); // Ensure 'sound.wav' is uploaded
}

// 🎵 Function to play a sound
// - Plays the preloaded sound file when called.
// - Provides spoken feedback.
function playCustomSound() {
  mySound.play();
  speakMessage("🎶 Playing sound now.");
}

// 🚀 Step 4: Implementing Text-to-Speech
// - Converts text into speech using SpeechSynthesis API.

// 🗣 Function to speak a message
function speakMessage(text) {
  let message = new SpeechSynthesisUtterance(text);
  message.rate = 1.1; // Slightly increase speech rate for clarity
  window.speechSynthesis.speak(message);
}

// 🚀 Step 5: Implementing Speech Recognition
// - Uses webkitSpeechRecognition() to recognize speech input.

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
  } else if (command.includes("play music")) {
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
// - Press 1 for a greeting.
// - Press 2 for a fun fact.
// - Press Space to toggle speech recognition.

function keyPressed() {
  if (key === 'P') {
    playCustomSound();
  } else if (key === '1') {
    speakMessage("👋 Hello! Welcome to the sound tutorial.");
  } else if (key === '2') {
    speakMessage("🌍 Did you know? The world's loudest sound was the Krakatoa volcanic eruption in 1883.");
  } else if (keyCode === 32) {  // Spacebar
    isListening ? stopListening() : startListening();
  }
}

// 📚 Graded Assignment: Interactive Sound Experiment
// ✅ Task 1: Modify detectSound() to categorize sound into three levels: quiet, medium, and loud.
// ✅ Task 2: Add three new keys (e.g., 'L') to load and play three different sound files.
// ✅ Task 3: Enhance speech recognition to respond to a specific phrase (e.g., "play music").
// ✅ Task 4: Improve text-to-speech output with different voices, rates, or pitch adjustments.

// 🔍 Extra Credit:
// 🎯 Implement a visual representation (e.g., changing background color) based on sound levels.
// 🎯 Use speech recognition to start or stop sound playback.
// 🎯 Add additional fun responses to speech commands.

// 🏆 Submit your modified code along with a short reflection on what you learned!

