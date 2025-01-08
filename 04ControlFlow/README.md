# Control Flow
- Order in which statements are evaluated

## Conditional Statements
- Control flow is determined by conditional (decision-making) statements
- Conditional statements use Boolean Logic (testing for truthiness!)
- If, else and their permutations are all **iterative** conditional statements, meaning they're not self-referential (more on this later!)

## .js files in Visual Studio Code

## Code Along
```javascript
// if
let midiNote = 64;
if (midiNote < 0 || midiNote > 127) {
  console.log("The note value entered is an invalid MIDI note.");
}
if (midiNote >= 0 && midiNote <= 127) {
  console.log("The note value entered is a valid MIDI note.");
  console.log("MIDI note value is", midiNote);
}
// if-else
let midiNote = 64;
if (midiNote <= 0 || midiNote >= 127) {
  console.log("The note value entered is Invalid.");
} else {
  console.log("The note value entered is valid.");
}
// else-if
let midiNote = 64;
if (midiNote < 64) {
  console.log("MIDI note is smaller than 64.");
} else if (midiNote > 64) {
  console.log("MIDI note is greater than 64.");
} else {
  console.log("MIDI note is equal to 64.");
}
// nested if-else
let midiNote = parseInt(prompt("What's your favorite midiNote? "));
if (midiNote < 64) {
  console.log("MIDI note is smaller than 64.");
  if (midiNote === 48) {
    console.log(`The note name for ${midiNote} is C2.`);
  } else if (midiNote === 40) {
    console.log(`The note name for ${midiNote} is E1.`);
  }
} else {
  console.log("MIDI note is greater than or equal to 64.");
}
```
## Group 
- Create a file named `BOSseasons.js`.
- Write a program that prints out the seasons in Boston.
- Ask the user to input a number between 1 ~ 12.
- If the number is between 4 ~ 6, print out "Boston is in Spring".
- If the number is between 7 ~ 9, print out "Boston is in Summer".
- If the number is between 10 ~ 11, print out "Boston is in Autumn".
- If the number is between 12 ~ 3, print out "Boston is in Winter".
- If the number range is out of 1 ~ 12, print out "There are only 12 months in a year."

## Code Along
```javascript
// while
let count = 0;
while (count < 3) {
  count += 1;
  console.log("Happy Thursday");
}
// while-else
let count = 0;
while (count < 3) {
  count += 1;
  console.log("Happy Thursday");
}
if (count >= 3) {
  console.log("Happy Friday");
}
// for loop with range
for (let i = 0; i < 128; i++) {
  console.log(`The next MIDI note value is ${i}`);
}
// Increment by 2 instead
for (let i = 0; i < 128; i += 2) {
  console.log(`The next MIDI note value is ${i}`);
}
// nested for loop
// First part: Find numbers divisible by both 7 and 5 between 1500 and 2700
for (let i = 1500; i <= 2700; i++) {
  if (i % 7 === 0 && i % 5 === 0) {
    console.log(i);  // Output to the console
  }
}

// Second part: Nested loop to print numbers
for (let i = 0; i < 10; i++) {
  let row = ''; // Initialize an empty string for each row
  for (let j = 0; j < 10; j++) {
    if (j >= i) {
      row += j.toString(); // Append numbers to the row
    }
  }
  console.log(row); // Output each row in the console
}
// infinite recursion
function func() {
  console.log("Lovely!");
  func();
}
func();
// recursion with a stop case
function func(count) {
  if (count < 0) {
    return;
  }
  console.log(`${count} Lovely!`);
  func(count - 1);
}
func(5);
```

## [p5.js](https://editor.p5js.org/)
- FizzBuzz/Pyramid/ChessBoard assignment due next week is in "vanilla .js"
- MIDTERM is in p5.js!

```javascript
// count
function draw() {
  console.log(frameCount);
}
// draw
function draw() {
  line(0, 50, 100, 50);
}
// linefill
let y = 0.0;

function draw() {
  line(0, y, 100, y);
  y = y + 0.5;
}
// moveline
let y = 0.0;

function draw() {
  background(204);
  line(0, y, 100, y);
  y = y + 0.5;
  if (y >= 100) {
    y = 0;
  }
}
// draw lines
let y = 0;

function setup() {
  createCanvas(300, 300);
}

function draw() {
  line(0, y, 300, y);
  y += 4;
}
// draw eye
function setup() {
  createCanvas(100, 100);
  noStroke();
}

function draw() {
  background(204);
  fill(255);
  ellipse(50, 50, 60, 60);
  fill(0);
  ellipse(60, 50, 30, 30);
  fill(255);
  ellipse(66, 45, 6, 6);
}
```
