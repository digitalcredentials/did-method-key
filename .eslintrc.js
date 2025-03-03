/*!
 * Copyright (c) 2021 Digital Bazaar, Inc. All rights reserved.
 */
module.exports = {
  root: true,
  extends: [
    'digitalbazaar',
    'digitalbazaar/jsdoc',
    'digitalbazaar/module'
  ],
  env: {
    node: true,
    browser: true
  },
  parserOptions: {
    // this is required for dynamic import()
    ecmaVersion: 2020
  },
  ignorePatterns: ['node_modules', 'dist', '.eslintrc.js', 'karma.conf.js'],
  rules: {
    'jsdoc/check-examples': 0
  }
};
