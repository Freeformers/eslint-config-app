module.exports = {
  getConfig: function(useReact) {
    const plugins = [
      "@typescript-eslint",
      "prettier",
      "simple-import-sort",
      "import"
    ];
    if (useReact) {
      plugins.push("react");
    }

    const extendsList = [
      "plugin:@typescript-eslint/recommended",
      "prettier",
      "prettier/@typescript-eslint",
      "eslint:recommended",
      "plugin:promise/recommended"
    ];
    if (useReact) {
      extendsList.push("plugin:react/recommended");
    }

    const settings = {};
    if (useReact) {
      settings.react = {
        version: "detect"
      };
    }

    const env = {
      jest: true,
      node: true,
      es6: true
    };
    if (useReact) {
      env.browser = true;
    }

    const rules = {
      "prettier/prettier": "error",
      "no-var": "error",
      "object-shorthand": "error",
      "no-extra-bind": "error",
      "no-extra-label": "error",
      "eol-last": "error",
      "prefer-const": "error",
      "prefer-destructuring": [
        "error",
        {
          array: false,
          object: true
        }
      ],
      "simple-import-sort/sort": "error",
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
      "@typescript-eslint/no-for-in-array": "error",
      "import/first": "error",
      "import/newline-after-import": "error",
      "import/no-duplicates": "error"
    };

    if (useReact) {
      rules["react/prop-types"] = 0;
      rules["react/display-name"] = "error";
    }

    return {
      parser: "@typescript-eslint/parser",
      parserOptions: {
        project: "./tsconfig.json",
        ecmaFeatures: {
          jsx: true
        }
      },
      plugins: plugins,
      extends: extendsList,
      settings: settings,
      rules: rules,
      globals: {
        __DEV__: true,
        __PROD__: true
      },
      env: env,
      overrides: [
        {
          files: ["*-test.tsx", "*-test.js"],
          rules: {
            "@typescript-eslint/no-explicit-any": 0
          }
        }
      ]
    };
  }
};
