## Sublime Text

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

