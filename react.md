# ReactJS



<a name="webdevCLI"></a>

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
