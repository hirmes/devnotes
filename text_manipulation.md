# Text Manipulation on the Command Line

Remove all text before and after two strings:

```bash
sed '/START STRING/,/END STRING/ !d' original_file.html > new_file.html
```

Batch rename files:

```bash
ls foo*.jpg | awk '{print("mv "$1" "$1)}' | sed 's/foo/bar/2' | /bin/sh
```
or

```bash
ls *.jpg | awk '{print("mv "$1" prepended_string"$1)}' | /bin/sh
```

(leave off the last pipe to preview what the changes will be without performing them)

Format JSON: Copy the JSON and then:

```bash
pbpaste | python -m json.tool
```

