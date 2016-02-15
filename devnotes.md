# devnotes

## Meta

Markdown editor: [MacDown](http://macdown.uranusjr.com/)

## git

### Starting a project

	$ mkdir projectname
	$ cd projectname
	
add .gitignore file

	$ nano .gitignore
	
contents of file should be:

	.gitignore
	.DS_Store
	.AppleDouble
	.LSOverride

	# Icon must end with two \r
	Icon


	# Thumbnails
	._*
	
### Commit

	$ git add .
	$ git commit -m "Message"
	
### Push to remote (github)

First time only (set up link to remote):

	$ git remote add origin https://github.com/hirmes/[PROJECTNAME].git

If error, redo with u/p

Every time:	

	$ git push -u origin master

## Node

### Setup New Project

First update node/npm.  Safest way (*sigh*) is to get the installer at [nodejs.org](https://nodejs.org/en/).

Init Project (really it just creates a package.json file in the current directory):

	$ node init
	
If not using a remote repo, add this line to `package.json` after the `version` line:

	"private" : true
	
To add npm package and include it in package.json:

	$ npm install --save [package name]

Create an `index.js` file and add this template:

	var [PROJECT_NAME] = function() {
	
		"use strict";
	
		
	
	}();


then to run program:

	$ node index.js



