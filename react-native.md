# React Native [currently Android focused]


## Installation issues

Since I already have node installed outside of Homebrew, it caused some problems. To fix:

Step 1:
`$ sudo chmod 777 ~/.babel.json`

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

Step 5:
Permissions are all screwed up. You might need to
`$ sudo chmod 777 *`


For some reason when creating a new project ("NavTest") with $ react-native init NavTest all the permissions issues went away

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

### Troubleshooting

If the emulator won't run from the commandline, try running it via Android Studio: Tools→Android→AVD Manager and click the green play button next to your emulator


If you don't know the name of your emulator to use from commandline:

`$ android list avd`

For remote shaking: [Frappe](https://github.com/niftylettuce/frappe)

## Running on device

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

## OAuth

Setup android.manifest so app will accept custom URI scheme:

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

## ES6

### Classes

In `YourClassName.js`:

```javascript
class YourClassName extends Component {
}
export default YourClassName;
```

Then to import:

```javascript
import YourClassName from "./YourClassName.js";
```

If you have methods tha need to be referenced in other methods, add a constructor method:

```javascript
	constructor(props, context) {
		super(props, context);

		this.METHODNAME = this.METHODNAME(this);
	}
```

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

One liner:

```bash
sudo cd android && ./gradlew assembleRelease && cd app/build/outputs/apk/ && open .
```

