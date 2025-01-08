# Midterm Project

- N.B. A documentation file is required (as always) and must reflect **all four phases in detail**

### Phase 1: Sketch Your Visual Object
Sketch your visual object using a pen and graph paper. Remember that your visual object must at least have three shapes. Below is an example object consisting of five shapes drawn on a graph paper:

![](./img/MusicalNote.png)

It is recommended that your sketch uses basic primitive shapes, such as circle, ellipse, rectangle, square, triangle, and quadrilateral. Once you are done with your design, take a picture and include it in your mid-term project folder for submission with the name `Phase1` in it.

#### Sketch Requirements
- Your sketch
	- is named `Phase1.jpeg`;
	- uses a graph paper or illustration app;
	- and has at least three shapes.

### Phase 2: Translate to P5.js Sketch
Using `P5.js`, translate your sketch into a computer graphic representation. P5.js works with a coordinate system. It is essential to realize that the computer screen is nothing more than a fancier piece of graph paper. Each pixel in the screen is a coordinate – two numbers, an `x` (horizontal) and a `y` (vertical) - that determines the location of a point in space. And it is our job to specify what shapes and colors should appear at these pixel coordinates. In the coordinate system for pixels in a computer window, the (0,0) point can be found at the top left with the positive direction to the right horizontally for the x-axis and down vertically for the y-axis. An understanding of this coordinate system will help us draw shapes and set the pixels we want.


```
function setup() {
  createCanvas(150, 150); // Set the size of canvas
  noStroke(); // Disable drawing the stroke
}

function draw() {
  fill(0); // Fill in with black color
  rect(40, 10,  60, 10); // Draw rectangles
  rect(40, 10,  5, 50);
  rect(100, 10,  5, 50);
  ellipse(30, 60, 30, 20); // Draw ellipses
  ellipse(90, 60, 30, 20);
}

```
The result of the P5.js sketch with the above code looks like this:

![](./img/MusicalNoteProcessing.png)

#### Sketch Requirements
- Your `P5.js` sketch
	- is named `Phase2.js`;
	- accurately translates the original sketch from phase 1; and
	- has more than three shapes.

### Phase 3: Function
Now that you have accurately translated your original visual object, you will make your sketch easier to read, modify, and expand by putting your code into a function. 

Make the canvas size to at least 400 x 400 pixels (It can be larger if you need to). Create a function named `drawObject` that takes three parameters, `x`, `y`, and `s`. In this function, copy and paste your code for drawing your visual object.

The parameters `x` and `y` are used to position objects on the canvas. Use the `translate()` function to position your visual object within the `drawObject()` function using the `x` and `y` parameters. Transformations are cumulative and apply to everything that happens after, and subsequent calls to the function accumulate the effect. This means you do not need to directly change the position of each shape using their function parameters.

The parameter `s` is for scaling objects. Use the `scale()` function to increase or decrease the size of your visual object with in the `drawObject()` function using the `s` parameter.

Once you have implemented the `drawObject()` function, call this function in the `draw()` function for testing. Start with drawing the object at (0,0) position and scale of 1. If this works as expected, try changing the position and scale to other values.

Now try calling the `drawObject()` function another time right after the first one at a different coordinate. You will notice that the second function draws the object, not at the correct position or scale. This is because the second function call caries on the drawing style settings and transformations from the first function call (In this case, transformation changes made with the `translate()` and `scale()` functions).

Suppose we do not want the second function call to be affected by any transformations from the first function call. In that case, we need to use the `push()` and `pop()` functions to save and restore the current drawing style settings and transformations. Go back to the definition for the `drawObject()` function and add the `push()` function at the beginning. Add the `pop()` function at the end of the `drawObject()` function. The `push()` and `pop()` functions work in pairs and must always be present together. With these changes, your second function call in the `draw()` function should not affect the first function call.

```
function setup() {
  createCanvas(400, 400); // Set the size of canvas
  noStroke(); // Disable drawing the stroke
}

function drawObject(x, y, s) {
  push();
  translate(x, y);
  scale(s);
  fill(0); // Fill in with black color
  rect(40, 10, 60, 10); // Draw rectangles
  rect(40, 10, 5, 50);
  rect(100, 10, 5, 50);
  ellipse(30, 60, 30, 20); // Draw ellipses
  ellipse(90, 60, 30, 20);
  pop();
}

function draw() {
  drawObject(0, 0, 1);
  drawObject(0, 200, 1);
}

```

#### Sketch Requirements
- Your `P5.js` sketch
	- is named `Phase3.js`;
	- implements a function named `drawObject` with three parameters `x`, `y`, and `s`;
	- uses the `translate()` and `scale()` functions to position and scale your visual object;
	- calls the `drawObject()` function twice in the `draw()` function; and
	- uses `push()` and `pop()` to save and restore the current drawing style settings and transformations.


### Phase 4: Tiling
In this phase, your job is to take the function you created in the previous phase and tile the canvas with your visual object. 

To effectively use the entire canvas, you must divide the canvas into a grid and figure out the size of each cell. For example, if we have a 10-by-10 grid and your canvas 400-by-400 pixels, each cell size will be 40-by-40 px. We can also observe that each visual object will be separated by 40-by-40 pixels to occupy the entire canvas. Use the `s` parameter in the `drawObject()` function to scale your visual object according to the cell size. Maximize the size of your visual object as much as you can within the given cell size. You can use the `width` and `height` variables to access the width and height of the canvas.

When we have a 5-by-5 grid with a canvas size 400-by-400 pixels, the tiles using the example visual object from above will look like this:

![](./img/5.png)

When we have a 10-by-10 grid with a canvas size 400-by-400 pixels, the tiles using the example visual object from above will look like this:

![](./img/10.png)

When we have a 20-by-20 grid with a canvas size 400-by-400 pixels, the tiles using the example visual object from above will look like this:

![](./img/20.png)

Hint: Use nested for-loops to tile your visual objects. The first loop goes through the x-axis of your canvas. The second loop goes through the y-axis of your canvas. You can multiply the cell width with the current x position in the nested for-loop to position your object in the x-axis. For the y-axis, this will be the cell height multiplied by the current y position.

#### Sketch Requirements
- Your `P5.js` sketch
	- is named `Phase4.js`;
	- is based on `Phase3.js`;
	- tiles your visual object according to the given grid division;
	- scales your visual object according to the grid;
	- maximizes the size of your visual object within the given cell size; and
	- does not resize the window when changing the grid division.

## Submission
- Make a folder inside your itp GitHub repository called 'midterm'
- The midterm file should contain 5 files total: Phases 1-4 project files, your documentation file
- Push your 'midterm' folder to GitHub as you have done for previous assignments in the class and submit the link to that folder in Canvas, as always

## Grading Rubric

Description|Grade
---|---:|
The documentation is complete and reflects all 4 Phases. | 20%
Project is presented clearly in class. | 20%
Phase 1 fulfills the requirements. | 10%
Phase 2 fulfills the requirements. | 10%
Phase 3 fulfills the requirements. | 20%
Phase 4 fulfills the requirements. | 20%
**Total** | **100%**
