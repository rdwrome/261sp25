## JavaScript

**Why?**

- Makes websites dynamic
- Browser console
- Chrome Developer Tools
- Helpful:
```javascript
console.log()
console.clear()
```

**Values and Operators**

- Numbers
	- 8 bytes of memory each, so can be +/- 9 Quadrillion
	- Decimals (not just integers)

- Simple Unary and Binary Operators

```javascript
typeof
- (unary and binary)
+
/
*
**
++ (shorthand counter up)
-- (shorthand counter down)
%
```
- CODE ALONG
```javascript
console.log(typeof 10);           // "number - integer"
console.log(typeof 10.0);         // "number - floating point"
console.log(typeof "hello,world"); // "string"
console.log(typeof true);          // "boolean"
```
- Strings
	- Array of characters where locations are meaningful
	- Locations are called index (start at 0)
	- “Bound by Quotations”
	- Can’t be divided, multiplied, subtracted, but can be effected

- CODE ALONG
```javascript
// Length of a string
console.log('rachel devorah wood rome'.length);

// Indexing
let myName = 'rachel';
console.log(myName[3]);

// Slicing (substring)
console.log(myName.slice(0, 3));  // from index 0 to 2
console.log(myName.slice(2, 4));  // from index 2 to 3

// Concatenation
console.log('yum' + 'my');
console.log('yum'.repeat(3));

// Template literal
`${9/3} little pigs`

// special characters
console.log("col1\tcol2\tcol3\ncol1\tcol2\tcol3\ncol1\tcol2\tcol3");
```
- Comparison Operators

```javascript
> greater than
< less than
>= greater than or equal to
<= less than or equal to
=== equal to
!==  not equal to
```
- Logical Operators
- Just for Boolean values

```javascript
&& and/both
|| or/either
! not (like logical negative sign)
```
- Conditional/Ternary Operator

	 - condition ? expression1 : expression2
```javascript
let height = prompt('what is your height in inches?');
let pass = (height > 48) ? "Yes, you may ride the rollercoaster." : "Sorry, you may not ride the rollercoaster.";
console.log(pass);
```
- NaN and Empty Values

	- NaN = not a number but *should* have been a number
	- null, undefined = can't compute

**Some Syntax**

- Automatic Type Conversion
- indentation and semi-colons
- Capitalization
- Commenting

**Expressions and Statements**
- Expression: values, pieces of code that produce values (bindings and operators)
- Statement: expressions nested together that have an effect

**Bindings**

- Hang out in the environment holding meaning
- Assigned with '='
- let (can be rebound anytime) vs const (can't be rebound within a block) vs var (works, is just old-school)
- Naming Bindings and [Keywords](https://www.w3schools.com/js/js_reserved.asp)
- scopes
	- local: created and can only be referenced within a function (accidental)
	- global: defined outside of block and can be referenced anywhere (key signature)
	- scoping scope: can look out into environment

- CODE ALONG

```javascript
// multiple bindings
const pi = 3.14;
const radius = 11;
const area = pi * (radius ** 2);
console.log(area);

// prompt
const str = prompt("Name: ");
console.log("Hello, " + str);

// printing parameters and template literals
console.log("Hello, " + str);
console.log(`Hello, ${str}`);

// typecasting
const num = 100;
const result = String(num);
console.log(result, typeof result);
const num = 10.45;
const result = String(num);
console.log(result, typeof result);
const string = "45";
const result = parseInt(string);
console.log(result, typeof result);
const string = "56.83";
const result = parseFloat(string);
console.log(result, typeof result);

// printing floating points
const z = 3.14159265358979323846264338327950288419716939937510;
console.log(`${z}`);
console.log(z.toFixed(50));

// template literals math
const bags = 3;
const bananas = 12;
console.log(`${bananas} bananas were split into ${Math.floor(bananas / bags)} groups to fit into ${bags} bags.`);
```
## Solo Exercise:
- Write a program that converts 99 Fahrenheit to Celsius
- Create two variables, **f** and **c**
- Use the equation:
	- Celsius = (Fahrenheit - 32)  5 / 9
