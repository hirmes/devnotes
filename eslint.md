# eslint

eslint requires a `.eslintrc.json` config file in the root project directory to run.  Here's a decent default:

```json
{
    "env": {
        "browser": true
    },
    "extends": "eslint:recommended",
    "rules": {
        "no-console": "warn",
        "no-unused-vars": "warn",
        "indent": [
            "warn",
            "tab"
        ],
        "linebreak-style": [
            "warn",
            "unix"
        ],
        "quotes": [
            "warn",
            "single"
        ],
        "semi": [
            "warn",
            "always"
        ]
    }
}
```

Only show errors, not warnings:

```bash
eslint --quiet *.js
```