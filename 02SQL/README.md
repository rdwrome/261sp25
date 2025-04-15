# Haiku

## Vocabulary
- Execution: CPU does what the program tells it to do
- Functions: actions/verbs
- Bindings/Variables: meaning grasps and holds values
- List/array: collection of values
![listanatomy](listanatomy.png)

- Loops: cycles/reiterations of execution
- Syntax: expectations information organization
- Conditions: Check for "Truthiness" with Boolean Logic

## Pseudocode
- Break down the way to solve to problem into the smallest tasks possible, but in the language you speak to yourself
- Think like a computer!
- [PBJ](https://www.youtube.com/watch?v=okkIyWhN0iQ)

### Simon Says Pseudocode Share and Pair 
- Imagine we are each a dancing machine.
- Give us precise instructions for a simple dance using at least one function, at least one condition, and at least one loop.
- I'll do it if you don't want but I'll be tough!

## Debugging
- Frustrating
- Most of what programming is
- ALWAYS BE DOCUMENTING YOUR DEBUGGING!!! (ABDYD!!!)
- Think of it as detective work
	- You're given evidence and have to infer what happened
- Or think of it as a science experiment
	- Analyze the error message + code together
	- Draft a theory as to why you got the bug (with notes!)
		- record of what you've tried to fix it
	- Make a test of your theory
	- Monitor your code with printing functions and breakpoints

### Bugs in the Wild

**Syntax**

- Your code broke a structure/expectation rule
- Classic problems:
	- keyword is a variable name
	- colon after for, while, if, and def statements
	- matching quotation marks in Strings
	- matching brackets
	- = instead of ==
	- indentation
	- ASCII issues

**Runtime**

- Something broke while it was running/just didn't run at all
- Classic problems:
	- Control Flow issues
	- Recursion

**Semantic**

- Something is not right and your computer doesn't know it but you do
- Hardest to figure out!
- Go back to Pseudocoding
- Break everything down into the smallest unit you can

## MarkDown/Documentation Refresher

# SQL

**Database**
- Set of data
- Usually organized and managed by software
- Comma Separated Value (CSV) files (only numbers and letters)

**Intro to Structured Query Language (SQL)**
- Manages data stored in relational databases
- Simple, declarative statements
- Used for all kinds of database systems, helps you understand all database systems
- Made in the 70s by IBM
- Different dialects of SQL (MySQL, SQLite)

**[SQLite](https://www.sqlite.org/index.html)**

**Relational Databases**
- Organizes information into one or more tables
- Store and provide access to data points that are related to one another

  ***Parts of a Relational Database***

    - Table: collection of data organized into rows and columns (sometimes called “relations.”)
    - Column: set of data values of a particular type.
    - Row: a single record in a table.

**SQLite Data Types**
- Integer: + or - whole number
- Real: Floating Point
- Text: String (sequences of characters, indexed from 0 in a list/array)
- Numeric: boolean, date (YYYY-MM-DD)
- BLOB: Binary Large OBject, can store any kind of data

**SQLite is cAsE-sEnSiTiVe**

**Command Line Interface!**

**Statements CODE ALONG**

          - sqlite3 nycto.db //creates database
          - CREATE TABLE 'nycto' ('id' integer, 'name' text, 'dark' text);
          - .tables //names table
          - .schema // shows structure of table named
          - INSERT INTO nycto (id, name, dark) VALUES(6, 'raymond', 'no');
          - SELECT name FROM nycto;
          - SELECT name, dark FROM nycto;
          - SELECT * FROM nycto;
          - SELECT * FROM nycto WHERE dark = 'no';
          - SELECT DISTINCT name FROM nycto;
          - ALTER TABLE nycto ADD COLUMN 'muchness' integer;
          - UPDATE nycto SET dark = 'yes' WHERE id = 2;
          - UPDATE nycto SET muchness = 9 WHERE id = 2;

**Operators**

          - SELECT * FROM nycto WHERE name LIKE 'ra_hel';
          - SELECT * FROM nycto WHERE name LIKE 'r%';
          - SELECT * FROM nycto WHERE name LIKE '%o%';
          - SELECT * FROM nycto WHERE id BETWEEN 1 AND 3;
          - SELECT * FROM nycto WHERE id > 3 OR dark = 'yes';

**Order By**

          - SELECT * FROM nycto ORDER BY id;

**Limit**

          - SELECT * FROM nycto WHERE muchness > 7 ORDER BY id DESC;

**Case**

          - SELECT name,
              CASE
              WHEN dark = 'no' THEN 'brave'
              ELSE 'scaredycat'
            END
            FROM nycto;

**Constraints/Renaming**

          - DELETE FROM nycto WHERE muchness IS NULL;

**Database Problems**
  - Race Condition
    - The timing of two actions or events cause unexpected behavior
  - Injection Attack
    - Why you can't have certain characters in usernames and passwords
    ![](img/injection.png)

**[DB Browser for SQLite](https://sqlitebrowser.org/dl/)**