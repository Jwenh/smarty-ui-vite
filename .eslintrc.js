module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
    node: true,
    jest: true,
  },
  globals: {
    ga: true,
    chrome: true,
    __DEV__: true,
  },
  extends: [
    'plugin:json/recommended',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['@typescript-eslint'], // ts校验 （https://github.com/typescript-eslint/typescript-eslint/tree/main/packages/eslint-plugin）

  parser: 'vue-eslint-parser', // 解析 .vue文件
  parserOptions: {
    parser: '@typescript-eslint/parser', // 解析.vue中的ts语法
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true, // 解析tsx
    },
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'prettier/prettier': [
      'warn',
      {
        semi: false, // 是否分号结尾
        singleQuote: true, // 使用单引号
        endOfLine: 'auto', // 换行cr检查
      },
    ],
  },
}
