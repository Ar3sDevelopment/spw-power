function poweroff(cb)
{
	var util = require('util');
	var exec = require('child_process').exec;
	exec('/usr/bin/sudo poweroff', function () { cb(); });
}

function reboot(cb)
{
	var util = require('util');
	var exec = require('child_process').exec;
	exec('/usr/bin/sudo reboot', function () { cb(); });
}

exports.data = function (cb) {
	var res = {};
	cb(res);
};

exports.manage_post = function (post, cb) {
	if (post) {
		if (post.po) {
			poweroff(function () {
				cb(1, '');
			});
		} else if (post['pr']) {
			reboot(function () {
				cb(1, '');
			});
		}
	} else {
		cb(0, null);
	}
};

exports.columns = 2;
exports.title = "Power";
exports.updatetime = -1;