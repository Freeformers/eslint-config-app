module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ["@typescript-eslint", "prettier", "react"],
  extends: [
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "prettier/@typescript-eslint",
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  settings: {
    react: {
      version: "detect"
    }
  },
  rules: {
    "prettier/prettier": "error",
    "@typescript-eslint/no-empty-interface": "off",
    camelcase: "off",
    "@typescript-eslint/camelcase": [
      "error",
      {
        properties: "never"
      }
    ],
    strict: 0,
    "no-console": [
      "error",
      {
        allow: ["warn", "error"]
      }
    ],
    "react/prop-types": 0,
    "react/display-name": "error",
    eqeqeq: 1,
    "no-useless-rename": 1,
    "@typescript-eslint/no-use-before-define": [
      "error",
      {
        variables: false
      }
    ],
    "standard/computed-property-even-spacing": 0,
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        varsIgnorePattern: "_"
      }
    ],
    "@typescript-eslint/explicit-member-accessibility": 0,
    "@typescript-eslint/explicit-function-return-type": 0,
    "@typescript-eslint/no-useless-constructor": "error",
    "@typescript-eslint/no-for-in-array": "error"
  },
  globals: {
    __DEV__: true,
    __PROD__: true
  },
  env: {
    jest: true,
    node: true,
    es6: true,
    browser: true
  },
  overrides: [
    {
      files: ["*-test.tsx", "*-test.js"],
      rules: {
        "@typescript-eslint/no-explicit-any": 0
      }
    }
  ]
};
