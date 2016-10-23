# ImageMagick

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


