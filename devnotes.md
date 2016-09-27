# devnotes

[meta](#Meta) | [sublime](#Sublime)
 | [git](#git) | [node](#Node) | [unix](#UNIX) | [webpack](#webpack) | [react](#ReactJS) | [webdev CLI tools](#webdevCLI)
 
***




````
TO DO: Add auto convert of these docs to html via
https://github.com/sindresorhus/github-markdown-css
https://www.npmjs.com/package/markdown-html
````




<a id="Meta"></a>
## Meta

Markdown editor: [MacDown](http://macdown.uranusjr.com/)




<a id="Sublime"></a>

## Sublime Text

#### [Sublime Text Cheatsheet](sublime-text.md)

### Setup

Symlink the CLI:

	$ ln -s /Applications/Sublime\ Text\.app/Contents/SharedSupport/bin/subl /usr/local/bin/sublime

Then you can do stuff like:

	$ sublime .
	
to open the current Terminal folder in Sublime Text

### Build system

In this example, for using node:
**`Tools -> Build System -> New Build System...`**

```javascript
{
  "cmd": ["/usr/local/bin/node", "$file"],
  "selector": "source.js"
}
```
Save to `Application Support/Sublime Text 3/Packages/User/`

Then just create a file, save it, and Command+B to run in app.

### Project Specific Syntax Highlighting

Say you want Babel syntax highlighting for your Javascript files in your React projects.

* Install the `Project Specific Syntax Settings` plugin
* Add this to your `.sublime-project` file:

```json
	{
	"folders":
	[
		{
			"path": "."
		}
	],
	"syntax_override": {
          "\\.js$": ["Babel", "JavaScript (Babel)"]
      }
}
```

<a id="git"></a>
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

finally:

	$ git init	
### Commit

	$ git add .
	$ git commit -m "Message"
	
or just

	$ git commit -a -m "Message"
	
### Push to remote (github)

First time only (set up link to remote):

	$ git remote add origin https://github.com/hirmes/[PROJECTNAME].git

If error, redo with u/p

Every time:	

	$ git push -u origin master
	
### Pull from repo and ignore local changes
	$ git reset --hard HEAD
	$ git pull	
	









<a id="Node"></a>
## Node 

### Setup New Project

First update node/npm.  Safest way (*sigh*) is to get the installer at [nodejs.org](https://nodejs.org/en/).

Init Project (really it just creates a package.json file in the current directory):

	$ mkdir project_name
	$ cd project_name
	$ npm init
	
If not using a remote repo, add this line to `package.json` after the `version` line:

	"private" : true
	
To add npm package and include it in package.json:

	$ npm install --save [package name]

Create an `index.js` file and add this template:

```javascript
var [PROJECT_NAME] = function() {
	
	"use strict";
	
	
}();
```

then to run program:

	$ node index.js

	
To uninstall package:

	$ npm uninstall [package name] --save









<a id="UNIX"></a>
## UNIX (general)

## Bash

[Cheatsheet](https://gist.github.com/LeCoupa/122b12050f5fb267e75f)

### Editing Command line

|Command  |Description                |Mnemonic/Note |
|---------|---------------------------|---------|
|control+a|Go to **beginning** of line|'a' begins alphabet|
|control+e|Go to **end** of line      |'e' for end|
|control+k|**Delete** from current cursor position to end of line|'k' for kill|
|control+w|**Delete** word left of cursor|'w' for word|
|option+click|Move cursor to a position|(OS X Terminal)|
|tab|Auto complete|none|



### History

Use `control-r` to **search** history

### Homebrew

https://www.safaribooksonline.com/blog/2014/03/18/keeping-homebrew-date/

### Run .sh script
	$ chmod +x script.sh
	$ ./script.sh
	
### .sh loop
	#!/bin/bash
	for name in *.AVI; do
  		ffmpeg -i "$name" -vcodec copy -an "${name}_no_sound.AVI"
	done 

### Convert man page to pdf

	$ man -t ffmpeg > ffmpeg.ps
	$ ps2pdf ffmpeg.ps ffmpeg.pdf
	
(`ps2pdf` is part of the `ghostscript` package)	
	
## ffmpeg
Strip sound

	ffmpeg -i "$name" -vcodec copy -an "${name}_no_sound.AVI"

Convert to web friendly codec

	ffmpeg -y -i "$name" -c:v libx264 -preset slow -crf 22 -pix_fmt yuv420p -c:a libvo_aacenc -b:a 128k "${name}.mp4"
	
Take screengrab at specific time

	ffmpeg -i "$name" -ss 00:01:30.000 -vframes 1 $name.png
	
Create series of images based on video: *-r frame rate, the higher the #, the more images will be created*:

	ffmpeg -i m3.mp4 -r .2 m3-%03d.png

Make a video out of image series (***untested***)

	ffmpeg -y -pix_fmt yuv420p -start_number 40 -i "%04d.png" output.mp4

Make an animated gif out of stills (*"%03d" assumes a 3 digit length series of filenames (i.e. 001.png, 002.png, etc.)*):

	ffmpeg -i %03d.png animated.gif
		
## ImageMagick

###Install

	$ brew install imagemagick
	$ brew install ghostscript
	
###Tiled image of thumbnails
Full Docs: [imagemagick.org/Usage/montage/](http://www.imagemagick.org/Usage/montage/)

Default (scaled):

	$ montage file*.png tile.png
	
Specific tile size:

	$ montage -geometry 320x240 file*.png tile_custom_size.png 

With a border between thumbs ("`+[horitzonal border size]+[vertical border size]`"):

	$ montage -geometry 320x240+4+4  m*.png full_border.png 

With custom grid:

	$ montage -tile 16x2 m*.png custom_grid.png
	
Single row:

	$ montage -tile x1 m*.png tile_one_row.png 
	
With filename labels:

	$ montage -label '%f' -geometry 320x240  m*.png tile_labels.png 


###Break up large image into smaller tiled images
	$ convert sunset.jpg -crop 612x792 +repage +adjoin sunset_files%02d.jpg

## Audio

Split an mp3 file into new files based on silence:

	$ mp3splt -s -p th=-30,min=1,rm FILE.mp3
	
Join a bunch of mp3s into one:

	$ mpgjoin *.mp3 -o JOINED.mp3
	
<a name="webpack"></a>

## webpack

Basic **webpack.config.js**

```javascript
module.exports = {
	entry: "./index.js",
	output: {
		path: __dirname,
		filename: "bundle.js"
	},
	module: {
		loaders: [
			{ test: /\.css$/, loader: "style!css" }
		]
	},
    devtool: "source-map"
}
```

And remember to put

```html
<script src="bundle.js"></script>
```

in your **``index.html``**

Use the webpack server for file watching & hot loading:

	$ webpack-dev-server --progress --colors  --inline
	
view in browser at **``http://localhost:8080/``**

Use node-like ``require()`` syntax in javascript files to load files:

```javascript
require("./style.css");
document.write(require("./content.js"));
```
	
	
<a name="ReactJS"></a>

## ReactJS



<a name="webdevCLI"></a>

## Web Dev Command Line Tools

### Run simple web server

`cd	` to the directory you want to server pages from, then:

	$ python -m SimpleHTTPServer 8000
	
or

	$ php -S localhost:8000

### Remove unused css rules

	$ uncss source.html > only-used-css.css
	
### Convert image to base64 (and place text in pastebin)

	$ openssl base64 < path/to/file.png | tr -d '\n' | pbcopy
	
### eslint

Standard `.eslintrc.json` config

```json
{
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": ["eslint:recommended", "plugin:react/recommended"],
    "installedESLint": true,
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "no-console": "warn",
        "indent": [
            "error",
            "tab"
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
}
```
