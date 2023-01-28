module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/vue3-essential', '@vue/standard', 'plugin:storybook/recommended'],
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/multi-word-component-names': 'off',
    'no-multiple-empty-lines': [2, {
      "max": 99999,
      "maxEOF": 0
    }],
    'eol-last': 'off',
    'semi': 0,
    'avoidEscape': 0,
    'allowTemplateLiterals': 0,
    'quotes': 0,
    'comma-dangle': 0,
    'space-before-function-paren': 0
  },
  overrides: [{
    files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
    env: {
      jest: true
    }
  }]
};