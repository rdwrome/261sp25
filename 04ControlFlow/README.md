# Control Flow
Control flow determines the order in which statements in a program are executed.
JavaScript executes code line-by-line from top to bottom unless control structures (like conditionals or loops) alter that flow.

// *if*
// Executes a block of code only if a specified condition is true.
let midiNote = 64;
if (midiNote >= 0 && midiNote <= 127) {
  console.log("Valid MIDI note:", midiNote);
}

// *if-else*
//  If the condition is false, the else block runs instead.
let midiNote = 150;
if (midiNote >= 0 && midiNote <= 127) {
  console.log("Valid MIDI note.");
} else {
  console.log("Invalid MIDI note.");
}

// *else-if*
// Use else if to check for multiple conditions.
let midiNote = 64;
if (midiNote < 64) {
  console.log("MIDI note is smaller than 64.");
} else if (midiNote > 64) {
  console.log("MIDI note is greater than 64.");
} else {
  console.log("MIDI note is exactly 64.");
}

// *for loops*
// A loop that runs while a condition is true.
let count = 0;
while (count < 3) {
  console.log("Happy Thursday");
  count++;
}

// *nested loops*
for (let i = 0; i < 10; i++) {
  let row = '';
  for (let j = 0; j < 10; j++) {
    if (j >= i) {
      row += j.toString();
    }
  }
  console.log(row);
}

// *Nested if-else*
// Conditions can be nested for more complex decision-making.
let midiNote = parseInt(prompt("Enter a MIDI note number:"));
if (midiNote < 64) {
  console.log("MIDI note is smaller than 64.");
  if (midiNote === 48) {
    console.log("Note name is C2.");
  } else if (midiNote === 40) {
    console.log("Note name is E1.");
  }
} else {
  console.log("MIDI note is 64 or higher.");
}

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
// count click
let click;

function setup() {
  createCanvas(100, 100);
  click = new p5.Oscillator('sine');
  click.amp(0.5);
  click.start();
  click.freq(440);
  click.stop(); // Start silent
}

function draw() {
  if (frameCount % 30 === 0) { // Every 30 frames
    click.start();
    setTimeout(() => click.stop(), 100); // Play a short blip
  }
}
// draw
function draw() {
  line(0, 50, 100, 50);
}
// sustain
let osc;

function setup() {
  createCanvas(100, 100);
  osc = new p5.Oscillator('sawtooth');
  osc.amp(0.2);
  osc.freq(220);
  osc.start();
}
// linefill
let y = 0.0;

function draw() {
  line(0, y, 100, y);
  y = y + 0.5;
}
// pitchrise
let osc;
let y = 0;

function setup() {
  createCanvas(100, 100);
  osc = new p5.Oscillator('triangle');
  osc.start();
  osc.amp(0.2);
}

function draw() {
  line(0, y, 100, y);
  let freq = map(y, 0, height, 200, 800);
  osc.freq(freq);
  y += 0.5;
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
// pitch sweep
let osc;
let y = 0;

function setup() {
  createCanvas(100, 100);
  osc = new p5.Oscillator('sawtooth');
  osc.start();
  osc.amp(0.2);
}

function draw() {
  background(204);
  line(0, y, 100, y);

  let freq = map(y, 0, height, 200, 800);
  osc.freq(freq);

  y += 0.5;
  if (y >= height) {
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
// hear lines
let osc;
let y = 0;

function setup() {
  createCanvas(300, 300);
  osc = new p5.Oscillator('square');
  osc.start();
  osc.amp(0.1);
}

function draw() {
  line(0, y, width, y);

  let freq = map(y, 0, height, 100, 1000);
  osc.freq(freq);

  y += 4;
  if (y >= height) {
    y = 0;
  }
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
// eye sonification
let osc1, osc2, osc3;

function setup() {
  createCanvas(100, 100);
  noStroke();

  // Create three oscillators for different parts of the eye
  osc1 = new p5.Oscillator('sine');
  osc2 = new p5.Oscillator('square');
  osc3 = new p5.Oscillator('triangle');

  osc1.freq(300); // White of the eye
  osc2.freq(500); // Iris
  osc3.freq(800); // Highlight

  osc1.amp(0.2);
  osc2.amp(0.2);
  osc3.amp(0.2);

  osc1.start();
  osc2.start();
  osc3.start();
}

function draw() {
  background(204);

  // Adjust amplitudes over time for animation effect
  osc1.amp(map(sin(frameCount * 0.1), -1, 1, 0.1, 0.5));
  osc2.amp(map(sin(frameCount * 0.2), -1, 1, 0.1, 0.5));
  osc3.amp(map(sin(frameCount * 0.3), -1, 1, 0.1, 0.5));

  fill(255);
  ellipse(50, 50, 60, 60); // White of the eye
  fill(0);
  ellipse(60, 50, 30, 30); // Iris
  fill(255);
  ellipse(66, 45, 6, 6);   // Highlight
}
```
