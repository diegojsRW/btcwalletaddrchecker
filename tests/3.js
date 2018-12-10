"use strict";

const WAValidator = require('wallet-address-validator');

module.exports = exports = function(addr){
    return WAValidator.validate(addr, 'BTC');
}
