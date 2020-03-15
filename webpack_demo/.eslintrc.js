{
  // Use the AirBnB JS styleguide - https://github.com/airbnb/javascript
  "extends": "airbnb",

  // We use 'babel-eslint' mainly for React Native Classes
  "parser": "babel-eslint",
  "ecmaFeatures": {
    "classes": true,
  },

  // jsx相关插件
  "plugins": ["react", "jsx-a11y", "import"]

  // We can add/overwrite custom rules here
  "rules": {
    // React Native has JSX in JS files，项目名后缀是.js和.jsx
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],

    // React Native includes images via require("../images/example.png")
    "global-require": 0
  }
}