'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var DidKeyDriver = require('./DidKeyDriver.js');

/*!
 * Copyright (c) 2021 Digital Bazaar, Inc. All rights reserved.
 */

/**
 * Helper method to match the `.driver()` API of other `did-io` plugins.
 *
 * @param {object} options - Options hashmap.
 * @param {object} [options.verificationSuite=Ed25519VerificationKey2020] -
 *   Key suite for the signature verification key suite to use.
 *
 * @returns {DidKeyDriver} Returns an instance of a did:key resolver driver.
 */
function driver({verificationSuite} = {}) {
  return new DidKeyDriver({verificationSuite});
}

exports.DidKeyDriver = DidKeyDriver.DidKeyDriver;
exports.driver = driver;
