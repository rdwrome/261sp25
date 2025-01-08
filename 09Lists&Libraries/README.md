## Intro to Python
- High-level = human-readable!
- General but!
	- [Modules and libraries can make it more specific](https://wiki.python.org/moin/UsefulModules)
		- Modules: simple .py file that "abstracts out" specific information (functions, variables, other things)
		- libraries (or packages) are a collection of modules
- Interpreted (executed by the interpreter vs. compiled)
  - Easier to debug
  - Runs a little slower
- Scripts are a sequence of definitions and commands executed in the shell
- #nocommentcomment
- Object-oriented

## Object-oriented programming
- Some languages can do it, some languages must do it, e.g. javaScript *can* do it, Python *must* do it
- Almost everything in Python is an object
- Principles of OOP
    - Encapsulation
  		- object: independent part of the program that manages itself (own rules and ways of doing things)
      - (objects are what Python manipulates)
      - objects are reusable
      - a specific realization of an object is an instance
  	- Inheritance
      - objects get their functions from classes
      - class: template, blueprint for creating objects
  		- superclass is parent, class is child
  		- class inherits attributes of parent (through abstraction) but modifies, evolves
      - classes are reusable
  	- Polymorphism
  		- change the way something works by overriding and overloading
      - change type, have multiple types work together
  		- overriding: walking to walking backwards
  		- overloading: walking to running

 ## [Python vs Javascript](https://www.freecodecamp.org/news/python-vs-javascript-what-are-the-key-differences-between-the-two-popular-programming-languages/)

**[Do You Have Python3?](https://www.python.org/downloads/)**
- More functional standard libraries than 2
- Some things only supported on 2, though
  - `python --version`
  - `python3 --version`
- DO YOU NEED TO INSTALL COMMAND LINE TOOLS? YES! PLEASE DO! `xcode-select --install`
- IF YOU'VE DOWNLOADED PYTHON3 TODAY: open "update shell profile command" in the python3 folder
- Check your pip!
	- `pip --version`
	- `pip3 --version`

**Integrated Development Environments (IDE)**
- Most commonly used for interpreted languages
- Interpreter helps you debug within the IDE

**Install the Python Extension in VSC**

**Running Python: hands.py**
  - CLI
  - IDE

- CODE ALONG
```Python
print(type(10)) #integer
print(type(10.)) #float
print(type("hello,world")) #string
print(type(True)) #boolean
```
 
- Python Function Definition + Call
  - definition has to come before call, but call happens where call happens
```python
#function
def circle_area(x):
  return x * x * 3.14
#call
print(circle_area(3.0))
 
 
# Lists
## Lists vs Arrays
- Both are collections of related data in a specific order

**Arrays**
- All the data have to be the same type
- Can handle arithmetic
- They need a module

**Lists**
- Related data can be of different type
- Can't handle arithmetic
- Don't need a module

## Intro to Lists in Python
- Use a bracket to enclose
- Lists are ordered, but again, can have different types
- Each item in a list is called an *element*
- Each element is accessed by its numerical index
- The first index starts at 0.

![listanatomy](listanatomy.png)

```python
# up to this point, we only knew how to create
# multiple piece of data using multiple variables
x = 1
y = 2
z = 3

# If we use list, we can create a variable
# that can hold three values in one line
a = [1, 2, 3]

# Create a list of strings
strings = ['violin', 'viola', 'cello']

# Create a list of booleans
bools = [True, False, True]

# Create a list with mix type
mixed = ['violin', 200, True, 7.5]

# Print out a list
print(mixed)
```
### Accessing & Amending List Elements
- Reference an element by its index number

```Python
instruments = ['Drum', 'Guitar', 'Bass']

print(instruments[0]) # Drum
print(instruments[1]) # Guitar
print(instruments[2]) # Bass
```
- List Repetition
```python
# Repeat 0 five times. The result is a single list
numbers = [0] * 5
print(numbers) # [0, 0, 0, 0, 0]

# Repeat 1, 2, 3 three times.
numbers = [0, 1, 2] * 3
print(numbers) # [0, 1, 2, 0, 1, 2, 0, 1, 2]
```
- List mechanics with an update
```python
old_instruments = ['Drum', 'Guitar', 'Bass']
new_instruments = old_instruments

# Both prints out ['Drum', 'Guitar', 'Bass']
print(old_instruments)
print(new_instruments)

new_instruments[0] = 'Percussion'

# Both prints out ['Percussion', 'Guitar', 'Bass']
print(old_instruments)
print(new_instruments)
```
- List slicing
```python
menu = ['Drum', 'Guitar', 'Bass']
# Slice indices 1 and 2
print(menu[1:3]) # ['Guitar', 'Bass']
# Slice from index 1 to the end
print(menu[1:]) # ['Guitar', 'Bass']
# Slice index 1
print(menu[1:2]) # ['Guitar']
# Slice nothing
print(menu[1:1]) # []
# Slice indices 0 and 2
print(menu[0:3:2]) # ['Drum', 'Bass']
```
- List manipulation
```python
menu = ['Drum', 'Guitar', 'Bass']
print(menu)
# Append new element to the list
menu.append('Piccolo')
print(menu)
# Insert a new element into the list
# 2 is an index where we insert the new element
menu.insert(2, 'pie')
print(menu)
# Remove an element from the list
menu.remove('Bass')
print(menu)
# Get the length of list
print('The length of list is:', len(menu))
```
### Lists & Loops
- You can use a for loop to iterate through a list
- This is called *list traversal*
```Python
instruments = ['Drum', 'Guitar', 'Bass']

for instrument in instruments:
	print(instrument)
```
- You can also use a counter to iterate through a list with its index value
	- but it has to be data of the same type
```Python
instruments = ['Drum', 'Guitar', 'Bass']
counter = 0

for instrument in instruments:
	counter += 1

print(instruments)
```
## Exersizes:
1. Write a program that converts 99 Fahrenheit to Celsius
- Create two variables, **f** and **c**
- Use the equation:
	- Celsius = (Fahrenheit - 32)  5 / 9
2. Power.md in this folder

## Modules
- Hierarchy: built-ins; packages; writing your own packages
- Extend the capabilities of your program
- Use the keyword *import* to implement
- Access variables and functions in the module wusing the **.** operator
- Then rename the module, if you like, with the 'as' keyword
```Python
# import a module named random
import random
# Generate random number using random() function
print(random.random())

# Rename the random module to r with the 'as' keyword
import random as r
print(r.random())
```
### From...Import
- Imports only specific features of the module
- Not importing features you don't need keeps your use of the module efficient
- You can use 'as' with this as well
```Python
# import only the random function
from random import random
print(random())

# import only the random function and rename it
from random import random as r
print(r())
```
### Help!
- See what's inside the module with the help function
- Press *q* to exit
```Python
help('random')
help('random.random')
```

## Writing Text Files in Python
- They're writing to somewhere like: /Users/rrome/LoremIpsum.txt
```Python
file = open("LoremIpsum.txt", "w")
file.write(
"Lorem ipsum dolor sit amet "
"consectetur adipiscing elit, sed do "
"eiusmod tempor incididunt ut labore "
"et dolore magna aliqua."
)
file.close()
```
## Reading Text Files in Python
```Python
file = open("LoremIpsum.txt", "r")
print(file.read())
file.close()
```
## Writing CSV Files in Python
```Python
import csv
csv_file = open("People.csv", "w")
# Create a csv writer
csv_writer = csv.writer(csv_file)
# Write the first row (header)
csv_writer.writerow(["Name", "Street", "Number"])
# Add people
csv_writer.writerow(["James", "1st Street", 98])
csv_writer.writerow(["Mary", "10th Street", 271])
csv_file.close()
```
### Reading CSV Files in Python
```Python
import csv
csv_file = open("People.csv", "r")
# Create a csv writer
csv_reader = csv.reader(csv_file)
# Read and print each data row one by one
for row in csv_reader:
  print(row)
csv_file.close()
```
