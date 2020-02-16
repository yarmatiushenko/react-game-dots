module.exports = {
    "parser": "babel-eslint",
    "env": {
        "es6": true,
        "node": true,
        "browser": true
    },
    "parserOptions": {
        "ecmaVersion": 2017,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true,
            "experimentalObjectRestSpread": true
        }
    }, 
    "plugins": [
        "react",
        "react-hooks"
    ],
    "extends": ["eslint:recommended", "plugin:react/recommended"],
    "settings": {
        "react": {
            "version": "16.11"
        }
    },
    "rules": {
        "indent": [
            "error",
            2, { "SwitchCase": 1 }
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "semi": [
            "error",
            "always"
        ],
        "no-unused-vars": [
            "error", 
            { "varsIgnorePattern": "^_" }
        ],
        "no-prototype-builtins": 0,
        "react/prop-types": 0,
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn"
    },
    "globals": {
        "$": true,
        "Twilio": true
    }
};