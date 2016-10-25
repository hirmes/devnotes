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



