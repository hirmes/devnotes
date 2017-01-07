# Practical _ffmpeg_ on the commandline

## Purpose of this Guide

Spend an hour with this guide and you will have a practical knowledge of how to use ffmpeg on the command line such that you can solve many common problems and understand one-liners you find in the wild.

There is also a [5 Minute Guide to ffmpeg](tbd) for experienced developers who have never encountered ffmpeg before but enjoy terseness.

*Give a coder a one-liner and they solve their problem today.  Give a coder a Practical Guide and they can solve their own damn problems.*

With that said, you may be interested in this [ffmpeg One-Liners Compendium](tbd).

If you find this guide too breezy, try the [ffmpeg man page](tbd) or the [online docs](tbd). For a book-length introduction, try [ffmpeg Basics](http://ffmpeg.tv/).

## What is ffmpeg?

**ffmpeg** is a powerful, free (open source) tool for converting and altering digital media. Software developers can use ffmpeg within their applications, but if you're reading this document, you will most likely be interested in using it from the command line.

## Basics

At its most basic, ffmpeg takes one or more inputs (usually a file or files, but also streams) and creates one or more output files or streams.

### Basic Command line format

The simpliest format is:

```bash
ffmpeg -i INPUT_FILE.EXT OUTPUT_FILE.EXT
```

where the `-i` stands for Input and the last item in the command is the Output. 

Here's a working example where ffmpeg converts a video in the 'avi' format called `input.avi` to a video in the  'mp4' format, outputted to a file called `output.mp4`:

`ffmpeg -i input.avi output.mp4`

Notice that we have not provided any options telling ffmpeg what the formats of the files are other than the extension of the filenames.  ffmpeg infers the file type from the filenames themselves. This makes it trivial to do something like make an animated gif out of a video file:

`ffmpeg -i video.mp4 animated.gif`

There are of course many additional options available that can be set explicitly.

You can set the output frame rate:

`ffmpeg -i video.mp4 -r 1 animated_with_1_frame_per_second.gif`

Or you could explicitly set the total number of frames to output with `-vframes` and ffmpeg will sample the source video accordingly:

`ffmpeg -i video.mp4 -vframes 10 animated_with_10_frames.gif`

### Options

We generally put options in between the input file(s) and the output file(s):

```bash
ffmpeg -i INPUT_FILE.EXT OPTIONS OUTPUT_FILE.EXT
```

The most common options are 'filters' that alter the source media somehow.  There are both video filters (`-vf`) and audio filters (`-af`) available. Some working examples:

Scale an mp4 video to 480p:

`ffmpeg -i INPUT_VIDEO.mp4 -vf scale=w=640:h=480 SCALED_VIDEO.mp4`

Here is a breakdown of the OPTIONS portion of this command:

-vf | scale | = | w=640 | : | h=480
----|-------|---|-------|---|------
'**v**ideo **f**ilter' | name of filter | filter options<br />are... | width | options <br />separator | height

Filter options often support multiple syntaxes.  The following two commands are equivalent to the above command:

`ffmpeg -i INPUT_VIDEO.mp4 -vf scale=640:480 SCALED_VIDEO.mp4`
`ffmpeg -i INPUT_VIDEO.mp4 -vf scale=640x480 SCALED_VIDEO.mp4`

Naming filter options makes the command more readable and therefore will be used whenever possible in this Guide.

> As a general rule, options are applied to the next specified file. Therefore, order is important, and you can have the same option on the command line multiple times. Each occurrence is then applied to the next input or output file. Exceptions from this rule are the global options (e.g. verbosity level), which should be specified first.
> 


### Chaining filters

### Labels



## Troubleshooting

### Making sure your input files are what you think they are

`ffprobe FILENAME.EXT` will list things like the actual filetype, dimensions, etc.

## Appendix B: ffmpeg One Liners

**Strip sound**

	ffmpeg -i "$name" -vcodec copy -an "${name}_no_sound.AVI"

*Explanation:*

`-vcodec copy` - set the video codec to 'copy' so that instead of reencoding the stream, it just copies it. Same as `-codec copy`?)

`-an` disables audio

**Convert to web friendly codec**

	ffmpeg -y -i "$name" -c:v libx264 -preset slow -crf 22 -pix_fmt yuv420p -c:a libvo_aacenc -b:a 128k "${name}.mp4"

*Explanation:*

`-y` overwrite files without asking (necessary?)

`-c:v libx264` short syntax for `-codec:v libx264` set **v**ideo encoding codec to 'libx264'

`-preset slow` libx264 setting **???**

`-crf 22` libx264 setting "quality for constant quality mode"

`-pix_fmt yuv420p` pixel format

`-c:a libvo_aacenc` set the audio codec to libvo_aacenc

`-b:a 128k` set the audio bitrate to 128k


	
**Take screengrab at specific time**

	ffmpeg -i "$name" -ss 00:01:30.000 -vframes 1 $name.png

*Explanation:*

`-ss 00:01:30.000` "seeks" to a specific time before starting to encode

`-vframes 1` same as `-frames:v 1` sets number of frames to output (in this instance, 1 -- a single frame)
	
**Create series of images based on video**: *-r frame rate, the higher the #, the more images will be created*:

	ffmpeg -i m3.mp4 -r .2 m3-%03d.png

**Make a video out of image series** (***untested***)

	ffmpeg -y -pix_fmt yuv420p -start_number 40 -i "%04d.png" output.mp4

**Make an animated gif out of stills** (*"%03d" assumes a 3 digit length series of filenames (i.e. 001.png, 002.png, etc.)*):

	ffmpeg -i %03d.png animated.gif
		