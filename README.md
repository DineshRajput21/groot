# groot a perfect React native starter kit

### Top Stuff: ###
- Redux 
- Redux - Saga (Middleware)
- Fonts Family
- Bottom Tabs
- Top Tabs
- Folder structure
- Images/Icons file structure 

### Upcoming Stuff: ###
- Multi - language Support
- Auto Import support
- pre-defined common component
- Onboarding Module
  a) Login Screen
  b) Signup Screen
  c) Forget Password

### Create new react-native App
https://reactnative.dev/docs/environment-setup

### Step1 (Download groot)
- Open the given link
- Download the Groot folder
- Copy App folder and paste it into your RN project

https://github.com/DineshRajput21/groot
### Step 2 (react-native.config.js)

- Create a new file and name it `react-native.config.js`
- Paste, given lines of code
  ```
  module.exports = {
  project:{
  ios:{},
  android:{},
  },
  assets:['./App/assets/fonts'],
  }
  ```
- run `react-native link` command (To link your fonts with RN project)

### Step 3 (reanimated plugin)

- Open babel.config.js file
- Add plugin plugins: ["react-native-reanimated/plugin",]

### Step 4 (Install dependencies/Packages)

- Add all of these dependencies in package.json file

```
"@react-navigation/bottom-tabs": "⁶.0.9",
"@react-navigation/material-top-tabs": "⁶.0.6",
"@react-navigation/native": "⁶.0.6",
"@react-navigation/native-stack": "⁶.2.5",
"react-native-gesture-handler": "².1.1",
"react-native-pager-view": "⁵.4.9",
"react-native-reanimated": "².3.1",
"react-native-safe-area-context": "³.3.2",
"react-native-screens": "³.10.1",
```

 - run `yarn install` OR `npm install`
 - run `npx pod-install ios` OR `cd ios && pod install`
 - Delete `App.js` file from your project

### Step 5 (Run App)
`npx react-native run-ios` OR `npx react-native run-android`


Thanks!
