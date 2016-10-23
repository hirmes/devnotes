# ffmpeg

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
		