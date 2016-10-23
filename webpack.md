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
	
Playground: [webpackbin.com](http://www.webpackbin.com/)