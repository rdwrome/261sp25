## Functions
- takes input value, does a process to it, returns an output value
- we've been using many that are already built-in, now we'll write our own!
- useful for repetitive code

## Code Along in P5.js
- Function with one argument/parameter
```
function cube(n) {
  return n * n * n;
}

console.log(cube(2));
```
- Function with Multiple Inputs
```
function add(x, n) {
  return x + n;
}

console.log(add(2, 3));
```

- Function with no input
```
function hello() {
  console.log("Hello, World!");
}

hello();
```

- Function with default argument
```
function displayInstrument(name, instrument = "Guitar") {
  console.log(name + " likes " + instrument);
}

displayInstrument("Jennifer");
displayInstrument("Elizabeth", "Drum");
displayInstrument("Susan", "Bass");
```


- Function with Multiple Outputs
```
function getInstruments() {
  return ["Drum", "Guitar", "Bass"];
}

let instruments = getInstruments();
let primary = instruments[0];
let secondary = instruments[1];
let tertiary = instruments[2];

console.log("My Instruments are: " + primary + ", " + secondary + ", " + tertiary);
```

- Nested Function Calls
```
function printLyrics() {
  console.log("I'm gonna take my horse to the old town road.");
  console.log("I'm gonna ride 'til I can't no more.");
}

function repeatLyrics() {
  printLyrics();
  printLyrics();
}

repeatLyrics();
```

- Function with 'if'
```
function minimum(x, y) {
  if (x < y) {
    return x;
  }
  return y;
}

console.log(minimum(3, 4));
```

- Function with 'if/else' (and recursion!)
```
function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

console.log(factorial(3));
```

- Functions with 'for'
```
function sumup(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum; 
}

console.log(sumup(5)); 
```

- Function with local scope binding
```
function printFavoriteInstrument() {
  let instrument = prompt("What is your favorite instrument?");
  console.log("Your favorite instrument is: " + instrument);
}

function printLeastFavoriteInstrument() {
  let instrument = prompt("What is your least favorite instrument?");
  console.log("Your least favorite instrument is: " + instrument);
}

printFavoriteInstrument();
printLeastFavoriteInstrument();
```

# Continuation from last class
```
// one
let osc;

function setup() {
  createCanvas(100, 100);
  noStroke();
  
  osc = new p5.Oscillator('sine');
  osc.freq(440); // Fixed frequency for the eye
  osc.amp(0.2);
  osc.start();
}

function draw() {
  background(204);

  // Eye Drawing
  fill(255);
  ellipse(50, 50, 60, 60);
  fill(0);
  ellipse(60, 50, 30, 30);
  fill(255);
  ellipse(66, 45, 6, 6);
}

// two
let osc1, osc2;

function setup() {
  createCanvas(100, 100);
  noStroke();

  // Two oscillators for the two eyes
  osc1 = new p5.Oscillator('sine');
  osc2 = new p5.Oscillator('triangle');

  osc1.freq(440); // Right eye
  osc2.freq(550); // Left eye

  osc1.amp(0.2);
  osc2.amp(0.2);

  osc1.start();
  osc2.start();
}

function draw() {
  background(204);

  // Right Eye
  fill(255);
  ellipse(65, 44, 60, 60);
  fill(0);
  ellipse(75, 44, 30, 30);
  fill(255);
  ellipse(81, 39, 6, 6);

  // Left Eye
  fill(255);
  ellipse(20, 50, 60, 60);
  fill(0);
  ellipse(30, 50, 30, 30);
  fill(255);
  ellipse(36, 45, 6, 6);
}

// multiple
let osc;
let eyes = [
  { x: 65, y: 44 },
  { x: 20, y: 50 },
  { x: 65, y: 74 },
  { x: 20, y: 80 },
  { x: 65, y: 104 },
  { x: 20, y: 110 }
];

function setup() {
  createCanvas(100, 100);
  noStroke();

  osc = new p5.Oscillator('square');
  osc.amp(0.2);
  osc.start();
}

function eye(x, y, freq) {
  fill(255);
  ellipse(x, y, 60, 60);
  fill(0);
  ellipse(x + 10, y, 30, 30);
  fill(255);
  ellipse(x + 16, y - 5, 6, 6);

  osc.freq(freq);
}

function draw() {
  background(204);

  for (let i = 0; i < eyes.length; i++) {
    let freq = map(eyes[i].y, 0, height, 200, 1000); // Map position to frequency
    eye(eyes[i].x, eyes[i].y, freq);
  }
}

//mousey
let osc;

function setup() {
  createCanvas(400, 400);
  noStroke();

  osc = new p5.Oscillator('sawtooth');
  osc.start();
  osc.amp(0.2);
}

function draw() {
  background(204);

  let freq = map(mouseX, 0, width, 200, 800); // Horizontal position controls frequency
  let amp = map(mouseY, 0, height, 0.1, 0.5); // Vertical position controls volume

  osc.freq(freq);
  osc.amp(amp);

  eye(mouseX, mouseY);
}

function eye(x, y) {
  fill(255);
  ellipse(x, y, 60, 60);
  fill(0);
  ellipse(x + 10, y, 30, 30);
  fill(255);
  ellipse(x + 16, y - 5, 6, 6);
}

```

## BEGIN MIDTERM
