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