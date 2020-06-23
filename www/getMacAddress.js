var exec = require('cordova/exec');

exports.getMacAddress = function (success, error) {
    exec(success, error, 'GetMacAddress', 'getMacAddress');
};
