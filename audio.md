# Audio

Split an mp3 file into new files based on silence:

	$ mp3splt -s -p th=-30,min=1,rm FILE.mp3
	
Join a bunch of mp3s into one:

	$ mpgjoin *.mp3 -o JOINED.mp3
	