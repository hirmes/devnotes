# devnotes

[Meta](#Meta) | [git](#git) | [Node](#Node) | [UNIX](#UNIX)

***










<a id="Meta"></a>
## Meta

Markdown editor: [MacDown](http://macdown.uranusjr.com/)










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

	var [PROJECT_NAME] = function() {
	
		"use strict";
	
		
	
	}();


then to run program:

	$ node index.js












<a id="UNIX"></a>
## UNIX (general)

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