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

### View all paths in the bash $PATH:

```bash
echo $PATH | tr ':' '\n'
```

### Find file

```bash
find / -name STRINGTOFIND -print 2> /dev/null
```

### Batch rename files:

```bash
ls foo*.jpg | awk '{print("mv "$1" "$1)}' | sed 's/foo/bar/2' | /bin/sh
```
or

```bash
ls *.jpg | awk '{print("mv "$1" prepended_string"$1)}' | /bin/sh
```

(leave off the last pipe to preview what the changes will be without performing them)# DNS

Google

	8.8.8.8
	8.8.8.4
	
OpenDNS

	208.67.220.220
	208.67.222.222
	
VeriSign

	64.6.64.6
	64.6.65.6

Level3

	209.244.0.3
	208.244.0.4
	
Advantage DNS

	156.154.70.1
	156.154.71.1
	
Norton ConnectSafe

	199.85.126.10
	199.85.127.10
	
Comodo Secure

	8.26.56.26
	8.20.247.20

Dyn

	216.146.35.35
	216.146.36.36
	
	
## Commandline Tools

Flush DNS cache:

```bash
$ sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder;
```
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


###Batch crop images:

Use:

	mogrify -crop [width]x[height]+[x]+[y] *.png
	
example:

	$ mogrify -crop 643x393+7+83 *.png# Latin

[Good intro (slu.edu)](http://www.slu.edu/colleges/AS/languages/classical/latin/tchmat/grammar/g-caseid.html) | [Charts (bencrowder.net)](http://bencrowder.net/design/latin/)

## General Grammatical Terms

### _Verb_ (L. "verbum" → word)
An **action** (*bring, read, walk, run, learn*)

an **occurrence** (*happen, become*)

or a **state of being** (*be, exist, stand*)

Types of verbs: [doc](https://www.uvu.edu/writingcenter/docs/handouts/typesofverbs.pdf)

* Action verb: express	*action*	(give,	eat, walk) or *possession* (have, own)
	* Transitive verb
		* Has a noun that receives action of verb called the **direct object**
			* Subject + verb + who or what? = DIRECT OBJECT
			* "John raises his hand." 
		* **Indirect object** names object to whom or for whom action is done
			* "John gave Jill the pencil."
		* Direct/Indirect object can be a series of words:
			* "Sophia hates when her father lectures her about her grades."
			* The subordinate clause "when her father lectures her about her grades." is the Direct Object
	* Intransitive verb
		* Never has a	direct	or indirect object.
		* "John rises slowly from his seat."
* Linking verb
* Helping verb


### _Clause_ (L. "claus-" → shut, closed)
A group of words that includes a subject and a verb.

Independent Clause: `John ate a pie`
	
Dependent Clause: `after he came home`

### _Preposition_ (L. "prae" → before; "ponere" → to place)
A word governing, and usually preceding, a **noun** or **pronoun** and expressing a relation to another word or element in the clause, as in "the man **on** the platform," "she arrived **after** dinner," "what did you do it **for**?"

Most common: of, in, to, for, with, on, at, from, by, about	
### _Pronoun_ (L. "pro-" → for, in place of)
A word that substitutes for a noun: *I, you, she, it*, etc.

### _Noun_ (L. "nomen" → name)
Objects, places, actions, qualities, states of existence, or ideas.

Occurs as the main word in the **subject of a clause**, the **object of a verb**, or the **object of a preposition**.

### _Adjective_ (L. "adject-" → added)
Describes a noun.

### _Adverb_
Word that modifies an adjective or verb.  Often ends in "-ly"

### _Predicate_
The part of a sentence or clause containing a verb and stating something about the subject (e.g., "went home" in "John went home").

### _Direct Object_
A noun phrase denoting a person or thing that is the recipient of the action of a transitive verb, for example "the dog" in "Jimmy fed the dog."

### _Indirect Object_
A noun phrase referring to someone or something that is affected by the action of a transitive verb (typically as a recipient), but is not the primary object (e.g., "him" in "give him the book").

## Latin Grammatical Terms

### _Inflection_ (L. "inflectere" → bend in, curve)
The modification of a word to express different grammatical categories such as tense, case, voice, aspect, person, number, gender, and mood. **The inflection of verbs is called _conjugation_**, and the **inflection of nouns, adjectives and pronouns is _declension_**.

### _Conjugation_ (L. "conjugare" → join together)
The creation of derived forms of a **verb** from its principal parts by inflection (alteration of form according to rules of grammar)

### _Declension_ (Fr. "decliner" → to decline)
Explanation 1: The variation of the form of a **noun**, pronoun, or adjective, by which its grammatical case, number, and gender are identified.

Explanation 2: The inflection of nouns, pronouns, adjectives, and articles to indicate number (at least singular and plural), case (nominative or subjective, genitive or possessive, etc.), and gender. A declension is also a group of nouns that follow a particular pattern of inflection.

## How to parse a Latin sentence

* Can't rely on word order
* Articles and pronouns are often implied rather than explicit

> Est charta parva → "Is" "map" "small" → It is a small map

* You figure out what's going on primarily by word endings
	* Noun endings change with grammar
	* Verb endings change based on their subject

1. Look for the verb. It will tell you ?
2. ?

### Number

Singular nouns that end in `-a` turn to `-ae` when plural

Verbs and adjectives will match the number of the subject noun

### Genders

Latin has three genders (like Spanish, French, etc.): **Female, Male, Neuter**

## Cases

Modifies **noun** endings

### _Nominative_ (L. "naming"): The subject of the sentence

If active, it's the thing doing the verb.

> **puella** dormit - **the girl** is sleeping
	
puella is the *nominative subject*

Subject must agree in number with the verb (true only in the Nominative case), so plural:

> **puellae** dormiunt - **the girls** are sleeping

### _Genitive_ (L. "beget"): Shows possession 'of'

> gladius **militis** - **sword of** the soldier (or: **the soldier's** sword)

Also:

Part of a whole:

> pars **urbis**, part **of the city**

and Description:

> puella **maximae pulchritudinis** - a girl **of greatest beauty**

and Objective:

> timor **canum** - the fear **of dogs**

### _Dative_ (L. "given"): Indirect objects ("to" or "for")

> ego donum **tibi** do - I am giving a gift **to you**

Also, Reference:

> ego villam **tibi** aedifico - I am building a house **for you**

and Possession:

> **mihi** est equus - "There is a horse for me" (but really: I have **a horse**)
> 
> **mihi** nomen est - "There is a name for me" (but really: My name is)

### _Accusative_ (L. "accusation"): Direct objects

> puella **puerum** amat - the girl loves **the boy**
 
also, Object of some prepositions:

> ad **villam** - to **the house**
> 
> in **villam** - into **the house**

and Duration of Time:

> tres horas - for three hours

### _Ablative_ (L. "taken away"): "by/with/from/in/on"

> gladiator **gladio** vulneratus est - the gladiator was wounded **by a sword**

generally answers the question "How?"

also, Shows time when

> quarta hora - at the forth hour

and Object of some prepositions:

> in **villa** - in the house
> 
> ex **arce** - from **the citadel**

### _Vocative_: Person or thing spoken to

Same as nominative (except 2nd sg.)

> et tu, **Brute** - And you, **Brutus**?

## Declensions

[Simple practice quizes (thelatinlibrary.com)](http://www.thelatinlibrary.com/decl.html)

### _1st_ - Feminine (and a few "male" professions)

Case|Singular|Plural
----|--------|------
**Nominative**|port**a**|port**ae**
**Genitive**|port**ae**|port**arum**
**Dative**|port**ae**	|port**is**
**Accusative**|port**am**|port**as**
**Ablative**|port**a**|port**is**

### _2nd_ - Masculine

Case|Singular|Plural
----|--------|------
**Nominative**|ocul**us**|ocul**i**
**Genitive**|ocul**i**|ocul**orum**
**Dative**|ocul**o**|ocul**is**
**Accusative**|ocul**um**|ocul**os**
**Ablative**|ocul**o**|ocul**is**

### _2nd_ - Neuter

Case|Singular|Plural
----|--------|------
**Nominative**|templ**um**|templ**a**
**Genitive**|templ**i**|templ**orum**
**Dative**|templ**o**	|templ**is**
**Accusative**|templ**um**|templ**a**
**Ablative**|templ**o**|templ**is**

### 3rd - F, M, and N

### 4th - ?

### 5th - ?
## Markdown

Markdown editor: [MacDown](http://macdown.uranusjr.com/)

Convert to static html with [MarkDownStyles](https://github.com/mixu/markdown-styles):

`generate-md --layout mixu-gray --input ./DIRNAME --output ./OUTPUT_DIRNAME`

# devnotes



### Dev

* [bash/Terminal](Bash_and_Terminal.md)
* [git](git.md)
* [node/npm](node.md)

### Webdev / Javascript

* [Webdev Commandline Tools](webdev_commandline.md)
* [webpack](webpack.md)
* [react](react.md)
* [react native](react-native.md)
* [moment.js](moment.js.md)
 
### Server

* [Apache / Webservers](webservers.md)
* [psql](psql.md)
* [DNS](DNS.md)

### Text, Words, Editors
* [Markdown](Markdown.md)
* [Sublime Text](sublime-text.md)
* [pdf](pdf.md)
* [Text manipulation on commandline](text_manipulation.md)

### Image, Audio, Video

* [ffmpeg](ffmpeg.md)
* [ImageMagick](ImageMagick.md)
* [audio](audio.md)

### Other

* [iOS](iOS.md)
* [Roku](roku.md)
* [Mediawiki](mediawiki.md)



	
# Audio

Split an mp3 file into new files based on silence:

	$ mp3splt -s -p th=-30,min=1,rm FILE.mp3
	
Join a bunch of mp3s into one:

	$ mpgjoin *.mp3 -o JOINED.mp3
	# devnotes

### Dev

* [bash/Terminal](Bash_and_Terminal.md)
* [git](git.md)
* [node/npm](node.md)

### Webdev

* [webpack](webpack.md)
* [react](react.md)
* [react native](react-native.md)
 
### Server

* [Apache / Webservers](webservers.md)
* [psql](psql.md)

### Text, Words, Editors
* [Markdown](Markdown.md)
* [Sublime Text](sublime-text.md)
* [pdf](pdf.md)
* [Text manipulation on commandline](text_manipulation.md)

### Image, Audio, Video

* [ffmpeg](ffmpeg.md)
* [ImageMagick](ImageMagick.md)
* [audio](audio.md)


<!---

TO DO: Add auto convert of these docs to html via
https://github.com/sindresorhus/github-markdown-css
https://www.npmjs.com/package/markdown-html

-->




	
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
		# git 

## Working with Locally Started Projects

### Starting a project

```bash
$ mkdir projectname
$ cd projectname
```
	
add .gitignore file

```bash
$ nano .gitignore
```
	
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

```bash
$ git init
```

### Commit

```bash
$ git add .
$ git commit -m "Message"
```

or just

```bash
$ git commit -a -m "Message"
```

### Push to remote (github)

First time only (set up link to remote):

```bash
$ git remote add origin https://github.com/hirmes/[PROJECTNAME].git
```

If error, redo with u/p

Every time:	

```bash
$ git push -u origin master
```

(`gitgo` is now an alias for the above, added to `.bash_profile`)

### Pull from repo and ignore local changes

```bash
$ git reset --hard HEAD
$ git pull
```
	
### Go back to last commit (deleting all non-commited changes):

```bash
$ git reset --hard HASH_OF_LAST_COMMIT
```


## Working with Projects from Other Sources

### Starting / Cloning a Project

```bash
$ git clone https://github.com/USERNAME/REPOSITORY.git
```

### Updating

If you have *not made any local changes* and want your local copy to be the newest version available on the server:

`$ git pull`

## Other Stuff

### List remotes

`$ git remote -v`

# iOS Development

## CocoaPods

TK

## The Horror (Provisioning, codesigning, etc.)

Run app on device, get: "**a valid provisioning profile for this executable was not found**"

* If provisioning, etc. has been tweaked since last install, delete old app from device and try to run again

# Mediawiki

### Convert to static html

```bash
wget --recursive --page-requisites --html-extension \
      --convert-links --no-parent -R "*Special*" -R "*action=*" \
      -R "*printable=*"  -R "*oldid=*" -R "*title=Talk:*" \
      -R "*limit=*" "http://foo.com/wiki/index.php\?title=Main_Page.htm"
```
<small>([Source](http://camwebb.info/blog/2012-12-20/))</small># moment.js

## Convert

### Seconds → hh:mm:ss

```javascript
let timeString = moment().startOf('day')
					.seconds(numberOfSeconds)
					.format('H:mm:ss');
```

### hh:mm:ss → Seconds

```javascript
let numberOfSeconds = moment.duration(durationString, "HH:mm:ss").asSeconds();
```

## Node 

### Setup New Project

First update node/npm.  Safest way (*sigh*) is to get the installer at [nodejs.org](https://nodejs.org/en/).

Init Project (really it just creates a package.json file in the current directory):

```bash
$ mkdir project_name
$ cd project_name
$ npm init
```
	
If not using a remote repo, add this line to `package.json` after the `version` line:

	"private" : true
	
To add npm package and include it in package.json:

```bash
$ npm install --save [package name]
```

Create an `index.js` file and add this template:

```javascript
var [PROJECT_NAME] = function() {
	
	"use strict";
	
	
}();
```

then to run program:

```bash
$ node index.js
```
	



Playground: [runkit.com](https://runkit.com)

## npm

List current versions (top level only):

`$ npm list --depth=0`

Check your current modules against latest versions:

`$ npm outdated`

Update specific module to latest:

`$ npm update MODULE_NAME`

and add `-g` (and potentially `sudo`) to update the global, rather than project instance of a module.

[npm-check](https://www.npmjs.com/package/npm-check) might be slightly better way to do this.

To remove/uninstall package:

```bash
$ npm uninstall [package name] --save
```

Install a local package:

```bash
$ cd PROJECT
$ npm install /path/to/package/package
```

Install a package directly from github:

```bash
npm install https://github.com/USER/PACKAGE#BRANCH --save
```# PDF

### Convert man page to pdf

```bash
$ man -t ffmpeg > ffmpeg.ps
$ ps2pdf ffmpeg.ps ffmpeg.pdf
```
	
(`ps2pdf` is part of the `ghostscript` package)# psql: PostgreSQL command line tool

REMEMBER TO PUT A SEMICOLON (;) AT THE END OF EVERY QUERY

```bash
psq -U USERNAME DATABASENAME
```

* `\q` Quit/Exit
* `\l` List databases
* `\c DATABASENAME` Connect to a database
* `\d TABLENAME` Show table definition
* `\dt` List all tables

# React Native [currently Android focused]


## Installation issues

Since I already have node installed outside of Homebrew, it caused some problems. To fix:

Step 0: Give group permissions to project

```bash
$ cd PROJECT_NAME
$ sudo chmod -R g+w *
$ cd ..
$ chmod g+w PROJECT_NAME
```
	
Step 1:
`$ sudo chmod g+w ~/.babel.json`

Step 2:
Create a new file called `local.properties` in `/code/AwesomeProject/android` with the line
`sdk.dir=/Users/hirmes/Library/Android/sdk`

Step 3:
Make sure emulator is running before running project:
$ android avd
then start the emulator from there

Step 4:
run the project using sudo
`$ sudo react-native run-android`

To change the name of the app (but not the project) (Android only) modify:
`android/app/src/main/res/values/strings.xml`

**To get to the dev menu (and this the ability to live reload) from the Android emulator, press Command+M**

## Quick start

* $ emulator @react-native
* $ react-native init ProjectName
* $ cd ProjectName
* $ react-native run-android
* Launch app in emulator, then ommand+M, then Live Reload or Hot Reload
* Debugger: `http://localhost:8081/debugger-ui`

## Running on emulator

### Creating new emulators (virtual devices)
* Launch Android Studio and go to Tools→Android→AVD Manager.
* Make sure the SDK for the OS version of the device is installed (Tools→Android→SDK Manager)

### Running

```bash
$ emulator @VIRTUALDEVICENAME
```

where VIRTUALDEVICENAME could be `@react-native` or `@galaxy-a-97`


In separate console window:

```bash
$ sudo react-native run-android
```

## Debugging

In Chrome DevTools, switch to Vertical orientation for a better experience.

**Debugging webview**: In Chrome: `chrome://inspect/#devices` ([Source](https://developers.google.com/web/tools/chrome-devtools/remote-debugging/webviews)\)

To test custom URIs and deep linking: [Test Deep Links & Deep linking App](https://play.google.com/store/apps/details?id=com.manoj.dlt)

## Troubleshooting

If the emulator won't run from the commandline, try running it via Android Studio: Tools→Android→AVD Manager and click the green play button next to your emulator


If you don't know the name of your emulator to use from commandline:

`$ android list avd`

For remote shaking: [Frappe](https://github.com/niftylettuce/frappe)

### Running on device

Quit emulator (if running), then plug in device, then:

```bash
$ adb reverse tcp:8081 tcp:8081
$ sudo react-native run-android
```

## Errors You May Encounter

### Emulator

* Permissions errors. Solution: Run using sudo

* Error when launching emulator "Unfortunately Launcher3 has stopped working" Solution: Delete cache of Launcher3 apps via App Screen->Settings->Apps->Launcher3->Storage

### Setting up app on device

* If `adb` tool is not found, make sure Android tools are in PATH by adding this line to `.bash_profile`:
	`PATH="/Users/hirmes/Library/Android/sdk/tools:/Users/hirmes/Library/Android/sdk/platform-tools:${PATH}"`
	
### Blank white screen

Exporting classes incorrectly?

`export class Something` should be `class Something` then at the bottom `module.exports = Something;`

### "React.createElement: type should not be null, undefined, boolean, or number"

Importing referenced component incorrectly?

`import { Something } from "something";` instead of `import Something from "something";`

### "Execution failed for task ':app:dexDebug'."

This error appears when trying to compile after adding a package such as react-native-share. From project directory:

	$ cd android
	$ sudo ./gradlew clean
	
### eslint errors with modern javascript syntax

* If eslint is installed globally, the plugins need to be as well
	* `eslint-plugin-react` and `eslint-plugin-babel`
* parser in .eslintrc.json should be set to `babel-eslint`

### webview shows up in dev build but not release build

Replace `source={require('...')}` with `source={{ uri: 'file:///android_asset/helloworld.html' }}` and put html file in `android/app/src/main/assets`

[Source](http://stackoverflow.com/questions/37102662/external-html-asset-not-bundled-by-react-native-in-production-build-for-use-by-w)

### App won't install on device: "signatures do not match the previously installed version"

This might mean that you installed a release build on the device and are now trying to overwrite it with a debug build.  Delete the release build from the device and try again.

### Try to auto-remove console.log calls using `babel-plugin-transform-remove-console` and now your app won't compile

Remove the plugin

### App won't compile after installing package

* Did you link it?
* Make sure it got linked in `MainApplication.java` and **not** in `MainActivity.java`
* Are there duplicate links to a library?
* try `cd android`, then `sudo ./gradlew clean`

### App won't compile after removing package

`react-native unlink PACKAGENAME`

`sudo npm uninstall PACKAGENAME --save`

Then make sure there are no references to it or libraries it uses in:

* /android/app/src/main/java/com/APP_NAME/MainApplication.java
* /android/app/build.gradle

## OAuth

Setup `android/app/src/AndroidManifest.xml` so app will accept custom URI scheme:

```xml
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
...
    <application
...
      <activity
        android:name=".MainActivity"
        android:launchMode="singleTask"
...
        <intent-filter>
                <action android:name="android.intent.action.VIEW" />
                <category android:name="android.intent.category.DEFAULT" />
                <category android:name="android.intent.category.BROWSABLE" />
                <data android:scheme="thirteenexplore"
                    android:host="login" />
            </intent-filter>
      </activity>
...
    </application>

</manifest>
```
Note: `android:host` also accepts a wildcard:

```xml
<data ... android:host="*" />
```

## Styling

[Cheatsheet](https://github.com/vhpoet/react-native-styling-cheat-sheet)

### Icons

[Material Design Icons](https://materialdesignicons.com/) for use inside app

[App icon specs](http://stackoverflow.com/questions/34329715/how-to-make-react-native-app-icon)

[AndroidAssetStudio](http://romannurik.github.io/AndroidAssetStudio/)

### Fonts

* Use `.otf` format
* Place font files in /PROJECTNAME/android/app/src/main/assets/fonts
* Refer to font in styles: `fontFamily: "Gotham Medium"`

## ES6 Class Template

In `ClassName.js`:

```javascript
import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

class ClassName extends Component {

	constructor(props, context) {
		super(props, context);

		// this.METHOD = this.METHOD.bind(this);
	}

	componentDidMount() {
	}

	render() {
		return (
			<View style={styles.container}>
				<Text>This is a test</Text>
			</View>
		);
	}
}

CLASSNAME.propTypes = {
	SOMEPROP: React.PropTypes.array
};

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
});

export default ClassName;
```

Then to import:

```javascript
import ClassName from "./ClassName.js";
```

Note: Class names **must** be capitalized.

[Understanding Class Export Syntax](http://stackoverflow.com/questions/31852933/why-es6-react-component-works-only-with-export-default/31853887#31853887)

## Creating Release Build

[FB RN Docs](https://facebook.github.io/react-native/docs/signed-apk-android.html)

Once all the signing crap is in place:

```bash
$ cd android
$ sudo ./gradlew assembleRelease
```
then grab the `.apk` file here:

`$ cd app/build/outputs/apk/`


### Versioning

In `android/app/build.gradle`:

```
android {
    ...
    defaultConfig {
        ...
        versionCode 2
        versionName "2.0"
```
# ReactJS


# Roku Development

## App Installation

1. On **Roku**, enter developer mode:

	`Home 3x, Up 2x, Right, Left, Right, Left, Right`

2. Get IP address from the screen that appears

3. On **web browser** go to IP address

4. Upload zip file that contains app## Sublime Text

### Setup

Symlink the CLI:

```bash
$ ln -s /Applications/Sublime\ Text\.app/Contents/SharedSupport/bin/subl /usr/local/bin/sublime
```


Then you can do stuff like:

```bash
$ sublime .
```

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
### File Search

To exclude a folder from file search:

Where: `-*/folder_name/*`

or globally, in Packages/User/Preferences.sublime-settings:

`"folder_exclude_patterns": ["name_of_folder"]`

# Text Manipulation on the Command Line

## Plain Text

**Remove** all text before and after two strings:

```bash
sed '/START STRING/,/END STRING/ !d' original_file.html > new_file.html
```


## JSON

### Formatting

Format from clipboard:

```bash
pbpaste | python -m json.tool > OUTPUT.json
```

Format from a file:

```bash
cat FILENAME | python -m json.tool > OUTPUT.json
```


### Querying with jq

Find the number of items in the "results" array:
`jq ".response.results | length" filename.json`

Within each item of the "results" array there is an element called "window". Find out how many items in the results array have the window element equal to "public":
`jq '[ .response.results[] | select(.window == "public") ] | length' filename.json`

### OS X App

**Cocoa JSON Editor** 
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
# webpack

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
	
Playground: [webpackbin.com](http://www.webpackbin.com/)# Apache / Webservers

Quick http server:

	python -m SimpleHTTPServer 8000

Quick http server than can handle php:

	php -S 0.0.0.0:8000
	

<a name="#unix_server_problems"></a>
	
### Tools to diagnose problems on a UNIX server:

	w [see how long the server uptime is]
	df -h [check if drives are down or full]
	free [check memory]
	top [and] ps -ef [check if processes are running]
	./etc/init.d/httpd status [check that Apache is running]
	./etc/init.d/postgresql status [check that postgresql is running]
	last [check recent user logins]
	last reboot [check the last time the system rebooted]
	tail /var/log/messages [check system log messages]
	tail /var/log/messages.1 [check system log messages]
	cat /var/log/httpd/error_log [check Apache error log]
	cat /etc/apache-tomcat/logs/catalina.out [check Tomcat error log]