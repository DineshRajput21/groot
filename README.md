# groot a perfect React native starter kit

### Top Stuff: ###
- Redux 
- Redux - Saga (Middleware)
- Fonts Family
- Bottom Tabs
- Top Tabs
- Folder structure
- Images/Icons file structure 
- Onboarding Module
  a) Login Screen
  b) Signup Screen

### Upcoming Stuff: ###
- Multi - language Support
- Auto Import support
- pre-defined common component
- API Integration (using axios)
- TDD (Test Driven Development)
- CICD Pipeline (AppCenter or Bitrise)

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
  "@react-navigation/bottom-tabs": "6.0.9",
    "@react-navigation/material-top-tabs": "6.0.6",
    "@react-navigation/native": "6.0.6",
    "@react-navigation/native-stack": "6.2.5",
    "react-native-gesture-handler": "2.1.1",
    "react-native-pager-view": "5.4.9",
    "react-native-reanimated": "2.3.1",
    "react-native-safe-area-context": "3.3.2",
    "react-native-screens": "3.10.1"
```

 - run `yarn install` OR `npm install`
 - run `npx pod-install ios` OR `cd ios && pod install`
 - Delete `App.js` file from your project

### Step 5 (Run App)
`npx react-native run-ios` OR `npx react-native run-android`


Thanks!
