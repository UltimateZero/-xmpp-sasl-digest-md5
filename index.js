'use strict'

const mech = require('sasl-digest-md5')

module.exports = function saslDigestMd5(sasl) {
  mech.clientFirst = true;
  sasl.use(mech)
}
