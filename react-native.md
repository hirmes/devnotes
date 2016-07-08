React Native notes
------------------

## Installation issues

Since I already have node installed outside of Homebrew, it caused some problems. To fix:

Step 1:
$ sudo chmod 777 ~/.babel.json

Step 2:
Create a new file called local.properties in /code/AwesomeProject/android with the line
sdk.dir=/Users/hirmes/Library/Android/sdk

Step 3:
Make sure emulator is running before running project:
$ android avd
then start the emulator from there

Step 4:
run the project using sudo
$ sudo react-native run-android

Step 5:
Permissions are all screwed up. 


For some reason when creating a new project ("NavTest") with $ react-native init NavTest all the permissions issues went away

**To get to the dev menu (and this the ability to live reload) from the Android emulator, press Command+M**

## Quick start

* $ emulator @react-native
* $ react-native init ProjectName
* $ cd ProjectName
* $ react-native run-android
* Launch app in emulator, then ommand+M, then Live Reload or Hot Reload

## Errors You May Encounter

### Emulator

* Permissions errors. Solution: Run using sudo

* Error when launching emulator "Unfortunately Launcher3 has stopped working" Solution: Delete cache of Launcher3 apps via App Screen->Settings->Apps->Launcher3->Storage

### Setting up app on device

* If `adb` tool is not found, make sure Android tools are in PATH by adding this line to `.bash_profile`:
	`PATH="/Users/hirmes/Library/Android/sdk/tools:/Users/hirmes/Library/Android/sdk/platform-tools:${PATH}"`
	



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


