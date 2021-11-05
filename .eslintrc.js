module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'eslint:recommended'
  ],
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  parserOptions: {
    ecmaVersion: 2021, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
      tsx: true // Allows for the parsing of TSX
    }
  },
  plugins: ['react', '@typescript-eslint', 'prettier', 'eslint-plugin-prettier', 'react-hooks'],
  settings: {
    react: {
      version: 'detect' // Tells eslint-plugin-react to automatically detect the version of React to use
    }
  },
  rules: {
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    quotes: ['error', 'single', { allowTemplateLiterals: true }],
    'jsx-quotes': ['error', 'prefer-double'],
    'arrow-parens': ['error', 'always'],
    'implicit-arrow-linebreak': 'off',
    'max-len': ['error', { code: 120, ignoreUrls: true, ignorePattern: '^import .*', ignoreComments: true }],
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'return' },
      { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
      {
        blankLine: 'any',
        prev: ['const', 'let', 'var'],
        next: ['const', 'let', 'var']
      },
      {
        blankLine: 'always',
        prev: ['const', 'let', 'var'],
        next: ['if', 'case']
      }
    ],
    'no-undef': 'off',
    'no-prototype-builtins': 'off',
    'comma-dangle': ['error', 'never'],
    'no-console': 'off',
    'no-restricted-syntax': [
      'error',
      {
        selector: 'CallExpression[callee.object.name=`console`][callee.property.name!=/^(log|warn|error|info|trace)$/]',
        message: 'Unexpected property on console object was called'
      }
    ],
    'no-case-declarations': 'off',
    'no-irregular-whitespace': ['error', { skipComments: true }],
    'no-trailing-spaces': 'error',
    curly: 'error',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    'react/no-deprecated': 'off',
    'react/prop-types': 'off',
    'react/display-name': 'off',
    'react/no-unescaped-entities': 'off',
    'react/no-unused-state': 'error',
    'object-curly-spacing': ['error', 'always', { objectsInObjects: true, arraysInObjects: true }],
    /*'array-bracket-spacing': [
      'error',
      'always',
      { objectsInArrays: true, arraysInArrays: false }
    ],*/
    'arrow-body-style': ['error', 'as-needed'],
    'object-shorthand': ['error', 'always'],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'off',

    // Disable Return Type
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'react/react-in-jsx-scope': 'off'
  }
};
