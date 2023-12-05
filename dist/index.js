
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./asnodtswap-sdk.cjs.production.min.js')
} else {
  module.exports = require('./asnodtswap-sdk.cjs.development.js')
}
