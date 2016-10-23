# Bash / Terminal

[Bash Cheatsheet](https://gist.github.com/LeCoupa/122b12050f5fb267e75f)

[Big Terminal info dump](http://furbo.org/2014/09/03/the-terminal/)


### Editing Command line

|Command  |Description                |Mnemonic/Note |
|---------|---------------------------|---------|
|control+a|Go to **beginning** of line|'a' begins alphabet|
|control+e|Go to **end** of line      |'e' for end|
|option+[left or right]|move cursor by **word**|standard Mac|
|control+k|**Delete** from current cursor position to end of line|'k' for kill|
|control+u|**Delete** from current cursor position to start of line| |
|control+w|**Delete** word left of cursor|'w' for word|
|option+click|Move cursor to a position|(OS X Terminal)|
|tab|Auto complete| |

`cmd-shift-A` **selects** the output of the previous command

`cmd-ctrl-V` **Pastes** text fully escaped, including spaces

### History

Use `control-r` to **search** history

Use `command-↑` or `command-↓` to jump to previous/next command line prompt
### Homebrew

[Updating Homebrew](https://www.safaribooksonline.com/blog/2014/03/18/keeping-homebrew-date/)

### Run .sh script
```bash
$ chmod +x script.sh
$ ./script.sh
```
	
### .sh loop
```bash
#!/bin/bash
for name in *.AVI; do
	ffmpeg -i "$name" -vcodec copy -an "${name}_no_sound.AVI"
done 
```	