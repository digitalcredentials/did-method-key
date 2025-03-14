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
  ignorePatterns: ['node_modules/'],
  rules: {
    'jsdoc/check-examples': 0
  }
};
