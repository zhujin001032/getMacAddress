var exec = require('cordova/exec');

exports.getMacAddress = function (success, error) {
    exec(success, error, 'getMacAddress', 'getMacAddress');
};
