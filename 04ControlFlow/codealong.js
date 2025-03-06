// ===========================================
// 🚀 Introduction to Control Flow
// ===========================================
// Control flow determines the order in which statements in a program are executed.
// JavaScript executes code line-by-line from top to bottom unless control structures 
// (like conditionals or loops) alter that flow.

// -------------------------------------------
// ✅ *if* Statement
// -------------------------------------------
// Executes a block of code only if a specified condition is true.
let midiNote = 64;
if (midiNote >= 0 && midiNote <= 127) {
  console.log("Valid MIDI note:", midiNote);
}

// -------------------------------------------
// ✅ *if-else* Statement
// -------------------------------------------
let anotherNote = 150;
if (anotherNote >= 0 && anotherNote <= 127) {
  console.log("Valid MIDI note.");
} else {
  console.log("Invalid MIDI note.");
}

// -------------------------------------------
// ✅ *else-if* for Multiple Conditions
// -------------------------------------------
let thirdNote = 64;
if (thirdNote < 64) {
  console.log("MIDI note is smaller than 64.");
} else if (thirdNote > 64) {
  console.log("MIDI note is greater than 64.");
} else {
  console.log("MIDI note is exactly 64.");
}

// ===========================================
// 🔁 Loops in JavaScript
// ===========================================
// Loops allow us to repeat code multiple times.

// ✅ *while* Loop
let count = 0;
while (count < 3) {
  console.log("Happy Thursday");
  count++;
}

// ✅ *while-else* Loop
let counter = 0;
while (counter < 3) {
  counter++;
  console.log("Happy Thursday");
}
if (counter >= 3) {
  console.log("Happy Friday");
}

// ✅ *for* Loop
for (let i = 0; i < 128; i++) {
  console.log(`The next MIDI note value is ${i}`);
}

// ✅ Incrementing by 2
for (let i = 0; i < 128; i += 2) {
  console.log(`The next MIDI note value is ${i}`);
}

// ✅ Finding numbers divisible by 7 and 5 between 1500 and 2700
for (let i = 1500; i <= 2700; i++) {
  if (i % 7 === 0 && i % 5 === 0) {
    console.log(i);
  }
}

// ✅ Nested for-loop
for (let i = 0; i < 10; i++) {
  let row = '';
  for (let j = 0; j < 10; j++) {
    if (j >= i) {
      row += j.toString();
    }
  }
  console.log(row);
}

// ===========================================
// 📚 Recursion
// ===========================================
// Solve a computational problem with solutions to smaller instances of the same problem. 
// Use functions that call themselves. 

// ✅ Infinite recursion
function func() {
  console.log("Lovely!");
  func();
}
// Uncomment to test (it will crash your browser)
// func();

// ✅ Recursion with a stop condition
function recursiveFunc(count) {
  if (count < 0) {
    return;
  }
  console.log(`${count} Lovely!`);
  recursiveFunc(count - 1);
}
recursiveFunc(5);

// *Why Use Functions?*
// - Instead of repeating code, we can encapsulate logic into functions for:
// ✅ Reusability – Call the same function multiple times.
// ✅ Readability – Makes the code easier to understand.
// ✅ Modularity – Each function has a clear purpose.
// So far we've mostly using functions built-in to the language, now we're going to write our own functions!

// ✅ Function with One Parameter
function cube(n) {
  return n * n * n;
}
console.log(cube(3));

// ✅ Function with Multiple Inputs
function add(x, y) {
  return x + y;
}
console.log(add(4, 5));

// ✅ Function with No Input
function hello() {
  console.log("Hello, World!");
}
hello();

// ✅ Function with Default Argument
function displayInstrument(name, instrument = "Guitar") {
  console.log(name + " likes " + instrument);
}
displayInstrument("Jennifer");
displayInstrument("Elizabeth", "Drum");
displayInstrument("Susan", "Bass");

// ✅ Function with Multiple Outputs
function getInstruments() {
  return ["Drum", "Guitar", "Bass"];
}
let instruments = getInstruments();
console.log("My Instruments are: " + instruments.join(", "));

// ✅ Nested Function Calls
function printLyrics() {
  console.log("I'm gonna take my horse to the old town road.");
  console.log("I'm gonna ride 'til I can't no more.");
}
function repeatLyrics() {
  printLyrics();
  printLyrics();
}
repeatLyrics();

// ✅ Function with 'if'
function minimum(x, y) {
  if (x < y) {
    return x;
  }
  return y;
}
console.log(minimum(3, 4));

// ✅ Function with Recursion
function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
console.log(factorial(3));

// ✅ Function with a for-loop
function sumup(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
}
console.log(sumup(5));

// ✅ Function with Local Scope Binding
function printFavoriteInstrument() {
  let instrument = prompt("What is your favorite instrument?");
  console.log("Your favorite instrument is: " + instrument);
}
function printLeastFavoriteInstrument() {
  let instrument = prompt("What is your least favorite instrument?");
  console.log("Your least favorite instrument is: " + instrument);
}
// Uncomment to test 
printFavoriteInstrument();
printLeastFavoriteInstrument();