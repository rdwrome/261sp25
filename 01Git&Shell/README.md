# Git & Shell

## COMPUTERS: WHAT ARE THEY PHYSICALLY
- CPU (Central Processing Unit): performs actions
- RAM (Random Access Memory): storage for 0s and 1s (bytes) you're using *right now*
- Hard Drive: persistent storage of 0s and 1s (bytes)
- Motherboard: where everything above comes together

### RAM Stack vs. Heap
- Stack: part of the RAM that remembers variable and function definitions
- Heap: part of the RAM that remembers data types like lists at an address

## Tower of Babel (Review of Reading) Discussion

## Processing efficiency of different languages
- in C, lists are stored consecutively in RAM
  - band members all live in consecutive 160 dorm rooms
- in Python, lists are stored at an address in RAM
  - rhythm section live together in Allston, horn section live together in the Fenway
- the less a language forces the CPU to dig around in RAM, the more 'machine-readable' it is
- the more a language forces the CPU to dig around in RAM, the more 'human-readable' it is

**Why and when does efficiency matter?**
**What is the RAM of your machine?**

# CODE ALONG
- **What is the RAM of your machine?**
- **Is your Hard Drive easily accessible?**
	- Finder>Settings>Hard Disks
- Make sure Desktop and Documents is in username folder (not iCloud!)

## Cloud-based Storage and Version Control systems you've used before

## Vocabulary
- Execution: CPU does what the program tells it to do
- Functions: actions/verbs
- Variables/Bindings: meaning grasps and holds values
- List/array: collection of values
- Loops: cycles/reiterations of execution
- Syntax: expectations information organization
- Conditions: Check for "Truthiness" with Boolean Logic
![illustration of control flow in i-then-else statements](img/conditions.png)

## Before you Code

### Pseudocode
- Break down the way to solve to problem into the smallest tasks possible, but in the language you speak to yourself
- Think like a computer!

### Simon Says Pseudocode Share and Pair and/or [PBJ](https://www.youtube.com/watch?v=okkIyWhN0iQ)
- Imagine we are each a dancing machine.
- Give us precise instructions for a simple dance using at least one function, at least one condition, and at least one loop.
- I'll do it if you don't want but I'll be tough!

## While you Code

### Always be Documenting 
- Including your Pseudocode
- Documentation outline in the syllabus
	- Debugging 
	- Code Reuse!

<!-- maybe add compiler information from here https://prismia.chat/shared/computing-basics
maybe add https://swcarpentry.github.io/shell-novice/ -->

## Command Line

**Command Line Interfaces (CLI)**
- Most commonly used for machine-readable languages like 'C'
- "under the hood"
- in this class, we'll use the application `Terminal` as our CLI

***MOST IMPORTANT COMMANDS***

	- `pwd` Print Working Directory (prints the path to the directory [folder] that you are currently in). Map+Compass.

	- `ls` Lists the files stored in the Working Directory

	- `cd` Change Directory (changes working directory to different directory)
		>You can type `cd` and then drag and drop the folder you'd like to work in, into the Terminal Window. This is much faster than typing out the full path.

	- `clear` clears the Terminal Window

	- `cd ~` change directory to your root directory (how to "go back"), `~` means home directory

	- `mkdir` Makes a new directory (`mkdir NewDirectory` makes a new folder called `NewDirectory`)

	- `man` opens the manual for Terminal commands ("man man" will open up the manual for the manual!)

	- `nano` is a text editor within Command-line Interface (you'll see how great it is relative to VSC in a minute)
	
	- `-o` tag to create an object file

	- `say` 




## [Version Control Systems](https://www.geeksforgeeks.org/version-control-systems/)
- Your HD is your local repository
- GitHub is the remote repository we're going to use
- [Git](https://en.wikipedia.org/wiki/Git) is the version control software we're going to use to communicate between local and remote
- GitHub Desktop is a software application that we'll use to manage Git
- Fetch: check in with other repository
- Pull: bring the changes from the other repository to this repository 
- Commit: collect changes you've made on this repository together with a message explaining what the changes are
- Push: push the changes you've made on this repository and the commit message that explains it to the other repository

# CODE ALONG SETUP!
- Set up a GitHub.com account with a simple username you can use professionally and your personal email account
- Download and install [GitHub Desktop](https://desktop.github.com/)
- Sign in to GitHub Desktop using your GitHub.com username
- In GitHub Desktop, go to File > Clone Repository and clone the class repository via URL 
- Setup GitHub/save the local file path (where the files are on your computer) to your {username}/Documents folder
- Download and install [TextMate](https://macromates.com/)
- Go to {username}/Documents/GitHub and find the README.md for the class repository
- Open that file with TextMate!
- Open GitHub Desktop
- Go to File > New repository
- Create a new repository called "itp"
- Check the box that says "Initialize this repository with a README" and check again that your local file path goes somewhere you can easily find; let the repository stay public (for now)
- Your new repository will appear in the far left bar of the GitHub Desktop window.
- Click on the repository and then select "Publish this repository to GitHub"
- When that has gone through go to Repository > Open with TextMate
- The README.md file of the repository you created for this class will open with TextMate

## [Markdown 101](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
- required of all Markdown files in this class:
	- [Headers](https://github.com/adam-p/markdown-here/wiki/Markdown-Here-Cheatsheet#headers)
	- [Links](https://github.com/adam-p/markdown-here/wiki/Markdown-Here-Cheatsheet#links)
	- [Code highlighting](https://github.com/adam-p/markdown-here/wiki/Markdown-Here-Cheatsheet#code)
- recommended:
	- [Images ALWAYS WITH ALT TEXT](https://github.com/adam-p/markdown-here/wiki/Markdown-Here-Cheatsheet#images)

## CODE ALONG TO MAKE AN SUBFOLDER FOR HAIKU
- `mkdir` in your itp repo
- put something there!
